<template>
  <div class="main-holder text-center">
      <app-header></app-header>
      <div class="wrapper">
        <aside class="left-aside sidebar-offcanvas" v-if="openMenu">
          <div class="sidebar">
            <app-menu></app-menu>
          </div>          
        </aside>
        <aside class="right-aside">
          <router-view></router-view>
        </aside>
      </div>
    </div>
</template>

<script>
import Menu from './components/admin/Menu.vue';
import Header from './components/admin/Header.vue';
export default {
  components: {
    appMenu: Menu,
    appHeader: Header
  },
  computed: {
    openMenu() {
      return this.$store.getters.isMenuOpen;
    }
  }
}
</script>

