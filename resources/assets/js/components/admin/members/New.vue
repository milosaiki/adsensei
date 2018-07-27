<template>
  <div class="row">
    <div class="col-md-12 text-center">
      <h1 class="push-down-50 main-title">New Member</h1>
    </div>
    <div class="new-post-content">
      <div class="new-member-form form-holder">
        <div class="messages-holder">
          <div class="alert alert-success" role="alert" v-if="memberAddedSuccess">
            Member saved!
          </div>
          <div class="alert alert-danger" role="alert" v-if="memberAddedError">
            Member not saved!
          </div>
        </div>
        <form action="#" method="post">
          <div class="form-group row">
            <label for="firstname" class="col-sm-2 col-form-label">Firstname</label>
            <div class="col-sm-10">
              <input type="text" v-model="member.firstname" class="form-control-plaintext" id="firstname" placeholder="Enter Firstname">
            </div>
          </div>
          <div class="form-group row">
            <label for="lastname" class="col-sm-2 col-form-label">Lastname</label>
            <div class="col-sm-10">
              <input type="text" v-model="member.lastname" class="form-control-plaintext" id="lastname" placeholder="Enter Lastname">
            </div>
          </div>
          <div class="form-group row">
            <label for="kyu" class="col-sm-2 col-form-label">Dan/Kyu</label>
            <div class="col-sm-10">
              <input type="text" v-model="member.kyu" class="form-control-plaintext" id="kyu" placeholder="Enter kyu">
            </div>
          </div>
          <div class="form-group row">
            <label for="role" class="col-sm-2 col-form-label">Role</label>
            <div class="col-sm-10">
              <div class="form-check-inline">
                <label class="form-check-label">
                  <input type="radio" class="form-check-input" name="role" v-model="member.role" value="1">Sensei
                </label>
              </div>
              <div class="form-check-inline">
                <label class="form-check-label">
                  <input type="radio" class="form-check-input" name="role" v-model="member.role" value="2">Assistant
                </label>
              </div>
              <div class="form-check-inline disabled">
                <label class="form-check-label">
                  <input type="radio" class="form-check-input" name="role" v-model="member.role" value="3">Student
                </label>
              </div>
            </div>
          </div>
          <div class="form-group">
            <label class="file-label">Photo: 
              <input type="file" ref="file" name="file" @change="addFile()" class="upload-file-input">
            </label>
          </div>
          <hr>
          <h4>Social links</h4>
          <div class="form-group row">
            <label for="facebook" class="col-sm-2 col-form-label">Facebook</label>
            <div class="col-sm-10">
              <input type="text" v-model="member.facebook" class="form-control-plaintext" id="facebook" placeholder="Enter facebook link">
            </div>
          </div>
          <div class="form-group row">
            <label for="twitter" class="col-sm-2 col-form-label">Twitter</label>
            <div class="col-sm-10">
              <input type="text" v-model="member.twitter" class="form-control-plaintext" id="twitter" placeholder="Enter twitter link">
            </div>
          </div>
          <div class="form-group row">
            <label for="instagram" class="col-sm-2 col-form-label">Instagram</label>
            <div class="col-sm-10">
              <input type="text" v-model="member.instagram" class="form-control-plaintext" id="instagram" placeholder="Enter instagram link">
            </div>
          </div>
          <div class="form-group row">
            <label for="googlePlus" class="col-sm-2 col-form-label">Google+</label>
            <div class="col-sm-10">
              <input type="text" v-model="member.googlePlus" class="form-control-plaintext" id="googlePlus" placeholder="Enter Google+ link">
            </div>
          </div>
          <div class="form-group row">
            <label for="blog" class="col-sm-2 col-form-label">Blog</label>
            <div class="col-sm-10">
              <input type="text" v-model="member.blog" class="form-control-plaintext" id="blog" placeholder="Enter blog link">
            </div>
          </div>
          <div class="form-group row">
            <label for="linkedIn" class="col-sm-2 col-form-label">LinkedIn</label>
            <div class="col-sm-10">
              <input type="text" v-model="member.linkedIn" class="form-control-plaintext" id="linkedIn" placeholder="Enter LinkedIn link">
            </div>
          </div>
          <hr>
          <div class="form-group">   
            <label for="role" class="form-label">Resume</label>         
            <!-- <vue-ckeditor v-model="member.resume" :config="config"/> -->
            <tinymce id="d1" v-model="member.resume" :other_options="config"></tinymce>
          </div>
          <a href="#" id="savePostBtn" class="btn btn-primary" @click="createMember">Save</a>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      member: {
        firstname: '',
        lastname: '',
        kyu: '',
        role: '',
        resume: '',
        facebook: '',
        twitter: '',
        instagram: '',
        googlePlus: '',
        blog: '',
        linkedIn: ''
      },
      attachment: {

      },
      config: {
        height: 200,        
      },
      memberAddedSuccess: false,
      memberAddedError: false
    }
  },
  methods: {
    createMember() {
      this.memberAddedSuccess = false;
      this.memberAddedError = false;
      var formData = new FormData();
      formData.append('member', JSON.stringify(this.member));
      formData.append('img', this.attachment)
      console.log(formData);
      axios.post('/admin/member/save', formData, { 
          headers: { 'Content-Type': 'multipart/form-data', 
          'X-CSRF-Token': document.querySelector('meta[name="csrf-token"]').getAttribute('content') 
        } 
      }).then(({data})=>{
        console.log(data);
        if (data.success == 1) {
          this.memberAddedSuccess = true;
          this.memberAddedError = false;
        } else {
          this.memberAddedSuccess = false;
          this.memberAddedError = true;
        }
      });
    },
    addFile() {
      this.attachment = this.$refs.file.files[0];
    }
  }
}
</script>

