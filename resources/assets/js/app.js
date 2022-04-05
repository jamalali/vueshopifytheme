import './public-path';
import './bootstrap';
import Vue from 'vue';
import PortalVue from 'portal-vue';
import vSelect from 'vue-select';
import 'vue-select/dist/vue-select.css';

// Importing this here because it seems to come in on the chunk file names otherwise
import moment from 'moment';

window.EventBus = new Vue();

window.searchEnabled = true;

Vue.filter('title', v => v.split(':')[0]);
Vue.filter('subTitle', v => v.split(':')[1]);

// Import vue plugins/components - Updated to use the new import method.
Vue.use(PortalVue);

// Set default arrow for select components to Vivo designed SVG.
vSelect.props.components.default = () => ({
  OpenIndicator: {
    render: createElement => createElement('span', {
      class: { toggle: true },
      domProps: {
        innerHTML: '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="10" role="presentation"><path d="M9.211364 7.59931l4.48338-4.867229c.407008-.441854.407008-1.158247 0-1.60046l-.73712-.80023c-.407008-.441854-1.066904-.441854-1.474243 0L7 5.198617 2.51662.33139c-.407008-.441853-1.066904-.441853-1.474243 0l-.737121.80023c-.407008.441854-.407008 1.158248 0 1.600461l4.48338 4.867228L7 10l2.211364-2.40069z" fill="#1e1e1e"></path></svg>'
      }
    })
  }
});

Vue.component('v-select', vSelect);

