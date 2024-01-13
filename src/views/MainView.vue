<template>
  <div class="main">
    <div class="invisible md:visible sm:invisible main--scrooll-btn" ref="scrollBtn" @click="scrollToTop" />
    <div class="main--content">
      <div class="sm:px-9 md:px-0 px-9 sm:mx-9 md:mx-0 mx-9 max-w-0 md:max-w-full">
      <Welcome />
      <StoryOrigin />
      <Map />
      <Characters />
      <NewStory />
      <News />
      <ContactsAndPhoto />
      </div>
    </div>
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
import { ref, onMounted } from 'vue';

const scrollBtn = ref(null);

onMounted(() => {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
      scrollBtn.value.style.display = 'block';
    } else {
      scrollBtn.value.style.display = 'none';
    }
  });
});

const scrollToTop = () => {
  window.scroll({
    top: 0,
    behavior: 'smooth'
  });
}
</script>

<style scoped>
</style>
