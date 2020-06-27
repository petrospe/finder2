<template>
  <div>
    <div
      v-if="item.images[0]"
      id="banner"
      class="uk-height-small uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light uk-padding"
      :data-src="api_url + item.images[0].url"
      uk-img
    >
      <h1>{{ item.title }}</h1>
    </div>

    <div class="uk-section">
      <div class="uk-container uk-container-small">
        <vue-markdown-it
          v-if="item.description"
          :source="item.description"
          id="editor"
        />
        <p v-if="item.createdAt">
          {{ moment(item.createdAt).format("MMM Do YY") }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
var moment = require("moment");
import VueMarkdownIt from "vue-markdown-it";
import gql from "graphql-tag";

export default {
  data() {
    return {
      item: {},
      moment: moment,
      api_url: process.env.VUE_APP_STRAPI_API_URL,
      routeParam: this.$route.params.id
    };
  },
  components: {
    VueMarkdownIt
  },
  apollo: {
    item: {
      query: gql`
        query Items($id: ID!) {
          item(id: $id) {
            _id
            title
            subtitle
            description
            images {
              url
            }
            createdAt
          }
        }
      `,
      variables() {
        return {
          id: this.routeParam
        };
      }
    }
  }
};
</script>
