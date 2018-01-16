<template>
    <div class="container">
        <app-header :qtt="quotes.length" :max="this.maxQuotes"></app-header>
        <new-quote @addQuote="addQuote"></new-quote>
        <quote-grid :quotes="quotes" @deleteQuote="deleteQuote"></quote-grid>
        <div class="row">
            <div class="col-sm-12 text-center">
                <div class="alert alert-info">
                    Info: Click on a Quote to delete it!
                </div>
            </div>
        </div>
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
                ],
                maxQuotes: 10
            };
        },
        components: {
            appHeader: header,
            quoteGrid,
            newQuote
        },
        methods: {
            addQuote(quote){
                if(!!quote && quote!=="" && this.quotes.length < this.maxQuotes){
                    this.quotes.push(quote);
                }
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
