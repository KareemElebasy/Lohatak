<template>
  <div
    class="bg-white w-full flex flex-col rounded-t-[2.5rem] rounded-b-2xl h-full pb-5 m-auto"
  >
    <div class="w-full">
      <img
        src="~assets/images/blog1.svg"
        alt="motawefy-hogag"
        class="rounded-t-[3rem] h-[12rem] w-full object-cover"
      />
    </div>
    <div class="p-3">
      <div class="text-gray-400 flex gap-2">
        <p>29 نوفمبر 2023</p>
      </div>

      <nuxt-link :to="localePath(`/blog/1`)" class="mb-3 text-black font-bold">
        هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة
      </nuxt-link>
    </div>
  </div>
</template>

<script setup>
const localePath = useLocalePath();
</script>

<style lang="scss" scoped></style>
