<template>
  <div
      @click.stop
      class="w-full md:mt-0 bg-white"
      :class="[
          isModal === true ?
            isDesktop === true ? 'md:m-0 self-center lg:w-12/20 md:p-4 lg:rounded-lg lg:max-w-md xl:4/5 c-size-hd flexfix' : 'm-0'
            :
            'mt-8 self-start px-6 md:px-2 lg:px-8 md:w-1/2 lg:w-1/2 xl:w-9/20 xl:max-w-atc lg:min-w-90'
          ]"
  >

    <div v-if="isModal === true" class="hero-atc-modal-close">
      <svg
        class="relative cursor-pointer w-4 pl-1 pt-1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="-1405.337 11749.662 17.678 17.678"
        @click="hideModal"
      >
        <g
          fill="none"
          stroke="#000"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-miterlimit="10"
          stroke-width="4px"
          transform="translate(-1697.019 10366.914) rotate(45)"
        >
          <line
            y2="17"
            transform="translate(1196.5 763)"/>
          <line
            x1="17"
            transform="translate(1188 771.5)"/>
        </g>
      </svg>
    </div>

    <div
      class="flex flex-col md:justify-between md:min-h-160 text-base xl:text-lg"
      :class="[ isModal === true ? 'p-8' : '']"
    >
      <div v-if="isModal === true" class="flex flex-col justify-center items-center text-center pb-8 -mt-8 md:-mt-0">
        <h3 class="font-extrabold text-4xl font-primary uppercase">{{ getProductTitle }}</h3>
        <h5 class="text-lg">{{ getProductTagline }}</h5>
      </div>
      <div class="hero-atc-header flex flex-row">
        <div
          v-if="!nonOTP"
          class="w-1/2 flex shadow-md border border-atc-border-grey border-solid rounded rounded-r-none py-3 px-2 cursor-pointer"
          v-on:click="purchaseTypeSelected('single')"
        >
          <input
            class="self-start cursor-pointer"
            type="radio"
            v-bind:name="`${widgetId}_input_purchase_type`"
            v-bind:class="[ activeTopLevelTab === 1 ? 'active' : '' ]"
            :checked="activeTopLevelTab === 1"
            :key="getRadioKey('single')"
          />
          <span class="ml-2 font-bold leading-tight md:leading-normal xl:leading-none">|| 'HeroAddToCart.single_purchase_tab_title' ||</span>
        </div>
        <div
          v-if="!nonSubscription"
          class="w-1/2 flex shadow-md border border-atc-border-grey border-solid rounded rounded-l-none py-3 px-2 cursor-pointer"
          v-on:click="purchaseTypeSelected('subscription')"
        >
          <input
            class="self-start cursor-pointer"
            type="radio"
            v-bind:name="`${widgetId}_input_purchase_type`"
            v-bind:class="[ activeTopLevelTab === 2 ? 'active' : '' ]"
            :checked="activeTopLevelTab === 2"
            :key="getRadioKey('single')"
          />
          <span class="ml-2 font-bold leading-tight md:leading-normal xl:leading-none">
            || 'HeroAddToCart.subscribe_tab_title' ||
            <small class="inline text-black-1">|| 'HeroAddToCart.subscribe_tab_discount_text' ||</small>
            <br/>
            <small class="inline text-green-thrive font-medium text-sm">|| 'HeroAddToCart.subscribe_tab_free_delivery_text' ||</small>
          </span>
        </div>
        <a
          v-if="subCta && nonSubscription"
          class="flex items-center justify-center w-1/2 ml-2 px-2 bg-green-friday-green active:bg-green-thrive text-white font-black text-sm text-center uppercase"
          href="/pages/subscriptions"
          v-html="subCta"
        >
        </a>
      </div>
      <div v-if="singleTabProduct" class="hero-atc-body flex flex-col md:flex-grow mt-6 hero-atc-single-variant-body shadow-md  rounded z-20"> <!-- border border-atc-border-grey border-solid -->
          <div class="hero-atc-tab-headings flex justify-center items-center">
            <a
              class="bg-white font-bold serving-tab-single serving-tab-active text-left"
            >
              <span v-if="this.product.tags.includes('Apparel')">|| 'HeroAddToCart.single_product_choose_size_text' ||</span>
              <span v-else-if="this.product.tags.includes('GiftCard')">|| 'HeroAddToCart.single_product_choose_value_text' ||</span>
              <span v-else>|| 'HeroAddToCart.single_product_one_size_text' ||</span>
              <small v-if="!this.product.tags.includes('GiftCard') && !this.product.tags.includes('Apparel') && !this.product.tags.includes('Accessory') && getOnlySize > 0" class="inline text-sm font-medium text-atc-text-grey">({{ getOnlySize }} || 'HeroAddToCart.abv_servings_text' ||)</small>
              <small v-if="!this.product.tags.includes('GiftCard')" class="inline text-sm tracking-tight text-atc-money-back-grey"><display-price :price="getOnlyPrice" /></small>
            </a>
          </div>
          <div
            key="94"
            class="hero-atc-tab-small flex flex-col md:flex-grow shadow-md border border-atc-border-grey border-solid rounded"
          >
            <hero-add-to-cart-variants
              :product="product"
              :variants="getOnlyVariant()"
              :selected-variant-quantities="selectedVariantQuantities"
              @selected="variantQuantitySelected"
              :variant-metafields="variantMetafields"
            />

            <transition name="fade">
              <div v-if="activeTopLevelTab === 2" key="299" class="hero-atc-delivery p-4 pb-2">
                <div class="flex flex-row justify-between -mt-2 mb-1">
                  <span class="font-bold text-left">|| 'HeroAddToCart.deliver_every_title' ||</span>
                  <span class="self-end text-atc-money-back-grey text-xs text-center font-bold">
                    <span class="font-normal">|| 'HeroAddToCart.deliver_every_title' ||</span>&nbsp;<a class="text-black-1 subscriptions-here no-underline" href="/pages/subscriptions" target="_blank">|| 'HeroAddToCart.deliver_every_learn_more_label' ||</a></span>
                </div>

                <v-select
                  class="vivo-select"
                  :clearable="false"
                  :searchable="false"
                  placeholder="|| 'HeroAddToCart.deliver_every_title' ||"
                  :options="
                    [ '3 || 'HeroAddToCart.deliver_every_weeks' ||',
                      '4 || 'HeroAddToCart.deliver_every_weeks' ||',
                      '5 || 'HeroAddToCart.deliver_every_weeks' ||',
                      '6 || 'HeroAddToCart.deliver_every_weeks' ||',
                      '7 || 'HeroAddToCart.deliver_every_weeks' ||',
                      '8 || 'HeroAddToCart.deliver_every_weeks' ||',
                      '9 || 'HeroAddToCart.deliver_every_weeks' ||',
                      '10 || 'HeroAddToCart.deliver_every_weeks' ||',
                      '11 || 'HeroAddToCart.deliver_every_weeks' ||',
                      '12 || 'HeroAddToCart.deliver_every_weeks' ||'
                    ]"
                  :value="getDeliveryWeeks"
                  @input="deliveryPeriodSelected"
                ></v-select>
              </div>
            </transition>

            <small
              class="text-atc-money-back-grey text-xs text-center flex justify-start items-center"
              :class="[
                  activeTopLevelTab === 2 ?
                    'pl-4 pb-1'
                    :
                    'p-2 pl-4'
                  ]"
            >
              <CompostableMiniIcon v-if="hasCompostableVariants" />
              <span v-if="hasCompostableVariants"><span class="font-medium align-middle text-lg">=</span><span class="inline-block pl-0-4 mt-0-1 font-medium align-middle">|| 'HeroAddToCart.home_compostable_text' ||</span></span>
            </small>
          </div>
      </div>
      <div
        v-else
        class="hero-atc-body flex flex-col md:flex-grow mt-6 z-20"
        :class="[
          { 'NoSmallOTP' : product.tags.includes('NoSmallOTP') },
          { 'NoLargeOTP' : product.tags.includes('NoLargeOTP') },
          { 'NoSmallSub' : product.tags.includes('NoSmallSub') },
          { 'NoLargeSub' : product.tags.includes('NoLargeSub') }
        ]"
      >
        <transition
          name="fade"
        >
          <div v-if="activeTopLevelTab === 1" key="1224498" class="top-level-tab-content flex flex-col md:flex-grow">
            <div class="hero-atc-tab-headings flex justify-between">
              <a
                v-on:click="activeServingLevelTab = 1"
                class="bg-white font-bold serving-tab"
                v-bind:class="[
                  { 'serving-tab-active' : activeServingLevelTab === 1 || product.tags.includes('NoLargeOTP') },
                  { 'hidden' : product.tags.includes('NoSmallOTP') }
                ]"
              >
                || 'HeroAddToCart.small_pouch_tab_text' ||
                <small class="inline text-sm font-medium text-atc-text-grey">({{ getSmallPouchSize }} || 'HeroAddToCart.abv_servings_text' ||)</small>
                <small class="inline text-sm tracking-tight text-atc-money-back-grey"><display-price :price="getSmallPouchPrice" /></small>
              </a>
              <a
                v-on:click="activeServingLevelTab = 2"
                class="bg-white font-bold serving-tab"
                v-bind:class="[
                  { 'serving-tab-active' : activeServingLevelTab === 2 || product.tags.includes('NoSmallOTP') },
                  { 'hidden' : product.tags.includes('NoLargeOTP') }
                ]"
              >
                || 'HeroAddToCart.large_pouch_tab_text' ||
                <small class="inline text-sm font-medium text-atc-text-grey">({{ getLargePouchSize }} || 'HeroAddToCart.abv_servings_text' ||)</small>
                <small class="inline text-sm tracking-tight text-atc-money-back-grey"><display-price :price="getLargePouchPrice" /></small>
              </a>
            </div>
            <transition name="fade">
              <div
                v-if="activeServingLevelTab === 1 && !product.tags.includes('NoSmallOTP') || (activeServingLevelTab === 2 && product.tags.includes('NoLargeOTP'))"
                key="3"
                class="hero-atc-tab-small flex flex-col md:flex-grow shadow-md border border-atc-border-grey border-solid rounded"
              >
                <hero-add-to-cart-variants
                  :product="product"
                  :variants="getSmallPouches()"
                  :selected-variant-quantities="selectedVariantQuantities"
                  @selected="variantQuantitySelected"
                  :variant-metafields="variantMetafields"
                />

                <small class="text-atc-money-back-grey text-xs text-center flex justify-start items-center p-2 pl-4">
                  <CompostableMiniIcon v-if="hasCompostableVariants" />
                  <span v-if="hasCompostableVariants"><span class="font-medium align-middle text-lg">=</span><span class="inline-block pl-0-4 mt-0-1 font-medium align-middle">|| 'HeroAddToCart.home_compostable_text' ||</span></span>
                </small>
              </div>
              <div
                v-if="activeServingLevelTab === 2 && !product.tags.includes('NoLargeOTP') || (activeServingLevelTab === 1 && product.tags.includes('NoSmallOTP'))"
                key="4"
                class="hero-atc-tab-small flex flex-col md:flex-grow shadow-md border border-atc-border-grey border-solid rounded"
              >
                <hero-add-to-cart-variants
                  :product="product"
                  :variants="getLargePouches()"
                  :selected-variant-quantities="selectedVariantQuantities"
                  @selected="variantQuantitySelected"
                  :variant-metafields="variantMetafields"
                />

                <small class="text-atc-money-back-grey text-xs text-center flex justify-start items-center p-2 pl-4">
                  <CompostableMiniIcon v-if="hasCompostableVariants && !this.product.tags.includes('nocompostlarge')" />
              <span v-if="hasCompostableVariants && !this.product.tags.includes('nocompostlarge')"><span class="font-medium align-middle text-lg">=</span><span class="inline-block pl-0-4 mt-0-1 font-medium align-middle">|| 'HeroAddToCart.home_compostable_text' ||</span></span>
                </small>
              </div>
            </transition>
          </div>
          <div v-else key="1224499" class="top-level-tab-content flex flex-col md:flex-grow">
            <div class="hero-atc-tab-headings flex justify-between">
              <a
                v-on:click="activeServingLevelTab = 1"
                class="bg-white font-bold serving-tab"
                v-bind:class="[
                  { 'serving-tab-active' : activeServingLevelTab === 1 || product.tags.includes('NoLargeSub') },
                  { 'hidden' : product.tags.includes('NoSmallSub') }
                ]"
              >
                || 'HeroAddToCart.small_pouch_tab_text' ||
                <small class="inline text-sm font-medium text-atc-text-grey">({{ getSmallPouchSize }} || 'HeroAddToCart.abv_servings_text' ||)</small>
                <small class="inline text-sm tracking-tight text-atc-money-back-grey"><display-price :price="getSmallPouchPrice" /></small>
              </a>
              <a
                v-on:click="activeServingLevelTab = 2"
                class="bg-white font-bold serving-tab"
                v-bind:class="[
                  { 'serving-tab-active' : activeServingLevelTab === 2 || product.tags.includes('NoSmallSub') },
                  { 'hidden' : product.tags.includes('NoLargeSub') }
                ]"
              >
                || 'HeroAddToCart.large_pouch_tab_text' ||
                <small class="inline text-sm font-medium text-atc-text-grey">({{ getLargePouchSize }} || 'HeroAddToCart.abv_servings_text' ||)</small>
                <small class="inline text-sm tracking-tight text-atc-money-back-grey"><display-price :price="getLargePouchPrice" /></small>
              </a>
            </div>
            <transition name="fade">
              <div
                v-if="activeServingLevelTab === 1 && !product.tags.includes('NoSmallSub') || (activeServingLevelTab === 2 && product.tags.includes('NoLargeSub'))"
                key="5"
                class="hero-atc-tab-small flex flex-col md:flex-grow shadow-md border border-atc-border-grey border-solid rounded"
              >
                <hero-add-to-cart-variants
                  :product="product"
                  :variants="getSmallPouches()"
                  :selected-variant-quantities="selectedVariantQuantities"
                  @selected="variantQuantitySelected"
                  :variant-metafields="variantMetafields"
                />

                <transition name="fade">
                  <div v-if="activeTopLevelTab === 2" key="300" class="hero-atc-delivery p-4 pb-2">
                    <div class="flex flex-row justify-between -mt-2 mb-1">
                      <span class="font-bold text-left">|| 'HeroAddToCart.deliver_every_title' ||</span>
                      <span class="self-end text-atc-money-back-grey text-xs text-center font-bold">
                        <span class="font-normal">|| 'HeroAddToCart.deliver_every_title' ||</span>&nbsp;<a class="text-black-1 subscriptions-here no-underline" href="/pages/subscriptions" target="_blank">|| 'HeroAddToCart.deliver_every_learn_more_label' ||</a></span>
                    </div>

                    <v-select
                      class="vivo-select"
                      :clearable="false"
                      :searchable="false"
                      placeholder="|| 'HeroAddToCart.deliver_every_title' ||"
                      :options="
                        [ '3 || 'HeroAddToCart.deliver_every_weeks' ||',
                          '4 || 'HeroAddToCart.deliver_every_weeks' ||',
                          '5 || 'HeroAddToCart.deliver_every_weeks' ||',
                          '6 || 'HeroAddToCart.deliver_every_weeks' ||',
                          '7 || 'HeroAddToCart.deliver_every_weeks' ||',
                          '8 || 'HeroAddToCart.deliver_every_weeks' ||',
                          '9 || 'HeroAddToCart.deliver_every_weeks' ||',
                          '10 || 'HeroAddToCart.deliver_every_weeks' ||',
                          '11 || 'HeroAddToCart.deliver_every_weeks' ||',
                          '12 || 'HeroAddToCart.deliver_every_weeks' ||'
                        ]"
                      :value="getDeliveryWeeks"
                      @input="deliveryPeriodSelected"
                    ></v-select>
                  </div>
                </transition>

                <small
                  class="text-atc-money-back-grey text-xs text-center flex justify-start items-center"
                  :class="[
                      activeTopLevelTab === 2 ?
                        'pl-4 pb-1'
                        :
                        'p-2 pl-4'
                      ]"
                >
                  <CompostableMiniIcon v-if="hasCompostableVariants" />
                  <span v-if="hasCompostableVariants"><span class="font-medium align-middle text-lg">=</span><span class="inline-block pl-0-4 mt-0-1 font-medium align-middle">|| 'HeroAddToCart.home_compostable_text' ||</span></span>
                </small>
              </div>

              <div
                v-if="activeServingLevelTab === 2 && !product.tags.includes('NoLargeSub')"
                key="6"
                class="hero-atc-tab-large flex flex-col md:flex-grow shadow-md border border-atc-border-grey border-solid rounded"
              >
                <hero-add-to-cart-variants
                  :product="product"
                  :variants="getLargePouches()"
                  :selected-variant-quantities="selectedVariantQuantities"
                  @selected="variantQuantitySelected"
                  :variant-metafields="variantMetafields"
                />

                <transition name="fade">
                  <div v-if="activeTopLevelTab === 2" key="301" class="hero-atc-delivery p-4 pb-2">
                    <div class="flex flex-row justify-between -mt-2 mb-1">
                      <span class="font-bold text-left">|| 'HeroAddToCart.deliver_every_title' ||</span>
                      <span class="self-end text-atc-money-back-grey text-xs text-center font-bold">
                        <span class="font-normal">|| 'HeroAddToCart.deliver_every_title' ||</span>&nbsp;<a class="text-black-1 subscriptions-here no-underline" href="/pages/subscriptions" target="_blank">|| 'HeroAddToCart.deliver_every_learn_more_label' ||</a></span>
                    </div>

                    <v-select
                      class="vivo-select"
                      :clearable="false"
                      :searchable="false"
                      placeholder="|| 'HeroAddToCart.deliver_every_title' ||"
                      :options="
                        [ '3 || 'HeroAddToCart.deliver_every_weeks' ||',
                          '4 || 'HeroAddToCart.deliver_every_weeks' ||',
                          '5 || 'HeroAddToCart.deliver_every_weeks' ||',
                          '6 || 'HeroAddToCart.deliver_every_weeks' ||',
                          '7 || 'HeroAddToCart.deliver_every_weeks' ||',
                          '8 || 'HeroAddToCart.deliver_every_weeks' ||',
                          '9 || 'HeroAddToCart.deliver_every_weeks' ||',
                          '10 || 'HeroAddToCart.deliver_every_weeks' ||',
                          '11 || 'HeroAddToCart.deliver_every_weeks' ||',
                          '12 || 'HeroAddToCart.deliver_every_weeks' ||'
                        ]"
                      :value="getDeliveryWeeks"
                      @input="deliveryPeriodSelected"
                    ></v-select>
                  </div>
                </transition>
                <small
                  class="text-atc-money-back-grey text-xs text-center flex justify-start items-center"
                  :class="[
                      activeTopLevelTab === 2 ?
                        'pl-4 pb-1'
                        :
                        'p-2 pl-4'
                      ]"
                >
                  <CompostableMiniIcon v-if="hasCompostableVariants && !this.product.tags.includes('nocompostlarge')" />
                  <span v-if="hasCompostableVariants && !this.product.tags.includes('nocompostlarge')"><span class="font-medium align-middle text-lg">=</span><span class="inline-block pl-0-4 mt-0-1 font-medium align-middle">|| 'HeroAddToCart.home_compostable_text' ||</span></span>
                </small>
              </div>
            </transition>
          </div>
        </transition>
      </div>
      <div
        class="hero-atc-footer mt-4 z-10"
        :class="[
            isModal === true ?
              isDesktop === true ? 'pb-4' : ''
              :
              ''
            ]"
      >

        <hero-add-to-cart-totals
          :product="product"
          :small-variants="getSmallPouches()"
          :large-variants="getLargePouches()"
          :only-variant="getOnlyVariant()"
          :servings="currentServings"
          :purchase-type="selectedPurchaseType"
          :pouch-size="selectedPouchSize"
          :subscriptions="subscriptions"
          :selected-variant-quantities="selectedVariantQuantities"
          :total-quantity="totalQuantity"
          :hide-multi-discount="getHideMultiDiscount"
        />
        <div class="hero-atc-go flex flex-col">
          <!-- <transition name="quick-fade" mode="out-in"> -->
            <button
              v-if="activeTopLevelTab === 1"
              v-on="totalQuantity > 0 ? { click: addToCart } : {}"
              key="single-atc-btn"
              data-text="|| 'HeroAddToCart.add_to_cart_button_text' ||"
              class="cursor-pointer btn  font-bold text-md lg:text-xl tracking-wide py-4 no-underline md:w-full"
              :class="[
                totalQuantity > 0 ?
                  'bg-green hover:bg-green-dark btn--rayen'
                  :
                  'bg-grey btn-no-transition'
                ]"
            >|| 'HeroAddToCart.add_to_cart_button_text' ||</button>
            <button
              v-if="activeTopLevelTab === 2"
              v-on="totalQuantity > 0 ? { click: addToCart } : {}"
              key="subscribe-atc-btn"
              data-text="|| 'HeroAddToCart.subscribe_button_text' ||"
              class="cursor-pointer btn font-bold text-md lg:text-xl tracking-wide py-4 no-underline md:w-full"
              :class="[
                totalQuantity > 0 ?
                  'bg-green hover:bg-green-dark btn--rayen'
                  :
                  'bg-grey btn-no-transition'
                ]"
            >|| 'HeroAddToCart.subscribe_button_text' ||</button>
          <!-- </transition> -->
          <div class="font-bold text-atc-money-back-grey self-center">
            <p class="mt-2">
              <svg
                class="align-middle"
                xmlns="http://www.w3.org/2000/svg"
                width="16.527"
                height="18.889"
                viewBox="0 0 16.527 18.889"
              >
                <g transform="translate(-90.184 -1009.111)">
                  <path
                    d="M16.532,18.215,13.839,13.6a.756.756,0,0,0,.345-.8l-.207-1.6,1.1-1.136a.828.828,0,0,0,0-1.2l-1.1-1.27.207-1.6a.941.941,0,0,0-.76-1l-1.657-.334-.691-1.336A1,1,0,0,0,9.9,2.845l-1.588.668-1.45-.668a.841.841,0,0,0-.691-.067.672.672,0,0,0-.483.468l-.829,1.4L3.2,4.917a.865.865,0,0,0-.76,1l.207,1.6-1.1,1.136a.828.828,0,0,0,0,1.2l1.1,1.2-.207,1.6a.905.905,0,0,0,.414.869L.164,18.215a.5.5,0,0,0,0,.535.7.7,0,0,0,.483.267H3.479l1.312,2.272a.7.7,0,0,0,.483.267.585.585,0,0,0,.483-.267l2.555-4.21,2.555,4.277a.7.7,0,0,0,.483.267.585.585,0,0,0,.483-.267l1.312-2.272h2.9a.585.585,0,0,0,.483-.267A.621.621,0,0,0,16.532,18.215ZM3.755,7.523,3.548,5.986l1.588-.267a.875.875,0,0,0,.622-.468l.76-1.336L7.9,4.582a.907.907,0,0,0,.829,0l1.45-.668.76,1.4a.74.74,0,0,0,.622.4l1.588.334L12.941,7.59a.934.934,0,0,0,.207.735l1.1,1.136-1.1,1.069a.986.986,0,0,0-.276.735l.207,1.537-1.519.267a.875.875,0,0,0-.622.468l-.76,1.336L8.8,14.205a1,1,0,0,0-.414-.134.9.9,0,0,0-.414.067l-1.45.668-.76-1.4a.74.74,0,0,0-.622-.4l-1.657-.267L3.686,11.2a.7.7,0,0,0-.207-.735L2.443,9.327,3.479,8.258A1.091,1.091,0,0,0,3.755,7.523Zm.138,6.348.9.134.76,1.4a1,1,0,0,0,1.174.468l.691-.267.276.4L5.344,19.952,4.308,18.215a.7.7,0,0,0-.483-.267H1.476Zm5.87,1.938a.9.9,0,0,0,.414.067.964.964,0,0,0,.829-.468l.829-1.4.9-.134,2.348,4.076H12.8a.585.585,0,0,0-.483.267l-1.036,1.737L8.8,15.809c0-.067-.069-.134-.069-.2l-.207-.4Z"
                    transform="translate(90.1 1006.377)"
                    fill="#6e6e6e"
                  />
                  <path
                    d="M9.688,13.077a2.7,2.7,0,0,0,2.688-2.688A2.732,2.732,0,0,0,9.688,7.7,2.7,2.7,0,0,0,7,10.388,2.662,2.662,0,0,0,9.688,13.077ZM7.753,10.335A1.936,1.936,0,1,1,9.688,12.27,1.928,1.928,0,0,1,7.753,10.335Z"
                    transform="translate(88.72 1005.115)"
                    fill="#6e6e6e"
                  />
                </g>
              </svg>
              <span
                class="align-middle text-atc-money-back-grey tracking-wider text-sm"
              >|| 'HeroAddToCart.30_day_money_back_text' ||</span>
            </p>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<style scoped>
