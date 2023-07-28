import { defineStore } from 'pinia';

const useStore = defineStore('spp33', {
    state() {
        return {
            age: 123,
            a: {
                b: 2,
            },
            c: {
                d: {
                    e: 5151,
                    f: 3,
                    g: 4,
                },
            },
        };
    },
    actions: {
        updateAge() {
            this.age = this.age + 1;
        },
        updateB() {
            this.a.b = this.a.b + 1;
        },
    },
    persist: {
        paths: ['spp', 'age', 'c.d.e', 'c.d', 'c.d.g'],
        key: 'test',
    },
});

export default useStore;