// Individually ES6 Import and then Vue register the components (Webpack 8 upgrade).
Vue.component('accordion', () => import('./components/Accordion.vue'));
Vue.component('account-side-bar-link', () => import('./components/AccountSideBarLink.vue'));
Vue.component('add-to-cart-bundle', () => import('./components/AddToCartBundle.vue'));
Vue.component('blog-three-articles', () => import('./components/BlogThreeArticles.vue'));
Vue.component('buy-now-button', () => import('./components/BuyNowButton.vue'));
Vue.component('carousel-video-modal', () => import('./components/VideoModal.vue'));
Vue.component('capsule-diagram', () => import('./components/CapsuleDiagram.vue'));
Vue.component('cart', () => import('./components/Cart.vue'));
Vue.component('cart-drawer', () => import('./components/CartDrawer.vue'));
Vue.component('cart-total', () => import('./components/CartTotal.vue'));
Vue.component('charities-carousel-gf', () => import('./components/CharitiesCarouselGF.vue'));
Vue.component('charities-carousel-ow', () => import('./components/CharitiesCarouselOW.vue'));
Vue.component('check-circle', () => import('./components/CheckCircle.vue'));
Vue.component('collection-product', () => import('./components/CollectionProduct.vue'));
Vue.component('collection-product-full', () => import('./components/CollectionProductFull.vue'));
Vue.component('collection-product-gf', () => import('./components/CollectionProductGF.vue'));
Vue.component('collection-product-ow', () => import('./components/CollectionProductOW.vue'));
Vue.component('collection-product-content', () => import('./components/CollectionProductContent.vue'));
Vue.component('collection-product-content-gf', () => import('./components/CollectionProductContentGF.vue'));
Vue.component('collection-product-content-ow', () => import('./components/CollectionProductContentOW.vue'));
Vue.component('comparison-table', () => import('./components/ComparisonTable.vue'));
Vue.component('comparison-table-02', () => import('./components/ComparisonTable02.vue'));
Vue.component('countdown-timer', () => import('./components/CountdownTimer.vue'));
Vue.component('countdown-timer-days', () => import('./components/CountdownTimerDays.vue'));
Vue.component('countdown-timer-days-gf', () => import('./components/CountdownTimerDaysGF.vue'));
Vue.component('countdown-timer-days-ow', () => import('./components/CountdownTimerDaysOW.vue'));
Vue.component('custom-modal', () => import('./components/CustomModal.vue'));
Vue.component('desktop-navbar', () => import('./components/DesktopNavbar.vue'));
Vue.component('display-price', () => import('./components/DisplayPrice.vue'));
Vue.component('ebook-form', () => import('./components/eBookForm.vue'));
Vue.component('ebook-recipe-form', () => import('./components/eBookRecipeForm.vue'));
Vue.component('faq', () => import('./components/FAQ.vue'));
Vue.component('footer-mailing-list-form', () => import('./components/FooterMailingListForm.vue'));
Vue.component('footer-main', () => import('./components/FooterMain.vue'));
Vue.component('four-blocks', () => import('./components/FourBlocks.vue'));
Vue.component('hero-image-carousel', () => import('./components/HeroImageCarousel.vue'));
Vue.component('hero-image-carousel-02', () => import('./components/HeroImageCarousel02.vue'));
Vue.component('hero-image-static', () => import('./components/HeroImageStatic.vue'));
Vue.component('hero-image-static-vs', () => import('./components/HeroImageStaticVs.vue'));
Vue.component('hero-add-to-cart', () => import('./components/HeroAddToCart.vue'));
Vue.component('hero-add-to-cart-modal', () => import('./components/HeroAddToCartModal.vue'));
Vue.component('how-its-made-carousel', () => import('./components/HowItsMadeCarousel.vue'));
Vue.component('image-blocks', () => import('./components/ImageBlocks.vue'));
Vue.component('image-blocks-sets-of-five', () => import('./components/ImageBlocksSetsOfFive.vue'));
Vue.component('image-carousel-mobile', () => import('./components/ImageCarouselMobile.vue'));
Vue.component('image-text-button', () => import('./components/ImageTextButton.vue'));
Vue.component('image-text-button-vs', () => import('./components/ImageTextButtonVs.vue'));
Vue.component('image-with-modal', () => import('./components/ImageWithModal.vue'));
Vue.component('ingredients-breakdown', () => import('./components/IngredientsBreakdown.vue'));
Vue.component('logos', () => import('./components/Logos.vue'));
Vue.component('logos-horizontal-scroll', () => import('./components/LogosHorizontalScroll.vue'));
Vue.component('main-content-container', () => import('./components/MainContentContainer.vue'));
Vue.component('mission-details', () => import('./components/MissionDetails.vue'));
Vue.component('mobile-navbar', () => import('./components/MobileNavbar.vue'));
Vue.component('order-details-carousel', () => import('./components/OrderDetailsCarousel.vue'));
Vue.component('percentage-bar', () => import('./components/PercentageBar.vue'));
Vue.component('photo-left-text-right', () => import('./components/PhotoLeftTextRight.vue'));
Vue.component('photo-left-text-right-02', () => import('./components/PhotoLeftTextRight02.vue'));
Vue.component('plaa-account-menu', () => import('./components/PlaaAccountMenu.vue'));
Vue.component('plaa-additional-links', () => import('./components/PlaaAdditionalLinks.vue'));
Vue.component('plaa-animal-points', () => import('./components/PlaaAnimalPoints.vue'));
Vue.component('plaa-articles-list', () => import('./components/PlaaArticlesList.vue'));
Vue.component('plaa-article-tag', () => import('./components/PlaaArticleTag.vue'));
Vue.component('plaa-back-to-dashboard', () => import('./components/PlaaBackToDashboard.vue'));
Vue.component('plaa-double-icon-box', () => import('./components/PlaaDoubleIconBox.vue'));
Vue.component('plaa-menu-link', () => import('./components/PlaaMenuLink.vue'));
Vue.component('plaa-menu-toggle', () => import('./components/PlaaMenuToggle.vue'));
Vue.component('plaa-programme-features', () => import('./components/PlaaProgrammeFeatures.vue'));
Vue.component('plaa-programme-picker', () => import('./components/PlaaProgrammePicker.vue'));
Vue.component('plaa-recipes-filter', () => import('./components/PlaaRecipesFilter.vue'));
Vue.component('plaa-sign-up-form', () => import('./components/PlaaSignUpForm.vue'));
Vue.component('planted-trees-counter', () => import('./components/PlantedTreesCounter.vue'));
Vue.component('planted-trees-counter-integer', () => import('./components/PlantedTreesCounterInteger.vue'));
Vue.component('planted-trees-counter-integer-gf', () => import('./components/PlantedTreesCounterIntegerGF.vue'));
Vue.component('planted-trees-counter-integer-ow', () => import('./components/PlantedTreesCounterIntegerOW.vue'));
Vue.component('play-button', () => import('./components/PlayButton.vue'));
Vue.component('play-button-youtube', () => import('./components/PlayButtonYoutube.vue'));
Vue.component('points', () => import('./components/Points.vue'));
Vue.component('pro-quote', () => import('./components/ProQuote.vue'));
Vue.component('product-comparison', () => import('./components/ProductComparison.vue'));
Vue.component('product-comparison-02', () => import('./components/ProductComparison02.vue'));
Vue.component('product-filters', () => import('./components/ProductFilters.vue'));
Vue.component('recommendations-card', () => import('./components/RecommendationsCard.vue'));
Vue.component('recommended-product', () => import('./components/RecommendedProduct.vue'));
Vue.component('responsive-video-embed', () => import('./components/ResponsiveVideoEmbed.vue'));
Vue.component('search-form', () => import('./components/SearchForm.vue'));
Vue.component('select-menu', () => import('./components/SelectMenu.vue'));
Vue.component('store-selector', () => import('./components/StoreSelector.vue'));
Vue.component('subscriptions-reviews-slider', () => import('./components/SubscriptionsReviewsSlider.vue'));
Vue.component('tabbed-modal', () => import('./components/TabbedModal.vue'));
Vue.component('tabbed-modal-2020', () => import('./components/TabbedModal2020.vue'));
Vue.component('tabbed-page-content', () => import('./components/TabbedPageContent.vue'));
Vue.component('tabbed-page-content-lander', () => import('./components/TabbedPageContentLander.vue'));
Vue.component('tabbed-section', () => import('./components/TabbedSection.vue'));
Vue.component('team-member-information', () => import('./components/TeamMemberInformation.vue'));
Vue.component('team-member', () => import('./components/TeamMember.vue'));
Vue.component('text-highlight', () => import('./components/TextHighlight.vue'));
Vue.component('text-left-video-right', () => import('./components/TextLeftVideoRight.vue'));
Vue.component('thrive-30-day-challenge-form', () => import('./components/Thrive30OmetriaForm.vue'));
Vue.component('trustpilot', () => import('./components/Trustpilot.vue'));
Vue.component('typeform-link', () => import('./components/TypeformLink.vue'));
Vue.component('team-member', () => import('./components/TypingAnimation.vue'));
Vue.component('vegan-protein-slider', () => import('./components/VeganProteinSlider.vue'));
Vue.component('video-carousel-modal', () => import('./components/VideoCarouselModal.vue'));
Vue.component('video-carousel', () => import('./components/VideoCarousel.vue'));
Vue.component('video-modal', () => import('./components/VideoModal.vue'));
Vue.component('video-modal-2019', () => import('./components/VideoModal2019.vue'));

const app = new Vue({
  el: '#app',
  data: {
    showModal: false,
    showHomepageModal: false,
    cartDrawerVisible: false
  },
  created () {
    EventBus.$on('cart-drawer-click', (data) => {
      this.openCartDrawer();
    });
  },
  mounted () {
    const params = (new URL(document.location)).searchParams;
    const plaaWeek = parseInt(params.get('week'));
    const plaaMeal = params.get('meal');

    if (plaaWeek) {
      EventBus.$emit('plaa-week-filter-click', {
        week: plaaWeek
      });
    }

    if (plaaMeal) {
      EventBus.$emit('plaa-recipe-filter-click', {
        meal: plaaMeal
      });
    }
  },
  methods: {
    openCartDrawer () {
      this.cartDrawerVisible = true;
    },
    closeCartDrawer () {
      this.cartDrawerVisible = false;
    },
    cartDrawerVisibleUpdated (newValue) {
      this.cartDrawerVisible = newValue;
    },
    replaceState (newParams) {
      const url = new URL(document.location);
      const params = url.searchParams;

      for (const key in newParams) {
        params.set(key, newParams[key]);
      }

      url.search = params.toString();

      history.replaceState(null, null, url.search);
    }
  }
});
