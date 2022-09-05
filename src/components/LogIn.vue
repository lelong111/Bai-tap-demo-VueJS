<template>
    <div class="LogIn_Page">
        <div class="LogIn_Form">
            <div class="content_login">
                <div class="title_form">
                    <p>Customer Care</p>
                </div>
                <div class="textbox_login">
                    <label>Tên đăng nhập</label>
                    <input type="text" id="user" name="user" v-model="user" placeholder="example@gmail.com"/>
                </div>
                <div class="textbox_login">
                    <label>Mật khẩu</label>
                    <input type="password" id="pass" name="pass" v-model="pass"  placeholder="*****************" />
                </div>
                <div class="btn_login">
                    <input type="checkbox" v-model="checked" id="checked"/><label>Ghi nhớ</label>
                    <button @click="login()">Đăng nhập</button>
                   
                </div>
            </div>
        </div>
        <div class="image">
            <img src="../assets/Image.png"  />
        </div>
    </div>
</template>
<script>
import axios from 'axios';
import { ref } from 'vue'
export default {
    data() {
        return {
            user: localStorage.getItem("email"),
            pass: localStorage.getItem("password"),
            checked: localStorage.getItem("check")
        }
    },
    methods: {
        login() {
            var md5 = require('md5');

            var check = false;
            this.listUser.forEach((e) =>{
                if (this.user == e.email && md5(this.pass) == e.password) {
                    check = true;
                    localStorage.setItem("fullname", e.fullname);
                }
            })
            if (check == true) {
                if (this.checked == true) {
                    localStorage.setItem("email", this.user)
                    localStorage.setItem("password", this.pass)
                    localStorage.setItem("check", true)
                    localStorage.setItem("fullname")
                }
                console.log(localStorage.getItem("fullname"))
                alert ("Thanh cong")
                this.$router.push({path: '/home'})
                
            } else {
                alert("That bai")
            }
        
        },

    },

    setup() {
        var listUser = ref([])
        const getUser = async () => {
            try {
                const res = await axios.get('https://api.npoint.io/b48260446eb9e93268d3')
                listUser.value = res.data;
            } catch (error) {
                console.log(error)
            }
        }
        getUser()
        return {
            listUser,
        }
    }
}
</script>
<style scoped>
.LogIn_Page {
    width: 100%;
    height: 1080px;
    position: relative;
}
.LogIn_Form {
    margin-left: 15%;
    position: absolute;
    top: 49.9%;
    transform: translateY(-50%);
    width: 37.5%;
    height: 74.7%;
    z-index: 1;
    background-color: #FFFCFC;
    border-radius: 30px;
    box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.5);
}
.image {
    width: 50%;
    height: 80%;
    position: absolute;
    left: 38.4%;
    top: 12.6%;
    border-radius: 30px;
}
.image img{
    width: 100%;
    height: 93.3%;
}
.content_login {
    width: 60%;
    margin: 0 auto;
}
.title_form > p {
    color: #F57212;
    font-size: 43px;
    margin-top: 9%;
    line-height: 64px;
    font-family: 'Poppins';
    font-weight: 400;
    margin-bottom: 12.5%;
    font-style: normal;
}
.textbox_login {
    font-family: 'Roboto';
    font-style: normal;
    font-size: 25px;
    line-height: 35px;
}
.textbox_login:nth-child(3) {
    margin-top: 25px;
}
.textbox_login>label {
    display: block;
    color:  #0070D2;
}
.textbox_login > input {
    margin-top: 23px;
    width: 100%;
    height: 72px;
    border-radius: 15px;
    font-size: 18px;
    padding-left: 32px;
    box-sizing: border-box;
    background: #FFFCFC;
    border: 1px solid #CECDCD;
    box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.5);
    
}
::placeholder {
    margin-left: 5%;
    line-height: 33px;
    font-style: normal;
    font-family: 'Roboto';
    color: #CECDCD;
    font-style: normal;
    font-weight: 400;
    font-size: 28px;
}
.btn_login {
    display: block;
    margin-top: 5px;
}
.btn_login label {
    color: #0070D2;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    line-height: 30px;
    padding-bottom: 5px;
    font-size: 15px;
    line-height: 25px;
}
.btn_login > button {
    margin-top: 20px;
    width: 100%;
    height: 72px;
    box-sizing: border-box;
    background: #0070D2;
    box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.5);
    border-radius: 20px;
    color: white;
    border: none;
    cursor: pointer;
    font-size: 28px;
    line-height: 33px;
    font-style: normal;
    font-weight: 400;
}
.btn_login > button:hover {
    border: 1px solid black
}



/* @media only screen and (min-height: 900px){
    .LogIn_Page  {
        height: 900px;
    }
} */
@media only screen and (height: 900px) and (width: 1600px){
    .LogIn_Page {
        height: 900px;
    }
    .title_form > p {
        margin-bottom: 35px;
    }
    .textbox_login > input {
        height: 55px;
    }
    .title_form > p {
        margin-top: 60px;
    }
    .btn_login > button {
        height: 55px;
    }
}
@media only screen and (width: 1280px) and (height: 1080px) {
    .LogIn_Page  {
        height: 1080px;
    }
    .LogIn_Form {
        height: 70%;
    }
    .title_form > p {
        font-size: 35px;
    }
    .image {
        top: 15%;
    }
    .image img {
        height: 87.4%;
    }
    ::placeholder {
        font-size: 20px;
    }
}
@media only screen and (width: 1280px) and (height: 720px) {
    .LogIn_Page {
        height: 720px;
    }
    .title_form > p {
        font-size: 33px;
        margin-bottom: 4%;
    }
    .textbox_login > input {
        height: 50px;
    }
    .btn_login > button {
        height: 50px;
    }
    ::placeholder {
        font-size: 18px;
    }
}
@media only screen and (width: 960px) and (height: 540px) {
    .LogIn_Page {
        height: 540px;
    }
    .title_form > p {
        font-size: 28px;
        margin-bottom: 15px;
    }
    .textbox_login > input {
        height: 40px;
        margin-top: 10px;
        font-size: 15px;
    }
    .btn_login > button {
        height: 40px;
    }
    ::placeholder {
        font-size: 15px;
    }
    .textbox_login>label {
        font-size: 20px;
    }
}
@media only screen and (width: 640px) and (height: 360px) {
    .LogIn_Page {
        height: 360px;
    }
    .title_form > p {
        margin-top: 25px;
        font-size: 15px;
        margin-bottom: 8px;
        line-height: 15px;
    }
    .textbox_login {
        margin-top: 2px;
    }
    .textbox_login > input {
        height: 25px;
        margin-top: 3px;
        font-size: 12px;
        line-height: 20px;
        padding-left: 18px;
      
    }
    .btn_login > button {
        height: 25px;
        font-size: 13px;
        line-height: 0;
    }
    .textbox_login > input::placeholder {
        font-size: 12px;
        line-height: 20px;
    }
    .content_login div:nth-child(3){
        margin-top: 2px
    }
    .textbox_login>label {
        font-size: 15px;
        line-height: 30px;
    }
    .btn_login label {
        line-height: 18px;
        font-size: 12px;
    }
}
</style>