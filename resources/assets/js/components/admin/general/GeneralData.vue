<template>
  <div class="row push-down-50">
    <div class="row tab-holder">
      <div class="tab">
        <button class="tablinks" :class="{activeTab: isGeneralDataActive}" @click.prevent="activateGeneralData">General Data</button>
        <button class="tablinks" :class="{activeTab: isGmapDataActive}" @click.prevent="activateGmapDAta">Google Map Data</button>
        <button class="tablinks" :class="{activeTab: isSocialLinksActive}" @click.prevent="activateSocialLinks">Social Links Data</button>
        <button class="tablinks" :class="{activeTab: isAboutUsActive}" @click.prevent="activateAbout">About Us Data</button>
      </div>
    </div>
    <div class="general-data-holder row push-down-50">
      <div class="col-md-6 col-sm-12 col-xs-12 offset-md-3 general-data-form-holder" v-show="isGeneralDataActive">
        <h3 class="text-align">General Data</h3>
        <div class="messages-holder">
          <div class="alert alert-success" role="alert" v-if="generalDataSuccess">
            Data saved!
          </div>
          <div class="alert alert-danger" role="alert" v-if="generalDataError">
            Data not saved!
          </div>
        </div>
        <form action="" class="general-data-form push-down-50">
          <div class="form-group row">
            <label for="name" class="col-sm-2 col-form-label">Name</label>
            <div class="col-sm-10">
              <input type="text" v-model="generalData.name" class="form-control-plaintext" id="name" placeholder="Enter name (eg. Aikido Dojo Sensei)">
            </div>
          </div>
          <div class="form-group row">
            <label for="address" class="col-sm-2 col-form-label">Address</label>
            <div class="col-sm-10">
              <input type="text" v-model="generalData.address" class="form-control-plaintext" id="address" placeholder="Enter address">
            </div>
          </div>
          <div class="form-group row">
            <label for="phone" class="col-sm-2 col-form-label">Phone</label>
            <div class="col-sm-10">
              <input type="text" v-model="generalData.phone" class="form-control-plaintext" id="phone" placeholder="Enter phone">
            </div>
          </div>
          <div class="form-group row">
            <label for="mobile" class="col-sm-2 col-form-label">Mobile</label>
            <div class="col-sm-10">
              <input type="text" v-model="generalData.mobile" class="form-control-plaintext" id="mobile" placeholder="Enter mobile">
            </div>
          </div>
          <a href="#" id="saveGeneralDataBtn" class="btn btn-primary" @click="saveGeneralData">Save</a>
        </form>
      </div>
      <div class="border"></div>
      <div class="col-md-6 col-sm-12 col-xs-12 offset-md-3 gmap-data-form-holder push-down-50" v-show="isGmapDataActive">
        <h3 class="text-align">Google Map Data</h3>
        <div class="messages-holder">
          <div class="alert alert-success" role="alert" v-if="gmapDataSuccess">
            Data saved!
          </div>
          <div class="alert alert-danger" role="alert" v-if="gmapDataError">
            Data not saved!
          </div>
        </div>
        <form action="" class="gmap-data-form push-down-50">
          <div class="form-group row">
            <label for="lat" class="col-sm-2 col-form-label">Latitude</label>
            <div class="col-sm-10">
              <input type="text" v-model="gmapData.lat" class="form-control-plaintext" id="lat" placeholder="Enter latitude">
            </div>
          </div>
          <div class="form-group row">
            <label for="lng" class="col-sm-2 col-form-label">Longitude</label>
            <div class="col-sm-10">
              <input type="text" v-model="gmapData.lng" class="form-control-plaintext" id="lng" placeholder="Enter longitude">
            </div>
          </div>
          <a href="#" id="saveGmapDataBtn" class="btn btn-primary" @click="saveGmapData">Save</a>
        </form>
      </div>
      <div class="border"></div>
      <div class="col-md-6 col-sm-12 col-xs-12 offset-md-3 social-links-form-holder push-down-50" v-show="isSocialLinksActive">
        <h3 class="text-align">Social Links</h3>
        <div class="messages-holder">
          <div class="alert alert-success" role="alert" v-if="socialDataSuccess">
            Data saved!
          </div>
          <div class="alert alert-danger" role="alert" v-if="socialDataError">
            Data not saved!
          </div>
        </div>
        <form action="" class="social-links-form push-down-50">
          <div class="form-group row">
            <label for="name" class="col-sm-2 col-form-label">Facebook</label>
            <div class="col-sm-10">
              <input type="text" v-model="socialLinks.facebook" class="form-control-plaintext" id="name" placeholder="Enter facebook link">
            </div>
          </div>
          <div class="form-group row">
            <label for="address" class="col-sm-2 col-form-label">Instagram</label>
            <div class="col-sm-10">
              <input type="text" v-model="socialLinks.instagram" class="form-control-plaintext" id="address" placeholder="Enter instagram link">
            </div>
          </div>
          <div class="form-group row">
            <label for="phone" class="col-sm-2 col-form-label">Youtube</label>
            <div class="col-sm-10">
              <input type="text" v-model="socialLinks.youtube" class="form-control-plaintext" id="phone" placeholder="Enter youtube link">
            </div>
          </div>
          <div class="form-group row">
            <label for="mobile" class="col-sm-2 col-form-label">Google+</label>
            <div class="col-sm-10">
              <input type="text" v-model="socialLinks.googlePlus" class="form-control-plaintext" id="mobile" placeholder="Enter google+ link">
            </div>
          </div>
          <div class="form-group row">
            <label for="mobile" class="col-sm-2 col-form-label">Twitter</label>
            <div class="col-sm-10">
              <input type="text" v-model="socialLinks.twitter" class="form-control-plaintext" id="mobile" placeholder="Enter twitter link">
            </div>
          </div>
          <a href="#" id="saveSocialLinksBtn" class="btn btn-primary" @click="saveSocialLinksData">Save</a>
        </form>
      </div>
      <div class="about-us-wrapper">
        <app-about v-show="isAboutUsActive"></app-about>
      </div>
    </div>
  </div>
