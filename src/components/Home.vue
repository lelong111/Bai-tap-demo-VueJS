<template>
  <div class="container">
    <menu-left />
    <div class="menu">
      <router-view v-if="$route.params.menu == 'menu-null'">
        <ScreenWhite2 />
      </router-view>


      <router-view v-else-if="$route.params.search == 'search'">
        <div class="content">
          <div class="menu-search">
            <menu-user />
            <menu-2 :listUser="this.listUser" @showDetailUserSearch="showDetailUserSearch" />
          </div>
          <div class="screen-info">
            <ScreenInfoUser :detailUser1="this.resultUserSearchPhone" />
          </div>
        </div>
        
      </router-view>


      <router-view v-else>
        <div class="content">
          <div>
            <menu-user />
            <menu-icon />
            <ScreenInfoUser :detailUser1="this.detailUser"/>
          </div>
          <router-view v-if="$route.params.test == 'test'">
            <ScreenWhite />
          </router-view>
          <router-view v-else>
            <info-user :listUser="this.listUser" @showDetailUser="showUser" @addUser="addUser" @showUserEmail="showUserEmail" />
            <div class="modal">
              <div class="modal-content">
                  <div class="modal-content-top">
                      <span class="close">&times;</span>
                      <p>Thông tin cá nhân</p>
                  </div>
                  <div>
                    <ScreenInfoUser :detailUser1="this.detailUser" :nameUser="this.nameUser" />
                  </div>
              </div>
            </div>
          </router-view>
        </div>
      </router-view>
    </div>
    <div class="die_class">
    </div>
  </div>
</template>

<script>
import MenuIcon from './Sceen1/Menu-Icon.vue'
import Menu2 from './Sceen1/Menu2.vue'
import ScreenInfoUser from './Sceen1/ScreenInfoUser.vue';
import MenuLeft from './Sceen1/MenuLeft.vue';
import MenuUser from './Sceen1/Menu.vue';
import InfoUser from './Sceen1/InfoUser.vue';
import ScreenWhite from './Sceen1/ScreenWhite.vue';
import ScreenWhite2 from './Sceen1/ScreenWhite2.vue';
import axios from 'axios';
import $ from 'jquery';
import { ref } from 'vue'
import {useRouter} from "vue-router";

export default {
  data() {
    return {
      detailUser: null,
      resultUserSearchPhone: '',
      nameUser: ''
    }
  },
  methods: {
    showUser: function(user, index) {
      var checked = document.getElementById(index)
      if (checked.checked == true) {
        this.detailUser =  user 
        console.log(this.detailUser)
      } else {
        this.detailUser = null;
      }
    },
    addUser: function(newUser){
      console.log(newUser)
      this.listUser.unshift(newUser)
      console.log(this.listUser)
      axios.post('https://api.npoint.io/09900a76ce9270d017b4', this.listUser)
      .then(function (response) {
          console.log(response);
      })
      .catch(function (error) {
          console.log(error);
      });
    },
    showDetailUserSearch: function(userSearch) {
      this.resultUserSearchPhone = userSearch
    },
    showUserEmail: function(user) {
      this.detailUser = user
      this.nameUser = user.fullname
      $(document).ready(function () {
        var modal = $('.modal');
        var btn = $('.btn');
        var span = $('.close');
        modal.show();
        btn.click(function () {
            modal.show();
        });

        span.click(function () {
            modal.hide();
        });
        $(window).on('click', function (e) {
            if ($(e.target).is('.modal')) {
            modal.hide();
            }
        });
        });
    }
  },
  computed: {

  },
  components: {
    MenuLeft,
    MenuUser,
    InfoUser,
    ScreenWhite,
    ScreenWhite2,
    ScreenInfoUser,
    Menu2,
    MenuIcon
},
  setup() {
        var listUser = ref([])
        const router = useRouter();
        const getUser = async () => {
            try {
                const res = await axios.get('https://api.npoint.io/097f32d23d2cbe51abc2')
                listUser.value = res.data;
            } catch (error) {
                console.log(error)
            }
        };
        const checkLogin = () => {
          console.log(localStorage.getItem('check'))
          if (localStorage.getItem("email") == null) {
            router.push('/login');
          }
        }
        checkLogin()
        getUser()
        return {
            listUser,
        }
        
    }
}
</script>

<style scoped>

.modal {
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

.modal-content {
  background-color: #fefefe;
  margin: auto;
  border: 1px solid #888;
  margin-top: 100px;
  width: 650px;
  height: 650px;
  border-top: 4px solid #0070D2;
  box-sizing: border-box;
}
.modal-content-top {
    width: 100%;
    height: 50px;
    border-bottom: 1px solid #CECDCD;
}
.modal-content-top p {
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
.close {
  color: #aaaaaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
  padding-top: 10px;
  padding-right: 26px;
}

.close:hover,
.close:focus {
  color: #000;
  text-decoration: none;
  cursor: pointer;
}




.container {
  display: flex;
  width: 100%;
  height: 947px;
  background: #FFFCFC;
}
.content {
  display: flex;
  margin-top: 5.5%;
  background: #FFFFFF;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  height: 88.5%;
}
.screen-info{
  width: 1200px;
  border-top: 1px solid rgba(0, 0, 0, 0.25);
  padding-left: 30px;
}
.menu-left {
  margin-top: 4.9%;
}
.menu-search {
  flex-direction: column;
  border-right: 1px solid rgba(0, 0, 0, 0.25);
}
@media only screen and (min-height: 1080px) {
  .container {
    height: 1080px;
  }
  .content {
    height: 89.6%;
    margin-top: 5.7%;
  }
  .menu-left {
    margin-top: 5%;
  }
  .die_class {
    margin-top: 5%;
    border-top: 1px solid #CFCFCF;
    width: 130px;
  }
}
@media only screen and (width: 1600px) and (height: 900px) {
  .container {
    height: 900px;
  }
  .menu-left {
    margin-top: 4.5%;
  }
  .content {
    margin-top: 5%;
  }
  .screen-info {
    width: 975px;
  }
}
@media only screen and (width: 1280px) and (height: 1080px) {
    .menu-left {
      margin-top: 7.3%;
    }
    .content {
      margin-top: 8%;
    }
    .screen-info {
      width: 780px;
    }
    .die_class {
      margin-top: 7.35%;
    }
}
@media only screen and (width: 1280px) and (height: 720px) {
  .container {
    height: 720px;
  }
  .menu-left {
    margin-top: 4.9%;
  }
  .content {
    margin-top: 5.5%;
  }
  .screen-info {
    width:700px;
  }
  
}
@media only screen and (width: 960px) and (height: 540px) {
  .menu-left {
    margin-top: 4.9%;
  }
  .content {
    margin-top: 5.5%;
  }
}
@media only screen and (width: 375px) and (height: 667px) {

}
</style>