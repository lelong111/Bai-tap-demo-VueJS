<template>
    <div class="menu_user">
        <div class="menu_user_1">
            <div class="btn_info_user">
                <a href="#">Thông tin khách hàng</a>
            </div>
            <div class="input_search">
                <input type="search" placeholder="Tìm kiếm"/>
            </div>
        </div>
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
        <div class="menu_user_3">
            <div class="info_user">
                <div class="avatar_user"></div>
                <div class="detail_user">
                    <div class="name_user">
                        <p> {{ fullname }}</p>
                    </div>
                    <div class="name_tags">
                        <ul>
                            <li><p>VIP</p></li>
                            <li><p>ACTIVE</p></li>
                            <li><p>TPIN</p></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="icon_show_info">
                <ul>
                    <li>
                        <img src="../../assets/IconUser/Vector.png"/>
                        <label>Mail</label>
                    </li>
                    <li>
                        <img src="../../assets/IconUser/Vector1.png"/>
                        <label>Số CMND</label>
                    </li>
                    <li>
                        <img src="../../assets/IconUser/Vector2.png"/>
                        <label>Số điện thoại</label>
                    </li>
                    <li>
                        <img src="../../assets/IconUser/Vector3.png"/>
                        <label>Địa chỉ</label>
                    </li>
                </ul>
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
}
.menu_user .menu_user_1 .input_search input {
    width: 250px;
    height: 80px;
    border: 1px solid #CFCFCF;
}
::placeholder {
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 30px;
    color: #A4A4A4;
    padding-left: 35px
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
    width: 79px;
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
</style>
  