<template>
  <div class="footer-menu">
    <ul>
      <router-link :to="{ name: 'about' }" tag="li" active-class="active" exact ><a>O Nama</a></router-link>
      <router-link :to="{ name: 'members' }" tag="li" active-class="active" exact ><a>Članovi</a></router-link>
      <router-link :to="{ name: 'photo' }" tag="li" active-class="active" exact ><a>Galerija</a></router-link>
      <!-- <router-link :to="{ name: 'event' }" tag="li" active-class="active" exact ><a>Dogadjaji</a></router-link> -->
      <router-link :to="{ name: 'posts' }" tag="li" active-class="active" exact ><a>Tekstovi</a></router-link>
      <router-link :to="{ name: 'contact' }" tag="li" active-class="active" exact ><a>Kontakt</a></router-link>
    </ul>
  </div>
</template>

<script>
export default {
  
}
</script>

