<template>
    <div class="menu_user">
        <div class="menu_user_1">
            <div class="btn_info_user">
                <router-link to="/home/home">Thông tin khách hàng</router-link>
            </div>
            <div class="input_search">
                <router-link to="/home/search">Tìm kiếm</router-link>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            fullname: localStorage.getItem("fullname")
        }
    },
    props: {
        detailUser1: Object,
    },
    watch: {
        detailUser() {
            console.log(this.detailUser)
        }
    }
}
</script>
<style scoped>
.menu_user {
    width: 500px;
}
.menu_user .menu_user_1 {
    height: 80px;
    display: flex;
    border-bottom: 2px solid #DF6106;
}
.menu_user .menu_user_1 .btn_info_user {
    width: 250px;
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 30px;
    color: #DF6106;
    text-align: center;
    padding-top: 22px;
    background: linear-gradient(180deg, rgba(250, 200, 164, 0.296) 0%, rgba(255, 182, 33, 0) 100%);
}
.menu_user .menu_user_1 .input_search {
    width: 250px;
    border: 1px solid #CFCFCF;
    
}
.menu_user .menu_user_1 .input_search a {
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 30px;
    color: #A4A4A4;
    padding-left: 35px;
    text-decoration: none;
    display: inline-block;
    margin-top: 24px;
}

.btn_info_user a {
    text-decoration: none;
    color: #DF6106;
}
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
.menu_user_3 {
    width: 100%;
    height: 100px;
    margin-left: 20px;
    margin-top: 10%;
}
.avatar_user{
    width: 100px;
    height: 100px;
    background-color: #FFFFFF;
    background: url('https://www.shareicon.net/data/512x512/2016/08/18/810266_man_512x512.png');
    background-repeat: no-repeat;
    border: 3px solid #FFFFFF;
    filter: drop-shadow(0px 0px 20px rgba(0, 0, 0, 0.5));
    border-radius: 50%;
    box-sizing: border-box;
    background-size: 100px 100px;   
}
.info_user {
    display: flex;
}
.info_user .detail_user .name_user {
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 28px;
    line-height: 33px;
    color: #000000;
    margin-top: 5px;
    margin-left: 20px
}
.name_tags {
    margin-top: 30px;
}
.info_user .detail_user .name_tags ul {
    display: flex;
    list-style-type: none;
}
.info_user .detail_user .name_tags ul li {
    margin-left: 20px;
}
.info_user .detail_user .name_tags ul li:nth-child(1) {
    width: 77px;
    height: 29px;
    background: #DD7A01;
    border-radius: 16px;
    color: #FFFFFF;
}
.info_user .detail_user .name_tags ul li:nth-child(1) p {
    width: 33px;
    height: 29px;
    margin-left: 25px;
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 30px;
}
.info_user .detail_user .name_tags ul li:nth-child(2) {
    width: 110px;
    height: 29px;
    background: #0B8E11;
    border-radius: 16px;
    color: #FFFFFF;
    
}
.info_user .detail_user .name_tags ul li:nth-child(2) p {
    width: 94px;
    height: 29px;
    margin-left: 18px;
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 30px;
}
.info_user .detail_user .name_tags ul li:nth-child(3) {
    width: 110px;
    height: 29px;
    background: #FFDADA;
    border-radius: 16px;
    color: #DB524E;
    
}
.info_user .detail_user .name_tags ul li:nth-child(3) p {
    width: 94px;
    height: 29px;
    margin-left: 28px;
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 30px;
}
.icon_show_info {
    margin-top: 60px;
    margin-left: 30px;
}
.icon_show_info ul {
    list-style-type: none;
}
.icon_show_info ul li {
    margin-bottom: 30px;
}

