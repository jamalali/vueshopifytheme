<template>
<header
  :class="[{ 'custom' : custom }, { 'valentines' : valentines }, { 'ocean-week' : oceanWeek }, { 'green-friday' : greenFriday }, { 'winter' : winter }, { 'vivo-hidden' : !campaign }]"
  class="bg-white fixed left-0 top-0 w-full z-infinity lg:block country-popup-spacer">
  <div
    class="announcement-bar"
    :style="{
      '--custom-background-colour': (custom ? custom.backgroundColour : 'inherit'),
      '--custom-background-image': (custom && custom.backgroundImage !== '' ? 'url(' + custom.backgroundImage + ')' : 'none'),
      '--heart-background-image': (valentines && valentines.heart !== '' ? 'url(' + valentines.heart + ')' : 'none')
    }"
    v-show="!shrink">
  <div
    :class="[
      { 'flex-wrap lg:flex-nowrap text-xs sm:text-base font-extrabold uppercase tracking-wider' : campaign },
      ( custom && custom.backgroundOverlay !== 100 ? 'bg-black-full-' + custom.backgroundOverlay : '' ),
      { 'bg-red-2 text-white' : valentines },
      { 'bg-ocean-week-blue text-black-full' : oceanWeek },
      { 'bg-green-friday-green text-black-full' : greenFriday },
      { 'bg-red-1 text-white' : winter },
      { 'bg-green-thrive text-white' : !campaign }
    ]"
    class="relative flex items-center justify-between h-14 w-full">
    <div
      :class="[ campaign ? 'hidden lg:block w-40' : 'flex-1' ]"
      class="text-xs group">
        <store-selector :class="[{ 'group-hover:text-white' : (oceanWeek || greenFriday) }, { 'group-hover:text-grey' : (!campaign || custom || valentines || winter) }]" class="transition-300"
          :text-shade="textShade">
        </store-selector>
    </div>
  <template v-if="custom">
    <a class="flex items-center justify-center w-full h-14" @click.prevent="actionCustomLink(custom.link)" :href="custom.link">
      <div class="flex-1 flex items-center justify-center lg:px-4">
      </div>
      <div class="flex-none md:mx-8">
        <div :class="[ custom.textShade === 'light' ? 'text-white' : 'text-black-full' ]" class="text-sm md:text-base lg:text-xl font-black" v-html="custom.text"></div>
      </div>
      <div class="flex-1 flex items-center justify-center lg:px-4">
      </div>
    </a>
    <div class="hidden lg:block w-40">
    </div>
  </template>
  <template v-if="oceanWeek">
    <a class="lg:hidden -mt-3 -mb-5 text-base text-white font-black text-center w-full focus:outline-none" href="/collections/ocean-clean-up">|| 'DesktopNavbar.ow_title' ||</a>
    <div class="flex items-center justify-center w-full">
      <div class="flex-1 flex items-center justify-center text-white">
        <a class="hidden lg:block mr-4 text-xl font-black focus:outline-none" href="/collections/ocean-clean-up">|| 'DesktopNavbar.ow_title' ||</a>
        <div class="hidden xl:block">
          || 'DesktopNavbar.ow_promo_1' ||
        </div>
        <div class="hidden xl:block mx-2">
          +
        </div>
        <div class="hidden xl:block">
          || 'DesktopNavbar.ow_promo_2' ||
        </div>
        <div class="hidden xl:block mx-2">
          +
        </div>
        <div class="hidden xl:block">
          || 'DesktopNavbar.ow_promo_3' ||
        </div>
        <div class="sm:hidden">{{ shortTicker }}</div>
        <div class="hidden sm:block xl:hidden">{{ longTicker }}</div>
      </div>
      <div class="flex-none md:mx-8">
        <a class="lg:hidden bg-black rounded-full px-4 py-1 text-xs text-white hover:text-ocean-week-blue focus:outline-none tracking-wide" href="/collections/ocean-clean-up">|| 'DesktopNavbar.ow_shop_now' ||</a>
      </div>
      <div class="flex-1 flex lg:flex-initial items-center justify-center lg:pr-4">
        <div>
          <span class="hidden xl:inline">|| 'DesktopNavbar.ow_ends' ||</span>
          <countdown-timer-days-ow
            datetime="03/09/2021 18:00:00"
            redirect="/pages/offer-expired"
            :navbar="true"
          />
        </div>
      </div>
    </div>
    <div class="hidden lg:block w-40">
      <a class="bg-black rounded-full mr-3 px-2 lg:px-4 py-2 text-sm text-white hover:text-ocean-week-blue focus:outline-none tracking-wide" href="/collections/ocean-clean-up">|| 'DesktopNavbar.ow_shop_now' ||</a>
    </div>
  </template>
  <template v-if="greenFriday">
    <a class="lg:hidden -mt-3 -mb-5 text-base text-white font-black text-center w-full focus:outline-none" href="/collections/green-friday">|| 'DesktopNavbar.gf_title' ||</a>
    <div class="flex items-center justify-center w-full">
      <div class="flex-1 flex items-center justify-center lg:px-4">
        <div class="hidden xl:block">
          || 'DesktopNavbar.gf_promo_1' ||
        </div>
        <div class="hidden xl:block mx-6">
          |
        </div>
        <div class="hidden xl:block">
          || 'DesktopNavbar.gf_promo_2' ||
        </div>
        <div class="sm:hidden">{{ shortTicker }}</div>
        <div class="hidden sm:block xl:hidden">{{ longTicker }}</div>
      </div>
      <div class="flex-none md:mx-8">
        <a class="hidden lg:block text-xl text-white font-black focus:outline-none" href="/collections/green-friday">|| 'DesktopNavbar.gf_title' ||</a>
        <a class="lg:hidden bg-black rounded-full px-4 py-1 text-xs text-white hover:text-green-friday-green focus:outline-none tracking-wide" href="/collections/green-friday">|| 'DesktopNavbar.gf_shop_now' ||</a>
      </div>
      <div class="flex-1 flex items-center justify-center lg:px-4">
        <div class="hidden xl:block">
          || 'DesktopNavbar.gf_promo_3' ||
        </div>
        <div class="hidden xl:block mx-6">
          |
        </div>
        <div>
          <span class="hidden xl:inline">|| 'DesktopNavbar.gf_ends' ||</span>
          <countdown-timer-days-gf
            datetime="30/11/2021 23:59:59"
            :navbar="true"
          />
        </div>
      </div>
    </div>
    <div class="hidden lg:block">
      <a class="bg-black rounded-full mr-3 px-2 lg:px-4 py-2 text-sm text-white hover:text-green-friday-green focus:outline-none tracking-wide whitespace-no-wrap" href="/collections/green-friday">|| 'DesktopNavbar.gf_shop_now' ||</a>
    </div>
  </template>
  <template v-if="winter || valentines">
    <div class="flex items-center justify-center w-full">
      <div class="flex-1 flex items-center justify-center lg:px-4">
      </div>
      <div class="flex-none md:mx-8">
        <div class="text-base lg:text-xl text-white font-black" v-html="winter ? winter.text : valentines.text"></div>
      </div>
      <div class="flex-1 flex items-center justify-center lg:px-4">
      </div>
    </div>
    <div class="hidden lg:block w-40">
    </div>
  </template>
    <div id="announcement-bar-canvas">
    <template v-if="winter || valentines">
      <div :class="[{ 'snowflake' : winter }, { 'heart' : valentines }]" class="foreground one"></div>
      <div :class="[{ 'snowflake' : winter }, { 'heart' : valentines }]" class="middleground one"></div>
      <div :class="[{ 'snowflake' : winter }, { 'heart' : valentines }]" class="background one"></div>
    </template>
    </div>
  </div>
  </div>

  <div :class="['bg-white relative vivo-hidden justify-between transition-300 transition-all lg:flex', shrink ? 'py-4' : 'py-8']">
    <div class="flex flex-1 justify-center items-center">
      <ul class="list-none p-0 flex">
        <li class="block whitespace-nowrap">
          <a :class="['text-black no-underline uppercase mx-4 border-b-2 border-white hover:border-black font-bold tracking-wide transition-300', { 'border-black': subNav == 'shop' }]" @click.prevent="toggleSubNav('shop')" href="#">
            || 'DesktopNavbar.subnav_shop_label' ||
            <desktop-navbar-expandable-icon :open="subNav == 'shop'" class="w-3"></desktop-navbar-expandable-icon>
          </a>
        </li>

        <li class="block whitespace-nowrap">
          <a :class="['text-black no-underline uppercase mx-4 border-b-2 border-white hover:border-black font-bold tracking-wide transition-300', { 'border-black': subNav == 'vivo' }]" @click.prevent="toggleSubNav('vivo')" href="#">
            || 'DesktopNavbar.subnav_vivo_label' ||
            <desktop-navbar-expandable-icon :open="subNav == 'vivo'" class="w-3"></desktop-navbar-expandable-icon>
          </a>
        </li>

        <li
          v-for="link in topLevelNav"
          class="block"
          :key="link.key"
        >
          <a :href="link.url" class="text-black no-underline uppercase mx-4 border-b-2 border-white hover:border-black font-bold tracking-wide">
            {{ link.title }}
          </a>
        </li>
      </ul>
    </div>

    <div class="flex mx-8 justify-center">
      <a href="/" class="m-2" :class="['transition-300 transition-all', shrink ? 'h-6': 'h-10']">
        <svg v-if="!logo" :fill="logoColor" :class="['transition-300 transition-all', shrink ? 'h-6': 'h-10']" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	      viewBox="0 0 557.8 99.5" style="enable-background:new 0 0 557.8 99.5;" xml:space="preserve">
          <g>
            <path d="M123.9,93c-0.1,0.1-0.5,0.2-1,0.2h-20.6c-0.6,0-0.9,0-1-0.1c-0.1,0-0.1-0.4-0.1-1.1V54.2V7.5
              c0-0.7,0.1-0.9,0.7-0.9h21.3c0.6,0,0.6,0.1,0.8,0.2c0.1,0.1,0.2,0.4,0.2,0.9v84.4C124.1,92.6,124,92.9,123.9,93"/>
            <path d="M217.3,9c-2.6,5.7-37.5,76.9-40,82.4c-0.6,1.2-1.2,1.7-1.9,1.7c-0.6,0-1.1-0.5-1.6-1.5
              C170.3,84.8,137,17,133.2,8.8c-0.5-1-0.7-1.6-0.7-1.9c0-0.2,0.5-0.4,1.3-0.4h19.5c0.6,0,1.1,0.1,1.4,0.2c0.4,0.1,0.6,0.4,0.8,0.8
              c0.5,1.3,15,31.6,19.7,40.4c-0.1-0.1,19.3-38.7,19.8-39.9c0.3-1,1.2-1.5,2.5-1.5h19.2C218.6,6.8,217.3,9,217.3,9"/>
            <path d="M258.5,5.2c-24.3,0-44.1,19.7-44.1,44.1c0,24.3,19.7,44.1,44.1,44.1c24.3,0,44.1-19.7,44.1-44.1
              C302.6,24.9,282.8,5.2,258.5,5.2 M280.7,49.9c0,13.1-10.7,23.8-23.8,23.8c-4.2,0-8-1.2-11.4-3c9.2-20.3,24-31,22.2-29.9
              c-13.3,8-29.7,23-29.9,23.2c-2.9-3.9-4.7-8.8-4.7-14.1c0-13.1,10.7-23.8,23.8-23.8c5.9,0,11.3,2.2,15.5,5.8l17.2-5.2l-10.5,14.6
              C280.1,44,280.7,46.9,280.7,49.9"/>
            <path d="M91.8,8c-2.6,5.7-37.9,78-40.5,83.4c-0.6,1.2-1.2,1.7-1.9,1.7c-0.6,0-1.1-0.5-1.6-1.5
              C44.3,84.8,11,17,7.2,8.8C6.7,7.8,6.5,7.2,6.5,7c0-0.2,0.5-0.4,1.3-0.4h19.5c0.6,0,1.1,0.1,1.4,0.2c0.4,0.1,0.6,0.4,0.8,0.8
              c0.5,1.3,15,31.6,19.7,40.4C49.2,47.9,68.6,9.3,69.1,8.1c0.3-1,1.2-1.5,2.5-1.5h19.6C92.5,6.6,91.8,8,91.8,8"/>
            <path d="M432.4,89.7c0,1.6-0.1,2.6-0.2,3c-0.2,0.4-0.7,0.7-1.5,0.7h-18.2c-0.7,0-1.3,0-1.9-0.1
              c-0.6-0.1-1-0.3-1.3-0.7c-0.3-0.5-0.5-1.1-0.5-2v-2.4V9.4c0-0.9,0.3-1.4,0.9-1.5c0.6-0.1,1.5-0.1,2.8-0.1c1.6,0,2.8,0.1,3.4,0.2
              c0.6,0.2,0.9,0.7,0.9,1.6v72.1v2.5c0,0.9,0.3,1.5,0.9,1.9c0.2,0.2,0.7,0.3,1.2,0.3c0.6,0,1.1,0.1,1.6,0.1h10.3
              c0.8,0,1.3,0.3,1.5,0.8C432.3,87.8,432.4,88.6,432.4,89.7"/>
            <path d="M458.2,93c-0.4,0.2-1.6,0.3-3.6,0.3c-1.7,0-2.7-0.1-3.1-0.2c-0.4-0.1-0.6-0.6-0.6-1.5V9.7
              c0-0.8,0.2-1.3,0.7-1.5c0.5-0.2,1.5-0.3,3-0.3c1.7,0,2.8,0.1,3.4,0.3c0.6,0.2,0.9,0.8,0.9,1.7v81.5
              C458.8,92.2,458.6,92.8,458.2,93"/>
            <path d="M506.3,11.5c0,1.3-0.1,2.2-0.4,2.6c-0.2,0.4-0.9,0.7-2,0.7h-11.5H491c-0.4,0-0.8,0.1-1.2,0.2
              c-0.6,0.4-0.9,1.1-0.9,2v2.6v23.1v1.7c0,0.5,0.2,1,0.6,1.4c0.4,0.4,0.9,0.6,1.3,0.5c0.5,0,1,0,1.5,0.1c1,0.2,2.2,0.2,3.5,0.2
              c1.4,0,2.4-0.1,2.9-0.1c1,0,1.6,0.3,1.8,0.9c0.2,0.6,0.4,1.5,0.4,2.8c0,1.4-0.1,2.3-0.4,2.9c-0.2,0.5-0.9,0.8-1.8,0.8
              c-0.5,0-1.4,0-2.8-0.1c-1.3,0-2.5,0-3.5,0.1c-0.7,0-1.3,0-1.8,0.1c-0.6,0-1,0.1-1.2,0.3c-0.6,0.4-0.9,1-0.9,1.9v2.5v33
              c0,0.9-0.3,1.4-1,1.5c-0.7,0.1-1.7,0.2-3.1,0.2c-1.3,0-2.3-0.1-2.9-0.2c-0.6-0.1-0.9-0.6-0.9-1.4v-80V9.9c0-0.4,0.2-0.8,0.6-1.2
              c0.4-0.5,0.7-0.8,1-0.9c0.2-0.1,0.7-0.1,1.3-0.1h20.9c0.8,0,1.3,0.3,1.4,0.9C506.2,9.3,506.3,10.2,506.3,11.5"/>
            <path d="M550.2,90c0,1.4-0.1,2.3-0.2,2.8c-0.2,0.4-0.6,0.7-1.2,0.7h-18.3c-1,0-1.9,0-2.9,0.1c-0.9,0-1.6-0.1-2-0.5
              c-0.5-0.4-0.7-1-0.7-1.8v-2.3V11.5c0-0.8,0-1.3,0.1-1.6c0.1-0.2,0.3-0.6,0.7-1.1c0.4-0.5,0.8-0.8,1.2-0.9
              c0.4-0.1,0.9-0.1,1.6-0.1h20.3c0.7,0,1.2,0.3,1.3,1c0.1,0.7,0.2,1.6,0.2,2.7c0,1.1-0.1,2-0.2,2.5c-0.1,0.5-0.6,0.8-1.4,0.8h-12.2
              c-0.5,0-1,0-1.7,0.1c-0.6,0.1-1,0.2-1.2,0.5c-0.3,0.4-0.5,0.7-0.6,0.9c0,0.2-0.1,0.7-0.1,1.5v23.2v1.7c0,0.6,0.2,1.1,0.7,1.5
              c0.4,0.3,0.8,0.5,1.3,0.5h1.4h5.8c0.7,0,1.2,0.3,1.4,0.8c0.2,0.5,0.3,1.4,0.3,2.8c0,1.2-0.1,2.1-0.2,2.6
              c-0.2,0.5-0.7,0.8-1.5,0.8h-5.5c-0.7,0-1.3,0-1.8,0.1c-0.6,0-1,0.1-1.2,0.3c-0.6,0.4-0.9,0.9-0.9,1.5v2.1v26.3
              c0,0.8,0,1.7,0.1,2.6c0,0.9,0.2,1.5,0.6,1.7c0.3,0.2,0.9,0.3,1.6,0.4c0.7,0.1,1.4,0.1,2.1,0.1h11.6c0.7,0,1.2,0.2,1.3,0.7
              C550.1,87.7,550.2,88.6,550.2,90"/>
            <path d="M355.3,93.3c-1.1,0-2-0.9-2-2V9.8c0-1.1,0.9-2,2-2s2,0.9,2,2v81.5C357.3,92.4,356.4,93.3,355.3,93.3"/>
      </g>
    </svg>
    <img v-else class="logo relative" :class="[{ 'winter' : winter }, { 'valentines' : valentines }, shrink ? 'sm' : 'lg']" :src="logo" alt="Vivo Life" />
      </a>
    </div>

    <div class="flex flex-1 justify-center items-center">
      <ul class="list-none p-0 flex items-stretch">
        <li v-if="searchEnabled" class="self-center">
          <a href="#" class="mx-4" @click.prevent="searchFormVisible = !searchFormVisible">
            <svg class="h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
              <circle class="search-svg-1" cx="12.96" cy="12.62" r="9.46" />
              <line class="search-svg-2" x1="21.5" y1="22.06" x2="27.45" y2="28" />
            </svg>
          </a>
        </li>

        <li class="self-center">
          <div class="flex inline flex mx-4 items-center text-black">
            <slot></slot>
            <a class="text-black no-underline inline-flex items-center" href="/account">
              <svg class="h-6 mx-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                <circle class="account-svg-1" cx="15.75" cy="15.75" r="12.5" />
                <path class="account-svg-2"
                  d="M24.17,24v-.12c0-.78-.09-2.84-2.1-3.52a11.17,11.17,0,0,1-3.13-1.43.91.91,0,0,0-1.26.22.9.9,0,0,0-.15.67.93.93,0,0,0,.37.59,12.85,12.85,0,0,0,3.69,1.69c.61.22.74.85.78,1.83V24c0,.26,0,.63,0,.92l0,.42H24.1l0-.35A6.93,6.93,0,0,0,24.17,24Zm-.38-.1Z" />
                <path class="account-svg-2"
                  d="M13.23,18.79a.84.84,0,0,0-.67.15,11.33,11.33,0,0,1-3.2,1.44c-1.94.67-2,2.73-2,3.52V24a7.08,7.08,0,0,0,0,1l0,.34H9.22L9.17,25a7,7,0,0,1,0-.92V24c0-1,.17-1.63.77-1.84a12.88,12.88,0,0,0,3.7-1.69.93.93,0,0,0,.37-.59.88.88,0,0,0-.15-.67A.89.89,0,0,0,13.23,18.79Z" />
                <path class="account-svg-2"
                  d="M15.68,18.18h.13A3.58,3.58,0,0,0,18.57,17c1.51-1.7,1.26-4.62,1.23-4.9a4,4,0,0,0-1.9-3.55A4.3,4.3,0,0,0,15.79,8h-.07a4.4,4.4,0,0,0-2.1.53,4,4,0,0,0-1.93,3.57c0,.28-.28,3.2,1.23,4.9A3.57,3.57,0,0,0,15.68,18.18Zm-2.94-6v0c.13-2.81,2.13-3.11,3-3.11h0c1.06,0,2.85.45,3,3.11v0s.28,2.69-1,4.1a2.59,2.59,0,0,1-2,.84h0a2.58,2.58,0,0,1-2-.84C12.47,14.89,12.73,12.22,12.74,12.19Z" />
                <path class="account-svg-2"
                  d="M15.81,18.56h-.14a4,4,0,0,1-3-1.32c-1.6-1.81-1.35-4.84-1.32-5.18A4.33,4.33,0,0,1,13.43,8.2a4.76,4.76,0,0,1,2.29-.59,4.89,4.89,0,0,1,2.37.6,4.39,4.39,0,0,1,2.09,3.87c0,.32.27,3.35-1.33,5.16a4,4,0,0,1-3,1.32Zm-.13-.75h.06a3.32,3.32,0,0,0,2.55-1.07c1.39-1.57,1.17-4.3,1.14-4.61a3.65,3.65,0,0,0-1.72-3.27,4.11,4.11,0,0,0-3.91,0,3.65,3.65,0,0,0-1.73,3.26c0,.33-.26,3.06,1.13,4.63A3.25,3.25,0,0,0,15.68,17.81Zm.09-.31a3,3,0,0,1-2.34-1c-1.28-1.44-1.1-4-1.07-4.36v-.07a3.22,3.22,0,0,1,3.35-3.44,3.27,3.27,0,0,1,3.4,3.46h0s.31,2.86-1.06,4.4A2.93,2.93,0,0,1,15.77,17.5Zm-2.66-5.25c0,.16-.21,2.57.88,3.79a2.2,2.2,0,0,0,1.74.71A2.18,2.18,0,0,0,17.5,16c1-1.16.91-3.35.88-3.74v-.14c-.1-2.21-1.48-2.71-2.61-2.74-1,0-2.53.36-2.64,2.76Z" />
              </svg>
              <div class="uppercase font-bold border-b-2 border-white hover:border-black tracking-wide">|| 'DesktopNavbar.top_level_account_label' ||</div>
            </a>
          </div>
        </li>

        <li class="self-center">
          <a @click="openCartDrawer" href="#" class="mx-4 text-black no-underline ml-0">
            <cart-total :initial-total="cart.total_price"></cart-total>
          </a>
        </li>
      </ul>
    </div>
  </div>

  <div class="font-bold overflow-hidden text-lg sub-nav-container bg-white">
    <transition @enter="showSubNav" @leave="hideSubNav" :css="false">
      <div v-show="subNav == 'shop'" class="border-t-2 border-grey-lighter lg:mx-8 pb-4">
        <div class="mx-auto xxl:w-4/5 flex flex-wrap">
          <ul class="container flex flex-wrap list-none p-0 mx-auto w-full xl:w-4/5">
            <desktop-navbar-shop-sub-item
              v-for="link in shopNav"
              :text="link.title"
              :links="link.links"
              :href="link.url"
              :key="link.key"
            />
          </ul>
          <div class="promo-area pt-8 w-1/5 hidden xl:block">
            <a :href="shopNavPromo.url">
              <img :src="shopNavPromo.image" :alt="shopNavPromo.text" />
              <p>
                {{ shopNavPromo.text }}
              </p>
            </a>
          </div>
          <div class="basis-100 extra-links pt-10 pb-5">
            <ul class="list-none p-0 text-center">
              <li v-for="link in shopNavExtraLinks" :key="link.key" class="inline-block mx-6">
                <a :href="link.url" class="flex font-extrabold hover:opacity-65 inline-block no-underline text-black text-xl tracking-wide transition-300 uppercase">
                  {{ link.text }}

                  <svg class="ml-3" xmlns="http://www.w3.org/2000/svg" width="12.911" height="21.91" viewBox="0 0 12.911 21.91">
                    <g id="Group_5939" data-name="Group 5939" transform="translate(-1353.499 -774.139)">
                      <g id="Rectangle_4932" data-name="Rectangle 4932" transform="translate(1355.436 796.049) rotate(-135)" stroke="#000" stroke-width="1">
                        <rect width="2.739" height="15.52" rx="1.369" stroke="none"/>
                        <rect x="0.5" y="0.5" width="1.739" height="14.52" rx="0.869" fill="none"/>
                      </g>
                      <g id="Rectangle_4933" data-name="Rectangle 4933" transform="translate(1353.5 776.075) rotate(-45)" stroke="#000" stroke-width="1">
                        <rect width="2.739" height="15.52" rx="1.369" stroke="none"/>
                        <rect x="0.5" y="0.5" width="1.739" height="14.52" rx="0.869" fill="none"/>
                      </g>
                    </g>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </transition>

    <transition @enter="showSubNav" @leave="hideSubNav" :css="false">
      <div v-show="subNav == 'vivo'" class="border-t-2 border-grey-lighter lg:mx-8 pb-4">
        <ul class="container flex justify-between list-none p-0 mx-auto text-center">
          <desktop-navbar-sub-item
            v-for="link in vivoNav"
            :text="link.title"
            :sub-text="link.subtitle"
            :href="link.url"
            :key="link.key"
          />
        </ul>
      </div>
    </transition>
  </div>
  
  <search-form
    :visible="searchFormVisible"
  />

