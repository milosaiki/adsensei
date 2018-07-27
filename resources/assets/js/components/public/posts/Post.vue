<template>
  <div>
    <div class="main-section" id="main" :style="{ 'background-image' : 'url(' + coverImg + ')'}" >
    </div><!-- .main-section -->
    <div class="push-up text-center container">
      <div class="push-down-75">
				<div class="post-single">
					<h2 class="post-single-title">{{ post.title }}</h2>
					<div class="post-single-content push-down-50">
						<div class="post-single-description" v-html="post.body">
							{{ post.body }}
						</div>
						<div class="post-single-gallery" v-show="photos">
                <div class="img-display">
                  <div class="img-display-content">
                    <img :src="centralImg" alt="" v-show="centralImg">
                  </div>
                </div>
                <carousel 
                    :per-page="3" 
                    :navigationEnabled="true"
                    :loop="true"
                    >
                  <slide 
                    v-for="(photo, index) in photos" 
                    :key="index" 
                    @click.native="handleSlideClick(photo.file, photo.postId, index)"
                    >
                    <a href="#" @click.prevent="showImg(photo.file, photo.postId)">
                      <img :src="getImgSrc(photo.file, photo.postId)" alt="">
                    </a>
                  </slide>
                </carousel>
						</div>
            <div class="social-share push-down-50">
              <h3>Podeli sa prijateljima</h3>
              <div class="social-icons-holder">
                <a href="#" class="facebook-icon" @click.prevent="fbShare"><i class="fab fa-facebook"></i></a>
                <a href="#" class="twitter-icon" @click.prevent="twitterShare"><i class="fab fa-twitter"></i></a>
                <a href="#" class="linkedin-icon" @click.prevent="linkedinShare"><i class="fab fa-linkedin-in"></i></a>
              </div>
            </div>
            <hr>
            <div class="comments-section">
              <h3 v-if="comments.length">Poslednji komentari:</h3>
              <div class="comments-list">
                <div class="comment" v-for="comment in comments" :key="comment.id">
                  <p class="comment-user">{{ comment.name }}</p>
                  <p class="comment-time">{{ comment.created_at|formatDate }}</p>
                  <p class="comment-body">{{ comment.body }}</p>
                  <hr>
                </div>
              </div>
              <div class="comment-form-holder">
                <div class="messages">
                  <div class="comment-sent alert alert-success" v-if="commentAddedSuccess">
                    Vaš komentar je uspešno poslat i biće objavljen nakon što ga odobri neko od naših administratora.
                  </div>
                  <div class="comment-sent alert alert-error" v-if="commentAddedError">
                    Doslo je do greske prilikom slanja komentara. Molimo Vas pokusajte ponovo.
                  </div>
                </div>
                <form action="" id="commentForm" class="comment-form">
                  <div class="form-group">
                    <input type="text" class="form-control" placeholder="Vase ime i prezime" v-model="comment.name">
                  </div>
                  <div class="form-group">
                    <input type="email" name="email" id="email" placeholder="Email adresa" v-model="comment.email" class="form-control">
                  </div>
                  <div class="form-group">
                    <textarea name="comment" id="comment" cols="20" rows="5" placeholder="Unesite komentar" v-model="comment.body"></textarea>
                  </div>
                  <a href="#" class="btn btn-primary" @click.prevent="sendComment">Posalji komentar</a>
                </form>
              </div>
            </div>
					</div>
				</div>
      </div>
    </div>
  </div>
</template>

<script>

import { VueperSlides, VueperSlide } from 'vueperslides';

export default {
  components: { VueperSlides, VueperSlide },
  data() {
    return {
      post: [],
      photos: [],
      slickOptions: {
          slidesToShow: 3,
      },
      centralImg: '',
      coverImg: '',
      comment: {
        name: '',
        email: '',
        body: '',
        postId: this.$route.params.id
      },
      commentAddedSuccess: false,
      commentAddedError: false,
      comments: []
    }
  }, 
  
  methods: {
    getPost(id) {
      axios.get('/post/get-post?postId=' + id, { 
          headers: {
            'X-CSRF-Token': document.querySelector('meta[name="csrf-token"]').getAttribute('content') 
          }
        }).then( ({data}) => {
        this.post = data;
        console.log(data);
        this.coverImg = this.getImgSrc(data.coverPhoto, data.id);
      } );
    },
    getPhotos(id) {
      axios.get('/post/get-photos?postId=' + id, { 
          headers: {
            'X-CSRF-Token': document.querySelector('meta[name="csrf-token"]').getAttribute('content') 
          }
        }).then( ({data}) => {
        if (data !== undefined || data.length > 0) {
            data.forEach(photo => {
            this.photos.push(photo);
          });
          if (data[0].file.length > 0) {
            this.centralImg = this.getImgSrc(data[0].file, id);
          }
          }
      } );
    },
    getImgSrc(photo, postId) {
      return '/images/post/' + postId + '/' + photo;
    },
    handleSlideClick: (photo, postId, index) => {
      this.centralImg = '/images/post/' + postId + '/' + photo;
    },
    showImg(photo, postId) {
      this.centralImg = '/images/post/' + postId + '/' + photo;
    },
    sendComment() {
      this.commentAddedSuccess = false;
      this.commentAddedError = false;
      if (this.name == '' ) {

      } else {
        axios.post('/comment/send', { 'comment' : this.comment }).then(({data}) => {
          if (data.success == 1) {
            this.commentAddedSuccess = true;
            setTimeout(() => {
              this.commentAddedSuccess = false;
            }, 4000);
          } else {
            this.commentAddedError = true;
          }
        });
      }
    },
    getComments() {
      axios.post('/comment/getAll', { 'postId' : this.$route.params.id }).then(({data}) => {
        data.forEach(comment => {
          this.comments.push(comment);
        })
      });
    },
    fbShare() {
      window.open('https://www.facebook.com/sharer/sharer.php?u=' + window.location.href.split('#')[0] + '&t=' + this.post.title, '',
        'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600');
        return false;
    },
    twitterShare() {
      //var text = "Ovo će tebi sigurno biti interesantno:";
      window.open("https://twitter.com/share?url=" + encodeURIComponent(window.location.href), 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600');
      return false;
    },
    linkedinShare() {
      window.open('https://www.linkedin.com/cws/share?url=' + encodeURIComponent(window.location.href), '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');
      return false;
    }
  }, 
  created() {
    this.getPost(this.$route.params.id);
    this.getPhotos(this.$route.params.id);
    this.getComments();
  }
}
</script>
