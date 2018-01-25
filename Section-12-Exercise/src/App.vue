<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Directives Exercise</h1>
                <a href="#" v-myon:click="showMessage">Click here</a>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        methods: {
            showMessage(){
                alert('Hello!');
            }
        },
        directives:{
            "myon":{                
                bind(el, binding, vnode){
                    el.addEventListener(binding.arg, binding.value);
                }
            }
        }
    }
</script>

<style>
</style>
