<template>
  <div>
    <div class="main-section" id="main">
    </div><!-- .main-section -->

    <div id="about-us" class="container push-up" >				
      <h2 class="section-title">O nama</h2>
      <div>
        <p v-html="about.aboutUs">{{ about.aboutUs }}</p>
      </div>
    </div>
    <div class="mid-section" id="about-middle"></div>
    <div class="main-section-time-table text-center">
      <h3 >Termini Treninga</h3>
        <table id='table' class='table wow fadeIn' wow-data-delay="2s" data-wow-offset="150" cellspacing="0" cellpadding="0">
          <thead>
            <tr>
              <th>Pon</th>
              <th>Ut</th>
              <th>Sr</th>
              <th>Čet</th>
              <th>Pet</th>
              <th>Sub</th>
              <th >Ned</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><span v-if="about.mondayFrom">{{ about.mondayFrom }} - {{ about.mondayTo }}</span><span v-else><i class="fas fa-times"></i></span></td>
              <td><span v-if="about.tuesdayFrom">{{ about.tuesdayFrom }} - {{ about.tuesdayto }}</span><span v-else><i class="fas fa-times"></i></span></td>
              <td><span v-if="about.wednesdayFrom">{{ about.wednesdayFrom }} - {{ about.wednesdayTo }}</span><span v-else><i class="fas fa-times"></i></span></td>
              <td><span v-if="about.thursdayFrom">{{ about.thursdayFrom }} - {{ about.thursdayTo }}</span><span v-else><i class="fas fa-times"></i></span></td>
              <td><span v-if="about.fridayFrom">{{ about.fridayFrom }} - {{ about.fridayTo }}</span><span v-else><i class="fas fa-times"></i></span></td>
              <td><span v-if="about.saturdayFrom">{{ about.saturdayFrom }} - {{ about.saturdayTo }}</span><span v-else><i class="fas fa-times"></i></span></td>
              <td><span v-if="about.sundayFrom">{{ about.sundayFrom }} - {{ about.sundayTo }}</span><span v-else><i class="fas fa-times"></i></span></td>
            </tr>
          </tbody>
        </table>
        <!-- mobile table -->
        <table class="mobile-table" cellspacing="0" cellpadding="0">
          <tr>
            <td>Pon</td>
            <td><span v-if="about.mondayFrom">{{ about.mondayFrom }} - {{ about.mondayTo }}</span><span v-else><i class="fas fa-times"></i></span></td>
          </tr>
          <tr>
            <td>Ut</td>
            <td><span v-if="about.tuesdayFrom">{{ about.tuesdayFrom }} - {{ about.tuesdayto }}</span><span v-else><i class="fas fa-times"></i></span></td>
          </tr>
          <tr>
            <td>Sr</td>
            <td><span v-if="about.wednesdayFrom">{{ about.wednesdayFrom }} - {{ about.wednesdayTo }}</span><span v-else><i class="fas fa-times"></i></span></td>
          </tr>
          <tr>
            <td>Čet</td>
            <td><span v-if="about.thursdayFrom">{{ about.thursdayFrom }} - {{ about.thursdayTo }}</span><span v-else><i class="fas fa-times"></i></span></td>
          </tr>
          <tr>
            <td>Pet</td>
            <td><span v-if="about.fridayFrom">{{ about.fridayFrom }} - {{ about.fridayTo }}</span><span v-else><i class="fas fa-times"></i></span></td>
          </tr>
          <tr>
            <td>Sub</td>
            <td><span v-if="about.saturdayFrom">{{ about.saturdayFrom }} - {{ about.saturdayTo }}</span><span v-else><i class="fas fa-times"></i></span></td>
          </tr>
          <tr>
            <td>Ned</td>
            <td><span v-if="about.sundayFrom">{{ about.sundayFrom }} - {{ about.sundayTo }}</span><span v-else><i class="fas fa-times"></i></span></td>
          </tr>
      </table>
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
      }
    }
  },
  methods: {
    getData() {
      axios.get('/about/get').then(({data}) => {
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

