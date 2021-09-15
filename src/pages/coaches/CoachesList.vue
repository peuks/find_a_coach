<template>
  <base-dialog :show="!!error" title="An error occurred!" @close="handleError">
    <p>{{ error }}</p>
  </base-dialog>
  <section>
    <!-- FILTER -->
    <coach-filter @change-filter="setFilters"></coach-filter>
  </section>
  <section>
    <base-card>
      <div class="controls">
        <!-- <button>
          Refresh
        </button>
        <router-link to="/register">
          Register as Coach
        </router-link> -->
        <base-button mode="outline" @click="loadCoaches(true)">
          Refresh
        </base-button>

        <base-button v-if="!isCoach && !isLoading" link to="/register">
          Register as Coach
        </base-button>
      </div>
      <div v-if="isLoading">
        <base-spinner></base-spinner>
      </div>
      <ul v-else-if="hasCoaches">
        <coach-item
          v-for="coach in filteredCoaches"
          :key="coach.id"
          :id="coach.id"
          :first-name="coach.firstName"
          :last-name="coach.lastName"
          :rate="coach.hourlyRate"
          :areas="coach.areas"
        >
        </coach-item>
      </ul>
      <h3 v-else>No coaches found.</h3>
    </base-card>
    <!-- <h3 v-else>No coaches found.</h3> -->
  </section>
</template>

<script>
import CoachFilter from "../../components/coaches/CoachFilter.vue";
import CoachItem from "../../components/coaches/CoachItem.vue";

export default {
  data() {
    return {
      isLoading: false,
      error: null,

      activeFilters: {
        frontend: true,
        backend: true,
        career: true,
      },
    };
  },
  components: {
    CoachItem,
    CoachFilter,
  },
  computed: {
    /**
       *We do have a getter to get coaches in a namespace !
       Namespace has be declared in store/module/coaches/index.js juste after
       export default{} with   namespaced: true,

       The secand coaches after the / is the getter name in module/cochaches/getters.js

       More exactly, it refears to coaches: (state) => state.coaches,
       */
    filteredCoaches() {
      const coaches = this.$store.getters["coaches/coaches"];
      return coaches.filter((coach) => {
        if (this.activeFilters.frontend && coach.areas.includes("frontend"))
          return true;

        if (this.activeFilters.backend && coach.areas.includes("backend"))
          return true;

        if (this.activeFilters.career && coach.areas.includes("career"))
          return true;

        return false;
      });
    },
    isCoach() {
      return this.$store.getters["coaches/isCoach"];
    },
    /**
     * Same logic as filteredCoaches
     */
    hasCoaches() {
      return !this.isLoading && this.$store.getters["coaches/hasCoaches"];
    },
  },
  methods: {
    setFilters(updatedFilters) {
      this.activeFilters = updatedFilters;
    },
    async loadCoaches() {
      this.isLoading = true;
      try {
        await this.$store.dispatch("coaches/getCoaches");
      } catch (error) {
        this.error = error.message;
      }
      this.isLoading = false;
    },
    handleError() {
      this.error = null;
    },
  },
  created() {
    this.loadCoaches();
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}
</style>
