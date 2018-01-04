<template>
    <div class="col-xs-12 col-sm-6">
        <ul class="list-group">            
            <server-item v-for="server in servers" :key="server.id"
             :id="server.id"></server-item>
        </ul>
    </div>
</template>

<script>
    import ServerItem from './ServerItem.vue';

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
        }
    };
</script>
<style>

</style>
