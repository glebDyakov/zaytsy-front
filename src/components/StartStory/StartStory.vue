<template>
  <div class="main">
    <div class="main--content">
      <breadcrumbs link-name="Некрасов и Мазай" />
      <div class="custom-container flex flex-col items-start mb-[100px]">
        <p class="main--section--title">Некрасов - от Ярославля до костромы</p>
        <div class="flex flex-col md:flex-row md:justify-between md:max-h-[496px] w-full mb-[20px]">
          <div class="mb-[12px] md:mb-0 flex-shrink-0 md:max-w-[580px] w-full h-full md:mr-[80px] cursor-pointer">
            <img @click="openModal('src/assets/img/autograph_full_size.jpg')" src="@/assets/img/autograph.png" class="w-full" alt="Автограф Некрасова" />
          </div>
          <div class="flex flex-grow items-center text-[16px]">
            17 января 1871 года вся Российская империя узнала о мазайских зайцах. В главном русском
            литературном журнале «Отечественные записки» вышло стихотворение Николая Алексеевича
            Некрасова «Дедушка Мазай и зайцы». Вся страна узнала о старом охотнике Мазае из деревни
            Вёжи. Все сопереживали мокрым, погибающим в весеннем половодье зайцам и радовались
            их спасению
          </div>
        </div>
        <div class="flex flex-col-reverse md:flex-row md:justify-between md:max-h-[496px] w-full mb-[20px]">
          <div class="flex flex-grow items-center text-[16px]">
            Было потехи у баб, ребятишек,<br>
            Как прокатил я деревней зайчишек:<br>
            «Глянь-ко: что делает старый Мазай!»<br>
            Ладно! любуйся, а нам не мешай!<br>
            Мы за деревней в реке очутились.<br>
            Тут мои зайчики точно сбесились:<br>
            Смотрят, на задние лапы встают,<br>
            Лодку качают, грести не дают:<br>
            Берег завидели плуты косые,<br>
            Озимь, и рощу, и кусты густые!..<br>
            К берегу плотно бревно я пригнал,<br>
            Лодку причалил - и «с богом!» сказал...
          </div>
          <div class="mb-[12px] md:mb-0 flex-shrink-0 md:max-w-[580px] w-full h-full cursor-pointer">
            <img @click="openModal('src/assets/img/nekrasov_full_size.jpg')" src="@/assets/img/nekrasov.png" class="w-full" alt="Некрасов" />
          </div>
        </div>
        <div class="flex flex-col md:flex-row md:justify-between md:max-h-[496px] w-full mb-[20px]">
          <div class="mb-[12px] md:mb-0 flex-shrink-0 md:max-w-[580px] w-full h-full md:mr-[80px] cursor-pointer">
            <img @click="openModal('src/assets/img/friend_full_size.jpg')" src="@/assets/img/friend.png" class="w-full" alt="друг-приятель Гаврила Захаров" />
          </div>
          <div class="flex flex-grow items-center text-[16px]">
            Мы не знаем узнали ли о своей популярности зайцы, но вот дед Мазай, точно стал
            знаменитым. Только Мазай, это прозвище, а звали охотника из деревни Вёжи Иван Саввич
            Мазайхин.
          </div>
        </div>
        <div class="flex flex-col-reverse md:flex-row md:justify-between md:max-h-[496px] w-full mb-[20px]">
          <div class="flex flex-grow items-center text-[16px]">
            Детство Некрасова прошло в родовом Грешнево недалеко от Ярославля, туда, а потом
            в собственное имение Карабиха, он возвращался каждое лето. Главным его увлечением
            и отдыхом была охота. Бывало, по Луговому тракту он отправлялся в Кострому, а оттуда
            в благодатные охотничье места костромской низины. Эти места ему открыл «друг-приятель»
            крестьянин, охотник деревни Шода Гаврила Захаров. В многодневных охотничьих странствиях
            Некрасов и оказался на родине Мазая
          </div>
          <div class="mb-[12px] md:mb-0 flex-shrink-0 md:max-w-[580px] w-full h-full md:ml-[80px] cursor-pointer">
            <img @click="openModal('src/assets/img/house_full_size.jpg')" src="@/assets/img/house.png" class="w-full" alt="дом Некрасова" />
          </div>
        </div>
        <div class="flex flex-col md:flex-row md:justify-between md:max-h-[496px] w-full">
          <div class="mb-[12px] md:mb-0 flex-shrink-0 md:max-w-[580px] w-full h-full md:mr-[80px] cursor-pointer">
            <img @click="openModal('src/assets/img/family_full_size.jpg')" src="@/assets/img/family.png" class="w-full" alt="семья Некрасова" />
          </div>
          <div class="flex flex-grow items-center text-[16px]">
            Николай Алексеевич Некрасов родился в 1851 году и прожил 56 лет. Он вошёл в историю
            как поэт и гражданин, который писал о бедах народа, о тяжёлой крестьянской доле, искал
            ответ на вопрос «Кому на Руси жить хорошо». Он писал на языке народа, писал о народе,
            о природе своего родного края
          </div>
        </div>
      </div>
    </div>
    <div class="modal" id="modal">
      <div class="modal-content">
        <div class="close" @click="closeModal()">закрыть</div>
        <div>
          <img id="modalImage" src="" alt="Увеличенная фотография" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Breadcrumbs from '@/components/ui/breadcrumbs.vue'

// Функция открытия модального окна
const openModal = (imageUrl) => {
  console.log(imageUrl);
  const modal = document.getElementById('modal');
  const modalImage = document.getElementById('modalImage');
  modalImage.src = imageUrl;
  modal.style.display = 'flex';
  document.querySelector("body").style.overflow = "hidden";
};

// Функция закрытия модального окна
const closeModal = () => {
  const modal = document.getElementById('modal');
  modal.style.display = 'none';
  document.querySelector("body").style.overflow = "scroll";
};

</script>

<style scoped>
.modal {
  display: none;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.7);
}

.modal-content {
  margin: 5% auto;
  padding: 20px;
  background-color: transparent;
  max-width: 80%;
}

.close {
  color: #CF9D52;
  float: right;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
}
</style>