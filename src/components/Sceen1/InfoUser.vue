<template>
  <div class="info_user">
    <div class="create_user">
        <button @click="clickModal()" class="btn1">Tạo người dùng</button>
        <div class="modal1">
            <div class="modal-content1">
                <div class="modal-content-top1">
                    <span class="close1">&times;</span>
                    <p>Thông tin cá nhân</p>
                 </div>
                <!-- <Form @click="clickSave()" :validate-schema="validate"> -->
                <div class="modal-content-input">
                        <div class="upload">
                            <img src="../../assets/image-logo-removebg-preview.png" id="previewImage" width=100 height = 100 alt="">
                            <div class="round">
                                <input type="file" @change="OnFileSelected">
                                <i class = "fa fa-camera" style = "color: #fff;"></i>
                            </div>
                        </div>
                        <div class="modal-content-input-text">
                            <div class="input1">
                                <label>User Name</label> <input type="text" v-model="user_name"/> 
                                <label>Full Name</label> <input type="text" v-model="full_name" /> 
                                <label>Email</label> <input type="text" v-model="email" /> 
                                <label>Password</label> <input type="password" v-model="pass" />
                            </div>
                            <div class="input1">
                                <label>Phone Number</label> <input type="text" v-model="phone" />
                                <label>Address</label> <input type="text" v-model="add" /> 
                                <label>ID cards</label> <input type="text" v-model="id_card" />
                                <label for="tags">Choose a Tags:</label>
                                <select v-model="tags" id="tags" multiple>
                                    <option value="Active">Active</option>
                                    <option value="Vip">Vip</option>
                                </select>
                            </div>
                        </div>
                   
                </div>
                <div class="btn_action">
                    <button @click="clickSave()"  class="btn_save">Lưu trữ</button>
                    <button class="btn_exit">Đóng</button>
                </div>
                <!-- </Form> -->
            </div>
        </div>
    </div>
    <div class="tabbar">
        <div class="tabbar_1 active2" @click="clickMe()"><router-link to="/home/list-users">Danh sách người dùng</router-link></div>
        <div class="tabbar_2" @click="clickMe()"><router-link to="/home/ghi-chu/test">Ghi chú</router-link></div>
    </div>
    <div class="table-view">
        <table>
            <tr>
                <th><input type="checkbox"/></th>
                <th>Email </th>
                <th>Name </th>
                <th>Phone</th>
                <th>Address </th>

            </tr>
            <tr v-for:="(user, index) in listUser">
                <td><input type="checkbox" @click="showDetailUser(user, index)" :id ="index" /></td>
                <td><a href="#" class="showUserEmail" @click="showUserEmail(user)">{{ user.email }}</a></td>
                <td>{{ user.fullname }}</td>
                <td> {{ user.phone_number}}</td>
                <td>{{ user.address }}</td>
            </tr>
        </table>
    </div>
  </div>
</template>

<script>
import {Form, Field, ErrorMessage} from 'vee-validate';
import $ from 'jquery';
import axios from 'axios';
// const validate = {
    
