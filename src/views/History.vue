<template>
  <div class="main">
    <breadcrumbs link-name="История проекта" />
    <div class="main--scrooll-btn" ref="scrollBtn" @click="scrollToTop" />
    <div class="news-detail--body">
      <p class="news-detail--body--title">История проекта</p>
      <div class="flex gap-[20px]">
        <div class="main--section--history--body--img" />
        <p class="main--section--news--body--item--subtitle news-detail--body--subtitle">Задача организации, в особенности же консультация с широким активом представляет собой интересный эксперимент проверки глубокомысленных рассуждений. Противоположная точка зрения подразумевает, что акционеры крупнейших компаний, инициированные исключительно синтетически, призваны к ответу.<br /><br />Задача организации, в особенности же консультация с широким активом представляет собой интересный эксперимент проверки глубокомысленных рассуждений. Противоположная точка зрения подразумевает, что акционеры крупнейших компаний, инициированные исключительно синтетически, призваны к ответу.</p>
      </div>
      <p class="news-detail--body--title">Отзывы</p>
      <div class="flex flex-col justify-center items-center gap-[20px]">
        <div class="reviews flex w-full gap-[20px]">
            <div class="review">
                <div class="flex flex-col gap-[20px]">
                    <div class="main--section--history--body--review--img" />
                    <div>
                        <p class="main--section--history--body--review--title">Фамилия Имя</p>
                        <p class="main--section--history--body--review--title">13.11.2023</p>
                    </div>
                </div>
                <div class="flex flex-col gap-[20px]">
                    <p class="main--section--history--body--review--subtitle">Отзыв клиента. Используйте 1–2 предложения в 2–4 строчки. В идеале текст в отзывах должен быть одинакового веса (количество строк +- одинаковое), чтобы некоторые отзывы не казались тяжёлыми + длинные описания читает маленький процент людей</p>
                    <p class="main--section--history--body--review--read-more">Читать полностью</p>
                </div>
            </div>
            <div class="review">
                <div class="flex flex-col gap-[20px]">
                    <div class="main--section--history--body--review--img main--section--history--body--review--img--secondary" />
                    <div>
                        <p class="main--section--history--body--review--title">Фамилия Имя</p>
                        <p class="main--section--history--body--review--title">13.11.2023</p>
                    </div>
                </div>
                <div class="flex flex-col gap-[20px]">
                    <p class="main--section--history--body--review--subtitle">Отзыв клиента. Используйте 1–2 предложения в 2–4 строчки. В идеале текст в отзывах должен быть одинакового веса (количество строк +- одинаковое), чтобы некоторые отзывы не казались тяжёлыми + длинные описания читает маленький процент людей</p>
                </div>
            </div>
            <div class="review">
                <div class="flex flex-col gap-[20px]">
                    <div class="main--section--history--body--review--img main--section--history--body--review--img--secondary" />
                    <div>
                        <p class="main--section--history--body--review--title">Фамилия Имя</p>
                        <p class="main--section--history--body--review--title">13.11.2023</p>
                    </div>
                </div>
                <div class="flex flex-col gap-[20px]">
                    <p class="main--section--history--body--review--subtitle">Отзыв клиента. Используйте 1–2 предложения в 2–4 строчки. В идеале текст в отзывах должен быть одинакового веса (количество строк +- одинаковое), чтобы некоторые отзывы не казались тяжёлыми + длинные описания читает маленький процент людей</p>
                </div>
            </div>
            <div class="review">
                <div class="flex flex-col gap-[20px]">
                    <div class="main--section--history--body--review--img" />
                    <div>
                        <p class="main--section--history--body--review--title">Фамилия Имя</p>
                        <p class="main--section--history--body--review--title">13.11.2023</p>
                    </div>
                </div>
                <div class="flex flex-col gap-[20px]">
                    <p class="main--section--history--body--review--subtitle">Отзыв клиента. Используйте 1–2 предложения в 2–4 строчки. В идеале текст в отзывах должен быть одинакового веса (количество строк +- одинаковое), чтобы некоторые отзывы не казались тяжёлыми + длинные описания читает маленький процент людей</p>
                </div>
            </div>
        </div>
        <button class="show-more-btn flex items-center max-h-[54px] max-w-[210px] btn btn-minimized p-[24px] gap-[20px]">
            <p>Показать еще</p>
            <img src="@/assets/icons/down.svg" alt="down" />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Breadcrumbs from "@/components/ui/breadcrumbs.vue";
import News from '@/components/main/News.vue';
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
.main--section--history--body--img {
  background-color: #BBBBBB;
  height: 275px;
  min-width: 480px;
  margin-bottom: 16px;
  background-image: url('@/assets/icons/default.svg');
  background-size: 75px 75px;
  background-repeat:  no-repeat;
  background-position: center;
}
.show-more-btn {
    padding: 20px;
}
.reviews {
    flex-wrap: wrap;
}
.review {
    gap: 14px;
    padding: 16px;
    display: flex;
    background-color: #fff;
    box-shadow: 0px 0px 10px rgba(41, 41, 41, 0.25);
    width: 580px;
    height: 212px;
}
.main--section--history--body--review--subtitle {
    color: rgba(41, 41, 41, 1);
    font-weight: 400;
    font-size: 16px;
}
.main--section--history--body--review--read-more {
    color: rgba(207, 157, 82, 1);
    align-self: flex-end;
}
.main--section--history--body--review--img {
    background-color: #BBBBBB;
    width: 120px;
    height: 120px;
    background-image: url('@/assets/icons/default.svg');
    background-size: 75px 75px;
    background-repeat:  no-repeat;
    background-position: center;
}
.main--section--history--body--review--img--secondary {
    background-image: url('@/assets/img/review_default_avatar.png');
    background-size: auto auto;
}
.main--section--history--body--review--title {
    color: rgba(41, 41, 41, 1);
    font-weight: 500;
    font-size: 16px;
}
</style>
