<template>
  <div
    class="fixed top-0 left-0 bg-black opacity-80 flex-col gap-5 w-screen h-screen z-50 flex justify-center items-center"
  >
    <div class="bg-white w-[20rem] p-6 rounded-md">
      <img src="~assets/images/buyreq.svg" alt="" />
      <h3 class="text-lg font-bold pb-4">تم الارسال بنجاح</h3>
      <p class="text-text-gray">{{ message }}</p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["message"]);
</script>

<style></style>
