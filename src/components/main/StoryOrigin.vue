<template>
    <div class="main--section main--content">
        <div class="main--section main--section--content sm:max-w-[688px] md:max-w-[1180px] max-w-[328px]">
            <p class="text-[24px] sm:text-[36px] md:text-[44px] main--section--title">Начало истории</p>
            <div class="main--section--new-story--body flex-col md:flex-row-reverse sm:flex-row">
                <div class="main--section--new-story--body--aside md:w-[680px] sm:w-[388px] w-[328px]">
                    <p class="main--section--new-story--body--aside--title">Все мы знаем стихотворение Николая Алексеевича Некрасова «Дедушка Мазай и зайцы». Выдумку или быль нам рассказал Некрасов?</p>
                    <button class="btn btn--minimized w-[149px] md:w-[180px] sm:w-[161px] h-[42px] md:h-[54px] sm:h-[44px]"  @click="$router.push('start-story')">Подробнее</button>
                </div>
                <div class="main--section--new-story--body--items">
                    <div
                        class="main--section--new-story--body--item md:w-[480px] sm:w-[280px] w-[328px]"
                        :class="{'main--section--new-story--body--item--active': selectedItem === 'NEKRASOV_AND_MAZAI'}"
                        @click="selectItem('NEKRASOV_AND_MAZAI')">
                        <p class="main--section--new-story--body--item--title">Некрасов и Мазай</p>
                    </div>
                    <div
                        class="main--section--new-story--body--item"
                        :class="{'main--section--new-story--body--item--active': selectedItem === 'FROM_VEZHA_TO_KOSTROMA'}"
                        @click="selectItem('FROM_VEZHA_TO_KOSTROMA')">
                        <p class="main--section--new-story--body--item--title">От Вёжей до Костромы</p>
                    </div>
                    <div
                        class="main--section--new-story--body--item"
                        :class="{'main--section--new-story--body--item--active': selectedItem === 'CITIZENS_AND_THE_CITY'}"
                        @click="selectItem('CITIZENS_AND_THE_CITY')">
                        <p class="main--section--new-story--body--item--title">Горожане и город </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import {ref} from 'vue'
const selectedItem = ref('NEKRASOV_AND_MAZAI');
const selectItem = (val) => {
    selectedItem.value = val;
}
</script>

<style>

</style>
