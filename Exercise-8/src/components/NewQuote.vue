<template>
    <div>
        <textarea v-model="quote"></textarea>
        <button @click="addQuote">Add quote</button>
    </div>    
</template>
<script>
    export default {
        data(){
            return {
                quote: ""
            };
        },
        methods: {
            addQuote(){
                this.$emit('addQuote', this.quote);
                this.quote = "";
            }
        }
    }    
</script>
<style>
    
</style>