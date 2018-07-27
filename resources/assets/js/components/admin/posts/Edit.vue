<template>
  <div>
    <div class="col-md-12 text-center">
      <h1 class="push-down-50 main-title">Edit Post</h1>
    </div>
    <div class="new-post-content">
      <div class="messages-holder">
        <div class="alert alert-success text-center" role="alert" v-if="postUpdatedSuccess">
          Post updated!
        </div>
        <div class="alert alert-danger text-center" role="alert" v-if="postUpdatedError">
          Post not updated!
        </div>
      </div>
      <div class="new-post-form form-holder">
        <form action="#" method="post">
          <div class="form-group">
            <label for="postTitle" class="form-label">Post title</label>
            <input type="text" v-model="post.title" class="form-control-plaintext" id="postTitle" placeholder="Enter title">
          </div>
          <div class="form-group">            
            <!-- <vue-ckeditor v-model="post.body" :config="config" row="10" col="30"/> -->
            <tinymce id="d1" v-model="post.body" :other_options="config"></tinymce>
          </div>
          <div class="form-group">  
            <label class="file-label">Cover photo: </label>
            <input type="file" ref="file" name="file" @change="addFile()" class="upload-file-input">
          </div>
          <a href="#" id="savePostBtn" class="btn btn-primary" @click="updatePost">Update</a>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      post: [],
      config: {
        height: 600,        
      },
      postUpdatedSuccess: false,
      postUpdatedError: false,
      attachment: {},
    }
  },
  methods: {
    getPost(id) {
      axios.post('/admin/post/edit', { 'postId' : id}).then(({data})=>{
        this.post = data;
      })
    },
    updatePost() {
      this.postUpdatedSuccess = false;
      this.postUpdatedError = false;
      var formData = new FormData();
      formData.append('postId', this.$route.params.id);
      formData.append('title', this.post.title);
      formData.append('body', this.post.body);
      formData.append('img', this.attachment);
      axios.post('/admin/post/update', formData, { 
          headers: { 'Content-Type': 'multipart/form-data', 
          'X-CSRF-Token': document.querySelector('meta[name="csrf-token"]').getAttribute('content') 
        } 
      }).then(({data})=>{
          if(data.success == 1) {
            this.postUpdatedSuccess = true;
          } else {
            this.postUpdatedError = true;
          }
      })
    },
    addFile() {
      this.attachment = this.$refs.file.files[0];
    }
  },
  created() {
    this.getPost(this.$route.params.id);
  },

}
</script>

