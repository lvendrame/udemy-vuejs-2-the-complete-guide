import Vue from 'vue'
import App from './App.vue'

Vue.directive('highlight', {
    bind(el, binding, vnode) {
        let delay = 0;
        if (binding.modifiers['delayed']) {
            delay = 3000;
        }

        setTimeout(() => {
            if (binding.arg === 'background') {
                el.style.backgroundColor = binding.value;
            } else {
                el.style.color = binding.value;
            }
        }, delay);

    }
});

/*
  bind(el, binding, vnode)
  inserted(el, binding, vnode)
  updated(el, binding, vnode, oldVnode)
  componentUpdated(el, binding, vnode, oldVnode)
  unbind(el, binding, vnode)
*/

new Vue({
    el: '#app',
    render: h => h(App)
});