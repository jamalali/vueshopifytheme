<template>
  <form
    action="https://api.ometria.com/forms/signup"
    method="post"
    id="signupForm"
  >
    <div class="success_message text-white p-4 font-extrabold" v-if="isOmetria">
      || 'FooterMailingListForm.thanks' ||
    </div>

    <div
      class="md:mr-8 border-2 text-white flex flex-wrap justify-between"
      v-else
    >
      <div
        class="success_message text-white p-4 font-extrabold"
        v-show="isError"
      >
        || 'FooterMailingListForm.adblocker' ||
      </div>

      <input
        v-model="user.email"
        class="text-lg md:text-xl bg-black text-white p-3 w-auto flex-1 xl:border-b-0"
        type="email"
        name="ue"
        placeholder="|| 'FooterMailingListForm.email_placeholder' ||"
      />

      <button
        id="email_signup_subscribe_button"
        class="border-t-2 font-extrabold subscribe-button text-md text-white sm:border-t-0  md:text-xl lg:border-t-2 sm:border-l-2 lg:border-l-0 xxl:border-l-2 w-full sm:w-auto xl:border-t-0 lg:w-full xl:w-auto p-3 uppercase transition-300 hover:text-black hover:bg-white"
        @click="signUp"
      >
        || 'FooterMailingListForm.subscribe_button_text' ||
      </button>
    </div>

    <p class="opacity-75 text-sm">
      || 'FooterMailingListForm.unsubscribe_paragraph' ||
    </p>
  </form>
</template>

<script>
export default {
  data () {
    return {
      user: {
        email: ''
      },
      isOmetria: false,
      isError: false
    }
  },
  methods: {
    async signUp (e) {
      e.preventDefault()
        axios({
            method: 'post',
            url: 'https://ometria.vivolife.co.uk/api/segment-signup/',
            data: {
              store: '|| 'globals.settings.locale_oos_tag' ||',
              segment: || 'globals.ometria.footer_mailing_list' ||,
              marketing: true,
              email: this.user.email
            }
        }).then((response) => {
              if (response.data.response) {
                  this.isOmetria = true
              }
          }).catch((err) => {this.isError = true})
    }
  }
}
</script>
