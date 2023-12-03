<template>
  <!-- <div class="header h-[100vh]">
    <div class="container pt-20 h-[100vh] flex items-center">
      <div class="md:w-2/5">
        <h2
          class="text-primary md:text-start text-center font-bold text-5xl mb-6"
        >
          حاضر متميز <br />
          مستقبل <span class="text-white">استثماري</span>
        </h2>
        <p class="text-white font-medium mb-6">
          تمتع بأفضل لوحات السيارات المتميزة التي تجعلك متميز امام الناس و تمتع
          بالاستثمار و البيع و الشراء من خلال لوحتك التي تقدم لك مميزات مثيرة .
        </p>

        <nuxt-link :to="localePath('/')" class="main_btn py-2 px-4">
          {{ $t("BUTTONS.discoverMore") }}
        </nuxt-link>
      </div>
    </div>
  </div> -->
  <div class="" dir=" rtl">
    <Swiper
      :modules="[SwiperAutoplay, SwiperNavigation, SwiperPagination]"
      :slides-per-view="1"
      :autoplay="{
        delay: 5000,
        disableOnInteraction: true,
      }"
      :navigation="false"
    >
      <SwiperSlide v-for="item in 3">
        <div
          class="swiper-wraper bg-cover bg-no-repeat bg-center bg-fixed"
          :style="`background-image: url('https://i.postimg.cc/K8ZvJsLR/Rectangle-1.png');`"
        >
          <div class="container h-[60vh] md:h-[100vh]  flex items-center">
            <div class="md:w-2/5">
              <h2
                class="text-primary md:text-start text-center font-bold text-5xl mb-6"
              >
                حاضر متميز <br />
                مستقبل <span class="text-white">استثماري</span>
              </h2>
              <p class="text-white text-base font-medium mb-6">
                تمتع بأفضل لوحات السيارات المتميزة التي تجعلك متميز امام الناس و
                تمتع بالاستثمار و البيع و الشراء من خلال لوحتك التي تقدم لك
                مميزات مثيرة .
              </p>

              <nuxt-link :to="localePath('/search')" class="main_btn py-2 px-4">
                {{ $t("BUTTONS.discoverMore") }}
              </nuxt-link>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script setup>
const localePath = useLocalePath();
</script>

<style lang="scss" scoped>
.header .swiper-wraper {
  background-image: url("../../assets/images/bg-header.svg");
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
}
</style>
