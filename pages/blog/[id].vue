<template>
  <div>
    <GeneralTitleHeader
      :title="'تفاصيل المقال'"
      :desc="`جميع التفاصيل عن المقالة`"
    />
    <div class="container py-8 px-3">
      <h2 class="font-bold text-2xl pb-6">
        هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة
      </h2>
      <div class="w-full m-auto pb-6" v-for="item in 2">
        <img
          class="w-full h-full object-cover"
          src="~assets/images/blogdetails.svg"
          alt=""
        />
        <p class="md:w-3/4 pt-4">
          هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا
          النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من
          النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.إذا كنت
          تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد
          الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء لغوية، مولد النص
          العربى مفيد لمصممي المواقع على وجه الخصوص، حيث يحتاج العميل فى كثير من
          الأحيان أن يطلع على صورة حقيقية لتصميم الموقع.
        </p>
      </div>
      <div>
        <h2 class="font-bold text-2xl pb-4">المزيد من المدونات</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <BlogCard v-for="item in 3" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
