<template>
  <div class="main">
    <div class="flex w-full justify-between items-center">
        <breadcrumbs link-name="Сувениры">
          <template #trailing>
            <div class="cart">
              <svg class="absolute" width="31" height="22" viewBox="0 0 31 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1H6.27273L9.80545 18.8529C9.926 19.4667 10.2562 20.0181 10.7381 20.4106C11.2201 20.803 11.8232 21.0115 12.4418 20.9995H25.2545C25.8732 21.0115 26.4763 20.803 26.9582 20.4106C27.4402 20.0181 27.7704 19.4667 27.8909 18.8529L30 7.6665H7.59091" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <div class="relative left-[20px] top-[-20px] text-[#CF9D52] border border-1 border-[#CF9D52] rounded-3xl flex items-center justify-center bg-[#fff] w-[25px] h-[25px]">2</div>
            </div>
          </template>
        </breadcrumbs>
    </div>
    <div class="main--scrooll-btn" ref="scrollBtn" @click="scrollToTop" />
    <div class="main--content">
        <div class="main--section">
            <div class="main--section--news--header">
                <p class="main--section--news--header--title">Сувениры</p>
                <div v-if="isShowAll" class="main--section--news--header--show-all" @click="showAll">
                    <p class="main--section--news--header--show-all--label">Показать все</p>
                    <img class="main--section--news--header--show-all--icon" src="../../assets/icons/chevron-left.svg" alt="show all" width="8px" />
                </div>
            </div>
            <div class="mb-[20px] flex w-full justify-between">
                <div @mouseleave="isShowCategoriesMenu = false">
                  <div class="flex items-center gap-5" @mouseenter="isShowCategoriesMenu = true">
                    <p class="main--section--news--header--subtitle">Категория товара</p>
                    <div v-if="selectedCategories.length"  class="flex gap-[8px]">
                      <div class="w-[20px] h-[20px] bg-[#CF9D52] rounded-[10px] text-[#fff] flex items-center justify-center text-noraml text-[15px]">{{selectedCategories.length}}</div>
                      <img class="cursor-pointer" src="@/assets/icons/times.svg" alt="close" @click="selectedCategories = []">
                    </div>
                    <svg v-else class="cursor-pointer" width="20" height="12" viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M18 2L10 10L2 2" stroke="#CF9D52" stroke-width="1.5" stroke-linecap="square"/>
                    </svg>
                  </div>
                  <div class="absolute pointer-events-none">
                    <div class="divide-y w-[224px] h-[240px] rounded-[10px] shadow flex flex-col items-center py-[12px] bg-[#FFF] relative transition-opacity pointer-events-auto" :class="{'opacity-[0] pointer-events-none': !isShowCategoriesMenu}">
                      <div class="px-[12px] cursor-pointer h-[48px] w-full text-center flex items-center">
                        <input v-model="selectedCategories" name="category" value="все" type="checkbox" class="checkbox mr-[3px]" />
                        <p class="text-[16px] font-normal text-[#292929]">все</p>
                      </div>
                      <div class="px-[12px] cursor-pointer h-[48px] w-full text-center flex items-center">
                        <input v-model="selectedCategories" name="category" value="Скульптуры" type="checkbox" class="checkbox mr-[3px]" />
                        <p class="text-[16px] font-normal text-[#292929]">Скульптуры</p>
                      </div>
                      <div class="px-[12px] cursor-pointer h-[48px] w-full text-center flex items-center">
                        <input v-model="selectedCategories" name="category" value="Кружки" type="checkbox" class="checkbox mr-[3px]" />
                        <p class="text-[16px] font-normal text-[#292929]">Кружки</p>
                      </div>
                      <div class="px-[12px] cursor-pointer h-[48px] w-full text-center flex items-center">
                        <input v-model="selectedCategories" name="category" value="Стикеры" type="checkbox" class="checkbox mr-[3px]" />
                        <p class="text-[16px] font-normal text-[#292929]">Стикеры</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div @mouseleave="isShowSortMenu = false">
                    <div class="flex items-center gap-5" @mouseenter="isShowSortMenu = true">
                      <p class="main--section--news--header--subtitle">Сортировать:</p>
                      <p class="text-[#CF9D52]">{{selectedSort}}</p>
                      <svg class="cursor-pointer" width="20" height="12" viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18 2L10 10L2 2" stroke="#CF9D52" stroke-width="1.5" stroke-linecap="square"/>
                      </svg>
                    </div>
                    <div class="flex justify-end">
                      <div class="absolute pointer-events-none">
                        <div class="divide-y w-[224px] h-[240px] rounded-[10px] shadow flex flex-col items-center py-[12px] bg-[#FFF] relative transition-opacity pointer-events-auto" :class="{'opacity-[0] pointer-events-none': !isShowSortMenu}">
                          <div class="cursor-pointer h-[48px] w-full text-center flex items-center justify-center" @click="selectSort('все')">
                            <p class="text-[16px] font-normal text-[#292929]">все</p>
                          </div>
                          <div class="cursor-pointer h-[48px] w-full text-center flex items-center justify-center" @click="selectSort('по возрастанию цены')">
                            <p class="text-[16px] font-normal text-[#292929]">по возрастанию цены</p>
                          </div>
                          <div class="cursor-pointer h-[48px] w-full text-center flex items-center justify-center" @click="selectSort('по убыванию цены')">
                            <p class="text-[16px] font-normal text-[#292929]">по убыванию цены</p>
                          </div>
                          <div class="cursor-pointer h-[48px] w-full text-center flex items-center justify-center" @click="selectSort('по величине скидки')">
                            <p class="text-[16px] font-normal text-[#292929]">по величине скидки</p>
                          </div>
                          <div class="cursor-pointer h-[48px] w-full text-center flex items-center justify-center" @click="selectSort('по популярности')">
                            <p class="text-[16px] font-normal text-[#292929]">по популярности</p>
                          </div>
                        </div>
                      </div>
                    </div>
                </div>
            </div>
            <div class="main--section--news--body">
                <div
                    v-for="(item, index) in items"
                    :key="index"
                    class="main--section--news--body--item">
                    <div class="main--section--souvenirs--body--item--img" />
                    <p class="main--section--souvenirs--body--item--title">Брандмейстер</p>
                    <p class="main--section--souvenirs--body--item--subtitle">1 200 ₽</p>
                    <p class="main--section--souvenirs--body--item--content mb-[10px]">Статуэтка зайца Чиновника</p>
                    <div class="flex items-center gap-5">
                        <button class="btn btn--minimized max-h-[42px] flex items-center justify-center" @click="openNews">Заказать</button>
                        <div class="flex gap-5">
                            <p class="text-[#CF9D52] cursor-pointer" @click="decrement(index)">-</p>
                            <p class="text-[#292929]">{{item.count ?? 0}}</p>
                            <p class="text-[#CF9D52] cursor-pointer" @click="increment(index)">+</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
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
import { ref, watch, onMounted } from 'vue';

