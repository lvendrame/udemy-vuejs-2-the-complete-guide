<template>
    <div>
        <quote v-for="(quote, index) in quotes" @click.native="deleteQuote(index)">{{ quote }}</quote>
    </div>
</template>
<script>
    import quote from './Quote.vue';

    export default {
        props: ['quotes'],
        components: {
            quote
        },
        methods:{
            deleteQuote(index){
                this.$emit('deleteQuote', index);
            }
        }
    }
</script>
<style>
    
</style>