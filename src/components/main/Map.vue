<template>
    <div class="main--section main--section--map">
      <div class="main--section--content px-4 md:px-0">
        <p class="main--section--title">{{title}}</p>
        <div class="main--section main--section--map--content--img min-w-[328px] min-h-[191px] md:min-w-[688px] md:min-h-[400px] lg:w-[1180px] lg:h-[500px] bg-[length:300%_auto] md:bg-[length:200%_auto] lg:bg-[length:100%_auto]" />
      </div>

    </div>
</template>

<script setup>
import { ref, onMounted } from "vue"

const title = ref('Где живут зайцы?')
onMounted(() => {
  var match = window.matchMedia || window.msMatchMedia;
  if (match) {
    if (!(
      (screen.width <= 640)
      || (window.matchMedia
        && window.matchMedia('only screen and (max-width: 640px)').matches)
    ))
      title.value = 'Мазайские зайцы в Костроме'
  }
});
</script>

<style>

</style>
