<template>
    <li
        class="list-group-item" style="cursor:pointer;"
        @click="select();">
        Server #{{ server.id }}
    </li>
</template>

<script>
    import EventBus from '../../eventBus';

    export default {
        props: ['server'],
        methods: {
            select(){
                EventBus.selectServer(this.server);
            }
        }
    }
</script>

<style>

</style>
