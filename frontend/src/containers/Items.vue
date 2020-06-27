<template>
  <div>
    <div class="uk-section">
      <div class="uk-container uk-container-large">
        <h1>Finder</h1>

        <ItemsList :items="items"></ItemsList>
      </div>
    </div>
  </div>
</template>

<script>
import ItemsList from "../components/ItemsList.vue";
import gql from "graphql-tag";

export default {
  components: {
    ItemsList
  },
  data() {
    return {
      items: []
    };
  },
  apollo: {
    items: gql`
      query Items {
        items {
          _id
          title
          subtitle
          description
          images {
            url
          }
          category {
            title
          }
        }
      }
    `
  }
};
</script>
