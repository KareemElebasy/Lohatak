<template>
  <div
    class="fixed top-0 left-0 bg-black opacity-95 flex-col gap-5 w-screen h-screen z-50 flex justify-center items-center"
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
      <div>
        <div
          class="flex items-center justify-between px-4 py-2 rounded-lg bg-light-gray mb-2"
        >
          <div class="flex items-center gap-2">
            <i class="fa-brands fa-whatsapp text-primary text-2xl"></i>

            <p class="text-base font-semibold">Whats App</p>
          </div>
          <button class="">
            <i class="fa-solid fa-circle-chevron-left"></i>
          </button>
        </div>
        <div
          class="flex items-center justify-between px-4 py-2 rounded-lg bg-light-gray mb-2"
        >
          <div class="flex items-center gap-2">
            <i class="fa-solid fa-phone text-primary text-2xl"></i>

            <p class="text-base font-semibold">اتصال هاتفي</p>
          </div>
          <button class="">
            <i class="fa-solid fa-circle-chevron-left"></i>
          </button>
        </div>
        <div
          class="flex items-center justify-between px-4 py-2 rounded-lg bg-light-gray mb-2"
        >
          <div class="flex items-center gap-2">
            <i class="fa-regular fa-comment-dots text-primary text-2xl"></i>
            <p class="text-base font-semibold">محادثة عبر التطبيق</p>
          </div>
          <button class="">
            <i class="fa-solid fa-circle-chevron-left"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style></style>