</template>

<script>
import About from './About.vue';
export default {
  components: {
    appAbout: About
  },
  data() {
    return {
      generalData: {
        name: '',
        address: '',
        phone: '',
        mobile: ''
      },
      gmapData: {
        lat: '',
        lng: ''
      },
      generalDataSuccess: false,
      generalDataError: false,
      gmapDataSuccess: false,
      gmapDataError: false,
      socialDataSuccess: false,
      socialDataError: false,
      socialLinks: {
        facebook: '',
        instagram: '',
        youtube: '',
        googlePlus: '',
        twitter: ''
      },
      isGeneralDataActive: true,
      isGmapDataActive: false,
      isSocialLinksActive: false,
      isAboutUsActive: false
    }
  },
  created(){
    this.getData();
  },
  methods: {
    saveGeneralData() {
      this.generalDataError = false;
      this.generalDataSuccess = false;
      let name = this.generalData.name;
      let address = this.generalData.address;
      let phone = this.generalData.phone;
      let mobile = this.generalData.mobile;
      axios.post('/admin/general-data/update-general-data', { 'name' : name, 'address' : address, 'phone' : phone, 'mobile' : mobile} ).then(({data}) => {
        if (data.success == 1) {
          this.generalDataSuccess = true;
          this.generalDataError = false;
        } else {
          this.generalDataError = true;
          this.generalDataSuccess = false;
        }
      })
    },
    saveGmapData() {
      this.gmapDataError = false;
      this.gmapDataSuccess = false;
      let lat = this.gmapData.lat;
      let lng = this.gmapData.lng;
      axios.post('/admin/general-data/update-gmap-data', { 'lat' : lat, 'lng' : lng } ).then(({data}) => {
        if (data.success == 1) {
          this.gmapDataSuccess = true;
          this.gmapDataError = false;
        } else {
          this.gmapDataError = true;
          this.gmapDataSuccess = false;
        }
      })
    },
    getData() {
      axios.get('/admin/general-data/get-data').then( ({data}) => {
        if (data != '') {
          this.generalData.name = data.name;
          this.generalData.address = data.address;
          this.generalData.phone = data.phone;
          this.generalData.mobile = data.mobile;
          this.gmapData.lat = data.lat;
          this.gmapData.lng = data.lng;
          this.socialLinks.facebook = data.facebook;
          this.socialLinks.instagram = data.instagram;
          this.socialLinks.youtube = data.youtube;
          this.socialLinks.googlePlus = data.googlePlus;
          this.socialLinks.twitter = data.twitter;
        }
      });
    },
    saveSocialLinksData() {
      axios.post( '/admin/general-data/set-social-data', { 'social' : this.socialLinks } ).then(({data}) => {
        if (data.success == 1) {
          this.socialDataSuccess = true;
          this.socialDataError = false;
        } else {
          this.socialDataError = true;
          this.socialDataSuccess = false;
        }
      });
    },
    activateGeneralData() {
      this.isGmapDataActive = false;
      this.isSocialLinksActive = false;
      this.isAboutUsActive = false;
      this.isGeneralDataActive = true;
    },
    activateGmapDAta() {
      this.isGmapDataActive = true;
      this.isSocialLinksActive = false;
      this.isAboutUsActive = false;
      this.isGeneralDataActive = false;
    },
    activateSocialLinks() {
      this.isGmapDataActive = false;
      this.isSocialLinksActive = true;
      this.isAboutUsActive = false;
      this.isGeneralDataActive = false;
    },
    activateAbout() {
      this.isGmapDataActive = false;
      this.isSocialLinksActive = false;
      this.isAboutUsActive = true;
      this.isGeneralDataActive = false;
    },
  }
}
</script>

