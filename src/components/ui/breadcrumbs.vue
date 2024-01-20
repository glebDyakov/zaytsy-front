<template>
  <div
    class="custom-container flex flex-row items-start w-full pt-[30px] mb-[40px] justify-start text-[14px]"
  >
    <div class="cursor-pointer" @click="$router.push('/')">Главная&nbsp/&nbsp</div>
    <div
      class="cursor-pointer"
      :class="{'text-[#378A6F]': !addToRoute}">{{ linkName }}</div>
    <span v-if="addToRoute">
      &nbsp/&nbsp<span class="text-[#378A6F] cursor-pointer">{{ addToRoute }}</span>
    </span>
    <slot name="trailing" />
  </div>
</template>

<script setup>
const props = defineProps({
  linkName: {
    type: String
  },
  addToRoute: {
    type: String,
    default: null
  }
})
</script>

<style scoped>
</style>