/* Top level tab animation. */
.top-tab-flip-enter-active {
  transition: all 0.2s cubic-bezier(0.55, 0.085, 0.68, 0.53);
}

.top-tab-flip-leave-active {
  transition: all 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.top-tab-flip-enter,
.top-tab-flip-leave-to {
  transform: scaleY(0) translateZ(0);
  opacity: 0;
}

/* Subscription delivery select animation. */
.drop-in-enter-active {
  -moz-transition-duration: 0.8s;
  -webkit-transition-duration: 0.8s;
  -o-transition-duration: 0.8s;
  transition-duration: 0.8s;
  -moz-transition-timing-function: ease-in;
  -webkit-transition-timing-function: ease-in;
  -o-transition-timing-function: ease-in;
  transition-timing-function: ease-in;
}

.drop-in-leave-active {
  -moz-transition-duration: 0.5s;
  -webkit-transition-duration: 0.5s;
  -o-transition-duration: 0.5s;
  transition-duration: 0.5s;
  -moz-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
  -webkit-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
  -o-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
  transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
}

.drop-in-enter-to,
.drop-in-leave {
  max-height: 100px;
  overflow: hidden;
}

.drop-in-enter,
.drop-in-leave-to {
  overflow: hidden;
  max-height: 0;
}

/* Serving amount tab animation. */
.fade-enter-active {
  transition: opacity 3s ease-out;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.fade-leave-active {
  transition: opacity 3s ease-in;
  display: none;
}

/* ATC Button animation. */
.quick-fade-enter-active {
  transition: opacity 3s ease-out;
}

.quick-fade-enter,
.quick-fade-leave-to {
  opacity: 0;
}

.quick-fade-leave-active {
  transition: opacity 1.5s ease-in;
  background-color: grey;
}

.hero-atc-modal-close {
    margin-top: 0.2rem;
    margin-left: 0.2rem;
}

/* Custom styles not provided by tailwind etc. */
.hero-atc-go button {
  border-radius: 2px;
}

.hero-atc-tab-small, .hero-atc-tab-large {
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

/* Fixes Safari/iOS rendering of radio buttons on purchaseType selectors. */
input[type=radio] {
  border-radius: 8px;
}

/* Extra breakpoint for the modal version, targeting 1080p HD and above (144p, 2k, 4k) -
 * this needs better consideration in the future versions. */
@media only screen and (min-width: 1920px) {
  .c-size-hd {
    width: 33.33%; /* Equiv of Tailwind w-1/3 */
  }
}

/* Subscriptions learn more 'here' link display fix for tablets. */
a.subscriptions-here {
  display: contents;
}
</style>

<script>
import breakpoints from '../breakpoints';
import HeroAddToCartVariants from './HeroAddToCartVariants.vue';
import HeroAddToCartTotals from './HeroAddToCartTotals.vue';
import CompostableMiniIcon from './CompostableMiniIcon.vue';

export default {
  components: {
    HeroAddToCartVariants,
    HeroAddToCartTotals,
    CompostableMiniIcon
  },

  name: 'hero-add-to-cart',

  props: {
    product: {
      type: Object,
      required: true
    },

    subscriptions: {
      type: Object,
      required: false
    },

    variantSubscriptions: {
      type: Object,
      default: () => {}
    },

    variantMetafields: {
      type: Object,
      default: () => {}
    },

    /* This property has been deprecated and should be removed before the final version (bought from old widget which upsold). */
    related: {
      type: Array,
      required: false
    },

    forceSubscription: {
      type: Boolean,
      default: false
    },

    isModal: {
      type: Boolean,
      required: false,
      default: false
    },

    hideMultiDiscount: {
      type: Boolean,
      default: false
    },

    subCta: {
      type: String,
      default: ''
    }
  },

  data () {
    return {
      widgetId: null,
      isDesktop: window.innerWidth >= breakpoints.lg,
      addingToCart: false,
      selectedDeliveryPeriod: null,
      selectedVariantQuantities: {},
      selectedPurchaseType: 'subscription', // this.forceSubscription ? "subscription" : "single", - We are already forcing subscription tab, so lets just start them on that.
      activeTopLevelTab: 2, // Top level tabs are Subscription by default.
      activeServingLevelTab: 2, // Second level is pouch size, set to Large by default.
      smallPouches: [], // We split the pouches out on created() and pass down to hero-add-to-cart-variants.
      largePouches: []
    };
  },

  created () {
    // Prioritise One Time Purchase tagged products
    if (this.prioritiseOTP) {
      this.activeTopLevelTab = 1;
    }

    // Handle nonsubscription tagged products.
    if (this.nonSubscription) {
      this.activeTopLevelTab = 1;
      this.selectedPurchaseType = 'single';
    }

    // Handle NoLargeOTP or NoLargeSub tagged products
    if ((this.activeTopLevelTab === 1 && this.product.tags.includes('NoLargeOTP')) || this.product.tags.includes('NoLargeSub')) {
      this.activeServingLevelTab = 1;
    }

    // Auto set the first choice of weeks.
    this.selectedDeliveryPeriod = 4;

    // Assign the instance a unique id.
    this.widgetId = _.uniqueId();
    // console.log(`widget id: ${this.widgetId}`);
  },

  methods: {
    getPrice () {
      const onlyVariant = this.getOnlyVariant();
      if ((this.product.tags.includes('Apparel') ||
            this.product.tags.includes('GiftCard') ||
            this.pouchSize === 'single') &&
        typeof (onlyVariant) === 'object' &&
        onlyVariant[0] !== false) {
        return onlyVariant[0].price;
      }
      let arRef = [];
      if (this.pouchSize === 'large') {
        arRef = this.getLargePouches();
      } else if (this.pouchSize === 'small') {
        arRef = this.getSmallPouches();
      }
      if (arRef.length > 0) {
        return arRef.reduce(function (prev, curr) {
          return prev.price < curr.price ? prev : curr;
        }).price;
      } else {
        return 0;
      }
    },

    minusPercent (n, p) {
      return n - (n * (p / 100));
    },

    getOnlyVariant () { // For now this spits out the Apparel variants as well as large pouch only products as a pre-launch fix.
      if (this.product.variants.length === 1 ||
      this.product.tags.includes('Apparel') ||
      this.product.tags.includes('GiftCard') ||
      this.hasOnePouchSize) {
        return this.product.variants; // Just throw the variants component the whole original array if only one variant to display - Jed.
      } else {
        return [false];
      }
    },

    getSmallPouches () {
      if (this.smallPouches.length === 0 && this.selectedPouchSize !== 'single') {
        this.smallPouches = _.filter(this.product.variants, { option2: String(this.getSmallPouchSize) });
      }
      return this.smallPouches;
    },

    getLargePouches () {
      if (this.largePouches.length === 0 && this.selectedPouchSize !== 'single') {
        this.largePouches = _.filter(this.product.variants, { option2: String(this.getLargePouchSize) });
      }
      return this.largePouches;
    },

    purchaseTypeSelected (type) {
      this.selectedPurchaseType = type;
      this.selectedVariantQuantities = {};
      if (type === 'subscription') {
        this.activeTopLevelTab = 2;
      } else {
        this.activeTopLevelTab = 1;
      }
    },

    deliveryPeriodSelected (period) {
      this.selectedDeliveryPeriod = period.match(/\d+/)[0]; // Extract the number from n Weeks string and set it to delivery period.
    },

    substituteSubscriptionVariant (id) {
      return this.subscriptionSelected
        ? this.variantSubscriptions[id] || id
        : id;
    },

    variantQuantitySelected (id, quantity) {
      if (quantity < 0) return;
      const servings_variant = _.find(this.product.variants, { id });
      const servings = servings_variant ? Number(servings_variant.option2) : 0;
      this.selectedVariantQuantities = {
        ...this.selectedVariantQuantities,
        [id]: { quantity, servings }
      };
    },

    unitPriceForQty (qty) {
      if (qty > 1) {
        return (this.minusPercent(this.getPrice, 5) / 100).toFixed(2);
      }
      if (qty > 2) {
        return (this.minusPercent(this.getPrice, 10) / 100).toFixed(2);
      }
    },

    async addToCart () {
      if (this.addingToCart) return;

      this.addingToCart = true;

      const promises = await Object.keys(this.selectedVariantQuantities).reduce(
        this.addVariantToCart,
        Promise.resolve()
      );

      this.addingToCart = false;

      EventBus.$emit('product-added-to-cart');

      // We no longer need to timeout this as its not relevant to the animation of the widget like before. - Jed.
      this.reset();

      EventBus.$emit('cart-drawer-click');
    },

    async addVariantToCart (previous, id) {
      await previous;

      if (this.selectedVariantQuantities[id].quantity === 0) {
        return new Promise((resolve, reject) => resolve());
      }

      try {
        ometria.trackAddToBasket(ometria.raw_data.product_id, this.selectedVariantQuantities[id].quantity);
      } catch (e) {
        console.error(e.message);
      }

      return axios.post('/cart/add.js', {
        id: this.substituteSubscriptionVariant(id),
        quantity: this.selectedVariantQuantities[id].quantity,
        properties: this.subscriptionProperties
      });
    },

    reset () {
      this.selectedDeliveryPeriod = 4;
      this.selectedVariantQuantities = {};
      // this.selectedPurchaseType = 'subscription';

      this.$emit('added-to-cart');
    },

    hideModal () {
      this.$emit('hide-modal', true);
    },

    getRadioKey (purchaseType) {
      if (purchaseType && purchaseType === 'single') {
        if (this.isModal === true) {
          return 'single-modal';
        } else {
          return 'single-hero';
        }
      } else {
        if (this.isModal === true) {
          return 'subscription-modal';
        } else {
          return 'subscription-hero';
        }
      }
    }
  },

  computed: {
    hasCompostableVariants () {
      if (typeof (this.variantMetafields) !== 'undefined') {
        const findCompostable = _.find(this.variantMetafields, { compostable: 1 });
        if (findCompostable && typeof (findCompostable.compostable) === 'number' && findCompostable.compostable === 1) {
          return true;
        }
      }
      return false;
    },

    getProductTitle () {
      return this.product.title.replace('(Green Friday)', '').split(':')[0].trim();
    },

    getProductTagline () {
      const taglineArr = this.product.title.split(':');
      if (taglineArr.length === 1) {
        return '';
      } else {
        return taglineArr[1].trim();
      }
    },

    getSmallPouchSize () {
      if (this.product.variants.length > 1) {
        return Math.min(...this.product.variants.map(o => o.option2));
      } else {
        return 0;
      }
    },
    getLargePouchSize () {
      if (this.product.variants.length > 1) {
        return Math.max(...this.product.variants.map(o => o.option2), 0);
      } else {
        return 0;
      }
    },

    selectedPouchSize () {
      if (this.product.variants.length === 1 ||
      this.product.tags.includes('Apparel') ||
      this.product.tags.includes('GiftCard') ||
      this.hasOnePouchSize) { // Apparel pre-launch patch.
        return 'single';
      }
      return this.activeServingLevelTab === 2 ? 'large' : 'small';
    },
    /* This function returns true if there is only one Serving size e.g. one pouch size, and then converts a dual pouch-looking product
     * across the other functions to push it into a single variant box solution.
     */
    hasOnePouchSize () {
      return this.getSmallPouchSize === this.getLargePouchSize && this.getSmallPouchSize !== 0;
    },

    getSmallPouchPrice () {
      let price = Math.max(...this.getSmallPouches().map(o => o.price), 0);
      if (this.selectedPurchaseType === 'subscription') {
        price = this.minusPercent(price, 12.5);
      }
      return Math.floor(price);
    },

    getLargePouchPrice () {
      let price = Math.max(...this.getLargePouches().map(o => o.price), 0);
      if (this.selectedPurchaseType === 'subscription') {
        price = this.minusPercent(price, 12.5);
      }
      return Math.floor(price);
    },

    getOnlySize () {
      return this.currentServings;
    },

    getOnlyPrice () {
      let price = Math.max(...this.product.variants.map(o => o.price), 0);
      if (this.selectedPurchaseType === 'subscription') {
        price = this.minusPercent(price, 12.5);
      }
      return Math.floor(price);
    },

    getHideMultiDiscount () {
      return this.product.handle.indexOf('green-friday') >= 0 ? true : this.hideMultiDiscount;
    },

    singleVariant () {
      return this.product.variants.length == 1;
    },

    variantsByQuantity () {
      return this.product.variants.slice(0)
        .sort((a, b) => a.inventory_quantity - b.inventory_quantity)
        .reverse();
    },

    totalQuantity () {
      return Object.values(this.selectedVariantQuantities).reduce(
        (total, variant) => total + variant.quantity,
        0
      );
    },

    hasSubscription () {
      return (
        this.subscriptions && this.subscriptions.has_subscription == 'True'
      );
    },

    hasSelectedVariantQuantities () {
      return this.totalQuantity > 0;
    },

    hasDiscount () {
      return (
        this.selectedPurchaseType == 'single' &&
        !this.product.tags.includes('Apparel')
      );
    },

    subscriptionSelected () {
      return (
        this.hasSubscription && this.selectedPurchaseType == 'subscription'
      );
    },

    productHandle () {
      var url = document.location.href.split('/');
      var handle;
      var i;
      for (i = 1; i < url.length; i++) {
        if (url[i - 1] == 'products') {
          handle = url[i].split('?')[0];
          i = url.length;
          continue;
        }
      }
      return handle;
    },

    getDeliveryWeeks () {
      // This is only for use to tell v-select which value is currently selected, not for direct display.
      if (this.selectedDeliveryPeriod !== null) {
        return `${this.selectedDeliveryPeriod} || 'HeroAddToCart.deliver_every_weeks' ||`; // Return it back with its text so v-select knows.
      } else {
        return '4 || \'HeroAddToCart.deliver_every_weeks\' ||';
      }
    },

    currentServings () {
      if (this.singleVariant || this.product.tags.includes('Apparel') || this.product.tags.includes('GiftCard') || this.hasOnePouchSize) {
        return this.product.variants[0].option2 === null ? 0 : Number(this.product.variants[0].option2); // More support for single variant products, typecast to Number() for HeroAddToCartTotals - Jed.
      }
      if (this.activeServingLevelTab === 1) {
        // Small
        return this.getSmallPouchSize;
      } else {
        // Large
        return this.getLargePouchSize;
      }
    },

    subscriptionProperties () {
      return this.subscriptionSelected
        ? {
          shipping_interval_unit_type: this.subscriptions
            .shipping_interval_unit_type,
          subscription_id: this.subscriptions.subscription_id,
          shipping_interval_frequency: this.selectedDeliveryPeriod,
          original_handle: this.productHandle
        }
        : {};
    },

    selectedVariants () {
      return _.map(this.selectedVariantQuantities, (qty, variant) => {
        return _.find(this.product.variants, v => v.id == variant.id);
      });
    },

    selectedSkus () {
      return _.map(this.selectedVariants, v => v.sku);
    },

    saveMoneyText () {
      switch (this.totalQuantity) {
        case 0:
          return "|| 'HeroAddToCart.discount_buy_2_text' ||";
        case 1:
        case 2:
          return `|| 'HeroAddToCart.discount_add_another_text_1' ||${this.unitPriceForQty(this.totalQuantity + 1)} || 'HeroAddToCart.discount_add_another_text_2' ||`;
        default:
          return "|| 'HeroAddToCart.discount_best_text' ||";
      }
    },

    prioritiseOTP () {
      return this.product.tags.includes('prioritiseOTP');
    },

    nonOTP () {
      return this.product.tags.includes('noOTP') || (this.product.tags.includes('NoSmallOTP') && this.product.tags.includes('NoLargeOTP'));
    },

    nonSubscription () {
      return this.product.tags.includes('noSub');
    },

    singleTabProduct () {
      return this.singleVariant || this.product.tags.includes('Apparel') || this.product.tags.includes('GiftCard') || this.hasOnePouchSize;
    }
  }
};
</script>
