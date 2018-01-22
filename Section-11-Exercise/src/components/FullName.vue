<template>
    <div>
        <div class="form-group">
            <label for="firstname">First Name</label>
            <input type="text" name="firstname" id="firstname" class="form-control input-sm" v-model="firstName" @input="sendName()">            
        </div>
        <div class="form-group">
            <label for="lastname">Last Name</label>
            <input type="text" name="lastname" id="lastname" class="form-control input-sm" v-model="lastName" @input="sendName()">
        </div>
    </div>
</template>

<script>
export default {
    props: ['value'],
    watch: { 
        value(newVal, oldVal) {
            let names = newVal.split(' ');
            this.firstName = names[0];
            this.lastName = names[1];
        }
    },
    data(){
        return {
            firstName: '',
            lastName: ''
        }
    },
    methods: {
        sendName(){
            this.$emit('input', this.firstName + ' ' + this.lastName);
        }
    }
}
</script>

<style>

</style>
