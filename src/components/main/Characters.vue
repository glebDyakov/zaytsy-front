<template>
    <div class="main--section main--section--characters">
        <p class="main--section--title main--section--characters--title px-[16px] lg:px-0">{{title}}</p>
        <div class="main--section--characters--body w-screen lg:w-max px-[16px] lg:px-0">
            <img
                class="main--section--characters--body--arrow hidden lg:inline-block"
                src="@/assets/icons/chevron-left.svg"
                width="10px"
                alt="chevron"
                @click="scrollToPrevCharacter" />
            <div
                ref="slider"
                class="main--section--characters--body--items max-w-full overflow-x-scroll lg:overflow-x-hidden md:max-w-[1180px]">
                <div class="main--section--characters--body--item min-w-[158px] md:min-w-[230px] lg:min-w-[380px]">
                    <img class="main--section--characters--body--item--img" src="@/assets/img/town_hero1.png" alt="character" />
                    <p class="main--section--characters--body--item--title">Название</p>
                    <p class="main--section--characters--body--item--subtitle">Описание в 1-2 строчки</p>
                </div>
                <div class="main--section--characters--body--item min-w-[158px] md:min-w-[230px] lg:min-w-[380px]">
                    <img class="main--section--characters--body--item--img" src="@/assets/img/town_hero2.png" alt="character" />
                    <p class="main--section--characters--body--item--title">Название</p>
                    <p class="main--section--characters--body--item--subtitle">Описание в 1-2 строчки</p>
                </div>
                <div class="main--section--characters--body--item min-w-[158px] md:min-w-[230px] lg:min-w-[380px]">
                    <img class="main--section--characters--body--item--img" src="@/assets/img/town_hero3.png" alt="character" />
                    <p class="main--section--characters--body--item--title">Название</p>
                    <p class="main--section--characters--body--item--subtitle">Описание в 1-2 строчки</p>
                </div>
                <div class="main--section--characters--body--item min-w-[158px] md:min-w-[230px] lg:min-w-[380px]">
                    <img class="main--section--characters--body--item--img" src="@/assets/img/town_hero1.png" alt="character" />
                    <p class="main--section--characters--body--item--title">Название</p>
                    <p class="main--section--characters--body--item--subtitle">Описание в 1-2 строчки</p>
                </div>
                <div class="main--section--characters--body--item min-w-[158px] md:min-w-[230px] lg:min-w-[380px]">
                    <img class="main--section--characters--body--item--img" src="@/assets/img/town_hero2.png" alt="character" />
                    <p class="main--section--characters--body--item--title">Название</p>
                    <p class="main--section--characters--body--item--subtitle">Описание в 1-2 строчки</p>
                </div>
                <div class="main--section--characters--body--item min-w-[158px] md:min-w-[230px] lg:min-w-[380px]">
                    <img class="main--section--characters--body--item--img" src="@/assets/img/town_hero3.png" alt="character" />
                    <p class="main--section--characters--body--item--title">Название</p>
                    <p class="main--section--characters--body--item--subtitle">Описание в 1-2 строчки</p>
                </div>
            </div>
            <img
                class="main--section--characters--body--arrow hidden lg:inline-block"
                src="@/assets/icons/chevron-right.svg"
                alt="chevron"
                width="10px"
                @click="scrollToNextCharacter" />
        </div>
    </div>
</template>

<script setup>
import {ref, onMounted} from 'vue';
const slider  = ref(null);

const title = ref('зайцы')

onMounted(() => {
  var match = window.matchMedia || window.msMatchMedia;
  if (match) {
    if (!(
      (screen.width <= 640)
      || (window.matchMedia
        && window.matchMedia('only screen and (max-width: 640px)').matches)
    ))
      title.value = 'Городские персонажи'
  }
});

const scrollToPrevCharacter = () => {
    slider.value.scroll({
        left: slider.value.scrollLeft - 500,
        behavior: "smooth",
    });
}
const scrollToNextCharacter = () => {
    slider.value.scroll({
        left: slider.value.scrollLeft + 500,
        behavior: "smooth",
    });
}
</script>

<style scoped>

</style>
