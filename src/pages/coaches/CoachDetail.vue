<template>
  <section>
    <base-card>
      <h2>{{ fullName }}</h2>
      <h3>${{ rate }}/hour</h3>
    </base-card>
  </section>
  <section>
    <base-card>
      <header>
        <h2>Interested? Reach out now!</h2>
        <base-button link :to="contactLink">Contact</base-button>
      </header>
      <router-view>
        <!--  Contact page will be rendered here-->
      </router-view>
    </base-card>
  </section>
  <section>
    <base-card>
      <!--
         areas is not defined. We can use selectedCoach.ares or set a computed function to return areas from selectedCoach
         -->
      <base-badge
        v-for="area in areas"
        :key="area"
        :type="area"
        :title="area"
      />
      <p>{{ description }}</p>
    </base-card>
  </section>
</template>

<script>
export default {
  // The only props that CoachDetail will receive is the id
  // This component is loaded threw routing
  // Cheack router.js for more details
  props: ["id"],
  data() {
    return {
      // All data has to be fetched with Vuex WHEN the component is created
      // ( check created )
      selectedCoach: null,
    };
  },
  created() {
    // selectedCoach will be hydrated with data included the store
    // check Data in coaches namespace defined in
    // src/store/module/coaches/index.js with   namespaced: true,
    // Beacause we do not want all coachs we can use find method
    this.selectedCoach = this.$store.getters["coaches/coaches"].find(
      (coach) => coach.id === this.id
    );
  },
  computed: {
    fullName() {
      return `${this.selectedCoach.firstName} ${this.selectedCoach.lastName}`;
    },
    areas() {
      return this.selectedCoach.areas;
    },
    rate() {
      return this.selectedCoach.hourlyRate;
    },
    description() {
      return this.selectedCoach.description;
    },
    contactLink() {
      console.log(this.$route.path);
      return `${this.$route.path}/${this.id}/contact"`;
    },
  },
};
</script>
