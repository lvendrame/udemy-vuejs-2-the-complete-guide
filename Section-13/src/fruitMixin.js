export const fruitMixin = {
    data() {
        return {
            fruits: ['Apple', 'Banana', 'Mango', 'Melon'],
            filterText: ''
        };
    },
    computed: {
        filteredFruits() {
            return this.fruits.filter(x => x.match(this.filterText));
        }
    },
    created() {
        console.log("Created");
    }
}