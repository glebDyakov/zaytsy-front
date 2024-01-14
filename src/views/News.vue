<template>
  <div class="main">
    <breadcrumbs link-name="Новости"/>
    <div class="main--scrooll-btn" ref="scrollBtn" @click="scrollToTop" />
    <div class="main--content mb-[24px] sm:mb-0">
      <News
        :btnNextContent="btnNextContent"
        :isShowAll="false" />
      <button class="btn btn--minimized px-[98px] py-[14.5px] sm:hidden">Показать еще</button>
    </div>
    <div class="flex gap-5 mb-12">
      <img
        v-if="currentPage > 0"
        class="cursor-pointer"
        src="@/assets/icons/chevron-left.svg"
        width="10px"
        alt="chevron"
        @click="currentPage--" />
      <img
        v-else
        src="@/assets/icons/disabled-chevron-left.svg"
        width="10px"
        alt="chevron" />
      <div
        v-for="i in pagesCount"
        :key="i"
        class="w-[24px] text-center"
        :class="{'text-[#CF9D52] border-solid border-1 border-b border-[#CF9D52]': currentPage === i - 1, 'text-[#BBBBBB] cursor-pointer': currentPage !== i - 1}"
        @click="currentPage = i - 1">{{i}}</div>
      <img
        v-if="currentPage < pagesCount - 1"
        class="cursor-pointer"
        src="@/assets/icons/chevron-right.svg"
        width="10px"
        alt="chevron"
        @click="currentPage++" />
      <img
        v-else
        class="rotate-[180deg]"
        src="@/assets/icons/disabled-chevron-left.svg"
        width="10px"
        alt="chevron" />
    </div>
  </div>
</template>

<script setup lang="ts">
import Breadcrumbs from "@/components/ui/breadcrumbs.vue";
import News from '@/components/main/News.vue';
import { ref, onMounted } from 'vue';

const scrollBtn = ref(null);

const btnNextContent = ref('Подробнее');

const currentPage = ref(0);

const pagesCount = ref(5);

onMounted(() => {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
      scrollBtn.value.style.display = 'block';
    } else {
      scrollBtn.value.style.display = 'none';
    }
  });
  var match = window.matchMedia || window.msMatchMedia;
  if (match) {
    if ((
      (screen.width <= 640)
      || (window.matchMedia
        && window.matchMedia('only screen and (max-width: 640px)').matches)
    ))
      btnNextContent.value = 'Читать дальше'
  }
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
