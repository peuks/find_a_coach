<template>
  <base-card>
    <h2>Find Your Coach</h2>
    <span class="filter-option">
      <!-- We have 3 areas so we do need 3 filtering options checked by default  is a props set
      to true when used -->
      <!-- By default the checkbox is checked with checked attribute  -->
      <input type="checkbox" id="frontend" checked @change="setFilter" />
      <label for="frontend">Frontend</label>
    </span>
    <span class="filter-option">
      <input type="checkbox" id="backend" checked @change="setFilter" />
      <label for="backend">Backend</label>
    </span>
    <span class="filter-option">
      <input type="checkbox" id="career" checked @change="setFilter" />
      <label for="career">Career</label>
    </span>
  </base-card>
</template>

<script>
export default {
  emits: ["change-filter"],
  data() {
    return {
      // A filters object with fronted, backend and carrer set to true
      //   This data is changed with the method setFilter
      filters: {
        frontend: true,
        backend: true,
        career: true,
      },
    };
  },
  methods: {
    //   This method is bound to each input with @click or @change
    setFilter(event) {
      const inputId = event.target.id;
      const isActive = event.target.checked;
      const updatedFilters = {
        //   Copy all filters from filters:{}
        ...this.filters,
        // then,update one of theses values (inputId can be  frontend: true,backend or career)
        // With the value of isActive ( the value of the input if checked or not)
        [inputId]: isActive,
      };
      this.filters = updatedFilters;
      //   Generally, you use $emit() to notify the parent component that something changed.
      // "change-filter"  is the event's name. This event has to be set on the parent element with v-on click:change-filter or @click:change-filter
      // ! Parent Component: CoachListComponent
      //  updatedFilters => > What do we want to change the filter to.
      this.$emit("change-filter", updatedFilters);
    },
  },
};
</script>

<style scoped>
h2 {
  margin: 0.5rem 0;
}

.filter-option {
  margin-right: 1rem;
}

.filter-option label,
.filter-option input {
  vertical-align: middle;
}

.filter-option label {
  margin-left: 0.25rem;
}

.filter-option.active label {
  font-weight: bold;
}
</style>
