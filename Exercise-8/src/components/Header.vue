<template>
    <div class="row">
        <div class="col-sm-12">
            <h3>Quotes Added</h3>
            <div class="progress">
                <div class="progress-bar" role="progressbar" :style="{'width': this.value + '%'}" :aria-valuenow="this.value"
                    aria-valuemin="0" :aria-valuemax="100">
                    {{ qtt }} / {{ max }}
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        props: ['qtt', 'max'],
        computed:{
            value(){
                return (this.qtt/this.max) * 100;
            }
        }
    }    
</script>
<style>
    
</style>