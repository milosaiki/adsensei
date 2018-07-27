<template>
  <div>
    <div class="main-section"></div>
    <div class="about-us">
				<div class="container">
					<h2 class="section-title">O nama</h2>
					<p class="section-text" v-html="aboutUs">{{ aboutUs | truncate(300) }}</p>
					<div class="more">
						<router-link :to="{ name: 'about' }" tag="a" exact class="more-link">Saznaj vise</router-link>
					</div>
				</div>
			</div>
      <div class="mid-page"></div>
			<div class="latest-news">
				<div class="container text-center">	
					<h3 class="section-subtitle">Najnoviji tekstovi</h3>
					<div class="main-posts">
            <div class="main-post" v-for="post in posts" :key="post.id">
              <router-link :to="{ name: 'post', params: { id: post.id } }" tag="a" >
                <img class="cover-photo" :src="getSrc(post.id, post.coverPhoto)" alt="">
                <h4 class="main-post-title">{{ post.title }}</h4>
                <div class="main-post-description" v-html="post.shortDesc">
                {{ post.shortDesc }}
                </div>
              </router-link>
            </div>
          </div>
					<div class="more">
            <router-link :to="{ name: 'posts' }" class="more-link">Saznaj vise</router-link>
					</div>
				</div>
			</div>
      <div class="container main-page-gallery">
        <div class="main-page-gallery-holder" id="slickGallery">
					<slick
            ref="slick"
            :options="slickOptions">
            <div v-for="photo in photos" :key="photo.id" >
              <img :src="getSrc(photo.postId, photo.file)" alt="">
            </div>
          </slick>  
          <modal name="message-sent-success">
            <div class="modal-window">
              <a href="#" @click.prevent="closeModal('message-sent-success')"><i class="fas fa-times"></i></a>
              <div class="modal-window-content">
                <p class="success">Vasa poruka je poslata</p>
              </div>
            </div>
          </modal>        
        </div>
			</div>
			<div id="map" class="main-page-map">
        <GmapMap
            :center="{lat: gmap.lat, lng: gmap.lng}"
            :zoom="16"
            map-type-id="terrain"
            style="width: 100%; height: 485px"
          >
          <gmap-info-window :options="infoOptions" :position="infoWindowPos" :opened="infoWinOpen" @closeclick="infoWinOpen=false">
            {{ marker.name }} <br>
            {{ marker.address }}
          </gmap-info-window>
            <GmapMarker
              :position="marker.position"
              :clickable="true"
              :draggable="true"
              @click="toggleInfoWindow"
              :opened="infoWinOpen"
            />
          </GmapMap>
      </div>
			
			<div id="back-to-the-top" class="none">
				<a href="#"><i class="fa fa-arrow-up" aria-hidden="true"></i></a>
			</div><!-- #back-to-the-top -->
  </div>
</template>

<script>
import Slick from 'vue-slick';
export default {
  components: {
    Slick
  },
  data() {
    return {
      gmap: {
        lat: 0,
        lng: 0
      },
      marker: {
        position: {
          lat: 0,
          lng: 0
        },
        name: '',
        address: ''
      },
      infoWinOpen: false,
      infoWindowPos: null,
      infoOptions: {
        pixelOffset: {
          width: 0,
          height: -35
        }
      },
      posts: [],
      aboutUs: '',
      slickOptions: {
          slidesToShow: 3,
          infinite: true,
          speed: 2000,
          dots: true,
          autoplay: true,
          slidesToScroll: 1,
          variableWidth: true
      },
      photos: [],
      options : {
        closeText : 'X'
      }
    }
  },
  methods: {
    getGmapData() {
      axios.get('/contact/gmap-data').then( ({data}) => {
        this.gmap.lat = parseFloat(data.lat);
        this.marker.position.lat = parseFloat(data.lat);
        this.gmap.lng = parseFloat(data.lng);
        this.marker.position.lng = parseFloat(data.lng);
        this.marker.name = data.name;
        this.marker.address = data.address;
      });
    },
    toggleInfoWindow() {
      this.infoWindowPos = this.marker.position;
      this.infoWinOpen = !this.infoWinOpen;
    },
    getData() {
      axios.get('/about/get').then(({data}) => {
        this.aboutUs = data.aboutUs;
      });
    },
    getLast2Posts() {
      axios.get('/posts/get-last-2-posts').then( ({data}) => {
        data.forEach(post =>{
            this.posts.push(post)
        });
      });
    },
    getSrc(id, photo) {
      return '/images/post/' + id + '/' + photo;
    },
    getPhotos() {
      axios.get('/photos/get-all').then(({data}) => {
        data.forEach(photo => {
          this.photos.push(photo);
        });
      });
    },
    next() {
        this.$refs.slick.next();
    },

    prev() {
        this.$refs.slick.prev();
    },

    reInit() {
        // Helpful if you have to deal with v-for to update dynamic lists
        this.$nextTick(() => {
            this.$refs.slick.reSlick();
        });
    },
    openModal(event) {
      this.$modal.show('message-sent-success');
      console.log(event);
    },
    closeModal(name) {
      this.$modal.hide(name);
    }
  },
  created(){
    this.getGmapData();
    this.getData();
    this.getLast2Posts();
    this.getPhotos();
    this.reInit();
  },
  beforeUpdate() {
      if (this.$refs.slick) {
          this.$refs.slick.destroy();
      }
  },
  updated() {
    this.$nextTick(function () {
        if (this.$refs.slick) {
            this.$refs.slick.create(this.slickOptions);
        }
    });
  }
}
</script>

