<template>
  <div class="flex w-content">
    <template v-for="(article, index) in orderedArticles">
      <plaa-article-card
        :key="index"
        :blog="article.blog"
        :url="article.url"
        :image-src="article.image"
        :title="article.title"
        :author-firstname="article.authorFirstname"
        :time="article.time"
        :workout-week="article.workoutWeek"
        :workout-num="article.workoutNum"
        :tags="article.tags"
        :meal="article.meal"
      ></plaa-article-card>
    </template>
  </div>
</template>

<script>
import PlaaArticleCard from './PlaaArticleCard';

export default {
  props: {
    articles: {
      type: Array,
      required: true
    }
  },

  computed: {
    orderedArticles: function () {
      return _.orderBy(this.articles, 'workoutNum');
    }
  },

  components: {
    PlaaArticleCard
  }
};
</script>
