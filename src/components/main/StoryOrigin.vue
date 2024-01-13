<template>
    <div class="main--section main--content">
        <div class="main--section main--section--content">
            <p class="main--section--title">Начало истории</p>
            <div class="main--section--new-story--body flex-col md:flex-row-reverse">
                <div class="main--section--new-story--body--item main--section--new-story--body--item--active md:w-[480px] h-[43px] md:h-[73px] lg:h-[110px] md:hidden flex">
                    <p 
                        v-if="selectedItem === 'NEKRASOV_AND_MAZAI'"
                        class="main--section--new-story--body--item--title">Некрасов и Мазай</p>
                    <p 
                        v-if="selectedItem === 'FROM_VEZHA_TO_KOSTROMA'"
                        class="main--section--new-story--body--item--title">От Вёжей до Костромы</p>
                    <p 
                        v-if="selectedItem === 'CITIZENS_AND_THE_CITY'"
                        class="main--section--new-story--body--item--title">Горожане и город</p>
                </div>
                <div class="main--section--new-story--body--aside min-h-[200px] px-[14px] pt-[8px] pb-[14px] md:px-[30px] md:pt-[30px] md:pb-[30px] bg-[length:160px_120px] md:bg-[length:242px_180px] lg:bg-[length:395px_295px]">
                    <p class="main--section--new-story--body--aside--title">Все мы знаем стихотворение Николая Алексеевича Некрасова «Дедушка Мазай и зайцы». Выдумку или быль нам рассказал Некрасов?</p>
                    <button class="btn btn--minimized w-[149px] min-h-[43px] px-[15px] py-[10px] md:w-[180px] md:max-h-[54px] md:px-[29px] md:py-[20px]"  @click="$router.push('start-story')">Подробнее</button>
                </div>
                <div class="main--section--new-story--body--items">
                    <div
                        class="main--section--new-story--body--item md:w-[480px] h-[43px] md:h-[73px] lg:h-[110px] flex"
                        :class="{'main--section--new-story--body--item--active hidden md:flex': selectedItem === 'NEKRASOV_AND_MAZAI'}"
                        @click="selectItem('NEKRASOV_AND_MAZAI')">
                        <p class="main--section--new-story--body--item--title">Некрасов и Мазай</p>
                    </div>
                    <div
                        class="main--section--new-story--body--item md:w-[480px] h-[43px] md:h-[73px] lg:h-[110px] flex"
                        :class="{'main--section--new-story--body--item--active hidden md:flex': selectedItem === 'FROM_VEZHA_TO_KOSTROMA'}"
                        @click="selectItem('FROM_VEZHA_TO_KOSTROMA')">
                        <p class="main--section--new-story--body--item--title">От Вёжей до Костромы</p>
                    </div>
                    <div
                        class="main--section--new-story--body--item md:w-[480px] h-[43px] md:h-[73px] lg:h-[110px] flex"
                        :class="{'main--section--new-story--body--item--active hidden md:flex': selectedItem === 'CITIZENS_AND_THE_CITY'}"
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