.icon_show_info ul li label{
    margin-left: 32px;
    font-style: normal;
    font-weight: 400;
    font-size: 22px;
    line-height: 26px;
    display: inline-block;
    transform: translateY(-7px)
}
@media only screen and (min-height: 1080px) {
  .menu_user {
    width: 505px;
  }
  .menu_user .menu_user_1 .btn_info_user {
    width: 50.9%;
  }
  .menu_user_3 {
    margin-top: 17.1%;
  }
  .menu_user .menu_user_1 .input_search {
    /* widows: 49.5; */
  }
}
@media only screen and (width: 1600px) and (height: 900px) {
    .menu_user {
        width: 450px;
    }
    .btn_info_user a {
        font-size: 18px;
        line-height: 38px;
    }
    .info_user .detail_user .name_tags ul li:nth-child(3) {
        width: 80px;
    }
    .info_user .detail_user .name_tags ul li:nth-child(3) p {
        margin-left: 17px;
    }
    .create_user {
        top: 10%
    }
}
@media only screen and (width: 1280px) and (height: 720px) {
    .menu_user {
        width: 400px;
    }
    .menu_user .menu_user_1 .btn_info_user {
        width: 200px;
        font-size: 18px;
        line-height: 33px;
    }
    .menu_user .menu_user_1 .input_search {
        width: 200px;
    }
    .menu_user .menu_user_1 .input_search input {
        width: 200px;
    }
    ::placeholder {
        font-size: 18px;
        line-height: 100px;
        padding-left: 10px;
    }
    .menu_user_3 {
        width: 100%;
        height: 80px;
        margin-left: 15px;
        margin-top: 5%;
    }
    .avatar_user {
        width: 80px;
        height: 80px;
        background-size: 80px 80px;
    }
    .info_user .detail_user .name_user {
        font-size: 24px;
        line-height: 25px;
        margin-top: 3px;
    }
    .detail_user {
        width: 75%;
    }
    .name_tags {
        margin-top: 18px;
    }
    .info_user .detail_user .name_tags ul li:nth-child(1) {
        width: 50px;
        height: 25px;
        border-radius: 14px;
    }
    .info_user .detail_user .name_tags ul li:nth-child(1) p {
        width: 35px;
        height: 29px;
        margin-left: 12px;
        font-size: 18px;
        line-height: 26px;
    }
    .info_user .detail_user .name_tags ul li:nth-child(2) {
        width: 80px;
        height: 25px;
        border-radius: 14px;
    }
    .info_user .detail_user .name_tags ul li:nth-child(2) p {
        width: 80px;
        height: 29px;
        margin-left: 8px;
        font-size: 18px;
        line-height: 26px;
    }
    .info_user .detail_user .name_tags ul li:nth-child(3) {
        width: 65px;
        height: 25px;
        border-radius: 14px;
    }
    .info_user .detail_user .name_tags ul li:nth-child(3) p {
        width: 80px;
        height: 29px;
        margin-left: 14px;
        font-size: 18px;
        line-height: 26px;
    }
    .icon_menu ul li img {
        max-height: 50px;
        max-width: 50px;
    }
    .icon_menu {
        height: 60px;
    }
    .icon_show_info {
        margin-top: 30px;
    }
    .icon_show_info ul li img {
        max-height: 30px;
        max-width: 30px;
    }
    .icon_show_info ul li label {
        margin-left: 30px;
        font-size: 18px;
        line-height: 20px;
    }
}

@media only screen and (width: 1280px) and (height: 1080px) {
    .menu_user {
        width: 360px;
    }
    .menu_user .menu_user_1 .btn_info_user {
        width: 170px;
        font-size: 23px;
        line-height: 22px;
    }
    .menu_user .menu_user_1 .input_search {
        width: 190px;
    }
    .menu_user .menu_user_1 .input_search input {
        width: 190px;
    }
    ::placeholder {
        font-size: 18px;
        line-height: 100px;
        padding-left: 10px;
    }
    .menu_user_3 {
        width: 100%;
        height: 80px;
        margin-left: 15px;
        margin-top: 5%;
    }
    /* .avatar_user {
        width: 100px;
        height: 100px;
        background-size: 100px 100px;
    } */
    .detail_user {
        width: 72%;
    }
    .info_user .detail_user .name_user {
        font-size: 24px;
        line-height: 25px;
    }
    .name_tags {
        margin-left: -16px;
    }
    .info_user .detail_user .name_tags ul li:nth-child(1) {
        width: 50px;
        height: 25px;
        border-radius: 14px;
    }
    .info_user .detail_user .name_tags ul li:nth-child(1) p {
        width: 35px;
        height: 29px;
        margin-left: 12px;
        font-size: 18px;
        line-height: 26px;
    }
    .info_user .detail_user .name_tags ul li:nth-child(2) {
        width: 80px;
        height: 25px;
        border-radius: 14px;
    }
    .info_user .detail_user .name_tags ul li:nth-child(2) p {
        width: 80px;
        height: 29px;
        margin-left: 8px;
        font-size: 18px;
        line-height: 26px;
    }
    .info_user .detail_user .name_tags ul li:nth-child(3) {
        width: 65px;
        height: 25px;
        border-radius: 14px;
    }
    .info_user .detail_user .name_tags ul li:nth-child(3) p {
        width: 80px;
        height: 29px;
        margin-left: 14px;
        font-size: 18px;
        line-height: 26px;
    }
}
</style>
  