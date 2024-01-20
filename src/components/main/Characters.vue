<template>
    <div id="characters" class="main--section main--section--characters">
        <p class="main--section--title main--section--characters--title">Городские персонажи</p>
        <div class="main--section--characters--body">
            <img
                class="main--section--characters--body--arrow"
                src="@/assets/icons/chevron-left.svg"
                width="10px"
                alt="chevron"
                @click="scrollToPrevCharacter" />
            <div
                ref="slider"
                class="main--section--characters--body--items">
                <div class="main--section--characters--body--item min-w-[380px]">
                    <img class="main--section--characters--body--item--img" src="@/assets/img/town_hero1.png" alt="character" />
                    <p class="main--section--characters--body--item--title">Название</p>
                    <p class="main--section--characters--body--item--subtitle">Описание в 1-2 строчки</p>
                </div>
                <div class="main--section--characters--body--item min-w-[380px]">
                    <img class="main--section--characters--body--item--img" src="@/assets/img/town_hero2.png" alt="character" />
                    <p class="main--section--characters--body--item--title">Название</p>
                    <p class="main--section--characters--body--item--subtitle">Описание в 1-2 строчки</p>
                </div>
                <div class="main--section--characters--body--item min-w-[380px]">
                    <img class="main--section--characters--body--item--img" src="@/assets/img/town_hero3.png" alt="character" />
                    <p class="main--section--characters--body--item--title">Название</p>
                    <p class="main--section--characters--body--item--subtitle">Описание в 1-2 строчки</p>
                </div>
                <div class="main--section--characters--body--item min-w-[380px]">
                    <img class="main--section--characters--body--item--img" src="@/assets/img/town_hero1.png" alt="character" />
                    <p class="main--section--characters--body--item--title">Название</p>
                    <p class="main--section--characters--body--item--subtitle">Описание в 1-2 строчки</p>
                </div>
                <div class="main--section--characters--body--item min-w-[380px]">
                    <img class="main--section--characters--body--item--img" src="@/assets/img/town_hero2.png" alt="character" />
                    <p class="main--section--characters--body--item--title">Название</p>
                    <p class="main--section--characters--body--item--subtitle">Описание в 1-2 строчки</p>
                </div>
                <div class="main--section--characters--body--item min-w-[380px]">
                    <img class="main--section--characters--body--item--img" src="@/assets/img/town_hero3.png" alt="character" />
                    <p class="main--section--characters--body--item--title">Название</p>
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
import {onMounted, ref} from 'vue';
import {useRoute} from 'vue-router';
const slider  = ref(null);
onMounted(() => {
    const route = useRoute();
    if (route.hash === '#characters')
        window.scroll({top: document.querySelector('#characters').getBoundingClientRect().top});
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
