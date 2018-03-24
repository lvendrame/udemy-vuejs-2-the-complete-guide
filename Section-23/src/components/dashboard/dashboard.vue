<template>
  <div id="dashboard">
    <h1>That's the dashboard!</h1>
    <p>You should only get here if you're authenticated!</p>
    <p>Your email address: {{ email }}</p>
  </div>
</template>

<script>
import axios from 'axios';
  export default {
    data(){
      return {
        email: ''
      };
    },
    created(){
      axios.get('/users.json')
        .then(res => {
          console.log('created: response', res);
          const data = res.data;
          const users = [];
          for (const key in data) {
            if (data.hasOwnProperty(key)) {
              const user = data[key];
              user.id = key;
              users.push(user);              
            }
          }
          console.log('created: users', users);
          this.email = users[0].email;
        })
        .catch(err => console.log('created error', err));
    }

  }
</script>

<style scoped>
  h1, p {
    text-align: center;
  }

  p {
    color: red;
  }
</style>
