<template>
  <section>
    FILTER
  </section>
  <section>
    <div class="controls">
      <button>
        Refresh
      </button>
      <router-link to="/register">
        Register as Coach
      </router-link>
    </div>
    <ul v-if="hasCoaches">
      <li
        v-for="coach in filteredCoaches"
        :key="coach.id"
        :id="coach.id"
        :first-name="coach.firstName"
        :last-name="coach.lastName"
        :rate="coach.hourlyRate"
        :areas="coach.areas"
      >
        {{ coach.firstName }}
      </li>
    </ul>
    <h3 v-else>No coaches found.</h3>
    <!-- <h3 v-else>No coaches found.</h3> -->
  </section>
</template>

<script>
export default {
  components: {},
  computed: {
    /**
       *We do have a getter to get coaches in a namespace !
       Namespace has be declared in store/module/coaches/index.js juste after
       export default{} with   namespaced: true,

       The secand coaches after the / is the getter name in module/cochaches/getters.js

       More exactly, it refears to coaches: (state) => state.coaches,
       */
    filteredCoaches() {
      return this.$store.getters["coaches/coaches"];
    },
    /**
     * Same logic as filteredCoaches
     */
    hasCoaches() {
      return this.$store.getters["coaches/hasCoaches"];
    },
  },
};
</script>
