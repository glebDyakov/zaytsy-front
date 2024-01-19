<template>
    <div class="main--section main--section--characters">
        <p class="text-[24px] sm:text-[36px] md:text-[44px] pr-[150px] sm:pr-[400px] md:pr-[0px] md:text-left md:self-start main--section--title main--section--characters--title">Городские персонажи</p>
        <div class="main--section--characters--body w-screen md:w-max">
            <img
                class="main--section--characters--body--arrow"
                src="@/assets/icons/chevron-left.svg"
                width="10px"
                alt="chevron"
                @click="scrollToPrevCharacter" />
            <div
                ref="slider"
                class="main--section--characters--body--items">
                <div class="main--section--characters--body--item md:min-w-[380px]">
                    <img class="max-w-[230px] sm:max-w-[230px] md:max-w-full sm:w-[230px] md:w-auto w-[158px] main--section--characters--body--item--img" src="@/assets/img/town_hero1.png" alt="character" />
                    <p class="main--section--characters--body--item--title text-[20px] sm:text-[24px] md:text-[24px]">Название</p>
                    <p class="main--section--characters--body--item--subtitle">Описание в 1-2 строчки</p>
                </div>
                <div class="main--section--characters--body--item md:min-w-[380px]">
                    <img class="max-w-[230px] sm:max-w-[230px] md:max-w-full sm:w-[230px] md:w-auto w-[158px] main--section--characters--body--item--img" src="@/assets/img/town_hero2.png" alt="character" />
                    <p class="main--section--characters--body--item--title text-[20px] sm:text-[24px] md:text-[24px]">Название</p>
                    <p class="main--section--characters--body--item--subtitle">Описание в 1-2 строчки</p>
                </div>
                <div class="main--section--characters--body--item md:min-w-[380px]">
                    <img class="max-w-[230px] sm:max-w-[230px] md:max-w-full sm:w-[230px] md:w-auto w-[158px] main--section--characters--body--item--img" src="@/assets/img/town_hero3.png" alt="character" />
                    <p class="main--section--characters--body--item--title text-[20px] sm:text-[24px] md:text-[24px]">Название</p>
                    <p class="main--section--characters--body--item--subtitle">Описание в 1-2 строчки</p>
                </div>
                <div class="main--section--characters--body--item md:min-w-[380px]">
                    <img class="max-w-[230px] sm:max-w-[230px] md:max-w-full sm:w-[230px] md:w-auto w-[158px] main--section--characters--body--item--img" src="@/assets/img/town_hero1.png" alt="character" />
                    <p class="main--section--characters--body--item--title text-[20px] sm:text-[24px] md:text-[24px]">Название</p>
                    <p class="main--section--characters--body--item--subtitle">Описание в 1-2 строчки</p>
                </div>
                <div class="main--section--characters--body--item md:min-w-[380px]">
                    <img class="max-w-[230px] sm:max-w-[230px] md:max-w-full sm:w-[230px] md:w-auto w-[158px] main--section--characters--body--item--img" src="@/assets/img/town_hero2.png" alt="character" />
                    <p class="main--section--characters--body--item--title text-[20px] sm:text-[24px] md:text-[24px]">Название</p>
                    <p class="main--section--characters--body--item--subtitle">Описание в 1-2 строчки</p>
                </div>
                <div class="main--section--characters--body--item md:min-w-[380px]">
                    <img class="max-w-[230px] sm:max-w-[230px] md:max-w-full sm:w-[230px] md:w-auto w-[158px] main--section--characters--body--item--img" src="@/assets/img/town_hero3.png" alt="character" />
                    <p class="main--section--characters--body--item--title text-[20px] sm:text-[24px] md:text-[24px]">Название</p>
                    <p class="main--section--characters--body--item--subtitle">Описание в 1-2 строчки</p>
                </div>
            </div>
            <img
                class="main--section--characters--body--arrow"
                src="@/assets/icons/chevron-right.svg"
                alt="chevron"
                width="10px"
                @click="scrollToNextCharacter" />
        </div>
    </div>
</template>

<script setup>
import {ref} from 'vue';
const slider  = ref(null);
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
