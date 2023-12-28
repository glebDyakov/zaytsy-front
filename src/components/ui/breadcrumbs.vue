<template>
  <div
    class="container flex flex-row items-start w-full pt-[30px] mb-[40px] justify-start text-[14px]"
  >
    <div class="cursor-pointer" @click="$router.push('/')">Главная&nbsp/&nbsp</div>
    <div class="text-[#378A6F] cursor-pointer">{{ linkName }}</div>
  </div>
</template>

<script setup>
const props = defineProps({
  linkName: {
    type: String
  }
})
</script>

<style scoped></style>