<template>
  <div
    class="header-sec min-h-[20rem] flex flex-col items-center justify-center"
  >
    <div class="w-4/5 md:w-1/3 text-white text-center pt-8">
      <h2 class="font-bold text-3xl pb-4">{{ title }}</h2>
      <p class="text-base">{{ desc }}</p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["title", "desc"]);
</script>

<style lang="scss" scoped>
.header-sec {
  background-image: url("../../assets/images/bg-headersec.svg");
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
}
</style>
