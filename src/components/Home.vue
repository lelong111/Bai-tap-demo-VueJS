<template>
  <div class="container">
    <menu-left />
    <menu-user />
    <info-user />
    {{ $store.state.dataUser }}
  </div>
</template>

<script>
import MenuLeft from './Sceen1/MenuLeft.vue';
import MenuUser from './Sceen1/Menu.vue';
import InfoUser from './Sceen1/InfoUser.vue';
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
    
    }
  },
  components: {
      MenuLeft,
      MenuUser,
      InfoUser,
  },
  computed: {
    ...mapGetters(['dataUser'])
  }
}
</script>

<style scoped>
.container {
    display: flex;

}
</style>