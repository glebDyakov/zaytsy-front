<template>
  <div class="main--section main--section--contacts-and-photo px-4 md:px-0">
    <div class="main--section--feedback md:max-w-[1180px] justify-between flex-col md:flex-row md:gap-14 w-screen px-4 md:px-0">
      <div class="flex flex-col mb-36 md:mb-0">
        <p class="main--section--title">Контакты</p>
        <p class="main--section--subtitle mb-[30px]">Нам интересны ваши предложения. Пишите, звоните!</p>
        <div class="main--section--contacts">
          <div class="main--section--contacts--content flex md:grid gap-[0px] md:gap-[40px]">
            <div class="main--section--contact block md:flex">
              <div class="main--section--contact--plate">
                <img src="@/assets/icons/vk.svg" alt="vk" width="20px" />
              </div>
              <p class="main--section--contact--label hidden md:block">VK</p>
            </div>
            <div class="main--section--contact">
              <div class="main--section--contact--plate">
                <img src="@/assets/icons/mail.svg" alt="email" width="20px" />
              </div>
              <p class="main--section--contact--label hidden md:block">Email</p>
            </div>
            <div class="main--section--contact">
              <div class="main--section--contact--plate">
                <img src="@/assets/icons/telegram.svg" alt="telegram" width="20px" />
              </div>
              <p class="main--section--contact--label hidden md:block">Telegram</p>
            </div>
            <div class="main--section--contact">
              <img class="w-[60-px] h-[60px] mr-[12px] cursor-pointer" src="@/assets/icons/zayac.svg" alt="zayac" />
              <p class="main--section--contact--label hidden md:block">Скачайте приложение</p>
            </div>
          </div>
        </div>
      </div>
      <div class="main--section--photo flex flex-col w-[100%] md:w-[480px]">
        <p class="main--section--title">Фото</p>
        <p class="main--section--subtitle">Поделитесь своими лучшими фото для нашей галереи</p>
        <input v-model="name" type="text" class="input" placeholder="Имя Фамилия" />
        <input
          v-model="address"
          type="text"
          class="input"
          placeholder="Откуда вы (населенный пункт)"
        />
        <div class="select">
          <select :class="{ 'select--selected': hare.length }" v-model="hare">
            <option hidden selected="true" value="">Выберите зайца</option>
            <option value="Чиновник">Чиновник</option>
            <option value="Купчиха">Купчиха</option>
            <option value="Пожарный">Пожарный</option>
            <option value="Трактирщик">Трактирщик</option>
          </select>
        </div>

        <button
          class="btn px-[113px] py-[14.5px] md:px-[183px] md:py-[20px]"
          :disabled="!name.length || !address.length || !hare.length || !isConfirm"
        >
          Отправить
        </button>
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
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const name = ref('')
const address = ref('')
const hare = ref('')
const isConfirm = ref(false)
const addPhotoOnClick = () => {
  const input = document.createElement('input')
  input.type = 'file'
  input.style.display = 'hiddden'
  document.body.appendChild(input)
  input.click()
}
</script>

<style>
.select {
  font-size: 20px;
  font-weight: 500;
  font-family: 'Montserrat';
  position: relative;
  margin-bottom: 24px;
}

.select select {
  appearance: none;
  /*  safari  */
  -webkit-appearance: none;
  /*  other styles for aesthetics */
  width: 100%;
  font-size: 1.15rem;
  padding: 0.675em 6em 16px 0px;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid #caced1;
  border-radius: 0.25rem;
  cursor: pointer;
}

.select select {
  color: #bbb;
}

.select select.select--selected {
  color: #000;
}

.select::before,
.select::after {
  --size: 0.3rem;
  content: '';
  position: absolute;
  right: 1rem;
  pointer-events: none;
}

.select::after {
  min-width: 8px;
  min-height: 16px;
  background-image: url('@/assets/icons/chevron-select.svg');
  background-repeat: no-repeat;
  background-size: 100% 100%;
  top: calc(50% - 16px / 2);
}
</style>