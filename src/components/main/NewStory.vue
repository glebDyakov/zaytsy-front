<template>
  <div class="main--section">
    <div class="main--section--content">
      <p class="main--section--title">Новая история</p>
      <div class="main--section--new-story--body flex-col md:flex-row">
        <div class="main--section--new-story--body--aside">
          <p class="main--section--new-story--body--aside--title">
            Узнайте историю произведения Н. А. Некрасова о дедушке Мазае и зайцах
          </p>
          <button class="btn btn--minimized">Подробнее</button>
        </div>
        <div class="main--section--new-story--body--items">
          <div
            class="main--section--new-story--body--item"
            :class="{
              'main--section--new-story--body--item--active': selectedItem === 'PROJECT_IDEA'
            }"
            @click="selectItem('PROJECT_IDEA')"
          >
            <p class="main--section--new-story--body--item--title">Идея проекта</p>
          </div>
          <div
            class="main--section--new-story--body--item"
            :class="{
              'main--section--new-story--body--item--active': selectedItem === 'PARTNERS_AND_GIFTS'
            }"
            @click="selectItem('PARTNERS_AND_GIFTS')"
          >
            <p class="main--section--new-story--body--item--title">Партнеры и подарки</p>
          </div>
          <div
            class="main--section--new-story--body--item"
            :class="{
              'main--section--new-story--body--item--active':
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