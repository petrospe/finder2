<template>
  <div>
    <div class="uk-child-width-1-2" uk-grid>
      <div>
        <router-link
          v-for="item in leftItems"
          :to="{ path: '/item/' + item._id }"
          class="uk-link-reset"
          :key="item._id"
        >
          <div class="uk-card uk-card-muted">
            <div class="uk-card-media-top">
              <img :src="api_url + item.images[0].url" alt="" height="100" />
            </div>
            <div class="uk-card-body">
              <p id="category" v-if="item.category" class="uk-text-uppercase">
                {{ item.category.title }}
              </p>
              <p id="title" class="uk-text-large">{{ item.title }}</p>
            </div>
          </div>
        </router-link>
      </div>
      <div>
        <div class="uk-child-width-1-2@m uk-grid-match" uk-grid>
          <router-link
            v-for="item in rightItems"
            :to="{ path: '/item/' + item._id }"
            class="uk-link-reset"
            :key="item._id"
          >
            <div class="uk-card uk-card-muted">
              <div class="uk-card-media-top">
                <img :src="api_url + item.images[0].url" alt="" height="100" />
              </div>
              <div class="uk-card-body">
                <p id="category" v-if="item.category" class="uk-text-uppercase">
                  {{ item.category.title }}
                </p>
                <p id="title" class="uk-text-large">{{ item.title }}</p>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      api_url: process.env.VUE_APP_STRAPI_API_URL
    };
  },
  props: {
    items: Array
  },
  computed: {
    leftItemsCount() {
      return Math.ceil(this.items.length / 5);
    },
    leftItems() {
      return this.items.slice(0, this.leftItemsCount);
    },
    rightItems() {
      return this.items.slice(this.leftItemsCount, this.items.length);
    }
  }
};
</script>
