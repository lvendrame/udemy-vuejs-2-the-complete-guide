<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Filters & Mixins</h1>
                <!-- Exercise 1) -->
                <!-- Build a local Filter which reverses the Text it is applied on -->
                <h2>Exercise 1</h2>
                <p>{{ text | reverse }}</p>

                <!-- Exercise 2 -->
                <!-- Build a global Filter which counts the length of a word and it appends it -->
                <!-- Like this: "Test" => Gets Filtered to => "Test (4)" -->
                <h2>Exercise 2</h2>
                <p>{{ text | length }}</p>

                <!-- Exercise 3 -->
                <!-- Do the same as in Exercises 1 & 2, now with Computed Properties -->
                <h2>Exercise 3</h2>
                <p>{{ reversed }}</p>
                <p>{{ textLength }}</p>

                <!-- Exercise 4 -->
                <!-- Share the Computed Property rebuilding Exercise 2 via a Mixin -->
                <h2>Exercise 4</h2>
                <p>{{ textLength }}</p>
            </div>
        </div>
    </div>
</template>

<script>
    import { textLengthMixin } from './textLengthMixin'

    export default {
        mixins: [textLengthMixin],
        data(){
            return {
                text: "My text"
            }
        },
        filters: {
            reverse(value){
                return Array.prototype.slice.call(value).reverse().join('');
            }
        },
        computed: {
            reversed(){
                return Array.prototype.slice.call(this.text).reverse().join('');
            }
        }
    }
</script>

<style>
</style>
