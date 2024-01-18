<template>
  <div class="main">
    <breadcrumbs link-name="Сувениры" :addToRoute="'Наименование сувенира'" />
    <div class="main--scrooll-btn" ref="scrollBtn" @click="scrollToTop" />
    <div class="news-detail--body">
      <p class="news-detail--body--title">Брандмейстер</p>
      <div class="main--section--news--body--item--img news-detail--body--img" />
      <p class="main--section--news--body--item--subtitle news-detail--body--subtitle">В Статуэтка зайца Чиновника</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import Breadcrumbs from "@/components/ui/breadcrumbs.vue";
import { ref, onMounted } from 'vue';

const scrollBtn = ref(null);

onMounted(() => {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
      scrollBtn.value.style.display = 'block';
    } else {
      scrollBtn.value.style.display = 'none';
    }
  });
});

const scrollToTop = () => {
  window.scroll({
    top: 0,
    behavior: 'smooth'
  });
}
</script>

<style scoped>
</style>
