<template>
  <div class="main">
    <breadcrumbs link-name="Партнеры" />
    <div class="main--scrooll-btn" ref="scrollBtn" @click="scrollToTop" />
    <div class="news-detail--body px-[16px] md:px-0">
        <p class="news-detail--body--title">Партнеры</p>
        <div class="partners">
            <div class="partner w-[158px] h-[110px] md:w-[228px] md:h-[176px] flex flex-col">
                <div class="w-full flex justify-between md:justify-end px-[12px]">
                    <Tippy theme="dark" :content="content">
                        <img src="@/assets/icons/info.svg" class="md:hidden" alt="best" />
                    </Tippy>
                    <img src="@/assets/icons/crown.svg" alt="best" />
                </div>
                <img src="@/assets/icons/Acura.svg" class="w-[88px] h-[56px] md:w-[150px] md:h-[112px]" alt="Acura" />
            </div>
            <div class="partner w-[158px] h-[110px] md:w-[228px] md:h-[176px] flex flex-col">
                <div class="w-full flex justify-between md:justify-end px-[12px]">
                    <Tippy theme="dark" :content="content">
                        <img src="@/assets/icons/info.svg" class="md:hidden" alt="best" />
                    </Tippy>
                    <img src="@/assets/icons/crown.svg" alt="best" />
                </div>
                <img src="@/assets/icons/Acura.svg" class="w-[88px] h-[56px] md:w-[150px] md:h-[112px]" alt="Acura" />
            </div>
            <div class="partner w-[158px] h-[110px] md:w-[228px] md:h-[176px] flex flex-col">
                <div class="w-full flex justify-between md:justify-end px-[12px]">
                    <Tippy theme="dark" :content="content">
                        <img src="@/assets/icons/info.svg" class="md:hidden" alt="best" />
                    </Tippy>
                    <img src="@/assets/icons/crown.svg" alt="best" />
                </div>
                <img src="@/assets/icons/Acura.svg" class="w-[88px] h-[56px] md:w-[150px] md:h-[112px]" alt="Acura" />
            </div>
            <div class="partner w-[158px] h-[110px] md:w-[228px] md:h-[176px] flex flex-col">
                <div class="w-full flex justify-between md:justify-end px-[12px]">
                    <Tippy theme="dark" :content="content">
                        <img src="@/assets/icons/info.svg" class="md:hidden" alt="best" />
                    </Tippy>
                    <img src="@/assets/icons/crown.svg" alt="best" />
                </div>
                <img src="@/assets/icons/Acura.svg" class="w-[88px] h-[56px] md:w-[150px] md:h-[112px]" alt="Acura" />
            </div>
            <div class="partner w-[158px] h-[110px] md:w-[228px] md:h-[176px] flex flex-col">
                <div class="w-full flex justify-between md:justify-end px-[12px]">
                    <Tippy theme="dark" :content="content">
                        <img src="@/assets/icons/info.svg" class="md:hidden" alt="best" />
                    </Tippy>
                </div>
                <img src="@/assets/icons/Eicher.svg" class="w-[88px] h-[56px] md:w-[150px] md:h-[112px]" alt="Eicher" />
            </div>
            <div class="partner w-[158px] h-[110px] md:w-[228px] md:h-[176px] flex flex-col">
                <div class="w-full flex justify-between md:justify-end px-[12px]">
                    <Tippy theme="dark" :content="content">
                        <img src="@/assets/icons/info.svg" class="md:hidden" alt="best" />
                    </Tippy>
                </div>
                <img src="@/assets/icons/Nio.svg" class="w-[88px] h-[56px] md:w-[150px] md:h-[112px]" alt="Nio" />
            </div>
            <div class="partner w-[158px] h-[110px] md:w-[228px] md:h-[176px] flex flex-col">
                <div class="w-full flex justify-between md:justify-end px-[12px]">
                    <Tippy theme="dark" :content="content">
                        <img src="@/assets/icons/info.svg" class="md:hidden" alt="best" />
                    </Tippy>
                </div>
                <img src="@/assets/icons/Englon.svg" class="w-[88px] h-[56px] md:w-[150px] md:h-[112px]" alt="Englon" />
            </div>
            <div class="partner w-[158px] h-[110px] md:w-[228px] md:h-[176px] flex flex-col">
                <div class="w-full flex justify-between md:justify-end px-[12px]">
                    <Tippy theme="dark" :content="content">
                        <img src="@/assets/icons/info.svg" class="md:hidden" alt="best" />
                    </Tippy>
                </div>
                <img src="@/assets/icons/Englon.svg" class="w-[88px] h-[56px] md:w-[150px] md:h-[112px]" alt="Englon" />
            </div>
            <div class="partner w-[158px] h-[110px] md:w-[228px] md:h-[176px] flex flex-col">
                <div class="w-full flex justify-between md:justify-end px-[12px]">
                    <Tippy theme="dark" :content="content">
                        <img src="@/assets/icons/info.svg" class="md:hidden" alt="best" />
                    </Tippy>
                </div>
                <img src="@/assets/icons/Englon.svg" class="w-[88px] h-[56px] md:w-[150px] md:h-[112px]" alt="Englon" />
            </div>
            <div class="partner w-[158px] h-[110px] md:w-[228px] md:h-[176px] flex flex-col">
                <div class="w-full flex justify-between md:justify-end px-[12px]">
                    <Tippy theme="dark" :content="content">
                        <img src="@/assets/icons/info.svg" class="md:hidden" alt="best" />
                    </Tippy>
                </div>
                <img src="@/assets/icons/Englon.svg" class="w-[88px] h-[56px] md:w-[150px] md:h-[112px]" alt="Englon" />
            </div>
        </div>
        <div class="custom-container flex flex-col items-start my-[40px]">
            <p class="main--section--title">Наши Партнеры</p>
            <img src="@/assets/img/partners-map.png" class="min-w-[328px] min-h-[166px]" alt="map" />
        </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Breadcrumbs from "@/components/ui/breadcrumbs.vue";
import News from '@/components/main/News.vue';
import { ref, onMounted, computed } from 'vue';
import { Tippy } from 'vue-tippy'
import 'tippy.js/dist/tippy.css' // optional for styling

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
const content = (title) => {
    const div = document.createElement('div');
    div.innerHTML = `<span class="font-medium">ACURA</span><br /><span class="text-[#CF9D52]">Адрес:</span><br />ул. Достоевского, д. 19<br /><span class="text-[#CF9D52]">Подарок</span><br />Купон на скидку 20%`;
    return div;
};
</script>

<style scoped>
.partners {
    margin-bottom: 160px;
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
}
.partner {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #BBBBBB;
}
</style>
