<template>
  <div>
    <div class="col-md-12 text-center">
      <h1 class="push-down-50 main-title">All Messages</h1>
    </div>
    <div class="col-md-12">
      <table class="table">
        <thead>
          <tr>
            <th>Id</th>
            <th>From</th>
            <th>Email</th>
            <th>Ip address</th>
            <th>Message</th>
            <th>Created</th>
            <th>Read</th>
            <th>Answered</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="message in messages" :key="message.id" :data-id="message.id">
            <td>{{ message.id }}</td>
            <td>{{ message.from }}</td>
            <td>{{ message.email }}</td>
            <td>{{ message.ip }}</td>
            <td>
              <router-link :to="{ name: 'message', params: { id: message.id }}" tag="a">  {{ message.message | truncate }}</router-link>
            </td>
            <td>{{ message.created_at }}</td>
            <td>
              <span v-if="message.read"><i class="fas fa-check"></i></span>
              <span v-else><i class="fas fa-times"></i></span>
            </td>
            <td>
              <span v-if="message.answered"><i class="fas fa-check"></i></span>
              <span v-else><i class="fas fa-times"></i></span>
            </td>
            <td><a href="#" @click="deleteMessage(message.id)"><i class="far fa-trash-alt"></i></a></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  
</template>

<script>
export default {
  data() {
    return {
      messages: []
    }
  },
  created() {
    this.getMessages();
  },
  methods: {
    getMessages() {
      axios.get('/admin/messages/get-messages').then( ({data}) => {
        data.forEach( message =>{
            this.messages.push(message)
        });
      });
    },
    deleteMessage(id) {
      axios.post('/admin/message/delete', { 'messageId' : id }).then(({data}) => {
        if (data.success == 1) {
          const el  = document.querySelector(`[data-id="${id}"]`)
          el.parentNode.removeChild(el)
        }
      })
    }
  }
}
</script>

