<template>
    <li
        class="list-group-item">
        <a href="javascript:void(0)" @click="select();" >Server #{{ server.id }}</a> - {{ server.status }}
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
