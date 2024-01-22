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
    <breadcrumbs link-name="Сувениры" :addToRoute="'Наименование сувенира'">
      <template #trailing>
        <div class="cart" @click="openCart">
          <svg class="absolute" width="31" height="22" viewBox="0 0 31 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1H6.27273L9.80545 18.8529C9.926 19.4667 10.2562 20.0181 10.7381 20.4106C11.2201 20.803 11.8232 21.0115 12.4418 20.9995H25.2545C25.8732 21.0115 26.4763 20.803 26.9582 20.4106C27.4402 20.0181 27.7704 19.4667 27.8909 18.8529L30 7.6665H7.59091" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <div class="relative left-[20px] top-[-20px] text-[#CF9D52] border border-1 border-[#CF9D52] rounded-3xl flex items-center justify-center bg-[#fff] w-[25px] h-[25px]">2</div>
        </div>
      </template>
    </breadcrumbs>
    <div class="main--scrooll-btn" ref="scrollBtn" @click="scrollToTop" />
    <div class="news-detail--body flex gap-[20px] flex-col md:flex-row w-full px-[16px] md:px-0 ">
      <div class="flex gap-[10px] w-full mx-auto max-w-[1260px] cursor-pointer mb-[20px]">
        <img src="@/assets/icons/chevron-left.svg" alt="back" width="8px" />
        <p class="text-[#CF9D52]">Назад</p>
      </div>
    </div>
    <div class="news-detail--body flex gap-[20px] mb-[140px] flex-col md:flex-row w-full md:w-auto px-[16px] md:px-0">
      <div class="flex flex-wrap gap-[10px]">
        <div class="souvenirs-detail--body--img souvenirs-detail--body--img--primary" />
        <div class="souvenirs-detail--body--img souvenirs-detail--body--img--secondary hidden md:block" />
        <div class="souvenirs-detail--body--img souvenirs-detail--body--img--secondary hidden md:block" />
      </div>
      <div>
        <p class="title">Брандмейстер</p>
        <p class="text-[#CF9D52] mb-[20px]">1 200 ₽</p>
        <p class="mb-[10px]">Статуэтка зайца Чиновника</p>
        <p class="mb-[20px] text-[#CF9D52] border-b border-[#CF9D52] inline-block">Узнать историю зайца</p>
        <div class="flex justify-between">
          <p>Вес</p>
          <p>13 гр.</p>
        </div>
        <hr class="my-[12px]" />
        <div class="flex justify-between">
          <p>Размер</p>
          <p>35 х 18 х 22 мм.</p>
        </div>
        <hr class="my-[12px]" />
        <div class="flex justify-between mb-[30px]">
          <p>Материал</p>
          <p>бронза</p>
        </div>
        <div class="flex flex-col sm:flex-row items-center gap-5">
          <button class="order-btn w-full sm:w-[345px] h-[54px] flex justify-center items-center btn btn--mimimized">Заказать</button>
          <div class="flex gap-5 justify-between sm:justify-end w-full sm:w-auto">
            <img class="main--section--news--header--show-all--icon cursor-pointer" src="@/assets/icons/minus.svg" alt="minus" />
            <p>1</p>
            <img class="main--section--news--header--show-all--icon cursor-pointer" src="@/assets/icons/plus.svg" alt="plus" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Breadcrumbs from "@/components/ui/breadcrumbs.vue";
import { ref, onMounted, computed } from 'vue';

const scrollBtn = ref(null);

const isShowAll = ref(false);

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

const dialog = ref(null);

const amount = computed(() => {
  let value = 0;
  items.value.map(item => {
    value += item.price;
  });
  return value;
});

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

const openCart = () => {
  dialog.value.showModal();
};
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

.order-btn {
  margin: 0px;
}

.souvenirs-detail--body--img {
  background-color: #BBBBBB;
  background-image: url('@/assets/img/town_hero1.png');
  background-size: cover;
  background-repeat:  no-repeat;
  background-position: center;
}

.souvenirs-detail--body--img--primary {
  width: 680px;
  height: 680px;
}

.souvenirs-detail--body--img--secondary {
  width: 335px;
  height: 335px;
}

.title {
  font-family: 'Book Antiqua';
  font-weight: 700;
  font-size: 28px;
}

.dialog::backdrop {
  background-color: rgba(41, 41, 41, 0.70);
}
</style>
