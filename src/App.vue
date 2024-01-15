<template>
  <div
    class="header fixed z-[10]">
    <img src="@/assets/icons/logo.svg" alt="logo" width="80px" />
    <div class="nav">
      <p class="header--nav--label">Главная</p>
      <p class="header--nav--label">Начало истории</p>
      <p class="header--nav--label">Зайцы в Костроме</p>
      <p class="header--nav--label">Персонажи</p>
      <p class="header--nav--label">История</p>
      <p class="header--nav--label">Новости</p>
      <p class="header--nav--label">Партнеры</p>
      <p class="header--nav--label">Сувениры</p>
    </div>
    <div
      v-if="isDrawerOpened"
      class="contacts">
      <div class="flex items-center md:hidden cursor-pointer">
        <img src="@/assets/icons/close.svg" alt="logo" width="16px" @click="toggleDrawer()" />
      </div>
    </div>
    <div
      v-else
      class="contacts">
      <div class="contact">
        <img src="@/assets/icons/telegram.svg" alt="logo" width="20px" />
      </div>
      <div class="contact mr-[20px] md:mr-0">
        <img src="@/assets/icons/whatsapp.svg" alt="logo" width="20px" />
      </div>
      <div class="flex items-center md:hidden cursor-pointer">
        <img src="@/assets/icons/burger.svg" alt="logo" width="30px" @click="toggleDrawer()" />
      </div>
    </div>
  </div>
  <div class="relative top-[97px]">
    <div
      class="fixed bg-[#378A6F] w-[400px] h-screen top-0 md:hidden p-[40px] z-[5] transition-translate duration-150 ease-out translate-x-0"
      :class="{'translate-x-[-400px]': !isDrawerOpened}">
      <p class="header--nav--label mt-[97px] mb-[30px]">Главная</p>
      <p class="header--nav--label mb-[30px]">Начало истории</p>
      <p class="header--nav--label mb-[30px]">Зайцы в Костроме</p>
      <p class="header--nav--label mb-[30px]">Персонажи</p>
      <p class="header--nav--label mb-[30px]">История</p>
      <p class="header--nav--label mb-[30px]">Новости</p>
      <p class="header--nav--label mb-[30px]">Партнеры</p>
      <p class="header--nav--label">Сувениры</p>
    </div>
    <RouterView :class="{'': isDrawerOpened}" />
  </div>
  <div class="footer">
    <div class="footer--content">
      <div class="footer--content--header">
        <img src="@/assets/icons/logo.svg" alt="logo" width="40px" />
        <div class="nav">
          <p class="header--nav--label">Главная</p>
          <p class="header--nav--label">Начало истории</p>
          <p class="header--nav--label">Зайцы в Костроме</p>
          <p class="header--nav--label">Персонажи</p>
          <p class="header--nav--label">История</p>
          <p class="header--nav--label">Новости</p>
          <p class="header--nav--label">Партнеры</p>
          <p class="header--nav--label">Сувениры</p>
        </div>
        <p class="footer--content--subtitle--mobile">Мазайские зайцы, 2023</p>
        <div class="contacts">
          <div class="contact">
            <img src="@/assets/icons/telegram.svg" alt="logo" width="20px" />
          </div>
          <div class="contact">
            <img src="@/assets/icons/whatsapp.svg" alt="logo" width="20px" />
          </div>
        </div>
      </div>
      <div class="footer--content--divider" />
      <p class="footer--content--subtitle">Мазайские зайцы, 2023</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { RouterView } from 'vue-router'

const isDrawerOpened = ref(false);

const toggleDrawer = () => {
  isDrawerOpened.value = !isDrawerOpened.value;
}
</script>
