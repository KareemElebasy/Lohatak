<template>
  <div
    class="fixed top-0 left-0 w-screen h-screen z-[100] flex justify-center items-center bg-[#0007]"
  >
    <div class="bg-white w-[24rem] p-6 rounded-md text-center">
      <h3 class="text-lg font-bold pb-4">{{ mainHeading }}</h3>
      <p class="text-gray-400 text-base pb-4">{{ message }}</p>
      <div class="flex items-center justify-between gap-3">
        <button
          @click="$emit('confirm')"
          class="text-primary border border-primary rounded-lg w-full px-4 py-2"
        >
          {{ confirmBtn }}
        </button>
        <button class="main_btn w-full px-4 py-2" @click="$emit('close')">
          {{ cancelBtn }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps([
  "mainHeading",
  "message",
  "confirmBtn",
  "cancelBtn",
]);
</script>

<style></style>
