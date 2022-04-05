<template>
	<span :class="getBgClass" class="w-content bg-plaa-green rounded text-white text-xs uppercase tracking-normal px-2 py-1 mr-2">
		{{ getTag }}
	</span>
</template>

<script>
export default {
  props: {
    tag: {
      type: String
    }
  },

	computed: {
    getBgClass () {
      const classes = {
        strength: 'bg-plaa-red',
        rhino: 'bg-plaa-red',
        endurance: 'bg-plaa-purple',
        mustang: 'bg-plaa-purple',
        function: 'bg-plaa-blue',
        gorilla: 'bg-plaa-blue'
      };

      return classes[this.tag] ?? 'bg-plaa-green';
    },
    getTag () {
      const tags = {
        strength: '|| 'PlaaArticleTag.tag_strength' ||',
        rhino: '|| 'PlaaArticleTag.tag_strength' ||',
        endurance: '|| 'PlaaArticleTag.tag_strength' ||',
        mustang: '|| 'PlaaArticleTag.tag_strength' ||',
        function: '|| 'PlaaArticleTag.tag_strength' ||',
        gorilla: '|| 'PlaaArticleTag.tag_strength' ||',
				'Week 1': '|| 'PlaaArticleTag.tag_week1' ||',
				'Week 2': '|| 'PlaaArticleTag.tag_week2' ||',
				'Week 3': '|| 'PlaaArticleTag.tag_week3' ||',
				'Week 4': '|| 'PlaaArticleTag.tag_week4' ||',
				'Week 5': '|| 'PlaaArticleTag.tag_week5' ||',
				'Week 6': '|| 'PlaaArticleTag.tag_week6' ||',
				'all': '|| 'PlaaArticleTag.tag_all' ||',
				'breakfast': '|| 'PlaaArticleTag.tag_breakfast' ||',
				'lunch': '|| 'PlaaArticleTag.tag_lunch' ||',
				'dinner': '|| 'PlaaArticleTag.tag_dinner' ||',
				'dessert': '|| 'PlaaArticleTag.tag_dessert' ||',
				'snack': '|| 'PlaaArticleTag.tag_snack' ||'
      };

      return tags[this.tag] ?? this.tag;
    }
	}
}
</script>
