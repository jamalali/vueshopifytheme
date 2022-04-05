<template>
  <section class="mx-4 lg:mx-20 -mt-2 lg:-mt-4">
    <div class="flex flex-col justify-center items-center mb-8 mt-8">
      <h2 class="font-extrabold text-2xl md:text-2xl lg:text-4xl xl:text-5xl mb-8">|| 'FAQ.title_text' ||</h2>

      <v-select
        class="vivo-select w-4/5 lg:w-2/5"
        placeholder="|| 'FAQ.category_drop_down_button' ||"
        :clearable="true"
        :searchable="true"
        :multiple="false"
        :options="categoriesData"
        :getOptionLabel="category => category.name"
        @input="categorySelected"
      >

      </v-select>
    </div>


    <div
      class="flex flex-col justify-center items-center mx-4 mb-20 hidden vivo-hidden parent-category"
      v-for="(category, cIndex) in categories"
      :key="cIndex"
      :data-parent-category="category.name.toLowerCase().replace(' ', '-')"
    >
      <h2 class="font-extrabold text-center text-2xl md:text-2xl lg:text-4xl xl:text-5xl mb-8">{{category.name}}</h2>

      <div
        v-if="category.subCategories === null"
        class="flex flex-row flex-wrap justify-between items-start accordion-container"
      >
        <template v-for="(question, qIndex) in category.questions">
          <accordion
            :key="qIndex"
            class="border-b"
            v-if="question.question.length > 0"
            :heading="question.question"
            :images="question.images"
          >
            <div v-html="question.answer"></div>
          </accordion>
        </template>
      </div>

      <div
        v-else
      >
        <div
          class="flex flex-col flex-wrap justify-center items-center mt-12 subcategory-container"
          v-for="(subCategory, sCIndex) in category.subCategories"
          :key="sCIndex"
        >
          <h5 class="font-extrabold text-center text-xl md:text-xl lg:text-2xl xl:text-3xl mb-6 mt-4">{{subCategory.name}}</h5>
          <div
            class="flex flex-row flex-wrap justify-between items-start accordion-container"
          >
            <template v-for="(question, qIndex) in subCategory.questions">
              <accordion
                :key="qIndex"
                class="border-b"
                v-if="question.question.length > 0"
                :heading="question.question"
                :images="question.images"
              >
                <div v-html="question.answer"></div>
              </accordion>
            </template>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<style scoped>
.accordion-container div {
  flex-basis: 90%;
}
@media (min-width: 992px) {
  .accordion-container div {
    flex-basis: 45%;
  }
}
</style>

<style>
/* Not scoped so we can style child component, because of named class no clashes shall occur. */
.accordion-container div h3 {
  @apply text-lg font-extrabold;
}

.accordion-container div p {
  @apply text-sm font-light;
}

@media (min-width: 992px) {
  .accordion-container div h3 {
    @apply text-2xl font-extrabold;
  }

  .accordion-container div p {
    @apply text-lg font-light;
  }
}
</style>

