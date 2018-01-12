<template>
    <div class="container">
        <app-header></app-header>
        <new-quote @addQuote="addQuote"></new-quote>
        <quote-grid :quotes="quotes" @deleteQuote="deleteQuote"></quote-grid>
    </div>
</template>

<script>
    import header from './components/Header.vue';
    import quoteGrid from './components/QuoteGrid.vue';
    import newQuote from './components/NewQuote.vue';

    export default {
        data(){
            return {
                quotes: [
                    "Hey, how, let's go"
                ]
            };
        },
        components: {
            appHeader: header,
            quoteGrid,
            newQuote
        },
        methods: {
            addQuote(quote){                
                this.quotes.push(quote);
            },
            deleteQuote(index){
                this.quotes.splice(
                    index,
                    1);
            }
        }
    }
</script>

<style>
</style>
