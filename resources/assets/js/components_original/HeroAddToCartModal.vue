<template>
<div>
    <portal to="hero-atc-modal">
      <div
        v-if="modalVisible && showAddToCart"
        class="modal-background flex flex-col"
        :class="[ isDesktop === true ? 'justify-center items-center' : 'bg-white overflow-y-auto']"
        @click="hideModal(false)"
      >
        <div
          class=""
          :class="[ isDesktop === true ? 'flex w-4/5 justify-center items-center' : 'h-full']"
          @click="hideModal(false)"
        >
          <span
            class="w-full flex flex-col justify-center items-center"
            @click="hideModal(false)"
          >
            <hero-add-to-cart
              :product="product"
              :subscriptions="subscriptions"
              :variant-subscriptions="variantSubscriptions"
              :variant-metafields="variantMetafields"
              :force-subscription="forceSubscription"
              @added-to-cart="hideModalItemAdded"
              @hide-modal="hideModal"
              :is-modal="true"
              :hide-multi-discount="hideMultiDiscount"
            />
          </span>
        </div>
      </div>
    </portal>
  </div>
</template>

<style scoped>
svg {
  position: relative;
  margin: 0;
}
/* Seems to be missing from tailwind at the moment, needs investigation but patching it in here for new purchase flow - Jed. */
.overflow-y-auto {
  overflow-y: auto;
}
</style>

<script>
import breakpoints from '../breakpoints';

export default {
  props: {
    product: {
      type: Object,
      required: true
    },

    variantMetafields: {
      type: Object,
      default: () => {}
    },

    subscriptions: {
      type: Object,
      required: false
    },

    variantSubscriptions: {
      type: Object,
      required: false,
      default: () => {}
    },

    /* This is deprecated in this release and will eventually be removed, it needs to stay now for site-wide buy button compatibility. */
    related: {
      type: Array,
      required: false
    },

    forceSubscription: {
      type: Boolean,
      default: false
    },

    showAddToCart: {
      type: Boolean,
      default: false
    },

    hideMultiDiscount: {
      type: Boolean,
      default: false
    }
  },

  data () {
    return { modalVisible: false, isDesktop: window.innerWidth >= breakpoints.lg };
  },

  created () {
    if (this.showAddToCart === true) {
      // Spawn it straight away.
      this.showModal();
    }
  },

  methods: {
    showModal () {
      this.modalVisible = true;
      document.body.classList.add('body--no-scroll');
    },

    // Did they add to cart? Instant close.
    hideModalItemAdded () {
      this.$emit('modal-closed');
      this.$emit('added-to-cart');
      this.modalVisible = false;
      document.body.classList.remove('body--no-scroll');
    },

    hideModal (isCloseButton) {
      if (!this.isDesktop && !isCloseButton) {
        return false; // If they accidentally click the white modal bg on mobile, don't close it. Close button on mobile only.
      }
      this.$emit('modal-closed');
      this.modalVisible = false;
      document.body.classList.remove('body--no-scroll');
    }
  }
};

</script>
