<template>
    <div>
        <div class="form-group">
            <label for="firstname">First Name</label>
            <input type="text" name="firstname" id="firstname" class="form-control input-sm" :value="firstName" @input="sendName(true, $event)">
        </div>
        <div class="form-group">
            <label for="lastname">Last Name</label>
            <input type="text" name="lastname" id="lastname" class="form-control input-sm" :value="lastName" @input="sendName(false, $event)">
        </div>
    </div>
</template>

<script>
export default {
    props: ['value'],
    computed: {
        firstName(){
            return this.value.split(' ')[0];
        },
        lastName(){
            let aux = this.value.split(' '); 
            return aux.length > 1 ? aux[1] : '';
        }
    },
    methods: {
        sendName(isFirst, event){
            let name = null;
            if(isFirst){
                name = [event.target.value, this.lastName];
            }else{
                name = [this.firstName, event.target.value];
            }
            this.$emit('input', name.join(' '));
        }
    }
}
</script>

<style>

</style>
