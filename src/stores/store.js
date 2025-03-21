import { defineStore } from 'pinia'
import axios from 'axios'
const SERVER = import.meta.env.VITE_URL_API
export const useDataStore = defineStore('data', {
    state() {
        return {
            items: [],
            itemsOnCart: JSON.parse(localStorage.getItem('itemsOnCart')) || [],
        }
    },
    getters: {
        itemOnCart: (state) => (id) => state.items.find(i => i.id === id),
    },
    actions: {
        async populateItems() {
            try {
                const response = await axios.get(SERVER + '/items')
                this.items = response.data
            } catch (error) {
                console.log(error)
            }
        },
        async addItem(item) {
            try {
                const response = await axios.post(SERVER + '/items', item)
                this.items.push(response.data)
            } catch (error) {
                console.log(error)
            }
        },
        async deleteItem(id) {
            try {
                await axios.delete(SERVER + '/items/' + id);
                const index = this.items.findIndex(i => i.id === id);
                if (index !== -1) {
                    this.items.splice(index, 1);
                }
            } catch (error) {
                console.log(error)
            }
        },
        async editItem(item) {
            try {
                const response = await axios.put(SERVER + '/items/' + item.id, item)
                const index = this.items.findIndex(i => i.id === response.data.id)
                if (index !== -1) {
                    this.items.splice(index, 1, response.data)
                }
            } catch (error) {
                console.log(error)
            }
        },
        updateLocalStorage() {
            localStorage.setItem('itemsOnCart', JSON.stringify(this.itemsOnCart));
        },
        deleteAllItemsFromCart() {
            this.itemsOnCart = []
            this.updateLocalStorage()
        },
async updateItemPartial(id, partialData) {
    try {
        const response = await axios.patch(SERVER + '/items/' + id, partialData);
        const index = this.items.findIndex(i => i.id === id);
        if (index !== -1) {
            this.items.splice(index, 1, { ...this.items[index], ...response.data });
        }
    } catch (error) {
        console.log(error);
    }
}


    }
})
