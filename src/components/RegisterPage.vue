<template>
    <div id="bgcolor">
        <div id="center">
            <h1>Sign In</h1><br>
            <lable>User Name</lable><br>
            <input type="text" v-model="userdetails.username"><br>
            <lable>Email Id</lable><br>
            <input type="text" v-model="userdetails.email" v-on:input="emailvalidation(userdetails.email)">
            <p id="error"></p>
            <lable>Phone Number</lable><br>
            <input type="tel" v-model="userdetails.phone" pattern="[0-9]{9}/"><br>
            <lable>Password</lable><br>
            <input type="text" id="password" v-model="userdetails.password"><br>
            <lable>Confirm Password</lable><br>
            <input type="text" id="conpassword" v-model="userdetails.conpassword" v-on:input="confirmvalidation">
            <p id="ptag"></p>
            <button @click="submitForm">Sing In</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'register-page',
    data () {
        return {
            userdetails: {
                username: '',
                email: '',
                phone: '',
                password: '',
                conpassword: ''
            }
        }
    },
    methods: {
        submitForm (){
            alert('account created successfully')
        },
        emailvalidation (val) {
            let mailspan=document.getElementById("error")
            var ptn = new RegExp("[a-zA-z]+[@][a-z]+[\.][a-z]{2,4}");
            if(ptn.test(val)) {
                mailspan.innerHTML= ""
            }
            else{
                mailspan.innerHTML= "Enter the valid mailId"
            }
        },
        confirmvalidation (){
            var pass=document.getElementById("ptag");
            var password=document.getElementById("password").value;
            var conpassword=document.getElementById("conpassword").value;
            if (password == "") {
                pass.innerHTML="The password field is Empty";
            } else if (password == conpassword) {
                pass.innerHTML="";
            } else {
                pass.innerHTML="Please make sure your passwords match"
            }
        }
    }
}
</script>

<style scoped>
#center{
    margin: auto;
    width: 20%;
    padding: 20px;
    background-color: white;
    padding-left: 100px;
    line-height: 25px;
    font-size: 18px;
    border: 2px solid black;
    margin-top: 100px;
}
input{
    width: 80%;
    height: 20px;
}
button{
    margin-left: 70px;
    padding: 5px;
    width: 80px;
}
</style>