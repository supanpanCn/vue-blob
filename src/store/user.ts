import { defineStore } from 'pinia';

const useStore = defineStore('user', {
    state() {
        return {
            age: 1023,
        };
    },
    actions: {
        updateId() {
            this.age = this.age + 1;
        },
    },
    persist: true,
});

export default useStore;
