<template>
  <div>
    <div id="main-menu">
      <div class="mobile-menu">
        <a href="#" class="mobile" @click.prevent="menuToggle"><i class="fa fa-bars"></i></a>
        <a href="#" class="mobile-location"><i class="fas fa-map-marked-alt"></i></a>
      </div><!-- .mobile-menu -->
      <nav class="navigation-container" id="navigation">
        <ul class="main-menu">
          <router-link :to="{ name: 'about' }" tag="li" active-class="active" exact @click.native="closeMobileMenu"><a>O Nama</a></router-link>
          <router-link :to="{ name: 'members' }" tag="li" active-class="active" exact @click.native="closeMobileMenu"><a>Članovi</a></router-link>
          <router-link :to="{ name: 'photo' }" tag="li" active-class="active" exact @click.native="closeMobileMenu"><a>Galerija</a></router-link>
          <!-- <router-link :to="{ name: 'event' }" tag="li" active-class="active" exact @click.native="closeMobileMenu"><a>Dogadjaji</a></router-link> -->
          <router-link :to="{ name: 'posts' }" tag="li" active-class="active" exact @click.native="closeMobileMenu"><a>Tekstovi</a></router-link>
          <router-link :to="{ name: 'contact' }" tag="li" active-class="active" exact @click.native="closeMobileMenu"><a>Kontakt</a></router-link>
        </ul><!-- .main-menu -->
      </nav><!-- .navigation-container -->
    </div><!-- main-menu -->
  </div>
</template>

<script>
export default {
  data(){
    return {
      mobileMenuOpen: false
    }
  },
  methods: {
    menuToggle() {
      this.mobileMenuOpen = !this.mobileMenuOpen;
      let navigation = document.getElementById('navigation');
      if (this.mobileMenuOpen) {
        navigation.className += ' display-mobile-menu';
      } else {
        navigation.className = 'navigation-container';
      }
    },
    closeMobileMenu() {
      if (window.innerWidth <= 768) {
        let navigation = document.getElementById('navigation');
        this.mobileMenuOpen = false;
        navigation.className = 'navigation-container';
      }
    }
  }
}
</script>

