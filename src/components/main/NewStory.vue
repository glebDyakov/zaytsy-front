<template>
  <div class="main--section">
    <div class="main--section--content mx-[16px] md:mx-[16px]">
      <p class="main--section--title">Новая история</p>
      <div class="main--section--new-story--body flex-col md:flex-row">
        <div class="main--section--new-story--body--item main--section--new-story--body--item--active md:w-[480px] h-[43px] md:h-[73px] lg:h-[110px] md:hidden flex">
            <p 
                v-if="selectedItem === 'PROJECT_IDEA'"
                class="main--section--new-story--body--item--title">Идея проекта</p>
            <p 
                v-else-if="selectedItem === 'PARTNERS_AND_GIFTS'"
                class="main--section--new-story--body--item--title">Партнеры и подарки</p>
            <p 
                v-else-if="selectedItem === 'LOOKING_FOR_A_NEW_HARE'"
                class="main--section--new-story--body--item--title">Ищем нового зайца</p>
        </div>
        <div class="main--section--new-story--body--aside min-h-[200px] px-[14px] pt-[8px] pb-[14px] md:px-[30px] md:pt-[30px] md:pb-[30px] bg-[length:160px_120px] md:bg-[length:242px_180px] lg:bg-[length:395px_295px]">
          <p class="main--section--new-story--body--aside--title">
            Узнайте историю произведения Н. А. Некрасова о дедушке Мазае и зайцах
          </p>
          <button class="btn btn--minimized w-[149px] min-h-[43px] px-[15px] py-[10px] md:w-[180px] md:max-h-[54px] md:px-[29px] md:py-[20px]flex justify-center items-center">Подробнее</button>
        </div>
        <div class="main--section--new-story--body--items">
          <div
            class="main--section--new-story--body--item md:w-[480px] h-[43px] md:h-[73px] lg:h-[110px] flex"
            :class="{
              'main--section--new-story--body--item--active hidden md:flex': selectedItem === 'PROJECT_IDEA'
            }"
            @click="selectItem('PROJECT_IDEA')"
          >
            <p class="main--section--new-story--body--item--title">Идея проекта</p>
          </div>
          <div
            class="main--section--new-story--body--item md:w-[480px] h-[43px] md:h-[73px] lg:h-[110px] flex"
            :class="{
              'main--section--new-story--body--item--active hidden md:flex': selectedItem === 'PARTNERS_AND_GIFTS'
            }"
            @click="selectItem('PARTNERS_AND_GIFTS')"
          >
            <p class="main--section--new-story--body--item--title">Партнеры и подарки</p>
          </div>
          <div
            class="main--section--new-story--body--item md:w-[480px] h-[43px] md:h-[73px] lg:h-[110px] flex"
            :class="{
              'main--section--new-story--body--item--active hidden md:flex':
                selectedItem === 'LOOKING_FOR_A_NEW_HARE'
            }"
            @click="selectItem('LOOKING_FOR_A_NEW_HARE')"
          >
            <p class="main--section--new-story--body--item--title">Ищем нового зайца</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const selectedItem = ref('PROJECT_IDEA')
const selectItem = (val) => {
  selectedItem.value = val
}
</script>

<style scoped></style>