<template>
  <div>
    <div class="main-section" id="main">
		</div><!-- .main-section -->
		<div class="push-up container contact text-center">
			<h2 class="section-title">Kontakt</h2>
			<div>
				<div class="contact-map" id="map">
          <GmapMap
            :center="{lat: gmap.lat, lng: gmap.lng}"
            :zoom="16"
            map-type-id="terrain"
            style="width: 100%; height: 485px"
          >
          <gmap-info-window :options="infoOptions" :position="infoWindowPos" :opened="infoWinOpen" @closeclick="infoWinOpen=false">
            {{ marker.name }} <br>
            {{ marker.address }}
          </gmap-info-window>
            <GmapMarker
              :position="marker.position"
              :clickable="true"
              :draggable="true"
              @click="toggleInfoWindow"
              :opened="infoWinOpen"
            />
          </GmapMap>
				</div>
				<div class="contact-info">
					<form action="#" class="contact-form" id="contactForm">
						<label for="name">Ime i prezime</label>
						<input type="text" v-model="msg.name" id="name" placeholder="Unesite vase ime i prezime">
						<label for="email">Vasa email adresa</label>
						<input type="email" v-model="msg.email" id="email" placeholder="Unesite vasu email adresu">
						<label for="message">Vasa poruka</label>
						<textarea name="message" v-model="msg.message" id="message" cols="30" rows="5"></textarea>
						<a href="#" id="send-msg-btn" @click.prevent="sendMsg">Posalji poruku</a>
					</form>
				</div>
			</div>
		</div>
    <modal name="message-sent-success">
      <div class="modal-window">
        <a href="#" @click.prevent="closeModal('message-sent-success')"><i class="fas fa-times"></i></a>
        <div class="modal-window-content">
          <p class="success">Vasa poruka je poslata</p>
        </div>
      </div>
    </modal>
    <modal name="message-sent-error">
      <div class="modal-window">
        <a href="#" @click.prevent="closeModal('message-sent-error')"><i class="fas fa-times"></i></a>
        <div class="modal-window-content">
          <p class="error">Doslo je do greske prilikom slanja poruke, molimo Vas pokusajte ponovo</p>
        </div>
      </div>
    </modal>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showLoader: false,
      infoWinOpen: false,
      infoWindowPos: null,
      infoOptions: {
        pixelOffset: {
          width: 0,
          height: -35
        }
      },
      msg: {
        name: '',
        email: '',
        message: ''
      },
      gmap: {
        lat: 0,
        lng: 0
      },
      marker: {
        position: {
          lat: 0,
          lng: 0
        },
        name: '',
        address: ''
      }
    }
  },
  methods: {
    sendMsg() {
      let loader = this.$loading.show();
      axios.post('/contact/send-message', { 'message' : this.msg }).then( ({data}) => {
        loader.hide();
        if (data.success == 1) {
          this.$modal.show('message-sent-success');
          document.getElementById('contactForm').reset();
        } else {
          this.$modal.show('message-sent-error');
        }
      });
    },
    getGmapData() {
      axios.get('/contact/gmap-data').then( ({data}) => {
        this.gmap.lat = parseFloat(data.lat);
        this.marker.position.lat = parseFloat(data.lat);
        this.gmap.lng = parseFloat(data.lng);
        this.marker.position.lng = parseFloat(data.lng);
        this.marker.name = data.name;
        this.marker.address = data.address;
      });
    },
    toggleInfoWindow() {
      this.infoWindowPos = this.marker.position;
      this.infoWinOpen = !this.infoWinOpen;
    },
    closeModal(name) {
      this.$modal.hide(name);
    }
  },
  created() {
    this.getGmapData();
  }
}
</script>

