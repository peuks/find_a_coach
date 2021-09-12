<template>
  <li>
    <h3>{{ fullName }}</h3>
    <h4>${{ rate }}/hour</h4>
    <div>
      <span v-for="area in areas" :key="area">
        {{ area + " " }}
      </span>
    </div>
    <div class="actions">
      <!-- <router-link to="/coaches/c1/contact"> Contact</router-link> -->
      <!-- :to refear to a function named coachContactLink in computed:{}  -->
      <router-link :to="coachContactLink"> Contact</router-link>
      <!-- <router-link to="/coaches/c1">View Details</router-link> -->
      <router-link :to="coachDetailsLink">View Details</router-link>
    </div>
  </li>
</template>

<script>
export default {
  //  Same thing as react
  //  All props are specified while using the component in CoachesList.vue
  // :id="coach.id"
  // :first-name="coach.firstName"
  // :last-name="coach.lastName"
  props: ["id", "firstName", "lastName", "rate", "areas"],
  computed: {
    /**
     * @returns String
     * @eg David Vanmak
     */
    fullName() {
      return `${this.firstName} ${this.lastName}`;
    },
    /**
     * @returns String
     * @eg /coaches/c1
     */
    coachDetailsLink() {
      return `${this.$route.path}/${this.id}`;
    },
    /**
     * @returns String
     * @eg coaches/c1/contact
     */
    coachContactLink() {
      return `${this.$route.path}/${this.id}/contact"`;
    },
  },
};
</script>

<style scoped>
li {
  margin: 1rem 0;
  border: 1px solid #424242;
  border-radius: 12px;
  padding: 1rem;
}

h3 {
  font-size: 1.5rem;
}

h3,
h4 {
  margin: 0.5rem 0;
}

div {
  margin: 0.5rem 0;
}

.actions {
  display: flex;
  justify-content: flex-end;
}
</style>
