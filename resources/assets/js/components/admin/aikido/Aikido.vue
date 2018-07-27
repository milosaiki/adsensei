<template>
  <div class="row">
    <div class="col-md-12 text-center">
      <h1 class="push-down-50 main-title">New Post</h1>
    </div>
    <div class="new-post-content">
      <div class="new-post-form form-holder">
        <div class="messages-holder">
          <div class="alert alert-success" role="alert" v-if="postAddedSuccess">
            Post saved!
          </div>
          <div class="alert alert-danger" role="alert" v-if="postAddedError">
            Post not saved!
          </div>
        </div>
        <form action="#" method="post">
          <div class="form-group">
            <label for="postTitle" class="form-label">Post title</label>
            <input type="text" v-model="title" class="form-control-plaintext" id="postTitle" placeholder="Enter title">
          </div>
          <div class="form-group">            
            <!-- <vue-ckeditor v-model="content" :config="config" row="10" col="30"/> -->
            <tinymce id="d1" v-model="content" :other_options="options"></tinymce>
          </div>
          <a href="#" id="savePostBtn" class="btn btn-primary" @click="createAbout">Save</a>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: '',
      content: '',
      options: {
        height: 600,        
      },
      postAddedSuccess: false,
      postAddedError: false
    }
  },
  methods: {
    createAbout() {
      let title = this.title;
      let body = this.content;
      this.postAddedSuccess = false;
      this.postAddedError = false;
      axios.post('/admin/post/save', { 'title' : title, 'body' : body }).then(({data})=>{
        console.log(data);
        if (data.success == 1) {
          this.postAddedSuccess = true;
        } else {
          this.postAddedError = true;
        }
      });
    }
  }
}
</script>

