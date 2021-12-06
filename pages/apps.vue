<template>
  <div class="d-flex flex-row">
    <v-card outlined shaped class="flex-grow-1 mr-2">
      <v-simple-table>
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-left">Title</th>
              <th class="text-left">Users</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="app in apps" :key="app.name" @click="selectApp(app)">
              <td>{{ app.title }}</td>
              <td>{{ app.userCount }}</td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-card>

    <v-card outlined shaped class="flex-grow-1 mr-2">
      <template>
        <div class="d-wrap" v-if="details">
          <h5 class="card-heading">
          Full Details for {{ details.title }}
          </h5>
          <div class="r">
            <p class="p-info">Users:</p>
            <span class="s-info" v-bind:style="{ color: activeColor}" >{{details.totalUsers}} out of {{details.userLimit}}</span>
          </div>
          <div class="r">
            <p class="p-info">Usage:</p>
            <span class="s-info">{{details.usage}} out of {{details.usageLimit}}</span>
          </div>
        </div>
      </template>
    </v-card>
  </div>
</template>

<script>
import { mapState } from "vuex";


export default {
    data() {
    return {
      details: {},
      activeColor: "",
    };
  },
  mounted() {
    this.$store.dispatch("Apps/loadApps");
  },

  computed: {
    ...mapState("Apps", ["apps"]),
    
  },

  methods: {
    async selectApp(app) {
      // TODO: Show this app in the box on the right

      // calculate percentage of user and usage (x/y) * 100

      const response = await fetch(`http://localhost:5000/api/apps/${app.key}`);
      const data = await response.json();
      this.details = data;
      const percentUser = (this.details.totalUsers / this.details.userLimit) * 100;
      const percentUsage = (this.details.usage / this.details.usageLimit) * 100;

      if(percentUser < 69){
        this.activeColor = 'green';
      }else if(percentUser > 69 && percentUser < 90) {
        this.activeColor = 'yellow';
      }else {
        this.activeColor = 'red';
      }
      
    },
  },
};
</script>

<style scoped>
tbody tr {
  cursor: pointer;
}
.card-heading {
  font-size: 18px;
  padding: 5px;
}
.d-wrap {
  display: flex;
  flex-direction: column;
  padding: 5px;
}

.r {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
