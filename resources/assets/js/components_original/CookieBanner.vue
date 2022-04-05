<template>
  <transition name="modal-fade">
    <div v-if="visible" class="modal-backdrop">
      <div class="modal"
        role="dialog"
        aria-labelledby="modalTitle"
        aria-describedby="modalDescription"
      >
        <section
          class="modal-body"
          id="modalDescription"
        >
          <div class="flex flex-row justify-center items-center flex-grow font-medium tracking-normal">
            <p class="w-9/10 text-md md:text-lg lg:text-xl">|| 'CookieBanner.modal_paragraph_text_html' ||</p>
          </div>
        </section>

        <footer class="modal-footer flex flex-row justify-center items-center">
          <button
            type="button"
            class="block btn--rayen btn--hover-green font-bold py-0 text-md md:text-lg lg:text-xl tracking-wide w-48 lg:w-56 bg-thrive-green mx-auto md:mx-0 rounded"
            @click="close"
            aria-label="|| 'CookieBanner.modal_button_text' ||"
            data-text="|| 'CookieBanner.modal_button_text' ||"
          >
            || 'CookieBanner.modal_button_text' ||
          </button>
        </footer>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  data () {
    var visible = true;

    try {
      const hidden = localStorage.getItem('cookieBannerHidden');

      if (hidden === 'true') {
        visible = false;
        EventBus.$emit('cookie-banner-close');
      }
    } catch (e) {}
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has("nointerruptions")) { visible = false; }
    return { visible };
  },

  created () {
    // Check the store selector status.
    const selected = localStorage.getItem('storeSelected');
    if (selected == null) {
      // If the store selector needs to spawn, wait until it is closed.
      this.visible = false;
      var vm = this;
      EventBus.$on('store-selector-closed', (data) => {
        vm.visible = true;
      });
    }
  },

  methods: {
    close () {
      try {
        this.visible = false;
        localStorage.setItem('cookieBannerHidden', true);
        window.Shopify.loadFeatures(
          [
            {
              name: 'consent-tracking-api',
              version: '0.1'
            }
          ],
          (error) => {
            if (!error) {
              window.Shopify.customerPrivacy.setTrackingConsent(true, () => {
              });
            }
          }
        );
      } catch (e) {}
      EventBus.$emit('cookie-banner-close');
    }
  }
};
</script>

<style>
  .modal-backdrop {
    z-index: 99999999999;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .modal {
    background: #FFFFFF;
    box-shadow: 2px 2px 20px 1px;
    overflow-x: auto;
    display: flex;
    flex-direction: column;
    width: 80%;
  }

  .modal-header,
  .modal-footer {
    padding: 15px;
    display: flex;
  }

  .modal-header {
    position: relative;
    border-bottom: 1px solid #eeeeee;
    color: #4AAE9B;
    justify-content: space-between;
  }

  .modal-footer {
    border-top: 1px solid #eeeeee;
    flex-direction: column;
  }

  .modal-body {
    position: relative;
    padding: 20px 10px;
  }

  .btn-close {
    position: absolute;
    top: 0;
    right: 0;
    border: none;
    font-size: 20px;
    padding: 10px;
    cursor: pointer;
    font-weight: bold;
    color: #4AAE9B;
    background: transparent;
  }

  .btn-green {
    color: white;
    background: #4AAE9B;
    border: 1px solid #4AAE9B;
    border-radius: 2px;
  }

  .modal-fade-enter,
  .modal-fade-leave-to {
    opacity: 0;
  }

  .modal-fade-enter-active,
  .modal-fade-leave-active {
    transition: opacity .5s ease;
  }
</style>
