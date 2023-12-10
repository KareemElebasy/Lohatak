<template>
  <div class="pt-12 w-full wow fadeInUp" data-wow-delay="0.1s">
    <div class="grid grid-cols-1 md:grid-cols-2">
      <div>
        <img
          class="wow zoomIn"
          data-wow-delay="0.9s"
          src="~assets/images/expression.svg"
          alt=""
        />
      </div>

      <div class="m-auto p-4 wow zoomIn" data-wow-delay="0.6s">
        <h3 class="font-bold text-3xl pb-4">اجعل لوحتك تعبر عن شخصيتك</h3>
        <p class="text-text-gray text-base pb-4 w-2/3">
          هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا
          النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من
          النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.إذا كنت
          تحتاج إلى عدد أكبر من الفقرات يتيح لك الموقع.
        </p>
        <button class="main_btn px-2 py-1">
          {{ $t("BUTTONS.exploreMore") }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
