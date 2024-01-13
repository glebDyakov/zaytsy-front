<template>
    <div class="main--section main--content">
        <div class="main--section main--section--content">
            <p class="main--section--title">Начало истории</p>
            <div class="main--section--new-story--body flex-col md:flex-row-reverse">
                <div class="main--section--new-story--body--aside">
                    <p class="main--section--new-story--body--aside--title">Все мы знаем стихотворение Николая Алексеевича Некрасова «Дедушка Мазай и зайцы». Выдумку или быль нам рассказал Некрасов?</p>
                    <button class="btn btn--minimized"  @click="$router.push('start-story')">Подробнее</button>
                </div>
                <div class="main--section--new-story--body--items">
                    <div
                        class="main--section--new-story--body--item"
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
