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
                    <input v-model="name" type="text" class="input" placeholder="Имя Фамилия" />
                    <input v-model="email" type="email" class="input" placeholder="Электронная почта*" />
                    <input v-model="phone" type="phone" class="input" placeholder="Номер телефона*" />
                    <input
                        v-model="address"
                        type="text"
                        class="input"
                        placeholder="Указать место установки на карте*"
                    />
                    <input
                        v-model="desc"
                        type="text"
                        class="textarea"
                        placeholder="Опишите образ зайца (300 знаков)*"
                    />
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
                        :disabled="!name.length || !address.length || !hare.length || !isConfirm"
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

const name = ref('')
const email = ref('')
const phone = ref('')
const address = ref('')
const desc = ref('')
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
</style>
