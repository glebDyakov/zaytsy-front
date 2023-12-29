<template>
    <div class="main--section main--section--contacts-and-photo">
        <div class="main--section--feedback">
            <div>
                <p class="main--section--title">Контакты</p>
                <p class="main--section--subtitle">Нам интересны ваши предложения. Пишите, звоните!</p>
                <div class="main--section--contacts">
                    <div class="main--section--contacts--content">
                        <div class="main--section--contact">
                            <div class="main--section--contact--plate">
                                <img src="@/assets/icons/vk.svg" alt="vk" width="20px" />
                            </div>
                            <p class="main--section--contact--label">VK</p>
                        </div>
                        <div class="main--section--contact">
                            <div class="main--section--contact--plate">
                                <img src="@/assets/icons/mail.svg" alt="email" width="20px" />
                            </div>
                            <p class="main--section--contact--label">Email</p>
                        </div>
                        <div class="main--section--contact">
                            <div class="main--section--contact--plate">
                                <img src="@/assets/icons/telegram.svg" alt="telegram" width="20px" />
                            </div>
                            <p class="main--section--contact--label">Telegram</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="main--section--photo">
                <p class="main--section--title">Фото</p>
                <p class="main--section--subtitle">Поделитесь своими лучшими фото для нашей галереи</p>
                <input type="text" class="input" placeholder="Имя Фамилия*" />
                <input type="text" class="input" placeholder="Откуда вы (населенный пункт)*" />
                <div class="select">
                    <select>
                        <option value="">Выберите зайца</option>
                        <option value="">Чиновник</option>
                        <option value="">Купчиха</option>
                        <option value="">Пожарный</option>
                        <option value="">Трактирщик</option>
                    </select>
                </div>
                
                <button class="btn">Отправить</button>
                <div class="main--section--photo--confirm" @click="addPhotoOnClick">
                    <img class="main--section--photo--confirm--img" src="@/assets/icons/add.svg" alt="telegram" width="14px" />
                    <div class="main--section--photo--confirm--labels">
                        <p class="main--section--photo--confirm--labels-title">Добавить фотографии (до 5 фото)</p>
                        <p class="main--section--photo--confirm--labels-subtitle">png, jpeg, jpg, pdf (не более N мб.)</p>
                    </div>
                </div>
                <div class="main--section--confirm">
                    <input type="checkbox" class="checkbox" />
                    <p class="main--section--confirm--label">Я согласен с <span class="main--section--confirm--label--privacy">политикой обработки персональных данных</span></p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const addPhotoOnClick = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.style.display = 'hiddden';
    document.body.appendChild(input);
    input.click();
};
</script>

<style>
.select {
  position: relative;
  margin-bottom: 24px;
}
.select select {
  color: #bbb;
  appearance: none;
  /*  safari  */
  -webkit-appearance: none;
  /*  other styles for aesthetics */
  width: 100%;
  font-size: 1.15rem;
  padding: 0.675em 6em 0.675em 1em;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid #caced1;
  border-radius: 0.25rem;
  cursor: pointer;
}

.select::before,
.select::after {
  --size: 0.3rem;
  content: "";
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
