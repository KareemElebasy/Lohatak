<template>
  <div class="bg-gradient-to-l from-gray-100 to-gray-50">
    <GeneralTitleHeader
      :title="'تفاصيل اللوحة'"
      :desc="`جميع البيانات التي تخص اللوحة`"
    />
    <div class="container py-4">
      <div
        class="mb-4 grid grid-cols-1 md:grid-cols-2 gap-8 bg-white p-3 rounded-md"
      >
        <div class="my-1">
          <swiper
            :style="{
              '--swiper-navigation-color': '#fff',
              '--swiper-pagination-color': '#fff',
            }"
            :spaceBetween="10"
            :thumbs="{ swiper: thumbsSwiper }"
            :modules="[FreeMode, Navigation, Thumbs]"
            class=""
          >
            <swiper-slide v-for="item in 3" key="itemImg.id"
              ><img
                src="https://gomechanic.in/blog/wp-content/uploads/2019/05/typesofcarnumberplates-02-01.jpg"
                class="rounded-xl"
            /></swiper-slide>
          </swiper>

          <swiper
            @swiper="setThumbsSwiper"
            :spaceBetween="10"
            :slidesPerView="4"
            :freeMode="true"
            :watchSlidesProgress="true"
            :modules="[FreeMode, Navigation, Thumbs]"
            class="mySwiper mt-4 flex flex-col"
            ><swiper-slide v-for="item in 3" key="itemImg.id"
              ><img
                class="rounded-lg object-fill w-full h-full"
                src="https://gomechanic.in/blog/wp-content/uploads/2019/05/typesofcarnumberplates-02-01.jpg"
            /></swiper-slide>
          </swiper>
        </div>

        <div>
          <div class="flex items-center justify-between pb-4 mb-2">
            <h3 class="font-mediam text-lg">لوحة مميزه ثنائي مكرر</h3>
            <p class="text-primary">#97187</p>
          </div>

          <div
            class="flex items-center justify-between text-text-gray bg-gradient-to-l from-gray-100 to-gray-50 p-2 rounded-md mb-2"
          >
            <div class="flex items-center gap-2">
              <img src="~assets/images/profilepic.svg" alt="" />
              <div class="text-sm">
                <h6>اسم البائع</h6>
                <h5>Kareem</h5>
              </div>
            </div>
            <button>
              <i class="fa-solid fa-location-dot text-primary mx-1"></i>
              <span class="text-sm">الرياض</span>
            </button>
            <button>
              <i class="fa-regular fa-calendar-days text-primary mx-1"></i>
              <span class="text-sm"> منذ 3 ايام </span>
            </button>
          </div>

          <div
            class="flex items-center justify-between pb-4 font-bold text-sm bg-gradient-to-l from-gray-100 to-gray-50 p-2 rounded-md mb-2"
          >
            <h3 class="font-mediam text-lg">سعر اللوحة</h3>
            <p class="">80,000 ر.س</p>
          </div>
          <div
            class="flex items-center justify-between pb-4 text-sm bg-gradient-to-l from-gray-100 to-gray-50 p-2 rounded-md mb-2"
          >
            <h3 class="font-mediam text-lg">حالة تقرير الفحص الدوري</h3>
            <p class="text-primary bg-gray-300 opacity-30 px-2 py-1 rounded-md">
              ساري
            </p>
          </div>
          <button class="main_btn w-full py-2 mb-2" @click="openBuy = true">
            شراء
          </button>
          <div class="flex items-center justify-between gap-4 mb-2">
            <button class="main_btn w-full py-2" @click="openContact = true">
              تواصل
            </button>
            <button
              @click="openReport = true"
              class="text-red-700 border w-full border-red-700 px-2 py-2 rounded-[.5rem]"
            >
              ابلاغ
            </button>
          </div>
          <ModalsReport
            v-if="openReport === true"
            @close="openReport = false"
          ></ModalsReport>
          <ModalsContactSocial
            v-if="openContact === true"
            @close="openContact = false"
          >
          </ModalsContactSocial>
          <ModalsSendRequest
            v-if="openBuy === true"
            @close="openBuy = false"
            :mainHeading="`تم الارسال بنجاح`"
            :message="`تم ارسال مشكلتك بنجاح وجاري مراجعتها من الادارة شكرا لك`"
          ></ModalsSendRequest>
          <p>هل تريد حساب ضامن عن طريق التطبيق؟</p>
        </div>
      </div>

      <VeeForm
        @click.stop
        as="div"
        @submit="onSubmit"
        :validation-schema="schema"
        class="mt-1 grid grid-cols-1"
      >
        <form>
          <h4 class="font-bold text-lg pb-2">تعليقك</h4>
          <InputsBase
            label="$t('FORMS.Placeholders.reportDesc')"
            :id="`commentDesc`"
            :name="`commentDesc`"
            :type="'text'"
            :placeholder="$t('FORMS.Placeholders.reportDesc')"
          >
          </InputsBase>
        </form>

        <button class="main_btn px-6 py-2 w-fit my-2 text-sm">ارسال</button>
      </VeeForm>

      <h2 class="font-bold text-2xl py-4">التعليقات</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <GeneralCommentCard v-for="item in 5" />
        </div>
        <div>
          <GeneralCommentCard v-for="item in 5" />
        </div>
      </div>
    </div>
    <div class="">
      <HomeAdvertisements />
    </div>
    <div class="container pt-12 pb-12">
      <div class="text-center md:w-1/2 mx-auto pb-4">
        <h2 class="text-black font-bold text-2xl pb-2">إعلانات مشابه</h2>
        <p class="text-text-gray">بعض اللوحات التي تشابه طلبك</p>
      </div>

      <div
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
      >
        <GeneralCard v-for="item in 6" class="mx-auto" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import * as yup from "yup";
const config = useRuntimeConfig();
const i18n = useI18n();

const openReport = ref(false);
const openContact = ref(false);
const openBuy = ref(false);
const thumbsSwiper = ref(null);
const setThumbsSwiper = (swiper) => {
  thumbsSwiper.value = swiper;
};

const schema = yup.object({
  commentDesc: yup.string().required(i18n.t("FORMS.Validation.commentDesc")),
});
const btnLoading = ref(false);
function onSubmit(e, actions) {
  btnLoading.value = true;
  const SUBMITDATA = new FormData();
  SUBMITDATA.append("phone", e.phone);
  SUBMITDATA.append("commentDesc", e.commentDesc);
  $fetch("api/client_web/", {
    method: "POST",
    body: SUBMITDATA,
    baseURL: config.public.baseURL,
    headers: {
      "Accept-Language": i18n.locale.value,
    },
  })
    .then((res) => {
      btnLoading.value = false;

      actions.resetForm();
      toast.success(res.message, {
        timeout: 2000,
        position:
          i18n.locale.value == "en"
            ? POSITION.BOTTOM_RIGHT
            : POSITION.BOTTOM_LEFT,
      });
    })
    .catch((err) => {
      btnLoading.value = false;
      toast.error(err.response._data.message, {
        timeout: 2000,
        position:
          i18n.locale.value == "en"
            ? POSITION.BOTTOM_RIGHT
            : POSITION.BOTTOM_LEFT,
      });
    });
}
</script>

<style lang="scss" scoped></style>
