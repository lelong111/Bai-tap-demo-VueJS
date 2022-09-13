<template>
  <div class="icon_menu">
            <ul>
                <li>
                    <img src="../../assets/MenuIcon/icon.png"/>
                </li>
                <li>
                    <img src="../../assets/MenuIcon/icon1.png"/>
                </li>
                <li>
                    <img src="../../assets/MenuIcon/icon2.png"/>
                </li>
                <li>
                    <img src="../../assets/MenuIcon/icon3.png"/>
                </li>
            </ul>
        </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.icon_menu {
    width: 100%;
    height: 100px;
}
.icon_menu ul {
    display: flex;
    justify-content: space-around;
    align-items: center;
    list-style-type: none;
    margin-top: 25px;
}
@media only screen and (width: 1600px) and (height: 900px) {

}
@media only screen and (width: 1280px) and (height: 1080px) {
    
}
@media only screen and (width: 1280px) and (height: 720px) {
    .icon_menu ul li img {
        max-height: 50px;
        max-width: 50px;
    }
    .icon_menu {
        height: 60px;
        width: 400px;
    }
}
</style>