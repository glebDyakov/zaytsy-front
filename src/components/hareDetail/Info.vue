<template>
  <div class="custom-container flex w-full flex-col items-start mb-[120px]">
    <dialog id="dialog" class="min-w-full min-h-full sm:min-w-0 sm:min-h-0 w-[840px] h-[468px] m-auto p-[30px]">
      <div class="flex justify-between sm:justify-end mb-[30px] sm:mb-[10px] ">
        <img class="w-[22px] h-[22px] sm:hidden" src="@/assets/icons/chevron-left.svg" alt="back" @click="step--" />
        <div class="flex">
          <p class="text-right text-[#CF9D52] cursor-pointer hidden sm:block" @click="closeTest">закрыть</p>
          <img class="cursor-pointer inline-block sm:hidden rotate-[45deg]" src="@/assets/icons/times_dialog.svg" alt="close" @click="closeTest" />
        </div>
      </div>
      <p class="mb-[8px]">Вопрос {{step + 1}} из {{questions.length}}</p>
      <progress class="w-full h-[8px] progress mb-[24px]" :value="100 / questions.length * (step + 1)" max="100" min="0" />
      <template v-if="step === 0">
        <p class="title mb-[24px]">Некий текст</p>
        <div class="galery grid-cols-2 sm:grid-cols-4 gap-[12px] sm:gap-[20px] mb-[30px]">
          <div v-for="photo in 4" :key="photo">
            <div v-if="selectedImg === photo" class="w-[24px] h-[24px] bg-[#CF9D52] rounded-full flex items-center justify-center absolute translate-x-[146px] translate-y-[+10px]">
              <div class="w-[16px] h-[16px] bg-[#fff] rounded-full" />
            </div>
            <img :src="`src/assets/img/photo${photo}.png`" class="cursor-pointer w-[158px] sm:w-[142px] md:w-[180px]" @click="selectedImg = photo" />
          </div>
        </div>
      </template>
      <template v-else-if="step === 1">
        <p class="title mb-[24px]">Некий текст</p>
        <form class="mb-[30px] flex flex-col gap-[14px]">
          <div v-for="(variant, i) in variants" :key="i" class="flex gap-[10px]">
            <input v-model="selectedVariant" :id="variant.value" name="variant" :value="variant.value" type="radio" class="accent-[darkgoldenrod]" />
            <label :for="variant.value">{{variant.display}}</label>
          </div>
        </form>
      </template>
      <template v-else-if="step === 2">
        <p class="title mb-[24px]">Некий текст</p>
        <div class="galery grid-cols-2 sm:grid-cols-4 gap-[12px] sm:gap-[20px] mb-[30px]">
          <div v-for="photo in 8" :key="photo">
            <div v-if="selectedImg2 === photo" class="w-[24px] h-[24px] bg-[#CF9D52] rounded-full flex items-center justify-center absolute translate-x-[146px] translate-y-[+10px]">
              <div class="w-[16px] h-[16px] bg-[#fff] rounded-full" />
            </div>
            <img :src="`src/assets/img/photo${photo}.png`" class="cursor-pointer" @click="selectedImg2 = photo" />
          </div>
        </div>
      </template>
      <div class="flex">
        <div v-if="step > 0" class="hidden sm:flex items-center gap-[10px] cursor-pointer" @click="step--">
          <img class="w-[22px] h-[22px]" src="@/assets/icons/chevron-left.svg" alt="back" />
          <p class="text-[#CF9D52]">назад</p>
        </div>
        <button class="btn btn--minimized w-full sm:w-[126px] h-[54px] flex items-center justify-center ml-auto" @click="next">Далее</button>
      </div>
    </dialog>
    <p class="main--section--title">Брандмейстер</p>
    <div class="flex flex-col-reverse md:flex-row gap-[20px]">
      <div class="flex flex-col lg:max-w-[680px] w-full justify-between">
        <span class="leading-[140%]">
          Не всё, то золото, даже если это называют «золотой ротой». В каждом городе были свои
          вольные босяки, готовые браться за любую работу и тут же спускать заработанное. Летом
          они ютились среди дров и лодок на берегу, а вот зимой им приходилось не сладко. Может
          поэтому в Костроме их прозвали
          <a href="#" class="text-[#CF9D52] cursor-pointer">зимогоры</a>.
        </span>
        <div class="mb-[12px] sm:mb-[30px]" />
        <div class="flex flex-col">
          <div class="flex flex-col sm:flex-row gap-[20px] w-full">
            <button class="flex max-h-[54px] bg-[#CF9D52] shadow-[2_4_10_0_rgba(207,157,82,0.25)] py-[14px] px-[22px] justify-center text-white">
              <img class="w-[22px] h-[22px] mr-[10px]" src="@/assets/icons/Media.svg" alt="media" />
              <span>Аудиогид</span>
            </button>
            <button class="flex max-h-[54px] bg-[#CF9D52] shadow-[2_4_10_0_rgba(207,157,82,0.25)] py-[14px] px-[22px] justify-center text-white" @click="openTest">
              <img class="w-[22px] h-[22px] mr-[10px]" src="@/assets/icons/gift.svg" alt="gift" />
              Подарок
            </button>
            <button class="flex max-h-[54px] bg-[#CF9D52] shadow-[2_4_10_0_rgba(207,157,82,0.25)] py-[14px] px-[22px] justify-center text-white">
              <img class="w-[22px] h-[22px] mr-[10px]" src="@/assets/icons/souvenirs.svg" alt="souvenirs" />
              Сувениры
            </button>
          </div>
          <div class="mt-[30px] hidden sm:block">
            <audio controls>
              <source :src="audioSource" type="audio/mp3">
            </audio>
          </div>
        </div>
      </div>
      <div
        class="flex flex-col p-[12px] lg:w-[480px] h-[435px] bg-no-repeat bg-cover bg-center"
        style="background-image: url('src/assets/img/Card.png')"
      >
        <p class="main--section--welcome--main--item--title">Брандмейстер</p>
        <div class="flex items-center">
          <img class="mr-[8px]" src="@/assets/icons/gps.svg" alt="location" />
          <p class="text-[14px] font-normal text-white">Пожарная каланча</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref, onMounted} from 'vue';
const dialog = ref(null);
const step = ref(0);
const selectedVariant = ref(null);
const questions = ref([
  {},
  {},
  {},
])
const variants = ref([
  {
    display: 'Некий текст',
    value: '1',
  },
  {
    display: 'Некий текст',
    value: '2',
  },
  {
    display: 'Некий текст',
    value: '3',
  },
  {
    display: 'Некий текст',
    value: '4',
  },
]);

const selectedImg = ref(null);

const selectedImg2 = ref(null);

onMounted(() => {
  dialog.value = document.querySelector('#dialog');
  if (variants.value.length)
    selectedVariant.value = variants.value[0].value;
});
const openTest = () => {
  dialog.value.showModal();
}
const closeTest = () => {
  dialog.value.close();
}
const next = () => {
  step.value++;
  if (step.value >= questions.value.length) {
    step.value = 0;
    selectedImg.value = null;
    selectedVariant.value = null;
    selectedImg2.value = null;
    closeTest();
  }
};
</script>

<style scoped>
#dialog::backdrop {
  background-color: rgba(41, 41, 41, 0.7);
}
.progress::-webkit-progress-value {
  background-color: #378A6F;
}
.progress::-webkit-progress-bar {
  background-color: #BBBBBB;
}
.galery {
  display: inline-grid;
}

.title {
  font-family: 'Book Antiqua';
  font-weight: 700;
  font-size: 28px;
}
</style>
