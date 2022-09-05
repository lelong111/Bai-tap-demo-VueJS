<template>
  <div class="info_user">
    <div class="create_user">
        <!-- <button class="btn btn-info btn-lg btn_create_user">Tạo người dùng</button> -->
        <!-- <div class="modal">
            <div class="modal-content">
                <div>
                    <span class="close">&times;</span>
                    <p>Thông tin cá nhân</p>
                </div>
                <div>
                    <input type="text"/>
                </div>
            </div>
        </div> -->
        <!-- <div class="modal fade" id="myModal" role="dialog">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                        <h4 class="modal-title">Modal Header</h4>
                    </div>
                    <div class="modal-body">
                        <p>Some text in the modal.</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div> -->

       <!-- Button trigger modal -->
       <div class="container">
  <h2>Modal Example</h2>
  <!-- Trigger the modal with a button -->
  <button type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">Open Modal</button>

  <!-- Modal -->
  <div class="modal fade" id="myModal" role="dialog">
    <div class="modal-dialog">
    
      <!-- Modal content-->
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">&times;</button>
          <h4 class="modal-title">Modal Header</h4>
        </div>
        <div class="modal-body">
          <p>Some text in the modal.</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
        </div>
      </div>
      
    </div>
  </div>
  
</div>


    </div>
    <div class="tabbar">
        <div class="tabbar_1"><router-link to="/home/list-users">Danh sách người dùng</router-link></div>
        <div class="tabbar_2"><router-link to="/home/ghi-chu/test">Ghi chú</router-link></div>
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
            <tr v-for:="user in listUser" >
                <td><input type="checkbox"/></td>
                <td>{{ user.email }}</td>
                <td>{{ user.fullname }}</td>
                <td> {{ user.phone_number}}</td>
                <td>{{ user.address }}</td>
            </tr>
        </table>
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
    
}
.tabbar .tabbar_1:active {
    border-top: 4px solid #DD7A01;
}
.tabbar .tabbar_2:active {
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
.table-view table{
    
    border-collapse: collapse;
}
.table-view table tr {
    height: 48px;
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
}
.table-view table tr th:nth-child(1){
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
.table-view table tr td:nth-child(1) {
    padding-left: 17px
}



/* .modal {
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
} */
</style>