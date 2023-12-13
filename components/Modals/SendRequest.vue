<template>
  <div
    class="fixed top-0 left-0 w-screen h-screen z-[100] flex justify-center items-center bg-[#0007]"
  >
    <div
      class="bg-white flex flex-col items-center justify-center text-center w-[24rem] p-6 rounded-md"
    >
      <img class="w-12 h-12" src="~assets/images/buyreq.svg" alt="" />
      <h3 class="text-lg font-bold pb-4">{{ mainHeading }}</h3>
      <p class="text-text-gray">{{ message }}</p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["message", "mainHeading"]);
const emit = defineEmits(["close"]);
setTimeout(() => emit("close"), 3000);
</script>

<style></style>
