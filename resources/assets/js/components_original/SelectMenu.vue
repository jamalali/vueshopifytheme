<template>
  <v-select
    class="vivo-select"
    :clearable="false"
    :searchable="false"
    :options="options"
    :value="selected"
    @input="setLocation"
  ></v-select>
</template>

<script>
export default {
  name: 'select-menu',

  props: {
    options: {
      type: Array,
      required: true
    },
    selected: {
      type: String,
      required: true
    },
    store: {
      type: String,
      required: true
    },
    customerId: {
      type: String,
      required: true,
      default: ''
    }
  },

  data() {
    return {
      token: ''
    }
  },

  mounted() {
    var found = false;
    for (var i = 0; i < this.options.length; i++) {
      if (this.options[i].url.includes('tools/recurring')) {
        found = true;
        break;
      }
    }
    if (found) this.getToken();
  },

  methods: {
    async getToken() {
      const response = await axios.get('https://' + this.store + '/tools/recurring/get_rc_token/' + this.customerId)
      try {
        let data = JSON.parse(response.data.match(/{"rc_customer":.*}}/g)[0]);
        if (data.rc_customer.error) return console.log('SelectMenu (ReCharge): ' + data.rc_customer.error);
        this.token = data.rc_customer.token;
      } catch (e) {
        console.log(e);
      }
    },

    setLocation(option) {
      if (option.url.includes('tools/recurring') && !option.url.includes('token')) {
        window.location.replace(option.url + '?token=' + this.token);
      } else {
        window.location.replace(option.url);
      }
    }
  }
};
</script>

<style scoped>
  >>> .vs__dropdown-toggle {
    background: white;
  }
  >>> .vs__dropdown-menu {
    @apply -mt-4 ml-4;
    width: calc(100% - 2rem);
  }
</style>
