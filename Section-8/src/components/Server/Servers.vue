<template>
    <div class="col-xs-12 col-sm-6">
        <ul class="list-group">            
            <server-item v-for="server in servers" :key="server.id"
             :server="server"></server-item>
        </ul>
    </div>
</template>

<script>
    import ServerItem from './ServerItem.vue';
    import EventBus from '../../eventBus';  

    export default {
        data: function() {
            return {
                servers: [
                    {id: 1, status: 'Normal'},
                    {id: 2, status: 'Critical'},
                    {id: 3, status: 'Unknow'},
                    {id: 4, status: 'Normal'},
                    {id: 5, status: 'Normal'}
                ]
            }
        },
        components: {
            'server-item': ServerItem
        },
        created(){
            var self = this;
            EventBus.$on('changeServerStatus', function(server){
                self.servers.find(s => s.id === server.id).status = server.status;
            });
        }
    };
</script>
<style>

</style>
