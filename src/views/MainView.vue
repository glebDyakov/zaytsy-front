<template>
  <div class="main">
    <Welcome />
    <StoryOrigin />
    <Map />
    <Characters />
    <NewStory />
    <News />
    <ContactsAndPhoto />
  </div>
</template>

<script setup lang="ts">
  import Welcome from '@/components/main/Welcome.vue';
  import Map from '@/components/main/Map.vue';
  import StoryOrigin from '@/components/main/StoryOrigin.vue';
  import Characters from '@/components/main/Characters.vue';
  import NewStory from '@/components/main/NewStory.vue';
  import News from '@/components/main/News.vue';
  import ContactsAndPhoto from '@/components/main/ContactsAndPhoto.vue';
</script>

<style scoped>
</style>
