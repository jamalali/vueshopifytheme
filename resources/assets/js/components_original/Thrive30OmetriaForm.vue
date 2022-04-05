<template>
  <div
    id="thrive-30-day-challenge"
    class="flex flex-col justify-between items-center"
  >
    <input
      class="w-9/10 md:w-80 mt-4 border border-black border-solid p-4"
      type="email"
      name="email"
      placeholder="Your email"
      value=""
      v-model="email"
    />
    <b v-if="adblockWarning">|| 'Thrive30OmetriaForm.adblocker' ||</b>
    <b v-if="emailWarning">|| 'Thrive30OmetriaForm.valid_email' ||</b>
    <button
      @click="submitme"
      id="thrive-30-button"
      data-text="|| 'Thrive30OmetriaForm.join_now' ||"
      class="mt-8 btn btn--rayen font-bold mx-auto text-md lg:text-xl tracking-wide py-4 px-20 bg-green hover:bg-green-dark no-underline"
      style="padding-bottom:0.8rem;"
    >
      <span class="py-3">|| 'Thrive30OmetriaForm.join_now' ||</span>
    </button>
  </div>
</template>
<script>
export default {
  name: "thrive-30-day-challenge-form",
  data() {
    return {
      account: "586b6d005ab0b646",
      formId: "Thrive-30-Day-Challenge",
      subscriptionStatus: "SUBSCRIBED",
      adblockWarning: false,
      emailWarning: false,
      email: "",
    };
  },
  methods: {
    validEmail(email) {
      var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(email);
    },
    submitme() {
      if (this.validEmail(this.email)) {

        axios({
          method: 'post',
          url: 'https://ometria.vivolife.co.uk/api/segment-signup/',
          data: {
            store: '|| 'globals.settings.locale_oos_tag' ||',
            segment: || 'globals.ometria.thrive_30_day_chal' ||,
            marketing: true,
            email: this.email
          }
        }).then((responseCode) => {
            if (responseCode.data.response == true) {
            this.submitSuccess = true;
            this.adblockWarning = false;
            this.emailWarning = false;
            document.location.href = "/pages/|| 'Thrive30OmetriaForm.one-more-step-url' ||";
          }
          }).catch((err) => {this.isError = true})
      } else {
        this.emailWarning = true;
      }
    },
  },
};
</script>
