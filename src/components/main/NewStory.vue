<template>
  <div class="main--section ">
    <div class="main--section--content sm:max-w-[688px] md:max-w-[1180px] max-w-[328px]">
      <p class="text-[24px] sm:text-[36px] md:text-[44px] main--section--title">Новая история</p>
      <div class="main--section--new-story--body flex-col md:flex-row sm:flex-row">
        <div class="main--section--new-story--body--aside md:w-[680px] sm:w-[388px] w-[328px]">
          <p class="main--section--new-story--body--aside--title text-[15px] sm:text-[16px] md:text-[20px]">
            Узнайте историю произведения Н. А. Некрасова о дедушке Мазае и зайцах
          </p>
          <button class="btn btn--minimized w-[149px] md:w-[180px] sm:w-[161px]">Подробнее</button>
        </div>
        <div class="main--section--new-story--body--items">
          <div
            class="main--section--new-story--body--item md:w-[480px] sm:w-[280px] w-[328px]"
            :class="{
              'main--section--new-story--body--item--active': selectedItem === 'PROJECT_IDEA'
            }"
            @click="selectItem('PROJECT_IDEA')"
          >
            <p class="main--section--new-story--body--item--title text-[18px] sm:text-[18px] md:text-[20px]">Идея проекта</p>
          </div>
          <div
            class="main--section--new-story--body--item"
            :class="{
              'main--section--new-story--body--item--active': selectedItem === 'PARTNERS_AND_GIFTS'
            }"
            @click="selectItem('PARTNERS_AND_GIFTS')"
          >
            <p class="main--section--new-story--body--item--title text-[18px] sm:text-[18px] md:text-[20px]">Партнеры и подарки</p>
          </div>
          <div
            class="main--section--new-story--body--item"
            :class="{
              'main--section--new-story--body--item--active':
                selectedItem === 'LOOKING_FOR_A_NEW_HARE'
            }"
            @click="selectItem('LOOKING_FOR_A_NEW_HARE')"
          >
            <p class="main--section--new-story--body--item--title text-[18px] sm:text-[18px] md:text-[20px]">Ищем нового зайца</p>
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