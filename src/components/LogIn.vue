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
    height: 753px;
    position: relative;
}
.LogIn_Form {
    margin-left: 10%;
    position: absolute;
    top: 49.9%;
    transform: translateY(-50%);
    width: 40%;
    height: 80%;
    z-index: 1;
    background-color: #FFFCFC;
    border-radius: 30px;
    box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.5);
}
.image {
    width: 50%;
    height: 80%;
    position: absolute;
    left: 40%;
    top: 10%;
    border-radius: 30px;
}
.image img{
    width: 100%;
    height: 100%;
}
.content_login {
    width: 70%;
    margin: 0 auto;
}
.title_form > p {
    color: #F57212;
    font-size: 43px;
    margin-top: 50px;
    line-height: 64.5px;
    font-family: 'Poppins';
    font-weight: 400;
    margin-bottom: 35px;
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
    margin-top: 20px;
    width: 100%;
    height: 50px;
    border-radius: 15px;
    /* font-size: 18px; */
    padding-left: 20px;
    box-sizing: border-box;
    background: #FFFCFC;
    border: 1px solid #CECDCD;
    box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.5);
    
}
::placeholder {
    margin-left: 5%;
    line-height: 20px;
    color: #CECDCD;
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
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
    height: 50px;
    box-sizing: border-box;
    background: #0070D2;
    box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.5);
    border-radius: 20px;
    color: white;
    border: none;
    cursor: pointer;
}
.btn_login > button:hover {
    border: 1px solid black
}

</style>