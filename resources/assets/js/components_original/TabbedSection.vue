<template>
    <div>
        <div class="mb-8 px-4 lg:mb-24">
            <ul class="justify-center list-none p-0 md:flex">
                <li
                    v-for="(tab, index) in tabs"
                    class="flex-1 w-full lg:flex-initial md:w-80 lg:w-104"
                    :key="index"
                >
                    <button
                        class="border-2 border-green-thrive font-extrabold h-full p-4 text-black text-xs tracking-normal uppercase w-full md:text-base lg:text-xl focus:no-outline hover:bg-green-thrive hover:text-white"
                        :class="{
                            'bg-green-thrive text-white': activeTab == tab,
                            'border-t-1 md:border-l-1 md:border-t-2': index > 0,
                            'border-b-1 md:border-r-1 md:border-b-2': index < tabs.length -1,
                        }"
                        @click.prevent="showTab(tab)"
                        v-text="tab"
                    />
                </li>
            </ul>
        </div>

        <slot :name="activeTab" />
    </div>
</template>

<script>
export default {
  props: ['tabs'],

  data () {
    return {
      activeTab: this.tabs[0]
    };
  },

  methods: {
    showTab (tab) {
      this.activeTab = tab;
    }
  }
};
</script>
