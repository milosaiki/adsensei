<template>
  <div class="row">
    <div class="col-md-12 text-center">
      <h1 class="push-down-50 main-title">All members</h1>
    </div>
    <div class="col-md-12">
      <table class="table">
        <thead>
          <tr>
            <th>Id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Kyu</th>
            <th>Trainer</th>
            <th>Assistant</th>
            <th>Student</th>
            <th>Created</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="member in members" :key="member.id" :data-id="member.id">
            <td>{{ member.id }}</td>
            <td>
              <router-link :to="{ name: 'memberEdit', params: { id: member.id } }" tag="a" >{{ member.firstname }}</router-link>
            </td>
            <td>
              <router-link :to="{ name: 'memberEdit', params: { id: member.id } }" tag="a" >{{ member.lastname }}</router-link>
            </td>
            <td>{{ member.kyu }}</td>
            <td>
              <span v-if="member.is_trainer"><i class="fas fa-check"></i></span>
              <span v-else><i class="fas fa-times"></i></span>
            </td>
            <td>
              <span v-if="member.is_assistant"><i class="fas fa-check"></i></span>
              <span v-else><i class="fas fa-times"></i></span>
            </td>
            <td>
              <span v-if="(!member.is_assistant && !member.is_trainer)"><i class="fas fa-check"></i></span>
              <span v-else><i class="fas fa-times"></i></span>
            </td>
            <td>{{ member.created_at }}</td>
            <td><a href="#" @click="deleteMember(member.id)"><i class="far fa-trash-alt"></i></a></td>
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
      members: []
    }
  },
  methods: {
    getMembers() {
      axios.get('/admin/members/all').then(({data})=>{
          data.forEach(member =>{
            this.members.push(member)
        });
      })
    },
    deleteMember(id) {
      axios.post('/admin/member/delete', { 'memberId' : id }).then(({data}) => {
        if (data.success == 1) {
          const el  = document.querySelector(`[data-id="${id}"]`)
          el.parentNode.removeChild(el)
        }
      })
    }
  },
  created() {
    this.getMembers();
  }
}
</script>
