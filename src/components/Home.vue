<template>
  <div class="container">
    <menu-left />
    <div class="menu">
      <router-view v-if="$route.params.menu == 'menu-null'">
        <ScreenWhite2 />
      </router-view>
      <router-view v-else>
        <div class="content">
          <menu-user />
          <router-view v-if="$route.params.test == 'test'">
            <ScreenWhite />
          </router-view>
          <router-view v-else>
            <info-user :listUser="this.listUser" />
          </router-view>
        </div>
      </router-view>
      



    </div>
  </div>
</template>

<script>
import MenuLeft from './Sceen1/MenuLeft.vue';
import MenuUser from './Sceen1/Menu.vue';
import InfoUser from './Sceen1/InfoUser.vue';
import ScreenWhite from './Sceen1/ScreenWhite.vue';
import ScreenWhite2 from './Sceen1/ScreenWhite2.vue';
import axios from 'axios';
import { ref } from 'vue'

export default {
  data() {
    return {

    }
  },
  methods: {

  },
  computed: {

  },
  components: {
    MenuLeft,
    MenuUser,
    InfoUser,
    ScreenWhite,
    ScreenWhite2
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

.container {
  display: flex;
  width: 100%;
  height: 948px;
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

.menu-left {
  margin-top: 5.1%;
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

}
</style>