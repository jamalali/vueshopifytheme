<template>
  <div class="Trustpilot">
    <div class="mt-8 mb-14 md:hidden">
      <!-- TrustBox widget - List -->
      <div class="trustpilot-widget" data-locale="|| 'globals.settings.trustpilot_region' ||" data-template-id="539ad60defb9600b94d7df2c" data-businessunit-id="5c34ac83377b450001362ad3"
      :data-style-height="options.mobile && options.mobile.height ? options.mobile.height : '426px'"
      :data-style-width="options.mobile && options.mobile.width ? options.mobile.width : '100%'"
      :data-theme="options.mobile && options.mobile.shade ? options.mobile.shade : 'light'"
      :data-stars="options.mobile && options.mobile.stars ? options.mobile.stars : '1,2,3,4,5'">
        <div class="-mt-8 -mb-14 p-1 md:hidden"></div>
      </div>
      <!-- End TrustBox widget -->
    </div>
    <div class="hidden md:block md:my-20 xl:my-40">
      <!-- TrustBox widget - Carousel -->
      <div class="trustpilot-widget" data-locale="|| 'globals.settings.trustpilot_region' ||" data-template-id="53aa8912dec7e10d38f59f36" data-businessunit-id="5c34ac83377b450001362ad3"
      :data-style-height="options.desktop && options.desktop.height ? options.desktop.height : '140px'"
      :data-style-width="options.desktop && options.desktop.width ? options.desktop.width : '100%'"
      :data-theme="options.desktop && options.desktop.shade ? options.desktop.shade : 'light'"
      :data-stars="options.desktop && options.desktop.stars ? options.desktop.stars : '1,2,3,4,5'">
        <div class="hidden md:block md:-my-20 md:p-2 xl:-my-40 xl:p-2"></div>
      </div>
      <!-- End TrustBox widget -->
    </div>
  </div>
</template>

<script>
export default {
  props: {
    options: {
      type: Object,
      required: true
    }
  }
};
</script>
