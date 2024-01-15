<template>
  <div class="custom-container flex w-full flex-col items-start mb-[120px]">
    <p class="main--section--title">Брандмейстер</p>
    <div class="flex flex-col-reverse md:flex-row gap-[20px]">
      <div class="flex flex-col lg:max-w-[680px] w-full justify-between">
        <span class="leading-[140%]">
          Не всё, то золото, даже если это называют «золотой ротой». В каждом городе были свои
          вольные босяки, готовые браться за любую работу и тут же спускать заработанное. Летом
          они ютились среди дров и лодок на берегу, а вот зимой им приходилось не сладко. Может
          поэтому в Костроме их прозвали
          <a href="#" class="text-[#CF9D52] cursor-pointer">зимогоры</a>.
        </span>
        <div class="mb-[12px] sm:mb-[30px]" />
        <div class="flex flex-col">
          <div class="flex flex-col sm:flex-row gap-[20px] w-full">
            <button class="flex max-h-[54px] bg-[#CF9D52] shadow-[2_4_10_0_rgba(207,157,82,0.25)] py-[14px] px-[22px] justify-center text-white">
              <img class="w-[22px] h-[22px] mr-[10px]" src="@/assets/icons/Media.svg" alt="media" />
              <span>Аудиогид</span>
            </button>
            <button class="flex max-h-[54px] bg-[#CF9D52] shadow-[2_4_10_0_rgba(207,157,82,0.25)] py-[14px] px-[22px] justify-center text-white">
              <img class="w-[22px] h-[22px] mr-[10px]" src="@/assets/icons/gift.svg" alt="gift" />
              Подарок
            </button>
            <button class="flex max-h-[54px] bg-[#CF9D52] shadow-[2_4_10_0_rgba(207,157,82,0.25)] py-[14px] px-[22px] justify-center text-white">
              <img class="w-[22px] h-[22px] mr-[10px]" src="@/assets/icons/souvenirs.svg" alt="souvenirs" />
              Сувениры
            </button>
          </div>
          <div class="mt-[30px] hidden sm:block">
            <audio controls>
              <source :src="audioSource" type="audio/mp3">
            </audio>
          </div>
        </div>
      </div>
      <div
        class="flex flex-col p-[12px] lg:w-[480px] h-[435px] bg-no-repeat bg-cover bg-center"
        style="background-image: url('src/assets/img/Card.png')"
      >
        <p class="main--section--welcome--main--item--title">Брандмейстер</p>
        <div class="flex items-center">
          <img class="mr-[8px]" src="@/assets/icons/gps.svg" alt="location" />
          <p class="text-[14px] font-normal text-white">Пожарная каланча</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped></style>
