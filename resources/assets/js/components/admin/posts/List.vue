<template>
  <div class="row">
    <!-- <breadcrumbs></breadcrumbs> -->
    <div class="col-md-12 text-center">
      <h1 class="push-down-50 main-title">All Posts</h1>
    </div>
    <div class="col-md-12">
      <table class="table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Post Title</th>
            <th>Post body</th>
            <th>Created</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="post in posts" :key="post.id" :data-id="post.id">
            <td>{{ post.id }}</td>
            <td>
              <router-link :to="{ name: 'postEdit', params: { id: post.id } }" tag="a" >{{ post.title }}</router-link></td>
            <td v-html="post.shortDesc">{{ post.shortDesc }}</td>
            <td>{{ post.created_at }}</td>
            <td><a href="#" @click="deletePost(post.id)"><i class="far fa-trash-alt"></i></a></td>
          </tr>
        </tbody>
      </table>
    </div>
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
      axios.get('/admin/post/list').then(({data})=>{
          data.forEach(post =>{
            this.posts.push(post)
        });
      })
    },
    deletePost(id) {
      axios.post('/admin/post/delete', { 'postId' : id }).then(({data}) => {
        if (data.success == 1) {
          const el  = document.querySelector(`[data-id="${id}"]`)
          el.parentNode.removeChild(el)
        }
      })
    }
  },
  created() {
    this.getPosts();
  }
}
</script>
