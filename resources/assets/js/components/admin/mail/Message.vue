<template>
  <div class="message-section-wrapper">
    <div class="message-from-holder">
      <div class="message-field">
        <div class="message-heading">
          <p>From: </p>
        </div>
        <div class="message-data">
          {{ fromMessage.from }}
        </div>
      </div>
      <div class="message-field">
        <div class="message-heading">
          <p>Email: </p>
        </div>
        <div class="message-data">
          {{ fromMessage.email }}
        </div>
      </div>
      <div class="message-field">
        <div class="message-heading">
          <p>Message: </p>
        </div>
        <div class="message-data">
          {{ fromMessage.message }}
        </div>
      </div>
    </div>
    <div class="reply-form-holder push-down-100">
      <div class="message-field" v-for="reply in replies" :key="reply.id">
        <div class="message-heading">
          <p>Reply: </p>
        </div>
        <div class="message-data reply-message" v-html="reply.reply">
          {{ reply.reply }}
        </div>
        <div class="message-response-time reply-time">
          Replied at: {{ reply.created_at }}
        </div>
      </div>
      <div class="messages-holder">
        <div class="alert alert-success" role="alert" v-if="replySentSucces">
          Reply sent!
        </div>
        <div class="alert alert-danger" role="alert" v-if="replySentError">
          Reply not sent!
        </div>
      </div>
      <form id="replyForm" class="reply-form" @submit="checkForm" >
        <div class="form-group row">
          <tinymce id="d1" v-model="reply" :other_options="options"></tinymce>
          <span class="error" v-if="error.length">*{{ error }}</span>
        </div>
        <a href="#" @click.prevent="sendReply" class="btn btn-primary push-down-50">Reply</a>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      error: '',
      fieldRequired: false,
      fromMessage: {
        id: null,
        from: '',
        email: '',
        message: ''
      },
      replies: [],
      reply: '',
      options: {
        'height': 300,
        'width': 1200
      },
      replySentSucces: false,
      replySentError: false
    }
  },
  methods: {
    getMessage(id) {
      axios.post('/admin/message/get-message', { messageId: id}).then( ({data}) => {
        this.fromMessage.id = data.message.id;
        this.fromMessage.from = data.message.from;
        this.fromMessage.email = data.message.email;
        this.fromMessage.message = data.message.message;
        let replies = data.replies;
        replies.forEach(reply =>{
          this.replies.push(reply)
        });
      });
    },
    sendReply() {
      //let loader = this.$loading.show();
      this.error = '';
      this.replySentError = false;
      this.replySentSucces = false;
      let messageId = this.fromMessage.id;
      this.checkForm();
      if (!this.error.length) {
        let loader = this.$loading.show()
        axios.post('/admin/message/reply', { 'messageId' : messageId, 'reply' : this.reply } ).then( ({data}) => {
          loader.hide();
          if (data.success == 1) {
            this.replySentSucces = true;
            document.getElementById('replyForm').reset();
          } else {
            this.replySentError = true;
          }
        });
      }      
    },
    checkForm() {
      if (!this.reply) {
        this.error = "Reply filed is required.";
      }      
      if (!this.errors) {
        return true;
      }
      return false;
    }
  },
  created() {
    this.getMessage(this.$route.params.id);
  }
}
</script>