// }
export default {
    data() {
        return {
            key: 0,
            selectedFile: '',
            user_name: '',
            full_name: '',
            email: '',
            pass: '',
            phone: '',
            add: '',
            id_card: '',
            checkUser: '',
            tags: [],
            addUser: {
                tags: [],
            },         
        }
    },
    props: {
        listUser: Object,
    },
    methods: {
        clickMe() {
            $(document).ready(function(){
                $('.tabbar div').click(function(){
                $('.tabbar div').removeClass("active2");
                $(this).addClass("active2");
            });
            });
        },
        clickModal() {
            $(document).ready(function () {
            var modal1 = $('.modal1');
            var btn = $('.btn1');
            var span = $('.close1');
            var close = $('.btn_exit');
            btn.click(function () {
                modal1.show();
            });

            span.click(function () {
                modal1.hide();
            });
            close.click(function () {
                modal1.hide();
            });
            $(window).on('click', function (e) {
                if ($(e.target).is('.modal1')) {
                modal1.hide();
                }
            });
            });
        },
        OnFileSelected(event) {
            console.log(event); 
            const reader = new FileReader();
            reader.readAsDataURL(event.target.files[0])
            reader.addEventListener("load", e=> {
                document.getElementById('previewImage').src = reader.result;
                this.selectedFile = reader.result;
            });
            
        },
        clickSave() {
            var md5 = require('md5');
            
            this.addUser.tags[0] = this.tags[0];
            this.addUser.tags[1] = this.tags[1];
            this.addUser.email = this.email;
            this.addUser.address = this.add;
            this.addUser.id_card = this.id_card;
            this.addUser.fullname = this.full_name;
            this.addUser.password = md5(this.pass);
            this.addUser.username = this.user_name;
            this.addUser.phone_number = this.phone;
            this.addUser.profile_picture = this.selectedFile;
            // console.log(this.addUser)
            this.$emit("addUser", this.addUser)
            $(document).ready(function () { 
                var modal = $('.modal1');
                modal.hide();
            });
        },
        showDetailUser: function(user, index) {
            for(var i = 0; i < this.listUser.length; i ++) {
                if (i != index) {
                    document.getElementById(i).checked = false;
                }
            }
            this.$emit("showDetailUser", user, index)
        },
        showUserEmail: function(user) {
            this.$emit("showUserEmail", user)
        }
    }
}
</script>

<style scoped>


.upload{
  width: 100px;
  height: 100px;
  position: relative;
  margin: auto;
  border: 6px solid #eaeaea;
  background-color: #eaeaea;
  border-radius: 50%;
  position: relative;
}

.upload img{
  position: absolute;
  top: 5%;
  top: 27%;
  left: 22%;
  
  max-width: 60px;
  max-height: 40px;
}

.upload .round{
  position: absolute;
  bottom: 0;
  right: 0;
  background: #eaeaea;
  width: 32px;
  height: 32px;
  line-height: 33px;
  text-align: center;
  border-radius: 50%;
  overflow: hidden;
}

.upload .round input[type = "file"]{
  position: absolute;
  transform: scale(2);
  opacity: 0;
}

input[type=file]::-webkit-file-upload-button{
    cursor: pointer;
}


.modal1 {
  display: none;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, .4);
  box-sizing: border-box;
}

.modal-content1 {
  background-color: #fefefe;
  margin: auto;
  border: 1px solid #888;
  margin-top: 100px;
  width: 650px;
  height: 650px;
  border-top: 4px solid #0070D2;
  box-sizing: border-box;
}
.modal-content-top1 {
    width: 100%;
    height: 50px;
    border-bottom: 1px solid #CECDCD;
}
.modal-content-top1 p {
    color: #0070D2;
    padding-top: 17px;
    padding-left: 26px;
    font-size: 18px;
    line-height: 18px;
    font-family:  'Roboto', sans-serif;
}
.modal-content-input {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    margin-top: 50px;
}
.modal-content-input-text {
    width: 90%;
    margin: 0px auto;
    display: flex;
    margin-top: 30px;
}
.input1 {
    display: flex;
    flex-direction: column;
    width: 50%;
}
.input1 label {
    color: #555555;
    font-size: 13px;
    margin: 10px 0px 10px 0px;
}
.input1> input {
    width: 90%;
    height: 35px;
    border: 1px solid #dddddd;
    padding-left: 5px;
    background: #FFFFFF;
    border-radius: 3px;

    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 16px;
}
.modal-content-input-text input:nth-child(2) {
    /* padding-left: 10% */
}

.close1 {
  color: #aaaaaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
  padding-top: 10px;
  padding-right: 26px;
}

.close1:hover,
.close1:focus {
  color: #000;
  text-decoration: none;
  cursor: pointer;
}
.btn_action{
    width: 100%;
    height: 50px;
    margin-top: 5%;
    margin-left: 5%;
}


