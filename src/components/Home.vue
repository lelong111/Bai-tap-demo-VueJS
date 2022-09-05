<template>
  <div class="container">
    <menu-left />
    <div class="content">
      <menu-user />
      <router-view>
      {{ this.$route.query.page }}
      <info-user :listUser="this.listUser" />
      </router-view>
    </div>
  </div>
</template>

<script>
import MenuLeft from './Sceen1/MenuLeft.vue';
import MenuUser from './Sceen1/Menu.vue';
import InfoUser from './Sceen1/InfoUser.vue';
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
  height: 930px;
  background: #FFFCFC;


}
.content {
  display: flex;
  margin-top: 4%;
  background: #FFFFFF;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
}
.menu-left {
  margin-top: 4%;
}
@media only screen and (min-height: 1080px) {
  .container {
    height: 1080px;
  }
  .content {
    height: 90%;
  }

}
</style>