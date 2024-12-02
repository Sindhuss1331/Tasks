<template>
    <div id="divstyle">
        <h1>Welcome our login page</h1>
        <h1>Login Page</h1><br>
        <input type="text" v-model="userid.email" placeholder="userid@gmail.com"><br><br>
        <input type="text" v-model="userid.password" placeholder="Enter your password"><br><br>
        <button id="butstyle" @click="loginForm">Login</button><br><br>
        <!-- <div>
            New user?&nbsp;<button @click="signIn">Sign in</button>
        </div> -->
    </div>
</template>

<script>
export default {
 name: 'login-page',
 data () {
 return {
    userid: {
    email: '',
    password: ''
 }
}
},
methods: {
    loginForm () {
        alert("submitted")
    },
    signIn () {
        this.$router.push('/registerpage')
    }
}
}
</script>

<style scoped>
#divstyle{
    height: 50vh;
    margin: auto;
    width: 30%;
    padding: 10px;
    padding-top: 30px;
    margin-top: 80px;
    text-align: center;
    background-color: rgb(46, 210, 221);
    border-radius: 7%;
}
input{
    width: 60%;
    height: 30px;
    outline: none;
}
#butstyle{
    width: 80px;
    padding: 5px;
    background-color: rgb(7, 136, 50);
    border: none;
    color: white;
}
</style>