<script>
export default {
  props: {
    images: {
      type: Object
    }
  },

  data() {
    return {
      categories: [
        {
          name: `|| 'FAQ.general_category' ||`,
          questions: [
            {
              question: `|| 'FAQ.question_1' ||`,
              answer: `|| 'FAQ.answer_1' ||`
            },
            {
              question: `|| 'FAQ.question_2' ||`,
              answer: `|| 'FAQ.answer_2' ||`
            },
            {
              question: `|| 'FAQ.question_3' ||`,
              answer: `|| 'FAQ.answer_3' ||`
            },
            {
              question: `|| 'FAQ.question_4' ||`,
              answer: `|| 'FAQ.answer_4' ||`
            },
            {
              question: `|| 'FAQ.question_5' ||`,
              answer: `|| 'FAQ.answer_5' ||`
            },
            {
              question: `|| 'FAQ.question_6' ||`,
              answer: `|| 'FAQ.answer_6' ||`
            },
            {
              question: `|| 'FAQ.question_7' ||`,
              answer: `|| 'FAQ.answer_7' ||`
            },
            {
              question: `|| 'FAQ.question_8' ||`,
              answer: `|| 'FAQ.answer_8' ||`
            },
            {
              question: `|| 'FAQ.question_9' ||`,
              answer: `|| 'FAQ.answer_9' ||`
            },
            {
              question: `|| 'FAQ.question_10' ||`,
              answer: `|| 'FAQ.answer_10' || `
            },
            {
              question: `|| 'FAQ.question_11' ||`,
              answer: `|| 'FAQ.answer_11' ||`
            },
            {
              question: `|| 'FAQ.question_12' ||`,
              answer: `|| 'FAQ.answer_12' ||`
            },
            {
              question: `|| 'FAQ.question_13' ||`,
              answer: `|| 'FAQ.answer_13' ||`
            },
            {
              question: `|| 'FAQ.question_14' ||`,
              answer: `|| 'FAQ.answer_14' ||`
            },
            {
              question: `|| 'FAQ.question_15' ||`,
              answer: `|| 'FAQ.answer_15' ||`
            },
            {
              question: `|| 'FAQ.question_16' ||`,
              answer: `|| 'FAQ.answer_16' ||`
            }
          ],
          subCategories: null
        },
        {
          name: `|| 'FAQ.products_category' ||`,
          subCategories: [
            {
              name: `|| 'FAQ.b12_title' ||`,
              questions: [
                {
                  question: `|| 'FAQ.question_112' ||`,
                  answer: `|| 'FAQ.answer_112' ||`
                },
                {
                  question: `|| 'FAQ.question_113' ||`,
                  answer: `|| 'FAQ.answer_113' ||`
                },
                {
                  question: `|| 'FAQ.question_114' ||`,
                  answer: `|| 'FAQ.answer_114' ||`
                },
                {
                  question: `|| 'FAQ.question_115' ||`,
                  answer: `|| 'FAQ.answer_115' ||`
                },
                {
                  question: `|| 'FAQ.question_116' ||`,
                  answer: `|| 'FAQ.answer_116' ||`
                },
              ]
            },
            {
              name: `|| 'FAQ.creatine_title' ||`,
              questions: [
                {
                  question: `|| 'FAQ.question_72' ||`,
                  answer: `|| 'FAQ.answer_72' ||`
                },
                {
                  question: `|| 'FAQ.question_73' ||`,
                  answer: `|| 'FAQ.answer_73' ||`
                },
                {
                  question: `|| 'FAQ.question_74' ||`,
                  answer: `|| 'FAQ.answer_74' ||`
                },
                {
                  question: `|| 'FAQ.question_75' ||`,
                  answer: `|| 'FAQ.answer_75' ||`
                },
                {
                  question: `|| 'FAQ.question_76' ||`,
                  answer: `|| 'FAQ.answer_76' ||`
                },
                {
                  question: `|| 'FAQ.question_77' ||`,
                  answer: `|| 'FAQ.answer_77' ||`
                },
                {
                  question: `|| 'FAQ.question_78' ||`,
                  answer: `|| 'FAQ.answer_78' ||`
                },
                {
                  question: `|| 'FAQ.question_79' ||`,
                  answer: `|| 'FAQ.answer_79' ||`
                },
                {
                  question: `|| 'FAQ.question_80' ||`,
                  answer: `|| 'FAQ.answer_80' ||`
                },
                {
                  question: `|| 'FAQ.question_81' ||`,
                  answer: `|| 'FAQ.answer_81' ||`
                },
                {
                  question: `|| 'FAQ.question_82' ||`,
                  answer: `|| 'FAQ.answer_82' ||`
                },
              ]
            },
            {
              name: `|| 'FAQ.d3_title' ||`,
              questions: [
                {
                  question: `|| 'FAQ.question_132' ||`,
                  answer: `|| 'FAQ.answer_132' ||`
                },
                {
                  question: `|| 'FAQ.question_133' ||`,
                  answer: `|| 'FAQ.answer_133' ||`
                },
                {
                  question: `|| 'FAQ.question_134' ||`,
                  answer: `|| 'FAQ.answer_134' ||`
                },
                {
                  question: `|| 'FAQ.question_135' ||`,
                  answer: `|| 'FAQ.answer_135' || `
                },
                {
                  question: `|| 'FAQ.question_136' ||`,
                  answer: `|| 'FAQ.answer_136' ||`
                },
              ]
            },
            {
              name: `|| 'FAQ.maca_title' ||`,
              questions: [
                {
                  question: `|| 'FAQ.question_103' ||`,
                  answer: `|| 'FAQ.answer_103' ||`
                },
                {
                  question: `|| 'FAQ.question_104' ||`,
                  answer: `|| 'FAQ.answer_104' ||`
                },
                {
                  question: `|| 'FAQ.question_105' ||`,
                  answer: `|| 'FAQ.answer_105' ||`
                },
                {
                  question: `|| 'FAQ.question_106' ||`,
                  answer: `|| 'FAQ.answer_106' ||`
                },
                {
                  question: `|| 'FAQ.question_107' ||`,
                  answer: `|| 'FAQ.answer_107' ||`
                },
                {
                  question: `|| 'FAQ.question_108' ||`,
                  answer: `|| 'FAQ.answer_108' ||`
                },
                {
                  question: `|| 'FAQ.question_109' ||`,
                  answer: `|| 'FAQ.answer_109' ||`
                },
                {
                  question: `|| 'FAQ.question_110' ||`,
                  answer: `|| 'FAQ.answer_110' ||`
                },
                {
                  question: `|| 'FAQ.question_111' ||`,
                  answer: `|| 'FAQ.answer_111' ||`
                },
              ]
            },
            {
              name: `|| 'FAQ.magic_coffee_title' ||`,
              questions: [
                {
                  question: `|| 'FAQ.question_148' ||`,
                  answer: `|| 'FAQ.answer_148' ||`
                },
                {
                  question: `|| 'FAQ.question_149' ||`,
                  answer: `|| 'FAQ.answer_149' ||`
                },
                {
                  question: `|| 'FAQ.question_150' ||`,
                  answer: `|| 'FAQ.answer_150' ||`
                },
                {
                  question: `|| 'FAQ.question_151' ||`,
                  answer: `|| 'FAQ.answer_151_html' ||`
                },
                {
                  question: `|| 'FAQ.question_152' ||`,
                  answer: `|| 'FAQ.answer_152' ||`
                },
                {
                  question: `|| 'FAQ.question_153' ||`,
                  answer: `|| 'FAQ.answer_153' ||`
                },
                {
                  question: `|| 'FAQ.question_154' ||`,
                  answer: `|| 'FAQ.answer_154' ||`
                },
                {
                  question: `|| 'FAQ.question_155' ||`,
                  answer: `|| 'FAQ.answer_155' ||`
                },
              ]
            },
            {
              name: `|| 'FAQ.magic_lattes_title' ||`,
              questions: [
                {
                  question: `|| 'FAQ.question_137' ||`,
                  answer: `|| 'FAQ.answer_137_html' ||`
                },
                {
                  question: `|| 'FAQ.question_138' ||`,
                  answer: `|| 'FAQ.answer_138' ||`
                },
                {
                  question: `|| 'FAQ.question_139' ||`,
                  answer: `|| 'FAQ.answer_139' ||`
                },
                {
                  question: `|| 'FAQ.question_140' ||`,
                  answer: `|| 'FAQ.answer_140_html' ||`
                },
                {
                  question: `|| 'FAQ.question_141' ||`,
                  answer: `|| 'FAQ.answer_141_html' ||`
                },
                {
                  question: `|| 'FAQ.question_142' ||`,
                  answer: `|| 'FAQ.answer_142' ||`
                },
                {
                  question: `|| 'FAQ.question_143' ||`,
                  answer: `|| 'FAQ.answer_143' ||`
                },
                {
                  question: `|| 'FAQ.question_144' ||`,
                  answer: `|| 'FAQ.answer_144' ||`
                },
                {
                  question: `|| 'FAQ.question_145' ||`,
                  answer: `|| 'FAQ.answer_145_html' ||`
                },
                {
                  question: `|| 'FAQ.question_146' ||`,
                  answer: `|| 'FAQ.answer_146' ||`
                },
                {
                  question: `|| 'FAQ.question_147' ||`,
                  answer: `|| 'FAQ.answer_147' ||`
                },
                {
                  question: `|| 'FAQ.question_147_2' ||`,
                  answer: `|| 'FAQ.answer_147_2_html' ||`
                },
              ]
            },
            {
              name: `|| 'FAQ.matcha_title' ||`,
              questions: [
                {
                  question: `|| 'FAQ.question_97' ||`,
                  answer: `|| 'FAQ.answer_97' ||`
                },
                {
                  question: `|| 'FAQ.question_98' ||`,
                  answer: `|| 'FAQ.answer_98' ||`
                },
                {
                  question: `|| 'FAQ.question_99' ||`,
                  answer: `|| 'FAQ.answer_99' ||`
                },
                {
                  question: `|| 'FAQ.question_100' ||`,
                  answer: `|| 'FAQ.answer_100' ||`
                },
                {
                  question: `|| 'FAQ.question_101' ||`,
                  answer: `|| 'FAQ.answer_101' ||`
                },
                {
                  question: `|| 'FAQ.question_102' ||`,
                  answer: `|| 'FAQ.answer_102' ||`
                },
              ]
            },
            {
              name: `|| 'FAQ.omega_title' ||`,
              questions: [
                {
                  question: `|| 'FAQ.question_117' ||`,
                  answer: `|| 'FAQ.answer_117' ||`
                },
                {
                  question: `|| 'FAQ.question_118' ||`,
                  answer: `<p>|| 'FAQ.answer_118_part_1' ||</p>

                  <p>|| 'FAQ.answer_118_part_2' ||</p>`
                },
                {
                  question: `|| 'FAQ.question_119' ||`,
                  answer: `|| 'FAQ.answer_119' ||`
                },
                {
                  question: `|| 'FAQ.question_120' ||`,
                  answer: `|| 'FAQ.answer_120' ||`
                },
                {
                  question: `|| 'FAQ.question_121' ||`,
                  answer: `|| 'FAQ.answer_121' ||`
                },
                {
                  question: `|| 'FAQ.question_122' ||`,
                  answer: `|| 'FAQ.answer_122' ||`
                },
                {
                  question: `|| 'FAQ.question_123' ||`,
                  answer: `|| 'FAQ.answer_123' ||`
                },
                {
                  question: `|| 'FAQ.question_124' ||`,
                  answer: `|| 'FAQ.answer_124' ||`
                },
                {
                  question: `|| 'FAQ.question_125' ||`,
                  answer: `|| 'FAQ.answer_125' ||`
                },
                {
                  question: `|| 'FAQ.question_126' ||`,
                  answer: `|| 'FAQ.answer_126' ||`
                },
                {
                  question: `|| 'FAQ.question_127' ||`,
                  answer: `|| 'FAQ.answer_127' ||`
                },
                {
                  question: `|| 'FAQ.question_128' ||`,
                  answer: `|| 'FAQ.answer_128' ||`
                },
                {
                  question: `|| 'FAQ.question_129' ||`,
                  answer: `|| 'FAQ.answer_129' ||`
                },
                {
                  question: `|| 'FAQ.question_130' ||`,
                  answer: `|| 'FAQ.answer_130' ||`
                },
                {
                  question: `|| 'FAQ.question_131' ||`,
                  answer: `|| 'FAQ.answer_131' ||`
                },
              ]
            },
            {
              name: `|| 'FAQ.perform_title' ||`,
              questions: [
                {
                  question: `|| 'FAQ.question_17' ||`,
                  answer: `|| 'FAQ.answer_17' ||`
                },
                {
                  question: `|| 'FAQ.question_18' ||`,
                  answer: `|| 'FAQ.answer_18' ||`
                },
                {
                  question: `|| 'FAQ.question_19' ||`,
                  answer: `|| 'FAQ.answer_19' ||`
                },
                {
                  question: `|| 'FAQ.question_20' ||`,
                  answer: `|| 'FAQ.answer_20' ||`
                },
                {
                  question: `|| 'FAQ.question_21' ||`,
                  answer: `|| 'FAQ.answer_21' ||`
                },
                {
                  question: `|| 'FAQ.question_22' ||`,
                  answer: `|| 'FAQ.answer_22' ||`
                },
                {
                  question: `|| 'FAQ.question_23' ||`,
                  answer: `|| 'FAQ.answer_23' ||`
                },
                {
                  question: `|| 'FAQ.question_24' ||`,
                  answer: `|| 'FAQ.answer_24' ||`
                },
                {
                  question: `|| 'FAQ.question_25' ||`,
                  answer: `|| 'FAQ.answer_25' ||`
                },
                {
                  question: `|| 'FAQ.question_26' ||`,
                  answer: `|| 'FAQ.answer_26' ||`
                },
                {
                  question: `|| 'FAQ.question_27' ||`,
                  answer: `|| 'FAQ.answer_27' ||`
                },
                {
                  question: `|| 'FAQ.question_28' ||`,
                  answer: `|| 'FAQ.answer_28' || `
                },
                {
                  question: `|| 'FAQ.question_29' ||`,
                  answer: `|| 'FAQ.answer_29' ||`
                },
                {
                  question: `|| 'FAQ.question_30' ||`,
                  answer: `|| 'FAQ.answer_30' ||`
                }
              ]
            },
            {
              name: `|| 'FAQ.ritual_title' ||`,
              questions: [
                {
                  question: `|| 'FAQ.question_56' ||`,
                  answer: `|| 'FAQ.answer_56' ||`
                },
                {
                  question: `|| 'FAQ.question_57' ||`,
                  answer: `|| 'FAQ.answer_57' ||`
                },
                {
                  question: `|| 'FAQ.question_58' ||`,
                  answer: `|| 'FAQ.answer_58' ||`
                },
                {
                  question: `|| 'FAQ.question_59' ||`,
                  answer: `|| 'FAQ.answer_59' ||`
                },
              ]
            },
            {
              name: `|| 'FAQ.sustain_title' ||`,
              questions: [
                {
                  question: `|| 'FAQ.question_60' ||`,
                  answer: `|| 'FAQ.answer_60' ||`
                },
                {
                  question: `|| 'FAQ.question_61' ||`,
                  answer: `|| 'FAQ.answer_61' ||`
                },
                {
                  question: `|| 'FAQ.question_62' ||`,
                  answer: `|| 'FAQ.answer_62' ||`
                },
                {
                  question: `|| 'FAQ.question_63' ||`,
                  answer: `|| 'FAQ.answer_63' ||`
                },
                {
                  question: `|| 'FAQ.question_64' ||`,
                  answer: `|| 'FAQ.answer_64' ||`
                },
                {
                  question: `|| 'FAQ.question_65' ||`,
                  answer: `|| 'FAQ.answer_65' ||`
                },
                {
                  question: `|| 'FAQ.question_66' ||`,
                  answer: `|| 'FAQ.answer_66' ||`
                },
                {
                  question: `|| 'FAQ.question_67' ||`,
                  answer: `|| 'FAQ.answer_67' ||`
                },
                {
                  question: `|| 'FAQ.question_68' ||`,
                  answer: `|| 'FAQ.answer_68' ||`
                },
                {
                  question: `|| 'FAQ.question_69' ||`,
                  answer: `|| 'FAQ.answer_69' ||`
                },
                {
                  question: `|| 'FAQ.question_70' ||`,
                  answer: `|| 'FAQ.answer_70' ||`
                },
                {
                  question: `|| 'FAQ.question_71' ||`,
                  answer: `|| 'FAQ.answer_71' ||`
                },
              ]
            },
            {
              name: `|| 'FAQ.thrive_title' ||`,
              questions: [
                {
                  question: `|| 'FAQ.question_83' ||`,
                  answer: `|| 'FAQ.answer_83' ||`
                },
                {
                  question: `|| 'FAQ.question_84' ||`,
                  answer: `|| 'FAQ.answer_84' ||`
                },
                {
                  question: `|| 'FAQ.question_85' ||`,
                  answer: `|| 'FAQ.answer_85' ||`
                },
                {
                  question: `|| 'FAQ.question_86' ||`,
                  answer: `|| 'FAQ.answer_86_part_1' ||
                    || 'FAQ.answer_86_part_2' ||
                    || 'FAQ.answer_86_part_3' ||
                    || 'FAQ.answer_86_part_4' ||
                    || 'FAQ.answer_86_part_5' ||
                    || 'FAQ.answer_86_part_6' ||
                    || 'FAQ.answer_86_part_7' ||`
                },
                {
                  question: `|| 'FAQ.question_87' ||`,
                  answer: `|| 'FAQ.answer_87' ||`
                },
                {
                  question: `|| 'FAQ.question_88' ||`,
                  answer: `|| 'FAQ.answer_88' ||`
                },
                {
                  question: `|| 'FAQ.question_89' ||`,
                  answer: `|| 'FAQ.answer_89' ||`
                },
                {
                  question: `|| 'FAQ.question_90' ||`,
                  answer: `|| 'FAQ.answer_90' ||`
                },
                {
                  question: `|| 'FAQ.question_91' ||`,
                  answer: `|| 'FAQ.answer_91' ||`
                },
                {
                  question: `|| 'FAQ.question_92' ||`,
                  answer: `|| 'FAQ.answer_92' ||`
                },
                {
                  question: `|| 'FAQ.question_93' ||`,
                  answer: `|| 'FAQ.answer_93' ||`
                },
                {
                  question: `|| 'FAQ.question_94' ||`,
                  answer: `|| 'FAQ.answer_94' ||`
                },
                {
                  question: `|| 'FAQ.question_95' ||`,
                  answer: `|| 'FAQ.answer_95' ||`
                },
                {
                  question: `|| 'FAQ.question_96' ||`,
                  answer: `|| 'FAQ.answer_96' ||`
                },
              ]
            },
            {
              name: `|| 'FAQ.vmulti_title' ||`,
              questions: [
                {
                  question: `|| 'FAQ.question_189' ||`,
                  answer: `|| 'FAQ.answer_189' ||`
                },
                {
                  question: `|| 'FAQ.question_190' ||`,
                  answer: `|| 'FAQ.answer_190' ||`
                },
                {
                  question: `|| 'FAQ.question_191' ||`,
                  answer: "<p>|| 'FAQ.answer_191_part_1' ||</p><p>|| 'FAQ.answer_191_part_2' ||</p>"
                },
                {
                  question: `|| 'FAQ.question_192' ||`,
                  answer: "<p>|| 'FAQ.answer_192_part_1' ||</p><p>|| 'FAQ.answer_192_part_2' ||</p>"
                },
                {
                  question: `|| 'FAQ.question_193' ||`,
                  answer: `|| 'FAQ.answer_193' ||`
                },
                {
                  question: `|| 'FAQ.question_194' ||`,
                  answer: `|| 'FAQ.answer_194' ||`
                },
                {
                  question: `|| 'FAQ.question_195' ||`,
                  answer: `|| 'FAQ.answer_195' ||`
                },
                {
                  question: `|| 'FAQ.question_196' ||`,
                  answer: "<p>|| 'FAQ.answer_196_part_1' ||</p><p>|| 'FAQ.answer_196_part_2' ||</p>"
                },
                {
                  question: `|| 'FAQ.question_197' ||`,
                  answer: "<p>|| 'FAQ.answer_197_part_1' ||</p><p>|| 'FAQ.answer_197_part_2' ||</p>"
                },
                {
                  question: `|| 'FAQ.question_198' ||`,
                  answer: `|| 'FAQ.answer_198' ||`
                },
                {
                  question: `|| 'FAQ.question_199' ||`,
                  answer: `|| 'FAQ.answer_199' ||`
                },
                {
                  question: `|| 'FAQ.question_200' ||`,
                  answer: `|| 'FAQ.answer_200' ||`
                }
              ]
            },
            {
              name: `|| 'FAQ.whole_title' ||`,
              questions: [
                {
                  question: `|| 'FAQ.question_31' ||`,
                  answer: `|| 'FAQ.answer_31_html' ||`
                },
                {
                  question: `|| 'FAQ.question_32' ||`,
                  answer: `|| 'FAQ.answer_32' ||`
                },
                {
                  question: `|| 'FAQ.question_33' ||`,
                  answer: `|| 'FAQ.answer_33' ||`
                },
                {
                  question: `|| 'FAQ.question_34' ||`,
                  answer: `|| 'FAQ.answer_34' ||`
                },
                {
                  question: `|| 'FAQ.question_35' ||`,
                  answer: `|| 'FAQ.answer_35' ||`
                },
                {
                  question: `|| 'FAQ.question_36' ||`,
                  answer: `|| 'FAQ.answer_36' ||`
                },
                {
                  question: `|| 'FAQ.question_37' ||`,
                  answer: `|| 'FAQ.answer_37' ||`
                },
                {
                  question: `|| 'FAQ.question_38' ||`,
                  answer: `|| 'FAQ.answer_38' ||`
                },
                {
                  question: `|| 'FAQ.question_39' ||`,
                  answer: `|| 'FAQ.answer_39' ||`
                },
                {
                  question: `|| 'FAQ.question_40' ||`,
                  answer: `|| 'FAQ.answer_40_html' ||`
                },
                {
                  question: `|| 'FAQ.question_41' ||`,
                  answer: `|| 'FAQ.answer_41' ||`
                },
                {
                  question: `|| 'FAQ.question_42' ||`,
                  answer: `|| 'FAQ.answer_42' ||`
                },
                {
                  question: `|| 'FAQ.question_43' ||`,
                  answer: `|| 'FAQ.answer_43' ||`
                },
                {
                  question: `|| 'FAQ.question_44' ||`,
                  answer: `|| 'FAQ.answer_44_html' ||`
                },
                {
                  question: `|| 'FAQ.question_45' ||`,
                  answer: `|| 'FAQ.answer_45' ||`
                },
                {
                  question: `|| 'FAQ.question_46' ||`,
                  answer: `|| 'FAQ.answer_46' ||`
                },
                {
                  question: `|| 'FAQ.question_47' ||`,
                  answer: `|| 'FAQ.answer_47' ||`
                },
                {
                  question: `|| 'FAQ.question_48' ||`,
                  answer: `|| 'FAQ.answer_48' ||`
                },
                {
                  question: `|| 'FAQ.question_49' ||`,
                  answer: `<p>|| 'FAQ.answer_49_part_1' ||</p>

                  <p>|| 'FAQ.answer_49_part_2' ||</p>

                  <a class="font-bold hover:text-green-thrive" href="|| 'FAQ.answer_49_part_3' ||" target="_blank">www.vivolife.co.uk/whole</a>

                  <p>|| 'FAQ.answer_49_part_4' ||</p>

                  <a class="font-bold hover:text-green-thrive" href="|| 'FAQ.answer_49_part_5' ||" target="_blank">labdoor.com/rankings/protein</a>`
                },
                {
                  question: `|| 'FAQ.question_50' ||`,
                  answer: `<p>|| 'FAQ.answer_50_part_1_html' ||</p>

                  <p>|| 'FAQ.answer_50_part_2' ||</p>

                  <p>|| 'FAQ.answer_50_part_3' ||</p>`
                },
                {
                  question: `|| 'FAQ.question_51' ||`,
                  answer: `|| 'FAQ.answer_51' ||`
                },
                {
                  question: `|| 'FAQ.question_52' ||`,
                  answer: `|| 'FAQ.answer_52_html' ||`
                },
                {
                  question: `|| 'FAQ.question_53' ||`,
                  answer: `|| 'FAQ.answer_53' ||`
                },
                {
                  question: `|| 'FAQ.question_54' ||`,
                  answer: `<p>|| 'FAQ.answer_54_part_1_html' ||</p>

                  <p>|| 'FAQ.answer_54_part_2' ||</p>

                  <p>|| 'FAQ.answer_54_part_3' ||</p>`
                },
                {
                  question: `|| 'FAQ.question_55' ||`,
                  answer: `<p>|| 'FAQ.answer_55_part_1_html' ||</p>

                  <p>|| 'FAQ.answer_55_part_2' ||</p>

                  <p>|| 'FAQ.answer_55_part_3' ||</p>

                  <p>|| 'FAQ.answer_55_part_4' ||</p>`
                },
              ]
            }
          ]
        },
        {
          name: `|| 'FAQ.payment_title' ||`,
          questions: [
            {
              question: `|| 'FAQ.question_156' ||`,
              answer: `|| 'FAQ.answer_156' ||`
            },
            {
              question: `|| 'FAQ.question_157' ||`,
              answer: `|| 'FAQ.answer_157' ||`
            },
            {
              question: `|| 'FAQ.question_158' ||`,
              answer: `|| 'FAQ.answer_158' ||`
            },
            {
              question: `|| 'FAQ.question_159' ||`,
              answer: `|| 'FAQ.answer_159' ||`
            },
          ],
          subCategories: null
        },
        {
          name: `|| 'FAQ.shipping_title' ||`,
          questions: [
            {
              question: `|| 'FAQ.question_160' ||`,
              answer: `<p>|| 'FAQ.answer_160_part_1' ||</p>

              <p>|| 'FAQ.answer_160_part_2' ||</p>`
            },
            {
              question: `|| 'FAQ.question_161' ||`,
              answer: `|| 'FAQ.answer_161' ||`
            },
            {
              question: `|| 'FAQ.question_162' ||`,
              answer: `|| 'FAQ.answer_162' ||`
            },
            {
              question: `|| 'FAQ.question_163' ||`,
              answer: `|| 'FAQ.answer_163_html' ||`
            },
            {
              question: `|| 'FAQ.question_164' ||`,
              answer: `|| 'FAQ.answer_164_html' ||`
            },
            {
              question: `|| 'FAQ.question_165' ||`,
              answer: `|| 'FAQ.answer_165_html' ||`
            },
            {
              question: `|| 'FAQ.question_166' ||`,
              answer: `|| 'FAQ.answer_166' ||`
            },
            {
              question: `|| 'FAQ.question_167' ||`,
              answer: `|| 'FAQ.answer_167' ||`
            },
            {
              question: `|| 'FAQ.question_168' ||`,
              answer: `|| 'FAQ.answer_168' ||`
            },
            {
              question: `|| 'FAQ.question_169' ||`,
              answer: `|| 'FAQ.answer_169' ||`
            },
            {
              question: `|| 'FAQ.question_170' ||`,
              answer: `|| 'FAQ.answer_170' ||`
            },
            {
              question: `|| 'FAQ.question_171' ||`,
              answer: `|| 'FAQ.answer_171' ||`
            },
            {
              question: `|| 'FAQ.question_172' ||`,
              answer: `|| 'FAQ.answer_172' ||`
            },
            {
              question: `|| 'FAQ.question_173' ||`,
              answer: `|| 'FAQ.answer_173' ||`
            },
            {
              question: `|| 'FAQ.question_174' ||`,
              answer: `|| 'FAQ.answer_174' ||`
            },
            {
              question: `|| 'FAQ.question_175' ||`,
              answer: `|| 'FAQ.answer_175' ||`
            },
            {
              question: `|| 'FAQ.question_176' ||`,
              answer: `|| 'FAQ.answer_176' ||`
            },
            {
              question: `|| 'FAQ.question_177' ||`,
              answer: `|| 'FAQ.answer_177' ||`
            },
            {
              question: `|| 'FAQ.question_178' ||`,
              answer: `|| 'FAQ.answer_178' ||`
            },
          ],
          subCategories: null
        },
        {
          name: `|| 'FAQ.subscriptions_title' ||`,
          questions: [
            {
              question: `|| 'FAQ.question_179' ||`,
              answer: `<p>|| 'FAQ.answer_179_part_1' ||</p>
              <ol>
                  <li>|| 'FAQ.answer_179_part_2_html' ||</li>
                  <li>|| 'FAQ.answer_179_part_3_html' ||</li>
                  <li>|| 'FAQ.answer_179_part_4_html' ||</li>
                  <li>|| 'FAQ.answer_179_part_5_html' ||</li>
              </ol>
              <p>|| 'FAQ.answer_179_part_6_html' ||</p>`,
              images: {
                mobile: {
                  src: this.images.howItWorks[0],
                  alt: 'Creating a subscription'
                },
                desktop: {
                  src: this.images.howItWorks[1],
                  alt: 'Creating a subscription'
                }
              }
            },
            {
              question: `|| 'FAQ.question_180' ||`,
              answer: `<p>|| 'FAQ.answer_180_part_1' ||</p>
              <p>|| 'FAQ.answer_180_part_2_html' ||</p>
              <p>|| 'FAQ.answer_180_part_3' ||</p>
              <ol>
                  <li>|| 'FAQ.answer_180_part_4_html' ||</li>
                  <li>|| 'FAQ.answer_180_part_5' ||</li>
                  <li>|| 'FAQ.answer_180_part_6_html' ||</li>
              </ol>
              <p>|| 'FAQ.answer_180_part_7_html' ||</p>`,
              images: {
                mobile: {
                  src: this.images.accountLogin[0],
                  alt: 'Creating an account / Login'
                },
                desktop: {
                  src: this.images.accountLogin[1],
                  alt: 'Creating an account / Login'
                }
              }
            },
            {
              question: `|| 'FAQ.question_181' ||`,
              answer: `<p>|| 'FAQ.answer_181_part_1_html' ||</p>
              <ol>
                  <li>|| 'FAQ.answer_181_part_2_html' ||</li>
                  <li>|| 'FAQ.answer_181_part_3_html' ||</li>
                  <li>|| 'FAQ.answer_181_part_4_html' ||</li>
                  <li>|| 'FAQ.answer_181_part_5_html' ||</li>
                  <li>|| 'FAQ.answer_181_part_6_html' ||</li>
              </ol>`
            },
            {
              question: `|| 'FAQ.question_182' ||`,
              answer: `<p>|| 'FAQ.answer_182_part_1_html' ||</p>
              <ol>
                  <li>|| 'FAQ.answer_182_part_2_html' ||</li>
                  <li>|| 'FAQ.answer_182_part_3_html' ||</li>
                  <li>|| 'FAQ.answer_182_part_4_html' ||</li>
                  <li>|| 'FAQ.answer_182_part_5_html' ||</li>
                  <li>|| 'FAQ.answer_182_part_6_html' ||</li>
              </ol>`
            },
            {
              question: `|| 'FAQ.question_183' ||`,
              answer: `<p>|| 'FAQ.answer_183_part_1_html' ||</p>
              <ol>
                  <li>|| 'FAQ.answer_183_part_2_html' ||</li>
                  <li>|| 'FAQ.answer_183_part_3_html' ||</li>
                  <li>|| 'FAQ.answer_183_part_4_html' ||</li>
                  <li>|| 'FAQ.answer_183_part_5_html' ||</li>
                  <li>|| 'FAQ.answer_183_part_6_html' ||</li>
              </ol>`,
              images: {
                mobile: {
                  src: this.images.manageYourSubscription[0],
                  alt: 'Swapping flavours or products'
                },
                desktop: {
                  src: this.images.manageYourSubscription[1],
                  alt: 'Swapping flavours or products'
                }
              }
            },
            {
              question: `|| 'FAQ.question_184' ||`,
              answer: `<p>|| 'FAQ.answer_184_part_1_html' ||</p>
              <ol>
                  <li>|| 'FAQ.answer_184_part_2_html' ||</li>
                  <li>|| 'FAQ.answer_184_part_3_html' ||</li>
                  <li>|| 'FAQ.answer_184_part_4_html' ||</li>
                  <li>|| 'FAQ.answer_184_part_5_html' ||</li>
                  <li>|| 'FAQ.answer_184_part_6_html' ||</li>
                  <li>|| 'FAQ.answer_184_part_7_html' ||</li>
              </ol>`
            },
            {
              question: `|| 'FAQ.question_185' ||`,
              answer: `<p>|| 'FAQ.answer_185_part_1_html' ||</p>
              <ol>
                  <li>|| 'FAQ.answer_185_part_2_html' ||</li>
                  <li>|| 'FAQ.answer_185_part_3_html' ||</li>
                  <li>|| 'FAQ.answer_185_part_4_html' ||</li>
                  <li>|| 'FAQ.answer_185_part_5_html' ||</li>
              </ol>`
            },
            {
              question: `|| 'FAQ.question_186' ||`,
              answer: `<p>|| 'FAQ.answer_186_part_1_html' ||</p>
              <ol>
                  <li>|| 'FAQ.answer_186_part_2_html' ||</li>
                  <li>|| 'FAQ.answer_186_part_3_html' ||</li>
                  <li>|| 'FAQ.answer_186_part_4_html' ||</li>
                  <li>|| 'FAQ.answer_186_part_5_html' ||</li>
                  <li>|| 'FAQ.answer_186_part_6_html' ||</li>
              </ol>`
            },
            {
              question: `|| 'FAQ.question_187' ||`,
              answer: `<p>|| 'FAQ.answer_187_part_1_html' ||</p>
              <ol>
                  <li>|| 'FAQ.answer_187_part_2_html' ||</li>
                  <li>|| 'FAQ.answer_187_part_3_html' ||</li>
                  <li>|| 'FAQ.answer_187_part_4_html' ||</li>
              </ol>`
            },
            {
              question: `|| 'FAQ.question_188' ||`,
              answer: `<p>|| 'FAQ.answer_188_part_1_html' ||</p>
              <ol>
                  <li>|| 'FAQ.answer_188_part_2_html' ||</li>
                  <li>|| 'FAQ.answer_188_part_3_html' ||</li>
                  <li>|| 'FAQ.answer_188_part_4_html' ||</li>
              </ol>`
            },
          ],
          subCategories: null
        },
      ]
    }
  },

  computed: {
    categoriesData() {
      return this.categories;
    }
  },

  methods: {
    categorySelected(category) {
      if(jQuery('.parent-category:visible').length == 0) {
        this.fadeInCategory(category);
        return;
      }
      jQuery('.parent-category:visible').fadeOut(() => {
        this.fadeInCategory(category);
      });
    },

    fadeInCategory(category) {
        const catName = category.name.toLowerCase().replace(' ', '-');
        if(catName && catName.length) {
          jQuery(`.parent-category[data-parent-category=${catName}]`).fadeIn();
        }
    }
  }
}
</script>