</header>
</template>

<script>
import { gsap } from 'gsap';
import breakpoints from '../breakpoints';
import DesktopNavbarSubItem from './DesktopNavbarSubItem';
import DesktopNavbarShopSubItem from './DesktopNavbarShopSubItem';
import DesktopNavbarExpandableIcon from './DesktopNavbarExpandableIcon';
import * as typeformEmbed from '@typeform/embed';

export default {
  props: {
    logo: {
      type: String
    },
    logoColor: {
      type: String,
      default: '#000000'
    },
    cart: {
      type: Object,
      required: true
    },
    custom: {
      type: Object
    },
    vivoNav: {
      type: Array,
      required: true
    },
    shopNav: {
      type: Array,
      required: true
    },
    shopNavPromo: {
      type: Object
    },
    shopNavExtraLinks: {
      type: Array
    },
    topLevelNav: {
      type: Array,
      required: true
    },
    valentines: {
      type: Object
    },
    oceanWeek: {
      type: Boolean,
      default: false
    },
    greenFriday: {
      type: Boolean,
      default: false
    },
    winter: {
      type: Object
    },
    longText: {
      type: Array,
      default: () => ['15% off everything', '10% to charity', '10 trees planted']
    },
    shortText: {
      type: Array,
      default: () => ['15% off', '10% to charity', '10 trees']
    }
  },

  components: {
    DesktopNavbarSubItem,
    DesktopNavbarShopSubItem,
    DesktopNavbarExpandableIcon
  },

  /**
   * Create the initial data object.
   *
   * @return {Object}
   */
  data () {
    return {
      shrinkPoint: 5,
      shrink: window.scrollY > this.shrinkPoint,
      prevShrink: false,
      currentScrollY: window.scrollY,
      previousScrollY: window.scrollY,
      ticking: false,
      visible: window.innerWidth >= breakpoints.md,
      searchEnabled: window.searchEnabled,
      subNav: null,
      subNavVisible: false,
      tickerNumber: 0,
      longTicker: this.longText[0],
      shortTicker: this.shortText[0],
      searchFormVisible: false
    };
  },

  computed: {
    campaign () {
      return this.custom || this.valentines || this.oceanWeek || this.greenFriday || this.winter;
    },
    textShade () {
      const shades = {
        light: 'text-white',
        dark: 'text-black-full'
      }
      return shades[this.custom?.textShade] ?? 'text-white'
    }
  },

  /**
   * Create an event listener that determines whether the navbar should be
   * shrunk as the user scrolls.
   */
  mounted () {
    window.addEventListener('scroll', () => {
      this.currentScrollY = window.scrollY;

      if (this.ticking) return;

      this.ticking = true;

      window.requestAnimationFrame(() => {
        this.ticking = false;
        this.shrink =
          this.currentScrollY > this.shrinkPoint &&
          this.currentScrollY > this.previousScrollY;
        this.subNav = this.shrink ? null : this.subNav;
        this.previousScrollY = this.currentScrollY;
        if (this.prevShrink != this.shrink) EventBus.$emit('navbarShrinkUpdated', this.shrink);
        this.prevShrink = this.shrink;
      });
    });

    EventBus.$on('toggleNavbarSize', (state) => {
      this.shrink = state;
      document.body.classList.toggle('body--no-scroll', state);
      EventBus.$emit('navbarShrinkUpdated', this.shrink);
    });

    if (this.oceanWeek || this.greenFriday) {
      setInterval(() => {
        this.tickerNumber += 1;
        this.longTicker = this.tickText(this.longText);
        this.shortTicker = this.tickText(this.shortText);
      }, 5000);
    }

    if (this.winter && this.shrink === false) {
      window.addEventListener('load', this.createSnowfall);
    }

    if (this.valentines && this.shrink === false) {
      window.addEventListener('load', this.createFallingHearts);
    }
  },

  watch: {
    shrink (newValue) {
      document.body.classList.toggle('body--desktop-navbar-shrunk');
      if (newValue === false && (this.winter || this.valentines)) {
        this.$nextTick(() => {
          if (this.winter) this.createSnowfall();
          if (this.valentines) this.createFallingHearts();
        });
      }
    }
  },

  methods: {
    openCartDrawer () {
      EventBus.$emit('cart-drawer-click', true);
    },

    toggleSubNav (subNav) {
      this.subNav = this.subNav != subNav ? subNav : null;
    },

    showSubNav (el, done) {
      // TweenMax.from(this.$refs.subNavContainer, 0.3, { height: 0, onComplete: done })
      gsap.set(el, {
        minHeight: '20%',
        height: 'auto',
        opacity: 1,
      });
      gsap.from(el, {
        duration: 0.2,
        minHeight: 0,
        height: 0,
        opacity: 0,
      });
    },

    hideSubNav (el, done) {
      gsap.to(el, {
        duration: 0.2,
        height: 0,
        opacity: 0,
        onComplete: done
      });
    },

    tickText (text) {
      if (this.tickerNumber >= text.length) this.tickerNumber = 0;
      return text[this.tickerNumber];
    },

    createSnowfall () {
      this.createSnowflakes('foreground');
      this.createSnowflakes('middleground');
      this.createSnowflakes('background');

      const tl01 = gsap.timeline({ repeat: -1, repeatRefresh: true });
      tl01.fromTo('.snowflake.foreground.one', { x: () => Math.random() * window.innerWidth, y: -5, opacity: 1 }, { y: 65, opacity: 0.5, duration: 3, ease: "rough({ template: none.out, strength: 0.2, points: 50, taper: 'both', randomize: true, clamp:  false})", stagger: () => Math.random() * 10 })
        .fromTo('.snowflake.foreground.two', { x: () => Math.random() * window.innerWidth, y: -5, opacity: 1 }, { y: 65, opacity: 0.5, duration: 3, ease: "rough({ template: none.out, strength: 0.2, points: 50, taper: 'both', randomize: true, clamp:  false})", stagger: () => Math.random() * 10 }, '-=1.5');

      const tl02 = gsap.timeline({ repeat: -1, repeatRefresh: true });
      tl02.fromTo('.snowflake.middleground.one', { x: () => Math.random() * window.innerWidth, y: -5, opacity: 0.8 }, { y: 65, opacity: 0.5, duration: 6, ease: "rough({ template: none.out, strength: 0.2, points: 50, taper: 'both', randomize: true, clamp:  false})", stagger: () => Math.random() * 10 })
        .fromTo('.snowflake.middleground.two', { x: () => Math.random() * window.innerWidth, y: -5, opacity: 0.8 }, { y: 65, opacity: 0.5, duration: 6, ease: "rough({ template: none.out, strength: 0.2, points: 50, taper: 'both', randomize: true, clamp:  false})", stagger: () => Math.random() * 10 }, '-=3');

      const tl03 = gsap.timeline({ repeat: -1, repeatRefresh: true });
      tl03.fromTo('.snowflake.background.one', { x: () => Math.random() * window.innerWidth, y: -5, opacity: 0.5 }, { y: 65, opacity: 0.5, duration: 10, ease: "rough({ template: none.out, strength: 0.2, points: 50, taper: 'both', randomize: true, clamp:  false})", stagger: () => Math.random() * 10 })
        .fromTo('.snowflake.background.two', { x: () => Math.random() * window.innerWidth, y: -5, opacity: 0.5 }, { y: 65, opacity: 0.5, duration: 10, ease: "rough({ template: none.out, strength: 0.2, points: 50, taper: 'both', randomize: true, clamp:  false})", stagger: () => Math.random() * 10 }, '-=5');
    },

    createSnowflakes (stage) {
      var decimal, multiplier;
      if (stage === 'foreground') {
        decimal = 10;
        multiplier = 3;
      }
      if (stage === 'middleground') {
        decimal = 100;
        multiplier = 5;
      }
      if (stage === 'background') {
        decimal = 1000;
        multiplier = 1;
      }

      for (let i = 0; i < Math.random() * decimal * multiplier + 10; i++) {
        const snowflake = document.createElement('div');
        snowflake.classList.add('snowflake', stage, 'one');
        document.getElementById('announcement-bar-canvas').appendChild(snowflake);
      }
      for (let i = 0; i < Math.random() * decimal * multiplier + 10; i++) {
        const snowflake = document.createElement('div');
        snowflake.classList.add('snowflake', stage, 'two');
        document.getElementById('announcement-bar-canvas').appendChild(snowflake);
      }
    },

    createFallingHearts () {
      this.createHearts('foreground');
      this.createHearts('middleground');
      this.createHearts('background');

      const tl01 = gsap.timeline({ repeat: -1, repeatRefresh: true });
      tl01.fromTo('.heart.foreground.one', { x: () => Math.random() * window.innerWidth, y: -50, opacity: 1 }, { y: 105, opacity: 0.5, duration: 3, ease: "rough({ template: none.out, strength: 0.2, points: 50, taper: 'both', randomize: true, clamp:  false})", stagger: () => Math.random() * 10, rotation: () => Math.random() * 100 })
        .fromTo('.heart.foreground.two', { x: () => Math.random() * window.innerWidth, y: -50, opacity: 1 }, { y: 105, opacity: 0.5, duration: 3, ease: "rough({ template: none.out, strength: 0.2, points: 50, taper: 'both', randomize: true, clamp:  false})", stagger: () => Math.random() * 10, rotation: () => Math.random() * -100 }, '-=1.5');

      const tl02 = gsap.timeline({ repeat: -1, repeatRefresh: true });
      tl02.fromTo('.heart.middleground.one', { x: () => Math.random() * window.innerWidth, y: -50, opacity: 0.8 }, { y: 105, opacity: 0.5, duration: 6, ease: "rough({ template: none.out, strength: 0.2, points: 50, taper: 'both', randomize: true, clamp:  false})", stagger: () => Math.random() * 10, rotation: () => Math.random() * 100 })
        .fromTo('.heart.middleground.two', { x: () => Math.random() * window.innerWidth, y: -50, opacity: 0.8 }, { y: 105, opacity: 0.5, duration: 6, ease: "rough({ template: none.out, strength: 0.2, points: 50, taper: 'both', randomize: true, clamp:  false})", stagger: () => Math.random() * 10, rotation: () => Math.random() * -100 }, '-=3');

      const tl03 = gsap.timeline({ repeat: -1, repeatRefresh: true });
      tl03.fromTo('.heart.background.one', { x: () => Math.random() * window.innerWidth, y: -50, opacity: 0.5 }, { y: 105, opacity: 0.5, duration: 10, ease: "rough({ template: none.out, strength: 0.2, points: 50, taper: 'both', randomize: true, clamp:  false})", stagger: () => Math.random() * 10, rotation: () => Math.random() * 100 })
        .fromTo('.heart.background.two', { x: () => Math.random() * window.innerWidth, y: -50, opacity: 0.5 }, { y: 105, opacity: 0.5, duration: 10, ease: "rough({ template: none.out, strength: 0.2, points: 50, taper: 'both', randomize: true, clamp:  false})", stagger: () => Math.random() * 10, rotation: () => Math.random() * -100 }, '-=5');
    },

    createHearts (stage) {
      var decimal, multiplier;
      if (stage === 'foreground') {
        decimal = 10;
        multiplier = 3;
      }
      if (stage === 'middleground') {
        decimal = 50;
        multiplier = 5;
      }
      if (stage === 'background') {
        decimal = 100;
        multiplier = 1;
      }

      for (let i = 0; i < Math.random() * decimal * multiplier + 10; i++) {
        const heart = document.createElement('div');
        heart.classList.add('heart', stage, 'one');
        document.getElementById('announcement-bar-canvas').appendChild(heart);
      }
      for (let i = 0; i < Math.random() * decimal * multiplier + 10; i++) {
        const heart = document.createElement('div');
        heart.classList.add('heart', stage, 'two');
        document.getElementById('announcement-bar-canvas').appendChild(heart);
      }
    },

    actionCustomLink (url) {
      if (url.indexOf('typeform') > -1) {
        const ref = typeformEmbed.makePopup(
          url,
          {
            mode: 'popup',
            hideScrollbars: true,
            onSubmit: function () {
              console.log('Typeform successfully submitted');
            }
          }
        );
        ref.open();
      } else {
        document.location.href = url;
      }
    }
  },

  destroyed () {
    window.removeEventListener('load', this.createSnowfall);
    window.removeEventListener('load', this.createFallingHearts);
  }
};
</script>

