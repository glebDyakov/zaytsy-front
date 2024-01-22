<template>
  <div class="main">
    <dialog id="dialog" class="dialog m-auto sm:min-w-fit sm:min-h-fit w-[600px] h-[991px]">
      <div class="min-w-full min-h-full p-[20px] flex flex-col">
        <div class="flex justify-end">
          <p class="text-[#CF9D52] cursor-pointer hidden sm:block" @click="dialog.close()">закрыть</p>
          <img class="cursor-pointer inline-block sm:hidden rotate-[45deg]" src="@/assets/icons/times_dialog.svg" alt="close" @click="dialog.close()" />
        </div>
        <p class="text-[24px]">Ваш заказ:</p>
        <div class="mb-[10px]">
          <!-- mobile items -->
          <div
            v-for="(item, index) in items.filter((e, i) => i < 3 || isShowAll)"
            :key="index"
            class="flex gap-5 border-1 border-b py-[10px] border-[#ccc] sm:hidden">
            <img class="w-[70px] h-[70px] main--section--characters--body--item--img" src="@/assets/img/town_hero1.png" alt="character" />
            <div class="flex flex-col items-start w-full">
              <div class="flex justify-between w-full">
                <p>Чиновник</p>
                <img class="cursor-pointer" width="18px" src="@/assets/icons/delete.svg" alt="delete" @click="deleteItem(index)" />
              </div>
              <p class="text-[#CF9D52]">3 600 ₽</p>
              <p>Статуэтка зайца Чиновника</p>
              <div class="flex gap-5 justify-between md:justify-end">
                <img class="main--section--news--header--show-all--icon cursor-pointer" width="18px" src="@/assets/icons/minus.svg" alt="minus" />
                <p class="text-[#292929]">1</p>
                <img class="main--section--news--header--show-all--icon cursor-pointer" src="@/assets/icons/plus.svg" alt="plus" />
              </div>
            </div>
          </div>
          <!-- desktop items -->
          <div
            v-for="(item, index) in items.filter((e, i) => i < 3 || isShowAll)"
            :key="index"
            class="gap-5 border-1 border-b py-[10px] border-[#ccc] hidden sm:flex">
            <div class="flex gap-5">
              <img class="w-[70px] h-[70px] main--section--characters--body--item--img" src="@/assets/img/town_hero1.png" alt="character" />
              <div class="flex flex-col items-start w-full">
                <div class="flex justify-between w-full">
                  <p>Чиновник</p>
                </div>
                <p class="text-[#CF9D52]">3 600 ₽</p>
                <p>Статуэтка зайца Чиновника</p>
              </div>
            </div>
            <div class="flex gap-5 justify-between items-center w-[128px]">
              <img class="main--section--news--header--show-all--icon cursor-pointer" width="18px" src="@/assets/icons/minus.svg" alt="minus" />
              <p class="text-[#292929]">1</p>
              <img class="main--section--news--header--show-all--icon cursor-pointer" src="@/assets/icons/plus.svg" alt="plus" />
            </div>
            <img class="cursor-pointer" width="18px" src="@/assets/icons/delete.svg" alt="delete" @click="deleteItem(index)" />
          </div>
        </div>
        <p v-if="items.length > 3 && !isShowAll" class="text-[#CF9D52] cursor-pointer mb-[18px] sm:mb-[12px] text-center" @click="isShowAll = !isShowAll">Еще {{items.length - 3}} товара</p>
        <p class="mb-[30px] sm:mb-[20px] text-right">Сумма: {{amount}} ₽</p>
        <p class="mb-[20px]">Контактные данные:</p>
        <input placeholder="Имя" type="text" class="input max-h-[39px]" />
        <input placeholder="Фамилия*" type="text" class="input max-h-[39px]" />
        <input placeholder="Номер телефона*" type="text" class="input max-h-[39px]" />
        <input placeholder="Электронная почта*" type="text" class="input max-h-[39px]" />
        <input placeholder="Комментарий" type="text" class="input min-h-[59px]" />
        <button class="btn px-[30px] py-[14px]">Заказать</button>
        <div class="main--section--confirm">
          <input v-model="isConfirm" type="checkbox" class="checkbox" />
          <p class="main--section--confirm--label">
            Я согласен с
            <span class="main--section--confirm--label--privacy"
              >политикой обработки персональных данных</span
            >
          </p>
        </div>
      </div>
    </dialog>
    <div v-if="filters === 'FILTERS_AND_SORT'" class="fixed top-0 z-[50] bg-[#fff] w-full h-full p-[40px] flex flex-col justify-between h-full">
      <div class="flex flex-col">
        <div class="flex justify-between mb-[30px]">
          <p class="font-bold">Фильтры и сортировка</p>
          <p class="text-[#CF9D52] cursor-pointer hidden sm:block" @click="filters = false">закрыть</p>
          <img class="cursor-pointer block sm:hidden rotate-[45deg]" src="@/assets/icons/times_dialog.svg" alt="close" @click="filters = false" />
        </div>
        <div class="flex justify-between border-solid border-1 border-b border-[#D8D8D8] py-[16px] mb-[16px]">
          <p>Категория товара</p>
          <img class="cursor-pointer" src="@/assets/icons/chevron-right.svg" width="8px" alt="details" @click="filters = 'CATEGORIES'">
        </div>
        <form class="flex flex-col gap-[16px] accent-[darkgoldenrod]">
          <p>Сортировать</p>
          <div class="flex gap-[10px]">
            <input v-model="sort" value="all" name="sort" id="all" type="radio" />
            <label for="all">все</label>
          </div>
          <div class="flex gap-[10px]">
            <input v-model="sort" value="asc" name="sort" id="asc" type="radio" />
            <label for="asc">по возрастанию цены</label>
          </div>
          <div class="flex gap-[10px]">
            <input v-model="sort" id="desc" name="sort" type="radio" />
            <label for="desc">по убыванию цены</label>
          </div>
          <div class="flex gap-[10px]">
            <input v-model="sort" id="discount" name="sort" type="radio" />
            <label for="discount">по величине скидки</label>
          </div>
          <div class="flex gap-[10px]">
            <input v-model="sort" id="popular" name="sort" type="radio" />
            <label for="popular">по популярности</label>
          </div>
        </form>
      </div>
      <div class="flex gap-[20px] flex-grow items-end flex-wrap flex-grow-0">
        <button class="max-h-[42px] sm:max-h-[54px] btn btn--minimized btn--outlined px-[24px] py-[14.5px] sm:px-[90px] sm:py-[9px] flex justify-center items-center" @click="filters = null">Очистить</button>
        <button class="max-h-[42px] sm:max-h-[54px] btn btn--minimized px-[24px] py-[14.5px] sm:px-[90px] sm:py-[9px] flex justify-center items-center" @click="filters = null">Применить</button>
      </div>
    </div>
    <div v-else-if="filters === 'CATEGORIES'" class="fixed top-0 z-[50] bg-[#fff] w-full h-full p-[40px] flex flex-col justify-between h-full">
      <div class="flex flex-col">
        <div class="flex justify-between mb-[30px]">
          <img class="cursor-pointer" src="@/assets/icons/chevron-left.svg" width="8px" alt="details" @click="filters = 'FILTERS_AND_SORT'">
          <p class="font-bold">Категория товара</p>
          <p class="text-[#CF9D52] cursor-pointer hidden sm:block" @click="filters = false">закрыть</p>
          <img class="cursor-pointer block sm:hidden rotate-[45deg]" src="@/assets/icons/times_dialog.svg" alt="close" @click="filters = false" />
        </div>
        <form class="flex flex-col gap-[16px] accent-[darkgoldenrod]">
          <div class="flex gap-[10px] items-center">
            <input class="checkbox" value="all" name="categories" id="all" type="checkbox" />
            <label for="all">все</label>
          </div>
          <div class="flex gap-[10px] items-center">
            <input class="checkbox" value="sculpt" name="categories" id="sculpt" type="checkbox" />
            <label for="sculpt">Скульптуры</label>
          </div>
          <div class="flex gap-[10px] items-center">
            <input class="checkbox" id="cups" name="categories" type="checkbox" />
            <label for="cups">Кружки</label>
          </div>
          <div class="flex gap-[10px] items-center">
            <input class="checkbox" id="stickers" name="categories" type="checkbox" />
            <label for="stickers">Стикеры</label>
          </div>
        </form>
      </div>
      <div class="flex gap-[20px] flex-grow items-end flex-wrap flex-grow-0">
        <button class="max-h-[42px] sm:max-h-[54px] btn btn--minimized btn--outlined px-[24px] py-[14.5px] sm:px-[90px] sm:py-[9px] flex justify-center items-center" @click="filters = null">Очистить</button>
        <button class="max-h-[42px] sm:max-h-[54px] btn btn--minimized px-[24px] py-[14.5px] sm:px-[90px] sm:py-[9px] flex justify-center items-center" @click="filters = null">Применить</button>
      </div>
    </div>
    <div class="flex w-full justify-between items-center">
        <breadcrumbs link-name="Сувениры">
          <template #trailing>
            <div class="cart" @click="openCart">
              <svg class="absolute" width="31" height="22" viewBox="0 0 31 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1H6.27273L9.80545 18.8529C9.926 19.4667 10.2562 20.0181 10.7381 20.4106C11.2201 20.803 11.8232 21.0115 12.4418 20.9995H25.2545C25.8732 21.0115 26.4763 20.803 26.9582 20.4106C27.4402 20.0181 27.7704 19.4667 27.8909 18.8529L30 7.6665H7.59091" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <div class="relative left-[20px] top-[-20px] text-[#CF9D52] border border-1 border-[#CF9D52] rounded-3xl flex items-center justify-center bg-[#fff] w-[25px] h-[25px]">2</div>
            </div>
          </template>
        </breadcrumbs>
    </div>
    <div class="main--scrooll-btn" ref="scrollBtn" @click="scrollToTop" />
    <div class="main--content px-[16px] mb-[24px] md:px-0">
        <div class="main--section mb-[20px]">
            <div class="main--section--news--header">
                <p class="main--section--news--header--title">Сувениры</p>
                <div class="main--section--news--header--show-all md:hidden">
                    <img class="main--section--news--header--show-all--icon" src="@/assets/icons/filter.svg" alt="filter" width="24px" @click="filters = 'FILTERS_AND_SORT'" />
                </div>
            </div>
            <div class="mb-[20px] w-full justify-between hidden md:flex">
                <div @mouseleave="isShowCategoriesMenu = false">
                  <div class="flex items-center gap-5" @mouseenter="isShowCategoriesMenu = true">
                    <p class="main--section--news--header--subtitle">Категория товара</p>
                    <div v-if="selectedCategories.length"  class="flex gap-[8px]">
                      <div class="w-[20px] h-[20px] bg-[#CF9D52] rounded-[10px] text-[#fff] flex items-center justify-center text-noraml text-[15px]">4</div>
                      <img class="cursor-pointer" src="@/assets/icons/times.svg" alt="close" />
                    </div>
                    <svg v-else class="cursor-pointer" width="20" height="12" viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M18 2L10 10L2 2" stroke="#CF9D52" stroke-width="1.5" stroke-linecap="square"/>
                    </svg>
                  </div>
                  <div class="absolute pointer-events-none">
                    <div class="divide-y w-[224px] h-[240px] rounded-[10px] shadow flex flex-col items-center py-[12px] bg-[#FFF] relative transition-opacity pointer-events-auto" :class="{'opacity-[0] pointer-events-none': !isShowCategoriesMenu}">
                      <div class="px-[12px] cursor-pointer h-[48px] w-full text-center flex items-center">
                        <input v-model="selectedCategories" type="checkbox" class="checkbox mr-[3px]" />
                        <p class="text-[16px] font-normal text-[#292929]">все</p>
                      </div>
                      <div class="px-[12px] cursor-pointer h-[48px] w-full text-center flex items-center">
                        <input v-model="selectedCategories" type="checkbox" class="checkbox mr-[3px]" />
                        <p class="text-[16px] font-normal text-[#292929]">Скульптуры</p>
                      </div>
                      <div class="px-[12px] cursor-pointer h-[48px] w-full text-center flex items-center">
                        <input v-model="selectedCategories" type="checkbox" class="checkbox mr-[3px]" />
                        <p class="text-[16px] font-normal text-[#292929]">Кружки</p>
                      </div>
                      <div class="px-[12px] cursor-pointer h-[48px] w-full text-center flex items-center">
                        <input v-model="selectedCategories" type="checkbox" class="checkbox mr-[3px]" />
                        <p class="text-[16px] font-normal text-[#292929]">Стикеры</p>
                      </div>
                      <div class="px-[12px] cursor-pointer h-[48px] w-full text-center flex items-center">
                        <input v-model="selectedCategories" type="checkbox" class="checkbox mr-[3px]" />
                        <p class="text-[16px] font-normal text-[#292929]">Стикеры</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div @mouseleave="isShowSortMenu = false">
                    <div class="flex items-center gap-5" @mouseenter="isShowSortMenu = true">
                      <p class="main--section--news--header--subtitle">Сортировать:</p>
                      <p class="text-[#CF9D52]">все</p>
                      <svg class="cursor-pointer" width="20" height="12" viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18 2L10 10L2 2" stroke="#CF9D52" stroke-width="1.5" stroke-linecap="square"/>
                      </svg>
                    </div>
                    <div class="absolute pointer-events-none">
                      <div class="divide-y w-[224px] h-[240px] rounded-[10px] shadow flex flex-col items-center py-[12px] bg-[#FFF] relative transition-opacity pointer-events-auto" :class="{'opacity-[0] pointer-events-none': !isShowSortMenu}">
                        <div class="cursor-pointer h-[48px] w-full text-center flex items-center justify-center" @click="isShowSortMenu = false">
                          <p class="text-[16px] font-normal text-[#292929]">все</p>
                        </div>
                        <div class="cursor-pointer h-[48px] w-full text-center flex items-center justify-center" @click="isShowSortMenu = false">
                          <p class="text-[16px] font-normal text-[#292929]">по возрастанию цены</p>
                        </div>
                        <div class="cursor-pointer h-[48px] w-full text-center flex items-center justify-center" @click="isShowSortMenu = false">
                          <p class="text-[16px] font-normal text-[#292929]">по убыванию цены</p>
                        </div>
                        <div class="cursor-pointer h-[48px] w-full text-center flex items-center justify-center" @click="isShowSortMenu = false">
                          <p class="text-[16px] font-normal text-[#292929]">по величине скидки</p>
                        </div>
                        <div class="cursor-pointer h-[48px] w-full text-center flex items-center justify-center" @click="isShowSortMenu = false">
                          <p class="text-[16px] font-normal text-[#292929]">по популярности</p>
                        </div>
                      </div>
                    </div>
                </div>
            </div>
            <div class="main--section--news--body">
                <div
                    v-for="(item, index) in 5"
                    :key="index"
                    class="main--section--news--body--item">
                    <div class="main--section--souvenirs--body--item--img" />
                    <p class="main--section--souvenirs--body--item--title">Брандмейстер</p>
                    <p class="main--section--souvenirs--body--item--subtitle">1 200 ₽</p>
                    <p class="main--section--souvenirs--body--item--content mb-[10px]">Статуэтка зайца Чиновника</p>
                    <div class="flex flex-col md:flex-row items-center gap-5">
                        <button class="btn btn--minimized max-h-[42px] flex items-center justify-center w-[246px] h-[42px]" @click="openNews">Заказать</button>
                        <div class="flex gap-5 justify-between md:justify-end w-full md:w-auto">
                            <img class="main--section--news--header--show-all--icon cursor-pointer" width="18px" src="@/assets/icons/minus.svg" alt="minus" />
                            <p class="text-[#292929]">1</p>
                            <img class="main--section--news--header--show-all--icon cursor-pointer" src="@/assets/icons/plus.svg" alt="plus" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
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
import { ref, computed, onMounted } from 'vue';

