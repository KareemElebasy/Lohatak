<template>
  <div
    class="fixed top-0 left-0 bg-black opacity-80 flex-col gap-5 w-screen h-screen z-50 flex justify-center items-center"
  >
    <div class="bg-white w-[20rem] p-6 rounded-md">
      <h3 class="text-lg font-bold pb-4">Are you Delete ?</h3>
      <div class="flex items-center gap-4">
        <button class="main_btn px-2 py-1">confirm</button>
        <button class="main_btn px-2 py-1" @click="$emit('close')">
          cancel
        </button>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style></style>
