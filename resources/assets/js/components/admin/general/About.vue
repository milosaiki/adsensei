<template>
  <div class="row">
    <div class="col-md-12 general-data-form-holder">
        <h3 class="text-align">About</h3>
        <div class="messages-holder">
          <div class="alert alert-success" role="alert" v-if="aboutSuccess">
            Data saved!
          </div>
          <div class="alert alert-danger" role="alert" v-if="aboutError">
            Data not saved!
          </div>
        </div>
        <form action="" class="general-data-form push-down-50">
          <div class="form-group">
            <div class="form-group">            
              <!-- <vue-ckeditor v-model="about.aboutUs" :config="config" row="10" col="30"/> -->
              <tinymce id="d1" v-model="about.aboutUs" :other_options="config"></tinymce>
            </div>
          </div>
          <div class="form-group">
            <label for="address" class="form-label">Trainings</label>
            <table class="time-table">
              <thead>
                <th></th>
                <th>Monday</th>
                <th>Tuesday</th>
                <th>Wednesday</th>
                <th>Thursday</th>
                <th>Friday</th>
                <th>Saturday</th>
                <th>Sunday</th>
              </thead>
              <tbody>
                <tr>
                  <td>From:</td>
                  <td><input type="text" name="" id="" v-model="about.mondayFrom"></td>
                  <td><input type="text" name="" id="" v-model="about.tuesdayFrom"></td>
                  <td><input type="text" name="" id="" v-model="about.wednesdayFrom"></td>
                  <td><input type="text" name="" id="" v-model="about.thursdayFrom"></td>
                  <td><input type="text" name="" id="" v-model="about.fridayFrom"></td>
                  <td><input type="text" name="" id="" v-model="about.saturdayFrom"></td>
                  <td><input type="text" name="" id="" v-model="about.sundayFrom"></td>
                </tr>
                <tr>
                  <td>To:</td>
                  <td><input type="text" name="" id="" v-model="about.mondayTo"></td>
                  <td><input type="text" name="" id="" v-model="about.tuesdayTo"></td>
                  <td><input type="text" name="" id="" v-model="about.wednesdayTo"></td>
                  <td><input type="text" name="" id="" v-model="about.thursdayTo"></td>
                  <td><input type="text" name="" id="" v-model="about.fridayTo"></td>
                  <td><input type="text" name="" id="" v-model="about.saturdayTo"></td>
                  <td><input type="text" name="" id="" v-model="about.sundayTo"></td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <a href="#" id="saveGeneralDataBtn" class="btn btn-primary" @click="createAbout">Save</a>
        </form>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      about: {
        aboutUs: '',
        mondayFrom: '',
        mondayTo: '',
        tuesdayFrom: '',
        tuesdayTo: '',
        wednesdayFrom: '',
        wednesdayTo: '',
        thursdayFrom: '',
        thursdayTo: '',
        fridayFrom: '',
        fridayTo: '',
        saturdayFrom: '',
        saturdayTo: '',
        sundayFrom: '',
        sundayTo: ''
      },
      config: {
        height: 600,        
      },
      aboutSuccess: false,
      aboutError: false
    }
  },
  methods: {
    createAbout() {
      this.aboutSuccess = false;
      this.aboutError = false;
      axios.post('/admin/general-data/about/save', { 'data' : this.about } ).then(({data}) => {
        if (data.success == 1) {
          this.aboutSuccess = true;
          this.aboutError = false;
        } else {
          this.aboutSuccess = false;
          this.aboutError = true;
        }
      });
    },
    getData() {
      axios.get('/admin/general-data/about/get').then(({data}) => {
        this.about.aboutUs = data.aboutUs;
        this.about.mondayFrom = data.mondayFrom;
        this.about.mondayTo = data.mondayTo;
        this.about.tuesdayFrom = data.tuesdayFrom;
        this.about.tuesdayTo = data.tuesdayTo;
        this.about.wednesdayFrom = data.wednesdayFrom;
        this.about.wednesdayTo = data.wednesdayTo;
        this.about.thursdayFrom = data.thursdayFrom;
        this.about.thursdayTo = data.thursdayTo;
        this.about.fridayFrom = data.fridayFrom;
        this.about.fridayTo = data.fridayTo;
        this.about.saturdayFrom = data.saturdayFrom;
        this.about.saturdayTo = data.saturdayTo;
        this.about.sundayFrom = data.sundayFrom;
        this.about.sundayTo = data.sundayTo;
      });
    }
  },
  created() {
    this.getData();
  }
}
</script>

