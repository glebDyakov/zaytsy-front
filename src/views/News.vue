<template>
  <div class="main">
    <breadcrumbs link-name="Новости"/>
    <div class="invisible md:visible sm:invisible  main--scrooll-btn" ref="scrollBtn" @click="scrollToTop" />
    <div class="main--content">
      <News
        :btnNextContent="btnNextContent"
        :isShowAll="false" />
    </div>
    <div class="flex gap-5 mb-12">
      <img
        class="main--section--characters--body--arrow"
        src="@/assets/icons/chevron-left.svg"
        width="10px"
        alt="chevron" />
      <span
        class="text-[#CF9D52] cursor-pointer"
        v-for="i in 5"
        :key="i">{{i}}</span>
      <img
        class="main--section--characters--body--arrow"
        src="@/assets/icons/chevron-right.svg"
        width="10px"
        alt="chevron" />
    </div>
  </div>
</template>

<script setup lang="ts">
import Breadcrumbs from "@/components/ui/breadcrumbs.vue";
import News from '@/components/main/News.vue';
import { ref, computed, onMounted } from 'vue';

const scrollBtn = ref(null);

const btnNextContent = computed(() => {
  var match = window.matchMedia || window.msMatchMedia;
  if (match) {
    if (!(
      (screen.width <= 640)
      || (window.matchMedia
        && window.matchMedia('only screen and (max-width: 640px)').matches)
    ))
      return 'Подробнее';
  }
  return;
});

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
