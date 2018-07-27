<template>
  <div>
    <div class="main-section" id="main">
		</div><!-- .main-section -->
    <div class="gallery-holder container">
      <!-- <div v-for="photo in photos" :key="photo.id">
        <img :src="getSrc(photo.postId, photo.file)" alt="">
      </div> -->
      <h2 class="section-title text-center">Galerija</h2>
      <lightbox :images="images"></lightbox>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: []
    }
  },
  methods: {
    getPhotos() {
      axios.get('/photos/get-all').then(({data}) => {
        data.forEach(image => {
          this.images.push({ src: this.getSrc(image.postId, image.file)});
        });
      });
    },
    getSrc(id, photo) {
      return '/images/post/' + id + '/' + photo;
    }
  },
  created() {
    this.getPhotos();
  }
}
</script>

