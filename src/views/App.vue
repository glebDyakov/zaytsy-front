<template>
    <div class="main">
        <breadcrumbs link-name="Хотите установить зайца?" />
        <div class="main--scrooll-btn" ref="scrollBtn" @click="scrollToTop" />
        <div class="max-w-full lg:max-w-[1180px] px-[16px] lg:px-0">
            <p class="news-detail--body--title">Хотите установить зайца?</p>
            <div class="flex flex-col md:flex-row gap-[20px] items-center mb-[160px]">
                <div class="app--img app--img--small flex-shrink-0 w-full md:w-[480px]" />
                <p class="main--section--news--body--item--subtitle text-normal text-[18px]">Зайцы могут рассказать ещё много городских, историй. Вы тоже можете стать автором идеи и установки зайца. Если вы хотите установить зайца, то отправьте нам заявку</p>
            </div>
            <p class="main--section--title">форма обратной связи</p>
            <div class="flex gap-[20px] mb-[100px]">
                <div class="main--section--photo flex flex-col w-full md:w-auto">
                    <span @input="changeNameInput" :contenteditable="true" class="input h-[39px]" :class="{'text-[#000]': name, 'text-[#BBBBBB] hintable': !name}">{{name ?? 'Имя Фамилия'}}</span>
                    <span @input="changeEmailInput" :contenteditable="true" class="input h-[39px] overflow-hidden" :class="{'text-[#000]': email, 'text-[#BBBBBB] hintable': !email}">{{email ?? 'Электронная почта'}}</span>
                    <span @input="changePhoneInput" :contenteditable="true" class="input h-[39px] overflow-hidden" :class="{'text-[#000]': phone, 'text-[#BBBBBB] hintable': !phone}">{{phone ?? 'Номер телефона'}}</span>
                    <div class="relative">
                        <div class="">
                            <img
                                class="left-[calc(100%-24px)] top-[24px] cursor-pointer relative"
                                src="@/assets/icons/map.svg"
                                alt="telegram"
                            />
                            <span @input="changeAddressInput" :contenteditable="true" class="block input h-[39px] overflow-hidden" :class="{'text-[#000]': address, 'text-[#BBBBBB] hintable': !address}">{{address ?? 'Указать место установки на карте'}}</span>
                        </div>
                    </div>
                    <span @input="changeDescInput" :contenteditable="true" class="input h-[63px] overflow-hidden" :class="{'text-[#000]': desc, 'text-[#BBBBBB] hintable': !desc}">{{desc ?? 'Опишите образ зайца (300 знаков)'}}</span>
                    <div class="main--section--photo--confirm" @click="addPhotoOnClick">
                        <img
                            class="main--section--photo--confirm--img"
                            src="@/assets/icons/add.svg"
                            alt="telegram"
                            width="14px"
                        />
                        <div class="main--section--photo--confirm--labels">
                            <p class="main--section--photo--confirm--labels-title">
                                Добавить фотографии (до 5 фото)
                            </p>
                            <p class="main--section--photo--confirm--labels-subtitle">
                                png, jpeg, jpg, pdf (не более N мб.)
                            </p>
                        </div>
                    </div>
                    <button
                        class="btn h-[54px]"
                    >
                        Отправить
                    </button>
                    <div class="main--section--confirm">
                        <input v-model="isConfirm" type="checkbox" class="checkbox" />
                        <p class="main--section--confirm--label">
                            Я согласен с
                            <span class="main--section--confirm--label--privacy"
                            >политикой обработки персональных данных</span>
                        </p>
                    </div>
                </div>
                <div class="app--img app--img--large flex-shrink-0 hidden md:block" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import Breadcrumbs from "@/components/ui/breadcrumbs.vue";
import News from '@/components/main/News.vue';
import ContactsAndPhoto from '@/components/main/ContactsAndPhoto.vue';
import { ref, onMounted } from 'vue';

const name = ref(null)
const email = ref(null)
const phone = ref(null)
const address = ref(null)
const desc = ref(null)
const isConfirm = ref(false)
const addPhotoOnClick = () => {
  const input = document.createElement('input')
  input.type = 'file'
  input.style.display = 'hiddden'
  document.body.appendChild(input)
  input.click()
}

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

const changeNameInput = (e) => {
  if (e.target.textContent.length <= 0) {
    name.value = null
  } else {
    if (!name.value) {
      e.target.textContent = e.data;
    }
    name.value = e.target.textContent;
  }
  setTimeout(() => {
    const range = document.createRange();
    const selection = window.getSelection();
    range.setStart(e.target, e.target.childNodes.length);
    range.collapse(true);
    selection.removeAllRanges();
    selection.addRange(range);
  }, 10);
}

const changeEmailInput = (e) => {
  if (e.target.textContent.length <= 0) {
    email.value = null
  } else {
    if (!email.value) {
      e.target.textContent = e.data;
    }
    email.value = e.target.textContent;
  }
  
  setTimeout(() => {
    const range = document.createRange();
    const selection = window.getSelection();
    range.setStart(e.target, e.target.childNodes.length);
    range.collapse(true);
    selection.removeAllRanges();
    selection.addRange(range);
  }, 10);
}


const changeAddressInput = (e) => {
  if (e.target.textContent.length <= 0) {
    address.value = null
  } else {
    if (!email.value) {
      e.target.textContent = e.data;
    }
    address.value = e.target.textContent;
  }
  
  setTimeout(() => {
    const range = document.createRange();
    const selection = window.getSelection();
    range.setStart(e.target, e.target.childNodes.length);
    range.collapse(true);
    selection.removeAllRanges();
    selection.addRange(range);
  }, 10);
}


const changePhoneInput = (e) => {
  if (e.target.textContent.length <= 0) {
    email.value = null
  } else {
    if (!phone.value) {
      e.target.textContent = e.data;
    }
    phone.value = e.target.textContent;
  }
  
  setTimeout(() => {
    const range = document.createRange();
    const selection = window.getSelection();
    range.setStart(e.target, e.target.childNodes.length);
    range.collapse(true);
    selection.removeAllRanges();
    selection.addRange(range);
  }, 10);
}


const changeDescInput = (e) => {
  if (e.target.textContent.length <= 0) {
    desc.value = null
  } else {
    if (!desc.value) {
      e.target.textContent = e.data;
    }
    desc.value = e.target.textContent;
  }
  
  setTimeout(() => {
    const range = document.createRange();
    const selection = window.getSelection();
    range.setStart(e.target, e.target.childNodes.length);
    range.collapse(true);
    selection.removeAllRanges();
    selection.addRange(range);
  }, 10);
}
</script>

<style scoped>
.app--img {
    background-color: #BBBBBB;
    margin-bottom: 16px;
    background-image: url('@/assets/icons/default.svg');
    background-size: 75px 75px;
    background-repeat:  no-repeat;
    background-position: center;
}

.app--img--small {
    height: 275px;
}

.app--img--large {
    width: 680px;
    height: 452px;
}
.input--trailing::after {
    content: '';
    display: block;
    background-color: red;
    width: 10px;
    height: 10px;
    position: absolute;
}
</style>
