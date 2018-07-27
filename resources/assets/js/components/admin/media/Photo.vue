<template>
  <div class="row">
    <!-- <breadcrumbs></breadcrumbs> -->
    <div class="col-md-12 text-center">
      <h1 class="push-down-50 main-title">All Photos</h1>
    </div>
    <div class="col-md-12">
      <table class="table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Post Title</th>
            <th>Num of photos</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="post in posts" :key="post.id" :data-id="post.id">
            <td>{{ post.id }}</td>
            <td>
              <router-link :to="{ name: 'mediaUpload', params: { id: post.id } }">{{ post.title }}</router-link>              
            </td>
            <td></td>
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
      posts: {}
    }
  },
  methods: {
    getData() {
      axios.get('/admin/media/data').then( ({data}) => {
        this.posts = data;
      });
    }
  },
  created() {
    this.getData();
  }
}
</script>

