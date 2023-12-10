<template>
  <div class="footer py-6 wow fadeInUp" data-wow-delay="0.2s">
    <div class="container text-white pt-8">
      <div class="grid grid-cols-1 md:grid-cols-4">
        <div class="md:col-span-1">
          <h6 class="font-mediam text-2xl pb-2">الصفحات</h6>
          <ul>
            <li class="text-lg pb-2">
              <nuxt-link :to="localePath('/')">الصفحة الرئيسية</nuxt-link>
            </li>
            <li class="text-lg pb-2">
              <nuxt-link :to="localePath('/search')">ابحث عن لوحة</nuxt-link>
            </li>
            <li class="text-lg pb-2">
              <nuxt-link :to="localePath('/myplates')">لوحات</nuxt-link>
            </li>
            <li class="text-lg pb-2">
              <nuxt-link :to="localePath('/add-advertisement')"
                >أضف إعلان</nuxt-link
              >
            </li>
          </ul>
        </div>

        <div class="md:col-span-2 flex flex-col items-center justify-center">
          <div class="pb-4">
            <img class="w-fit" src="~assets/images/logo.svg" alt="" />
          </div>
          <p class="text-base pb-4 text-center w-4/5 md:2/3">
            تمتع بأفضل لوحات السيارات المتميزة التي تجعلك متميز امام الناس و
            تمتع بالاستثمار و البيع و الشراء من خلال لوحتك التي تقدم لك مميزات
            مثيرة .
          </p>
          <div class="flex gap-4 items-center justify-center w-fit">
            <nuxt-link to="/"
              ><img src="~assets/images/applestore.svg" alt=""
            /></nuxt-link>
            <nuxt-link to="/"
              ><img src="~assets/images/googlestore.svg" alt=""
            /></nuxt-link>
          </div>
        </div>

        <div class="md:col-span-1">
          <h6 class="font-mediam text-2xl pb-2">مساعدة و دعم</h6>
          <ul>
            <li>
              <nuxt-link :to="localePath('/contact-us')">اتصل بنا</nuxt-link>
            </li>
            <li>
              <nuxt-link :to="localePath('/privacy-policy')"
                >سياسة الخصوصية</nuxt-link
              >
            </li>
            <li>
              <nuxt-link :to="localePath('/terms-and-conditions')"
                >الشروط والاحكام</nuxt-link
              >
            </li>
          </ul>
        </div>
      </div>
      <hr class="my-6" />
      <div class="flex items-center justify-between">
        <p>
          جميع الحقوق محفوظة <i class="fa-regular fa-copyright"></i>لمؤسسة لوحتك
          للتسويق 2023
        </p>
        <div class="text-primary text-lg flex gap-4 items-center">
          <nuxt-link :to="localePath('/')"
            ><i class="fa-brands fa-tiktok"></i
          ></nuxt-link>
          <nuxt-link :to="localePath('/')"
            ><i class="fa-brands fa-snapchat"></i
          ></nuxt-link>
          <nuxt-link :to="localePath('/')"
            ><i class="fa-brands fa-twitter"></i
          ></nuxt-link>
          <nuxt-link :to="localePath('/')"
            ><i class="fa-brands fa-instagram"></i
          ></nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const localePath = useLocalePath();
</script>

<style lang="scss" scoped>
.footer {
  background-image: url("../../assets/images/bg-footer.svg");
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
}
</style>
