<template>
  <a
    :href="tokenUrl">
    <slot></slot>
  </a>
</template>

<script>
export default {
  name: 'account-side-bar-link',

  props: {
    store: {
      type: String,
      required: true
    },
    href: {
      type: String,
      required: true
    },
    customerId: {
      type: String,
      required: true
    }
  },

  data() {
    return {
      token: ''
    }
  },
  computed: {
    tokenUrl: function () {
      if (this.href.includes('tools/recurring')) {
        return this.href + '?token=' + this.token;
      } else {
        return this.href;
      }
    }
  },

  mounted() {
    if (this.href.includes('tools/recurring')) this.getToken();
  },

  methods: {
    async getToken () {
      const response = await axios.get('https://' + this.store + '/tools/recurring/get_rc_token/' + this.customerId);
      try {
        let data = JSON.parse(response.data.match(/{"rc_customer":.*}}/g)[0]);
        if (data.rc_customer.error) return console.log('AccountSideBarLink (ReCharge): ' + data.rc_customer.error);
        this.token = data.rc_customer.token;
      } catch (e) {
        console.log(e);
      }
    }
  }
};
</script>
