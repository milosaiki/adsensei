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
        <form action="#" method="post" class="new-post-form">
          <div class="form-group">
            <label for="postTitle" class="form-label">Post title</label>
            <input type="text" v-model="title" class="form-control-plaintext" id="postTitle" placeholder="Enter title">
          </div>
          <div class="form-group">            
            <!-- <vue-ckeditor v-model="content" :config="config" row="10" col="30"/> -->
            <tinymce id="d1" v-model="content" :other_options="options"></tinymce>
          </div>
          <div class="form-group">  
            <label class="file-label">Cover photo: </label>
            <input type="file" ref="file" name="file" @change="addFile()" class="upload-file-input">
          </div>
          <a href="#" id="savePostBtn" class="btn btn-primary" @click="createPost">Save</a>
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
      attachment: {},
      options: {
        height: 600,        
      },
      postAddedSuccess: false,
      postAddedError: false
    }
  },
  methods: {
    createPost() {
      let title = this.title;
      let body = this.content;
      this.postAddedSuccess = false;
      this.postAddedError = false;
      var formData = new FormData();
      formData.append('title', title);
      formData.append('body', body);
      formData.append('img', this.attachment);
      axios.post('/admin/post/save', formData, { 
          headers: { 'Content-Type': 'multipart/form-data', 
          'X-CSRF-Token': document.querySelector('meta[name="csrf-token"]').getAttribute('content') 
        } 
      }).then(({data})=>{
        console.log(data);
        if (data.success == 1) {
          this.postAddedSuccess = true;
        } else {
          this.postAddedError = true;
        }
      });
    },
    addFile() {
      this.attachment = this.$refs.file.files[0];
    }
  }
}
</script>

