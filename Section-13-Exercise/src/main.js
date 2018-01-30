import Vue from 'vue'
import App from './App.vue'

Vue.filter('length', function(value) {
    return [value, ' ', '(', value.length, ')'].join('');
});

new Vue({
    el: '#app',
    render: h => h(App)
})