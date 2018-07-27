<template>
  <div>
    <header class="site-header" id="top">
      <div class="container">
        <div class="logo">
          <router-link :to="{ name: 'home' }" tag="a"><img src="images/new-logo-blue.png" alt="Aikido Dojo Sensei"></router-link>
          <!-- <a href="#">
            <img src="images/new-logo-blue.png" alt="Aikido Dojo Sensei">
          </a> -->
        </div> <!-- .logo -->
      <div class="header-information">
        <nav class="socials">
          <ul>
            <li v-show="data.facebook"><a :href="data.facebook" class="facebook-link"><i class="fab fa-facebook-f"></i></a></li>
            <li v-show="data.instagram"><a :href="data.instagram" class="instagram-link"><i class="fab fa-instagram"></i></a></li>
            <li v-show="data.youtube"><a :href="data.youtube" class="youtube-link"><i class="fab fa-youtube"></i></a></li>
            <li v-show="data.twitter"><a :href="data.twitter" class="twitter-link"><i class="fab fa-google-plus-g"></i></a></li>
            <li v-show="data.googlePlus"><a :href="data.googlePlus" class="google-plus-link"><i class="fab fa-youtube"></i></a></li>
          </ul>
        </nav> <!-- .socials -->
        <div class="facebook-like">
          <iframe src="https://www.facebook.com/plugins/like.php?href=https%3A%2F%2Fwww.facebook.com%2Faikidoklubsensei%2F&width=100&layout=button_count&action=like&size=small&show_faces=false&share=true&height=46&appId=527764304100865" width="200" height="46" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true"></iframe>
        </div> <!-- .facebook-like -->
        <div class="info">
          <p v-show="data.address"><i class="fas fa-map-marker-alt"></i> {{ data.address }}</p>
          <p v-show="data.phone"><i class="fas fa-phone-volume"></i> {{ data.phone }}</p>
          <p v-show="data.mobile"><i class="fas fa-mobile-alt"></i> {{ data.mobile }}</p>
        </div>
      </div> <!-- .header-information -->
      <div class="site-name" >
        <h1 id="site-name">{{ data.name }}</h1>
      </div>
    </div> <!-- .container -->
    </header>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: {
        name: '',
        address: '',
        phone: '',
        mobile: '',
        facebook: '',
        instagram: '',
        youtube: '',
        googlePlus: ''
      }
    }
  },
  methods: {
    getData() {
      axios.get('/get-data').then(({data}) => {
        this.data.name = data.name;
        this.data.address = data.address;
        this.data.phone = data.phone;
        this.data.mobile = data.mobile;
        this.data.facebook = data.facebook;
        this.data.instagram = data.instagram;
        this.data.youtube = data.youtube;
        this.data.googlePlus = data.googlePlus;
        this.data.twitter = data.twitter;
      });
    }
  },
  created() {
    this.getData();
  }
}
</script>

