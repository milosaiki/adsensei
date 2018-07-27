<template>
  <div class="row">
    <div class="col-md-12 text-center">
      <h1 class="push-down-50 main-title">New Member</h1>
    </div>
    <div class="new-post-content">
      <div class="new-post-form form-holder">
        <div class="messages-holder">
          <div class="alert alert-success" role="alert" v-if="memberUpdatedSuccess">
            Member saved!
          </div>
          <div class="alert alert-danger" role="alert" v-if="memberUpdatedError">
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
          <a href="#" id="savePostBtn" class="btn btn-primary" @click="updateMember">Save</a>
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
        role: 0,
        resume: '',
        facebook: '',
        twitter: '',
        instagram: '',
        googlePlus: '',
        blog: '',
        linkedIn: ''
      },
      config: {
        height: 200,        
      },
      memberUpdatedSuccess: false,
      memberUpdatedError: false,
      attachment: {

      }
    }
  },
  methods: {
    getMember(id) {
      axios.post('/admin/member/edit', { 'memberId' : id}).then(({data})=>{
        this.member.firstname = data.firstname;
        this.member.lastname = data.lastname;
        this.member.kyu = data.kyu;
        this.member.resume = data.resume;
        this.member.facebook = data.facebook;
        this.member.instagram = data.instagram;
        this.member.twitter = data.twitter;
        this.member.googlePlus = data.googlePlus;
        this.member.blog = data.blog;
        this.member.linkedIn = data.linkedIn;
        if (data.is_trainer == 1) {
          this.member.role = 1;
        } else if (data.is_assistant == 1) {
          this.member.role = 2;
        } else {
          this.member.role = 3;
        }
      })
    },
    updateMember(){
      this.memberUpdatedSuccess = false;
      this.memberUpdatedError = false;
      let formData = new FormData();
      formData.append('member', JSON.stringify(this.member));
      formData.append('img', this.attachment);
      axios.post('/admin/member/update', formData, { 
          headers: { 'Content-Type': 'multipart/form-data', 
          'X-CSRF-Token': document.querySelector('meta[name="csrf-token"]').getAttribute('content') 
        } 
      }).then(({data}) => {
        if (data.success = 1) {
          this.memberUpdatedSuccess = true;
          this.memberUpdatedError = false;
        } else {
          this.memberUpdatedSuccess = false;
          this.memberUpdatedError = true;
        }
      });
    },
    addFile() {
      this.attachment = this.$refs.file.files[0];
    }
  },
  created() {
    this.getMember(this.$route.params.id);
  }
}
</script>

