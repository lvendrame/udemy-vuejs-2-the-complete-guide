<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Routing</h1>
                <hr>                
                <router-view name="header-top"></router-view>
                <transition name="slide" mode="out-in">
                    <router-view></router-view>                
                </transition>
                <router-view name="header-bottom"></router-view>
            </div>
        </div>
    </div>
</template>

<script>
    import Header from "./components/Header.vue";

    export default {
        components: {
            appHeader: Header
        }
    }
</script>

<style>
    .slide-enter{
        transform: translateY(0);
    }

    .slide-enter-active{
        animation: slide-in 1s ease-out forwards;
    }

    .slide-leave{
        transform: translateX(0);
    }

    .slide-leave-active{
        animation: slide-out 1s ease-out forwards;
    }

    @keyframes slide-in {
        from{
            transform: translateY(-30px);
            opacity: 0;
        }
        to{
            transform: translateY(0);
            opacity: 1;
        }
    }

    @keyframes slide-out {
        from{
            transform: translateY(0);
            opacity: 1;
        }
        to{
            transform: translateY(-30px);
            opacity: 0;
        }
    }
</style>
