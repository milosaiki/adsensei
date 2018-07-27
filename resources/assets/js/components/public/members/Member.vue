<template>
  <div>
    <div class="main-section" id="main">
		</div><!-- .main-section -->
		<div class="container text-center push-up" id="instructors">
			<h2 class="section-title">Instruktori</h2>
			<div class="members">	
        <div class="member" v-for="(member, index) in members" :key="member.id">
            <div class="trainer" v-if="member.is_trainer">
              <div class="instructor-img">
                <img :src="getImgSrc(member.id, member.photo)" alt="">
              </div>
              <div class="instructor-data">
                <div class="instructor-name">
                  <p class="instructor-firstname-lastname">{{ member.firstname }} {{ member.lastname }}</p>
                  <p class="instructor-degree">{{ member.kyu }}</p>
                </div>
                <div class="instructor-social-links">
                  <a class='' :href="member.facebook" target='_blank' v-show="member.facebook"><i class="fab fa-facebook-square"></i></a>
                  <a class='' :href="member.instagram" target='_blank' v-show="member.instagram"><i class="fab fa-instagram"></i></a>
                  <a class='' :href="member.twitter" target='_blank' v-show="member.twitter"><i class="fab fa-twitter-square"></i></a>
                  <a class='' :href="member.googlePlus" target='_blank' v-show="member.googlePlus"><i class="fab fa-google-plus-square"></i></a>
                  <a class='' :href="member.linkedIn" target='_blank' v-show="member.linkedIn"><i class="fab fa-google-plus-square"></i></a>
                  <a class='' :href="member.blog" target='_blank' v-show="member.blog"><i class="fas fa-rss"></i></a>
                </div>
              </div>
            </div>
          <div class="student" v-else>
            <div class="student-count">
              <p>{{ index }}.</p>
            </div>
            <div class="student-img">
              <img :src="getImgSrc(member.id, member.photo)" alt="">
            </div>
            <div class="student-name">
              <p class="student-firstname-lastname">{{ member.firstname }} {{ member.lastname }}</p>
              <p class="student-degree">{{ member.kyu }}</p>
            </div>
            <div class="student-social-links">
              <a class='' :href="member.facebook" target='_blank' v-show="member.facebook"><i class="fab fa-facebook-square"></i></a>
              <a class='' :href="member.instagram" target='_blank' v-show="member.instagram"><i class="fab fa-instagram"></i></a>
              <a class='' :href="member.twitter" target='_blank' v-show="member.twitter"><i class="fab fa-twitter-square"></i></a>
              <a class='' :href="member.googlePlus" target='_blank' v-show="member.googlePlus"><i class="fab fa-google-plus-square"></i></a>
              <a class='' :href="member.linkedIn" target='_blank' v-show="member.linkedIn"><i class="fab fa-google-plus-square"></i></a>
              <a class='' :href="member.blog" target='_blank' v-show="member.blog"><i class="fas fa-rss"></i></a>
            </div>
          </div>
        </div>
			</div>
			<!-- <div class="certificate">
				<a href="#" data-lightbox="sertifikat"><img src="" alt=""></a>
			</div> -->
		</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      members: []
    }
  },
  methods: {
    getMembers() {
      axios.get('/member/get-members').then(({data}) => {
        console.log(data);
        data.forEach(member =>{
            this.members.push(member)
        });
      });
    },
    getImgSrc(id, imgName) {
      return imgName ? '/images/member/' + id + '/' + imgName : 'images/default-user.png';
    }
  },
  created() {
    this.getMembers();
  }
}
</script>

