<template>
  <div
    class="fixed top-0 left-0 w-screen h-screen z-[100] flex justify-center items-center bg-[#0007]"
  >
    <div class="bg-white w-[24rem] p-6 rounded-md">
      <div class="flex items-center justify-between pb-2">
        <h3 class="text-lg font-bold pb-4">مشاركة</h3>
        <button @click="$emit('close')" class="bg-light-gray px-1 rounded-lg">
          <i class="fa-solid fa-xmark text-blue"></i>
        </button>
      </div>
      <p class="text-sm font-semibold pb-4">
        مشاركة الموقع عبر مواقع التواصل الاجتماعي او مسخ الرابط
      </p>
      <div
        class="flex items-center justify-between border border-text-gray px-4 py-2 rounded-lg bg-light-gray mb-2"
      >
        <p class="text-sm">نسخ الرابط</p>
        <button class=""><i class="fa-regular fa-copy"></i></button>
      </div>
      <div
        v-for="item in 4"
        class="flex items-center justify-between border border-text-gray px-4 py-2 rounded-lg bg-light-gray mb-2"
      >
        <p class="text-sm">Whats App</p>
        <button class="">
          <i class="fa-brands fa-whatsapp text-primary text-2xl"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style></style>
