<template>
  <div>
    <div class="col-md-12 text-center">
      <h1 class="push-down-50 main-title">All Comments</h1>
    </div>
    <div class="col-md-12">
      <table class="table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Post</th>
            <th>From</th>
            <th>Email</th>
            <th>Comment</th>
            <th>Created</th>
            <th>Enable</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="comment in comments" :key="comment.id" :data-id="comment.id">
            <td>{{ comment.id }}</td>
            <td>{{ comment.postId }}</td>
            <td>{{ comment.name }}</td>
            <td>{{ comment.email }}</td>
              <!-- <router-link :to="{ name: 'postEdit', params: { id: post.id } }" tag="a" >{{ post.title }}</router-link></td> -->
            <td>{{ comment.body }}</td>
            <td>{{ comment.created_at }}</td>
            <td>
              <a href="#" @click.prevent="changeStatus(comment.id)" :data-comment-id="comment.id" v-if="comment.active == 0">Enable</a>
              <a href="#" @click.prevent="changeStatus(comment.id)" :data-comment-id="comment.id" v-else>Disable</a>
            </td>
            <td><a href="#" @click="deleteComment(comment.id)"><i class="far fa-trash-alt"></i></a></td>
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
      comments: []
    }
  },
  methods: {
    getComments() {
      axios.get('/admin/comment/get-all').then( ({data}) => {
        data.forEach(comment => {
          this.comments.push(comment);
        });
      });
    },
    changeStatus(id) {
      axios.post('/admin/comment/change-status', { 'commentId' : id}).then( ({data}) => {
        console.log(data);
        if (data.success == 1) {
          var commentStatus = document.querySelector(`[data-comment-id="${id}"]`);
          commentStatus.innerText = data.status == 1 ? 'Disable' : 'Enable';
        }
      });
    },
    deleteComment(id) {
      axios.post('/admin/comment/delete', { 'commentId' : id }).then(({data}) => {
        if (data.success == 1) {
          const el  = document.querySelector(`[data-id="${id}"]`)
          el.parentNode.removeChild(el)
        }
      })
    }
  },
  created() {
    this.getComments();
  }
}
</script>

