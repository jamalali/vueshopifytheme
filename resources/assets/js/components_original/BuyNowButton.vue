<template>
  <div>
    <button
      :class="[`block btn--rayen btn--hover-${hoverColor} font-bold py-0 text-md md:text-sm lg:text-xl tracking-wide w-48 lg:w-56 bg-${color}`, buttonClass]"
      data-text="|| 'BuyNowButton.button_text' ||"
      @click="showModal"
    >
      <span class="py-3">|| 'BuyNowButton.button_text' ||</span>
    </button>

    <div v-if="modalVisible === true">
        <hero-add-to-cart-modal
          :product="product"
          :variant-metafields="variantMetafields"
          :subscriptions="subscriptions"
          :related="related"
          :variant-subscriptions="variantSubscriptions"
          @added-to-cart="modalVisible = false"
          @modal-closed="modalVisible = false"
          :show-add-to-cart="modalVisible"
        />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      required: true
    },

    variantMetafields: {
      type: Object,
      required: false,
      default: () => {}
    },

    subscriptions: {
      type: Object,
      required: false
    },

    variantSubscriptions: {
      type: Object,
      default: () => {}
    },

    related: {
      type: Array,
      required: false
    },

    forceSubscription: {
      type: Boolean,
      default: false
    },

    color: {
      type: String,
      default: 'green'
    },

    hoverColor: {
      type: String,
      default: 'green',
      required: false
    },

    buttonClass: {
      type: String,
      default: ''
    }
  },

  data () {
    return { modalVisible: false };
  },

  /* watch: {
    modalVisible(newValue) {
      document.body.classList.toggle('body--no-scroll', newValue);
    },
  }, */

  methods: {
    showModal () {
      this.modalVisible = true;
      document.body.classList.add('body--no-scroll');
    },

    hideModal () {
      this.modalVisible = false;
      document.body.classList.remove('body--no-scroll');
    }
  }
};
</script>
