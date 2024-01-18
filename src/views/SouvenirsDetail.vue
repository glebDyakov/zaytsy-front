<template>
  <div class="main">
    <breadcrumbs link-name="Сувениры" :addToRoute="'Наименование сувенира'">
      <template #trailing>
        <div class="cart">
          <svg class="absolute" width="31" height="22" viewBox="0 0 31 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1H6.27273L9.80545 18.8529C9.926 19.4667 10.2562 20.0181 10.7381 20.4106C11.2201 20.803 11.8232 21.0115 12.4418 20.9995H25.2545C25.8732 21.0115 26.4763 20.803 26.9582 20.4106C27.4402 20.0181 27.7704 19.4667 27.8909 18.8529L30 7.6665H7.59091" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <div class="relative left-[20px] top-[-20px] text-[#CF9D52] border border-1 border-[#CF9D52] rounded-3xl flex items-center justify-center bg-[#fff] w-[25px] h-[25px]">2</div>
        </div>
      </template>
    </breadcrumbs>
    <div class="flex gap-[10px]">
      <img src="@/assets/icons/chevron-left.svg" alt="back" width="8px" />
      <p class="text-[#CF9D52]">Назад</p>
    </div>
    <div class="main--scrooll-btn" ref="scrollBtn" @click="scrollToTop" />
    <div class="news-detail--body">
      <div>
        <div></div>
        <div></div>
      </div>
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
.cart {
  cursor: pointer;
  margin-left: auto;
  width: 60px;
  height: 60px;
  background: #378A6F;
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