const scrollBtn = ref(null);

const isShowCategoriesMenu = ref(false);

const isShowSortMenu = ref(false);

const selectedSort = ref('все');

const selectedCategories = ref([]);

const count = ref([]);

const items = ref([
  {},
  {},
  {},
  {},
  {}
]);

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
};

const selectSort = (sort) => {
  selectedSort.value = sort;
  isShowSortMenu.value = false;
};

const increment = (index) => {
  const item = items.value[index];
  if (!item.count)
    item.count = 0;
  item.count++;
};

const decrement = (index) => {
  const item = items.value[index];
  if (!item.count)
    item.count = 0;
  if (item.count > 0)
    item.count--;
};
</script>

<style scoped>
.main--section--souvenirs--body--item--img {
  background-color: #BBBBBB;
  height: 300px;
  margin-bottom: 16px;
  background-image: url('@/assets/img/town_hero3.png');
  background-size: cover;
  background-repeat:  no-repeat;
  background-position: center;
}

.main--section--souvenirs--body--item--title {
  font-size: 24px;
  font-weight: 700;
  color: #292929;
  font-family: 'Book antiqua';
}

.main--section--souvenirs--body--item--subtitle {
  font-size: 18px;
  font-weight: 500;
}

.main--section--souvenirs--body--item--content {
  font-size: 18px;
  font-weight: 500;
}
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