.create_user {
    width: 200px;
    border-radius: 6px; 
    padding: 1px 16px;
    position: absolute;
    top: 15%;
    left: 73%;
    border: none;
}
.create_user .btn1{
    width: 200px;
    height: 50px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 22px;
    line-height: 20px;
    color: #FFFFFF;
    background: #0070D2;
    border: none;
    border-radius: 6px;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
}
.btn_save{
    width: 70px;
    height: 35px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 16px;
    color: #FFFFFF;
    background: #0070D2;
    border: none;
    border-radius: 3px;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    margin-right: 1%;
}
.btn_exit {
    width: 50px;
    height: 35px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 16px;
    color: #FFFFFF;
    background: #777777;
    border: none;
    border-radius: 3px;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
}
.info_user {
    width: 1200px;
    height: 800px;
    border: 1px solid #CECDCD;
    border-bottom: none;
    position: relative;
}
.info_user .tabbar {
    display: flex;
    width: 90%;
    
}
.info_user .tabbar  div {
    width: 240px;
    height: 50px;
    margin-top: 18%;
    border-left: 1px solid #CFCFCF;
    border-right: 1px solid #CFCFCF;
    border-top: 1px solid #CFCFCF;
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 22px;
    line-height: 26px;
}
.tabbar_1 {
    margin-left: 25px;
    
}
.tabbar .tabbar_1 {
    position: relative;
}
.active2 {
    border-top: 4px solid #DD7A01 !important;
}
.tabbar .tabbar_1 a{
    position: absolute;
    top: 30%;
    left: 3%
}
.tabbar .tabbar_2 {
    position: relative;
}
.tabbar .tabbar_2 a{
    position: absolute;
    top: 30%;
    left: 35%;
}

.info_user .tabbar  div a{
    text-decoration: none;
    color: black
}
/* .info_user .tabbar  div:nth-child(1){
    float: left;
    margin-left: 15px;
    
}  */
.table-view {
    width: 90%;
    margin-left: 24px;
    border-top: 4px solid #DD7A01;
}
.table-view table{
    
    border-collapse: collapse;
    border-left: none;
}
.table-view table tr {
    height: 48px;
    border-left: none;
}
.table-view table tr th{
    background-color: #F0F2F4;
    font-weight: 500;
    font-style: normal;
    font-size: 12px;
    line-height: 16px;
    color: #7B8395;
    font-family: 'IBM Plex Mono', sans-serif;
    border: 1px solid #dddddd;
    border-left: none;
    box-shadow: inset -1px 0px 0px rgba(198, 209, 221, 0.5);
    text-align: left;
}
.table-view table tr th:not(.table-view table tr th:nth-child(1)) {
    padding: 10px;
}
.table-view table tr td {
    padding: 10px;
    border: 1px solid #dddddd;
    box-shadow: inset 0px -1px 0px rgba(198, 209, 221, 0.5);
    background: #FFFFFF;
    border-left: none;
}
.table-view table tr th:nth-child(1){
    border-left: none;
    width: 48px;
    border-left: none;
    text-align: center;
}
.table-view table tr th:nth-child(2){
    width: 230px;
}
.table-view table tr th:nth-child(3){
    width: 200px;
}
.table-view table tr th:nth-child(4){
    width: 120px;
}
.table-view table tr th:nth-child(5){
    width: 230px;
}
.table-view table tr td {
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 16px;
    color: #1F232E;
    font-family: 'IBM Plex Mono', sans-serif;
}
.table-view table tr td a {
    text-decoration: none;
    color: #1F232E;
    font-family: 'IBM Plex Mono', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 16px;
}
.table-view table tr td:nth-child(1) {
    padding-left: 17px
}
@media only screen and (width: 1600px) and (height: 900px) {
    .info_user {
        width: 1000px;
    }
}
@media only screen and (width: 1280px) and (height: 1080px) {
    .info_user {
        width: 800px;
    }
    .create_user .btn1 {
        width: 180px;
        height: 45px;
    }
    .create_user {
        width: 180px;
        top: 8%;
        left: 68.5%;
    }
}
@media only screen and (width: 1280px) and (height: 720px) {
    .info_user {
        width: 750px;
        height: 90%;
    }
    .create_user .btn1 {
        width: 180px;
        height: 45px;
    }
    .create_user {
        width: 180px;
        top: 10%;
        left: 67%;
    }
}
</style>