<template>
  <div class="menu-left">

    <div class="icon-menu-top">
        <div><img src='../../assets/Vector.png'/></div>
        <div><img src='../../assets/Vector1.png'/></div>
        <div><img src='../../assets/Vector2.png'/></div>
        <div><img src='../../assets/Vector3.png'/></div>
    </div>
    <div class="icon-menu-logout">
        <div><img src='../../assets/logout.png'/></div>
    </div>
  </div>
</template>

<script>

export default {
    methods: {
    }
}
</script>

<style>
.menu-left {
    width: 80px;
    height: 753px;
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
    height: 60px;
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
    /* margin-bottom: 60px; */

    /* box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25); */
    position: relative;
    background-color: #398CDA;
}
.menu-left  .icon-menu-logout div {
    position:absolute;
    max-width: 50px;
    max-height: 53px;
    top: 70%;
    left: 15%
}
</style>