import Vue from 'vue';

export default new Vue({
    methods: {
        selectServer(id){
            this.$emit('selectServer', id);
        },
        changeServerStatus(server){
            this.$emit('changeServerStatus', server);
        }
    }
});