<template>
  <div class="BlogThreeArticles">
    <div v-if="title" class="md:hidden xl:block pt-3 pb-6">
      <h2 class="font-extrabold uppercase text-center tracking-wide text-lg xl:text-2xl">{{ title }}</h2>
    </div>

    <div class="flex flex-wrap justify-center md:flex-nowrap md:-mx-2">

      <div v-for="(article, index) in articles" :key="index"
        :index="index"
        class="w-full mb-3 md:mx-2 md:mb-4 contents-hover-zoom overflow-hidden">
        <div class="bg-cover bg-no-repeat bg-center pb-full relative"
          :style="{'background-image': 'url(' + article.image + ')'}">
          <a :href="article.url" class="flex flex-wrap content-center absolute h-full w-full bg-black-full-50 p-8 xl:p-12 cursor-pointer no-underline items-center">
            <div class="uppercase font-extrabold text-white tracking-wide leading-tight no-underline text-2xl md:text-base xl:text-2xl xxl:text-3xl" v-html="getArticleTitle(article.title)"></div>
            <div class="uppercase font-extrabold text-white tracking-wide leading-tight no-underline text-base absolute md:text-xs md:mb-1 xl:text-lg xl:mb-2" style="bottom: 2.5em;">{{ article.linkTitle ? article.linkTitle : '|| 'BlogThreeArticles.read_more' ||' }}</div>
          </a>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: false
    },
    articles: {
      type: Array,
      required: true
  	},
    options: {
      type: Object
    }
  },

  computed: {
    getArticleTitle () {
      return title => title.replace(/\|/g, "'");
    }
  }
};
</script>
