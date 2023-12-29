<template>
  <div class="header">
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
    <div class="contacts">
      <div class="contact">
        <img src="@/assets/icons/telegram.svg" alt="logo" width="20px" />
      </div>
      <div class="contact">
        <img src="@/assets/icons/whatsapp.svg" alt="logo" width="20px" />
      </div>
    </div>
  </div>
  <RouterView />
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
import { RouterView } from 'vue-router'
</script>
