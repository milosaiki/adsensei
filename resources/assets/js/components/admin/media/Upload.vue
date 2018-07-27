<template>
  <div class="row">
    <div class="col-md-12">
      <h1 class="push-down-50 main-title">Upload photos for: {{ post.title }}</h1>
    </div>
    <div class="col-md-12">
      <div class="col-md-4 offset-md-4">
        <form action="" id="uploadImageForm" enctype='multipart/form-data' class="upload-photo-form">
          <label class="file-label">
              <input type="file" ref="file" name="file" @change="addFile()" class="upload-file-input">
          </label>
          <a href="#" class="btn btn-success mb-2" @click.prevent="uploadFile">Upload</a>
        </form>
      </div>
    </div>
    <hr class="col-md-12">
    <div class="col-md-12">
      <div class="image-list-holder row" id="imagesList">
        <div class="img-holder" v-for="photo in photos" :key="photo.id">
          <img :src="getImgSrc(photo.file)" >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      post: {},
      fileName: '',
      attachment: {},
      postId: 0,
      photos: []
    }
  },
  methods: {
    getPost(id) {
      axios.post('/admin/media/upload/post-data', { 'postId' : id }).then(({data}) => {
        this.post = data;
      });
    },
    uploadFile() {
      var formData = new FormData();
      formData.append('img', this.attachment);
      formData.append('postId', this.postId);
      axios.post( '/admin/media/upload/image', formData, { 
          headers: { 'Content-Type': 'multipart/form-data', 
          'X-CSRF-Token': document.querySelector('meta[name="csrf-token"]').getAttribute('content') 
        } 
      }).then(({data}) => {
        if (data.success == 1) {
          this.addUploadedImage(data);
        }
      });
    },
    addFile() {
      this.attachment = this.$refs.file.files[0];
    },
    getPhotos(id) {
      axios.post('/admin/media/get-photos-for-post', { 'postId' : this.postId }).then(({data}) => {
        console.log(data);
        data.forEach(photo =>{
            this.photos.push(photo);
        });
      });
    },
    addUploadedImage(data) {
      let div = document.createElement('div');
      let img = document.createElement('img');
      let imagesList = document.getElementById('imagesList');
      let src = '/images/post/' + this.postId + '/' + data.fileName;
      img.src = src;
      div.appendChild(img);
      imagesList.appendChild(div);      
    },
    getImgSrc(imgName) {
      return '/images/post/' + this.postId + '/' + imgName;
    }
  },
  created() {
    this.postId = this.$route.params.id
    this.getPost(this.postId);
    this.getPhotos(this.postId);
  }
}
</script>