const filters = ref(null);

const items = ref([
  {
    tilte: '',
    price: 3600,
    count: '',
    name: '',
  },
  {
    tilte: '',
    price: 3600,
    count: '',
    name: '',
  },
  {
    tilte: '',
    price: 3600,
    count: '',
    name: '',
  },
  {
    tilte: '',
    price: 3600,
    count: '',
    name: '',
  },
  {
    tilte: '',
    price: 3600,
    count: '',
    name: '',
  },
  {
    tilte: '',
    price: 3600,
    count: '',
    name: '',
  }
]);

const scrollBtn = ref(null);

const isShowCategoriesMenu = ref(false);

const isShowSortMenu = ref(false);

const selectedCategories = ref([]);

const dialog = ref(null);

onMounted(() => {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
      scrollBtn.value.style.display = 'block';
    } else {
      scrollBtn.value.style.display = 'none';
    }
  });
  dialog.value = document.querySelector('#dialog');
});

const scrollToTop = () => {
  window.scroll({
    top: 0,
    behavior: 'smooth'
  });
}

const currentPage = ref(0);

const pagesCount = ref(5);

const isShowAll = ref(false);

const sort = ref('all');

const deleteItem = (index) => {
  items.value = items.value.filter((e, i) => i !== index);
}

const amount = computed(() => {
  let value = 0;
  items.value.map(item => {
    value += item.price;
  });
  return value;
});

const openCart = () => {
  dialog.value.showModal();
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
.dialog::backdrop {
  background-color: rgba(41, 41, 41, 0.70);
}
</style>
