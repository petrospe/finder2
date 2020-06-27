<template>
  <div>
    <div class="uk-section">
      <div class="uk-container uk-container-large">
        <h1>{{ category.title }}</h1>

        <ItemsList :items="category.items || []"></ItemsList>
      </div>
    </div>
  </div>
</template>

<script>
import ItemsList from "../components/ItemsList";
import gql from "graphql-tag";

export default {
  data() {
    return {
      category: [],
      routeParam: this.$route.params.id
    };
  },
  components: {
    ItemsList
  },
  apollo: {
    category: {
      query: gql`
        query Category($id: ID!) {
          category(id: $id) {
            title
            items {
              _id
              title
              subtitle
              description
              images {
                url
              }
              category {
                _id
                title
              }
            }
          }
        }
      `,
      variables() {
        return { id: this.routeParam };
      }
    }
  }
};
</script>
