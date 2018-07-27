<template>
  <div>
    <div class="main-section" id="main">
		</div><!-- .main-section -->
		<div class="push-up text-center container">
			<h2 class="section-title">Tekstovi</h2>
			<div class="posts">
				<div class="post" v-for="post in posts" :key="post.id">
          <router-link :to="{ name: 'post', params: { id: post.id } }" tag="a" >
            <img class="cover-photo" :src="getSrc(post.id, post.coverPhoto)" alt="">
          </router-link>
					<router-link :to="{ name: 'post', params: { id: post.id } }" tag="a" >
            <h4 class="post-title">{{ post.title }}</h4>
          </router-link>
					<div class="post-content">
						<router-link :to="{ name: 'post', params: { id: post.id } }" tag="a" >
              <div class="post-description" v-html="post.shortDesc">
							{{ post.shortDesc }}
						  </div>
            </router-link>
            <router-link :to="{ name: 'post', params: { id: post.id } }" tag="a" class="more-link">Procitaj vise</router-link>
					</div>
				</div>
			</div>
		</div>
    <div class="clear"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      posts: []
    }
  },
  methods: {
    getPosts() {
      axios.get('/posts/get-posts').then( ({data}) => {
        data.forEach(post =>{
            this.posts.push(post)
        });
      });
    },
    getSrc(id, coverPhoto) {
      return '/images/post/' + id + '/' + coverPhoto;
    }
  },
  created() {
    this.getPosts();
  }
}
</script>

