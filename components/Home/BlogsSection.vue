<template>
  <div class="container mt-10 wow fadeInUp" data-wow-delay="0.5s">
    <div class="flex justify-between items-center mb-3">
      <h6 class="font-bold text-[2rem]">{{ $t("Subtitle.blog") }}</h6>
      <nuxt-link class="main_btn px-3 py-1" :to="localePath('/blog')">
        {{ $t("BUTTONS.readMore") }}
      </nuxt-link>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <blog-card v-for="item in 3" />
    </div>
  </div>
</template>
<script setup>
const props = defineProps(["news"]);
const localePath = useLocalePath();
</script>

<style lang="scss" scoped></style>
