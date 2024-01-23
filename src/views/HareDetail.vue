<template>
  <div class="layout">
      <breadcrumbs link-name="Брандмейстер"/>
      <Info />
      <History />
  </div>
  <MapDetails class="bg-white"/>
  <div class="layout">
    <Galery />
    <Souvenirs />
  </div>
</template>

<script setup>
  import Breadcrumbs from "@/components/ui/breadcrumbs.vue";
  import Info from "@/components/hareDetail/Info.vue";
  import History from "@/components/hareDetail/History.vue";
  import MapDetails from "@/components/hareDetail/MapDetails.vue";
  import Galery from "@/components/hareDetail/Galery.vue";
  import Souvenirs from "@/components/hareDetail/Souvenirs.vue";
</script>

<style scoped>
</style>
