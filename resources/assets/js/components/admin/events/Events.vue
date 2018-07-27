<template>
  <div class="row events">
    <div class="btn-holder">
      <a href="#" class="btn btn-primary" title="Add new event" @click.prevent="openForm"><i class="fas fa-plus-circle"></i></a>
    </div>
    <div class="event-left">
      <h2>Dogadjaji</h2>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Naziv</th>
            <th scope="col">Datum</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody id="eventListbody">
          <tr v-for="event in events" :key="event.id" :data-id="event.id">
            <th scope="row">{{ event.id }}</th>
            <td><a href="#" @click.prevent="openEditForm(event.id)">{{ event.title }}</a></td>
            <td>{{ event.eventDate| formatdate }}</td>
            <td><a href="#" @click.prevent="deleteEvent(event.id)"><i class="far fa-trash-alt"></i></a></td>
          </tr>          
        </tbody>
      </table>
    </div>
    <div class="event-form event-form-holder" v-if="displayForm">
      <h2>Novi dogadjaj</h2>
      <div class="messages-holder">
          <div class="alert alert-success" role="alert" v-if="eventAddedSuccess">
            Dodat dogadjaj!
          </div>
          <div class="alert alert-danger" role="alert" v-if="eventAddedError">
            Doslo je do greske!
          </div>
        </div>
      <form method="POST" id="#addEventForm" class="event-form">
        <div class="form-group">
          <label for="title" class="form-label">Naslov</label>
          <input type="text" v-model="title" name="title" id="title" placeholder="Upisite naslov" class="form-control">
        </div>
        <div class="form-inline">
          <label for="" class="col-sm-4 col-form-label">Datum dogadjaja</label>
          <datepicker v-model="date" :placeholder="placeholder"></datepicker>
        </div>
        <div class="row">
          <div class="col">
            <label for="from">Trajanje dogadjaja od</label>
            <input type="text" class="form-control" placeholder="Upisite vreme" id="from" name="from" v-model="time.from">
          </div>
          <div class="col">
            <label for="to">Trajanje dogadjaja do</label>
            <input type="text" class="form-control" placeholder="Upisite vreme" id="to" name="to" v-model="time.to">
          </div>
        </div>
        <a href="#" class="btn btn-primary" @click.prevent="createEvent">Create</a>
      </form>
    </div>
    <div class="event-form event-form-holder" v-if="editFormOpen">
      <h2>Izmeni dogadjaj</h2>
      <div class="messages-holder">
          <div class="alert alert-success" role="alert" v-if="eventUpdateSuccess">
            Snimljen dogadjaj!
          </div>
          <div class="alert alert-danger" role="alert" v-if="eventUpdateError">
            Doslo je do greske!
          </div>
        </div>
      <form method="POST" id="#editEventForm" class="event-form">
        <div class="form-group">
          <label for="title" class="form-label">Naslov</label>
          <input type="text" v-model="event.title" name="title" id="title" placeholder="Upisite naslov" class="form-control">
        </div>
        <div class="form-inline">
          <label for="" class="col-sm-4 col-form-label">Datum dogadjaja</label>
          <datepicker v-model="event.date" :placeholder="placeholder"></datepicker>
        </div>
        <div class="row">
          <div class="col">
            <label for="from">Trajanje dogadjaja od</label>
            <input type="text" class="form-control" placeholder="Upisite vreme" id="from" name="from" v-model="event.from">
          </div>
          <div class="col">
            <label for="to">Trajanje dogadjaja do</label>
            <input type="text" class="form-control" placeholder="Upisite vreme" id="to" name="to" v-model="event.to">
          </div>
        </div>
        <a href="#" class="btn btn-primary" @click.prevent="updateEvent(event.id)">Update</a>
      </form>
    </div>
  </div>
</template>

<script>
import Datepicker from 'vuejs-datepicker';
export default {
  components: {
    Datepicker
  },
  data() {
    return {
      displayForm: false,
      date: '',
      title: '',
      placeholder: 'Izaberite datum',
      time: {
        from : '',
        to: ''
      },
      eventAddedSuccess: false,
      eventAddedError: false,
      events: [],
      editFormOpen: false,
      event: {
        id: null,
        title: '',
        date: '',
        to: '',
        from: ''
      },
      eventUpdateSuccess: false,
      eventUpdateError: false
    }
  },
  methods: {
    openForm() {
      this.displayForm = true;
      this.editFormOpen = false;
    },
    createEvent() {
      this.eventAddedSuccess = false;
      this.eventAddedError = false;
      var date = new Date(this.date);
      var month = date.getUTCMonth() < 10 ? '0' + (date.getUTCMonth() + 1) : date.getUTCMonth() + 1; //months from 1-12
      var day = date.getUTCDate();
      var year = date.getUTCFullYear();

      var newdate = year + "-" + month + "-" + day;

      var formData = new FormData();
      formData.append('date', newdate);
      formData.append('title', this.title);
      formData.append('from', this.time.from);
      formData.append('to', this.time.to);
      axios.post('event/save', formData).then(({data}) => {
        console.log(data);
        if (data.success == 1) {
          this.eventAddedSuccess = true;
          this.addNewEventToTheList(data.event);
        } else {
          this.eventAddedError = true;
        }
      });
    },
    customFormatter(date) {
      return moment(date).format('Y-m-d H:m:i');
    },
    getEvents() {
      axios.get('event/all').then(({data}) => {
        data.forEach(event =>{
            this.events.push(event)
        });
      });
    },
    deleteEvent(id) {
      axios.post('event/delete', { 'eventId' : id }).then(({data}) => {
        if (data.success == 1) {
          const el  = document.querySelector(`[data-id="${id}"]`)
          el.parentNode.removeChild(el)
        }
      })
    },
    addNewEventToTheList(event) {
      let tr = document.createElement('tr');
      tr.setAttribute('data-id', event.id);
      let tdId = document.createElement('td');
      let tdTitle = document.createElement('td');
      let tdDate = document.createElement('td');
      let tdDelete = document.createElement('td');
      let eventListbody = document.getElementById('eventListbody');
      tdId.appendChild(document.createTextNode(event.id));
      tdTitle.appendChild(document.createTextNode(event.title));
      tdDate.appendChild(document.createTextNode(event.eventDate));
      tdDelete.innerHTML = '<a href="#"><i class="far fa-trash-alt"></i></a>';
      tr.appendChild(tdId);
      tr.appendChild(tdTitle);
      tr.appendChild(tdDate);
      tr.appendChild(tdDelete);
      eventListbody.prepend(tr);
    },
    openEditForm(id) {
      this.displayForm = false;
      this.editFormOpen = true;
      axios.get('event/get?id=' + id).then(({data}) => {
        this.event.id = data.id;
        this.event.date = data.eventDate;
        this.event.title = data.title;
        this.event.from = data.timeFrom;
        this.event.to = data.timeTo;
      });
    }
  },
  created() {
    this.getEvents();
  }
}
</script>

