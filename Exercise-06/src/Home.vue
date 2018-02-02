<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <e-header></e-header>
            </div>
        </div>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-6">
                <server-list></server-list>
            </div>
            <div class="col-xs-12 col-sm-6">
                <server-details></server-details>
            </div>
        </div>
        <hr>
        <div class="row">
            <div class="col-xs-12">
                <e-footer></e-footer>
            </div>
        </div>
    </div>  
</template>

<script>
    import ServerDetails from './ServerDetails.vue'
    import ServerList from './ServerList.vue'
    import Footer from './Footer.vue'
    import Header from './Header.vue'

    export default {
        components: {
            'server-details': ServerDetails,
            'server-list': ServerList,
            'e-footer': Footer,
            'e-header': Header
        }
    }
</script>