<style lang="sass" scoped>
  .custom .announcement-bar
    background-color: var(--custom-background-colour)
    background-image: var(--custom-background-image)
    background-repeat: no-repeat
    background-position: center
    background-size: cover

  .announcement-bar > div > div
    @apply z-10

  #announcement-bar-canvas
    @apply absolute w-full h-14 pointer-events-none z-0 overflow-hidden

  .logo
    @apply max-w-none

    &.winter
      &.sm
        @apply h-10
        top: -14px

      &.lg
        @apply h-14
        top: -18px

    &.valentines
      &.sm
        @apply h-10
        top: -10px

      &.lg
        @apply h-14
        top: -14px
</style>

<style lang="sass">
  .snowflake
    @apply absolute bg-white rounded-full
    top: -5px

    &.foreground
      width: 5px
      height: 5px
      z-index: 2

    &.middleground
      width: 3px
      height: 3px
      z-index: 1

    &.background
      width: 2px
      height: 2px

  .heart
    @apply absolute
    background-image: var(--heart-background-image)
    background-repeat: no-repeat
    top: -50px

    &.foreground
      width: 50px
      height: 50px
      z-index: 2

    &.middleground
      width: 20px
      height: 20px
      z-index: 1

    &.background
      width: 5px
      height: 5px
</style>
