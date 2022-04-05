<template>
  <table class="comparison-table w-full">
    <thead>
      <td class="comparison-table__cell min-w-38"></td>
      <td v-for="(heading, index) in headings"
        :class="[
          'comparison-table__cell',
          { 'comparison-table__cell--featured': featuredCol == index },
          featuredCol != index ? 'min-w-32': 'min-w-44'
        ]"
        :key="'heading-' + index"
        v-html="heading">
      </td>
    </thead>

    <tbody>
      <tr v-for="(row, index) in data"
        :class="[
          { 'last-row': data.length - 1 == index }
        ]"
        :key="'row-' + index">
        <th class="comparison-table__cell font-bold text-left">{{ row.title }}</th>

        <td v-for="(col, index) in row.cols"
          :class="['comparison-table__cell', { 'comparison-table__cell--featured': featuredCol == index }]"
          :key="index">
          <svg class="w-8" xmlns="http://www.w3.org/2000/svg" viewBox="-4351.284 12696.018 30.082 30.082" v-if="col === true">
            <g transform="translate(-4351.284 12696.018)">
              <ellipse fill="#fff" cx="15.041" cy="15.041" rx="15.041" ry="15.041" transform="translate(0 0)" v-if="featuredCol == index"/>
              <path fill="none" stroke-width="4px" stroke="#b5d310" d="M0,4.839,3.628,8.873,13.99,0" transform="translate(8.828 10.807) rotate(-3)" />
            </g>
          </svg>

          <svg v-else-if="col === false || col === `false`"
            class="w-8" xmlns="http://www.w3.org/2000/svg" viewBox="-4754.284 12505.018 30.082 30.082">
            <g transform="translate(-5277 5457)">
              <g transform="translate(532.389 7057.898)">
                <line fill="none" stroke="#d90000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="4px" y2="15.393" transform="translate(10.885 0) rotate(45)"/>
                <line fill="none" stroke="#d90000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="4px" x1="15.393" transform="translate(0 0) rotate(45)"/>
              </g>
            </g>
          </svg>

          <div v-else v-html="col"></div>
        </td>
      </tr>

      <tr v-if="showEmptyRow"
        class="empty-row">
        <td class="comparison-table__cell comparison-table__cell--empty"></td>
        <td v-for="(heading, index) in headings"
          :class="['comparison-table__cell comparison-table__cell--empty', { 'comparison-table__cell--featured': featuredCol == index }]"
          :key="'empty-heading-' + index">
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  props: {
    headings: {
      type: Array,
      default: () => {
        return [];
      }
    },
    data: {
      type: Array,
      default: () => {
        return [];
      }
    },
    featuredCol: { type: Number },
    showEmptyRow: { type: Boolean, default: true }
  }
};
</script>

<style lang="sass" scoped>
  .comparison-table__cell
    @apply text-sm font-semibold

  .comparison-table__cell--featured
    @apply px-6 text-xs text-black-full border-green-thrive bg-green-thrive shadow-lg font-semibold

    ::v-deep span
      @apply block text-sm text-white font-bold

  tr.last-row .comparison-table__cell
    @apply text-xs font-medium

    ::v-deep span
      @apply block text-base

  tr.last-row .comparison-table__cell--featured
    @apply text-sm text-white border-black-full bg-black-full font-medium

    ::v-deep span
      @apply block text-base

  tr.empty-row .comparison-table__cell--featured
    @apply border-black-full bg-black-full rounded-b

  thead
    .comparison-table__cell
      @apply py-8 text-sm

      ::v-deep span
        @apply block font-extrabold

    .comparison-table__cell--featured
      @apply text-white rounded-t

      ::v-deep span
        @apply block text-white font-extrabold
</style>
