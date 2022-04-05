<template>
  <svg class="cursor-pointer transform-origin-center transition-cubic-bezier focus:scale-1.4 hover:scale-1.4" xmlns="http://www.w3.org/2000/svg" viewBox="13159.181 -14962.819 12.944 12.944" @click="$emit('update-quantity')">
    <g transform="translate(11862 -15905)">
      <g transform="translate(1303.164 942.181)" v-if="type == 'plus'">
        <rect stroke="none" width="1.215" height="12.945" rx="0.608"/>
        <rect fill="none" x="0.5" y="0.5" width="0.215" height="11.945" rx="0.108"/>
      </g>

      <g transform="translate(1310.125 948.164) rotate(90)">
        <rect stroke="none" width="1.215" height="12.945" rx="0.608"/>
        <rect fill="none" x="0.5" y="0.5" width="0.215" height="11.945" rx="0.108"/>
      </g>
    </g>
  </svg>
</template>

<script>
export default {
  props: ['type']
};
</script>
