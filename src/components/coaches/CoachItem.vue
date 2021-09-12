<template>
  <li>
    <h3>{{ fullName }}</h3>
    <h4>${{ rate }}/hour</h4>
    <div>
      <!-- <span> </span> becames a baseèbadge component -->
      <!-- <span v-for="area in areas" :key="area">
        {{ area }}
      </span> -->
      <base-badge
        v-for="area in areas"
        :key="area"
        :type="area"
        :title="area"
      />
    </div>
    <div class="actions">
      <!-- <router-link to="/coaches/c1/contact"> Contact</router-link> -->
      <!-- :to refear to a function named coachContactLink in computed:{}  -->
      <base-button link :to="coachContactLink" mode="outline">
        Contact</base-button
      >
      <!-- <router-link to="/coaches/c1">View Details</router-link> -->
      <base-button link :to="coachDetailsLink">View Details</base-button>
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
     * @eg coaches/c1/contact
     */
    coachContactLink() {
      return this.$route.path + "/" + this.id + "/contact"; // /coaches/c1/contact
    },
    /**
     * @returns String
     * @eg /coaches/c1
     */
    coachDetailsLink() {
      return this.$route.path + "/" + this.id; // /coaches/c1
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
