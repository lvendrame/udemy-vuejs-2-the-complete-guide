<template>
    <div class="container">
        <form v-if="!isSubmitted">
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <full-name v-model="user.name"></full-name>                        
                    <div class="form-group">
                        <label for="email">E-Mail</label>
                        <input type="email" name="email" id="email" class="form-control" v-model="user.mail">
                    </div>
                    <div class="form-group">
                        <label for="password">Password</label>
                        <input type="password" name="password" id="password" class="form-control" v-model="user.password">
                    </div>
                    <div class="form-group">
                        <label>
                            <input type="radio" value="Yes" v-model="storeData"> Yes
                        </label>
                        <label>
                            <input type="radio" value="No" v-model="storeData"> No
                        </label>
                    </div>
                    <button type="submit" class="btn btn-primary" @click.prevent="isSubmitted=true">Submit</button>
                </div>
            </div>
            <hr>
        </form>
        <div class="row" v-else>
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4>Your Data</h4>
                    </div>
                    <div class="panel-body">
                        <p>Full Name: {{user.name}}</p>
                        <p>Mail: {{user.mail}}</p>
                        <p>Password: {{user.password}}</p>
                        <p>Store in Database?: {{storeData}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import FullName from './components/FullName.vue'

    export default {
        data(){
            return {
                user:{
                    name: '',
                    mail: '',
                    password: '',
                },
                storeData: 'No',
                isSubmitted: false
            };
        },
        components:{
            fullName: FullName
        }
    }
</script>

<style>
</style>
