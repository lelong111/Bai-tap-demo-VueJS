<template>
  <div class="menu-left">

    <div class="icon-menu-top" id="myDIV">
        <div class="active" @click="clickme()"><router-link  to="/home/list-users"><img src='../../assets/Vector.png'/></router-link></div>
        <div @click="clickme()"><router-link to="/home/menu/menu-null"><img src='../../assets/Vector1.png'/></router-link></div>
        <div @click="clickme()"><router-link to="/home/menu/menu-null"><img src='../../assets/Vector2.png'/></router-link></div>
        <div @click="clickme()"><router-link to="/home/menu/menu-null"><img src='../../assets/Vector3.png'/></router-link></div>
    </div>
    <div class="icon-menu-logout">
        <div><img src='../../assets/logout.png'/></div>
    </div>
  </div>
</template>

<script>
  import $ from 'jquery';
export default {
  methods: {
    clickme() {
      $(document).ready(function(){
        $('.icon-menu-top div').click(function(){
          $('.icon-menu-top div').removeClass("active");
          $(this).addClass("active");
      });
      });
    }
  }
}
</script>

<style scoped>
.active {
  border-left: 14px solid #DD7A01;
  box-sizing: border-box;
}
.menu-left {
    width: 80px;
    height: 90%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}
.menu-left  .icon-menu-top {
    margin: 0px auto;
    display: flex;
    flex-direction: column;
    height: 40%;
    background-color: #0070D2;
}
.menu-left  .icon-menu-top div{
    width: 80px;
    height: 80px;
    position: relative;
    margin-bottom: 5px;
}
.menu-left  .icon-menu-top div img {
    display: block;
    max-width: 40px;
    max-height: 40px;
    position: absolute;
    top: 25%;
    left: 25%
}
.menu-left  .icon-menu-logout{
    height: 60%;
    position: relative;
    background-color: #398CDA;
}
.menu-left  .icon-menu-logout div {
    position:absolute;
    max-width: 50px;
    max-height: 53px;
    top: 83.1%;
    left: 15%
}
@media only screen and (min-height: 1080px) {
  .menu-left{
    height: 91%;
  }
  .menu-left  .icon-menu-top {
    height: 31.7%;
  }
  .menu-left  .icon-menu-logout {
    height: 68.3%;
  }
}
</style>