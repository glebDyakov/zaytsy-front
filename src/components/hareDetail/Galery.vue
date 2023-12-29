<template>
  <div class="custom-container flex flex-col items-start py-[120px]">
    <p class="main--section--title">Галерея</p>
    <div class="galery">
      <img v-for="photo in 6" :src="`src/assets/img/photo${photo}.png`" />
    </div>
  </div>
</template>

<script setup>

</script>


<style scoped>
.galery {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}
</style>