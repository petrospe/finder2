<template>
  <div>
    <nav class="uk-navbar-container" uk-navbar>
      <div class="uk-navbar-left">
        <ul class="uk-navbar-nav">
          <li>
            <a href="/">Finder </a>
          </li>
        </ul>
      </div>

      <div class="uk-navbar-right">
        <ul class="uk-navbar-nav">
          <li v-for="category in categories" v-bind:key="category._id">
            <router-link
              :to="{ path: '/category/' + category._id }"
              :key="category._id"
            >
              {{ category.title }}
            </router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
import gql from "graphql-tag";

export default {
  name: "Nav",
  data() {
    return {
      categories: []
    };
  },
  apollo: {
    categories: gql`
      query Categories {
        categories {
          _id
          title
        }
      }
    `
  }
};
</script>
