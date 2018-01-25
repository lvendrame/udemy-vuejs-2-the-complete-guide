<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Directives</h1>
                <p v-text="'Some text'"></p>
                <p v-html="'<strong>Strong text</strong>'"></p>
            </div>
        </div>
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Custom directives</h1>
                <p v-highlight:background="'red'">Color this</p>
                <p v-highlight:background.delayed="'red'">Color this</p>
                <p v-local-highlight:background.blink="{mainColor: 'lightgreen', secondColor: 'lightblue', delay: 500}">Color this</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {        
        directives:{
            'local-highlight':{
                bind(el, binding, vnode) {
                    let delay = 0;
                    if (binding.modifiers['delayed']) {
                        delay = 3000;
                    }
                    let prop = binding.arg === 'background' ? 'backgroundColor' : 'color';

                    let mainColor = binding.value.mainColor;
                    let secondColor = binding.value.secondColor;
                    if (binding.modifiers['blink']) {

                        setTimeout(() => {
                            setInterval(() => {
                                el.style[prop] = el.style[prop] == mainColor ? secondColor : mainColor;
                            }, binding.value.delay);
                        }, delay);
                    }else{
                        setTimeout(() => {
                            el.style[prop] = mainColor;
                        }, delay);
                    }
                }
            }            
        }
    }
</script>

<style>

</style>
