<template>
    <div class="info_user">
      <div class="create_user">
          <button class="btn_create_user">Tạo người dùng</button>
          <div class="modal">
              <div class="modal-content">
                  <div>
                      <span class="close">&times;</span>
                      <p>Thông tin cá nhân</p>
                  </div>
                  <div>
                      <input type="text"/>
                  </div>
              </div>
          </div>
      </div>
      <div class="tabbar">
          <div class="tabbar_1"><router-link to="/home/list-users">Danh sách người dùng</router-link></div>
          <div class="tabbar_2"><router-link to="/home/ghi-chu/test">Ghi chú</router-link></div>
      </div>
      <div class="table-view">

      </div>
    </div>
  </template>
  
  <script>
  
  
  export default {
      data() {
          return {
  
          }
      },
  
      props: {
          listUser: Object,
  
      },
      methods: {
      }
  }
  </script>
  
  <style scoped>
  .create_user {
      width: 200px;
      border-radius: 6px; 
      padding: 1px 16px;
      position: absolute;
      top: 15%;
      left: 73%;
      border: none;
  }
  .tabbar :active {
    border-top: 4px solid #DD7A01;
}

  .create_user button {
      width: 200px;
      height: 50px;
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      font-size: 22px;
      line-height: 20px;
      color: #FFFFFF;
      background: #0070D2;
      border-radius: 6px;
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
      font-family: 'Roboto', sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 22px;
      line-height: 26px;
  }
  .tabbar_1 {
      margin-left: 15px;
      
  }
  .tabbar .tabbar_1 {
      position: relative;
      border-top: 4px solid #DD7A01;
  }
  .tabbar .tabbar_1 a{
      position: absolute;
      top: 30%;
      left: 3%
  }
  .tabbar .tabbar_2 {
      position: relative;
      border-top: 1px solid #CFCFCF;
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
    margin-left: 13px;
    border-top: 4px solid #DD7A01;
}
  
  .modal {
    display: none;
    position: fixed;
    z-index: 1;
    padding-top: 100px;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgb(0, 0, 0);
    background-color: rgba(0, 0, 0, .4);
  }
  
  .modal-content {
    background-color: #fefefe;
    margin: auto;
    padding: 20px;
    border: 1px solid #888;
    width: 80%;
  }
  
  .close {
    color: #aaaaaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
  }
  
  .close:hover,
  .close:focus {
    color: #000;
    text-decoration: none;
    cursor: pointer;
  }
  </style>