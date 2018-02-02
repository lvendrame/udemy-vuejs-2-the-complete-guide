<template>
    <div class="col-xs-12 col-sm-6">
        <p v-if="!server">Please, select a server</p>
        <div v-else>
            <p>Server #{{server.id}}</p>
            <p>Status: {{server.status}}</p>
            <button @click="changeStatus();">Change Status</button>
        </div>
    </div>

</template>

<script>
    import EventBus from '../../eventBus';    

    export default {
        data() {
            return {
                server: null
            }
        },
        methods: {
            changeStatus(){                
                EventBus.changeServerStatus({
                    id: this.server.id,
                    status: (this.server.status === 'Critical') ?
                    'Normal':
                    'Critical'
                });
            }
        },
        created(){
            var self = this;
            EventBus.$on('selectServer', function(e){
                self.server = e;
                console.log(e);
            });
        }
    };

</script>

<style>

</style>
