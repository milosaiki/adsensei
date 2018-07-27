<template>
  <div>
    <header class="header">
      <nav class="navbar navbar-expand-lg navbar-light">
        <router-link to="/admin" tag="a" class="brand">Admin</router-link>
        <!-- <a href="#" class="brand">Admin</a> -->
        <div class="menu-wrapper">
          <div class="menu-opener-wrapper">
            <a href="#" id="menuOpener" class="icons menu-opener" @click="menuToggle(!isMenuOpen)"><i class="fa fa-bars" aria-hidden="true"></i></a>
          </div>
          <div class="menu-user-wrapper">
            <router-link :to="{ name : 'mail' }" tag="a" class="email-notification" >
              <span class="envelope-notification icons">
                <i class="far fa-envelope"></i>
                <span class="email-notification-counter" v-if="numOfNewMessages > 0">{{ numOfNewMessages }}</span>
              </span>
            </router-link>
            <div class="user-header">
              <div class="header-user-action">
                <a href="#">Log out</a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  </div>
</template>

<script>
import {mapMutations} from 'vuex';
export default {
  data() {
    return {
      isMenuOpen: true,
      numOfNewMessages: 0
    }
  },
  methods: {    
    ...mapMutations([
        'menuToggle'
    ]),
    getNewMessages() {
      axios.get('/admin/get-unread-messages').then( (data) => {
        console.log(data);
        this.numOfNewMessages = data.data;
      });
    }
  },
  created() {
    this.getNewMessages();
  }
}
</script>

