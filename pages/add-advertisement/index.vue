<template>
  <div class="bg-gradient">
    <GeneralTitleHeader
      :title="`اضف إعلانك`"
      :desc="`قم بإضافة اعلانك الجديد عبر الخطوات التالية `"
    />
    <div class="container">
      <VeeForm
        @click.stop
        as="div"
        @submit="onSubmit"
        :validation-schema="schema"
      >
        <form>
          <div class="mx-auto w-fit text-center my-6">
            <h4 class="text-black text-xl font-medium pb-2">نوع التسجيل</h4>
            <p class="text-black text-base pb-4">
              حدد نوع تسجيل اللوحة التي ترغب في اضافتها للإعلان
            </p>
            <div class="flex gap-4 flex-wrap m-auto">
              <div class="plate-types">
                <input
                  id="special"
                  type="radio"
                  value="special"
                  name="special"
                  class="hidden"
                  v-model="categoryType"
                />
                <label for="special">
                  <div class="flex gap-2 items-center min-h-[3rem]">
                    <p> خصوصي</p>
                    <img src="~assets/images/cartype.svg" />
                  </div>
                </label>
              </div>
              <div class="plate-types">
                <input
                  id="special-type"
                  type="radio"
                  value="special-type"
                  name="special-type"
                  class="hidden"
                  v-model="categoryType"
                />

                <label for="special-type">
                  <div class="flex gap-2 items-center min-h-[3rem]">
                    <p> نقل خاص</p>
                    <img src="~assets/images/specialtype.svg" />
                  </div>
                </label>
              </div>
              <div class="plate-types">
                <input
                  id="moto-type"
                  type="radio"
                  value="moto-type"
                  name="moto-type"
                  class="hidden"
                  v-model="categoryType"
                />

                <label for="moto-type">
                  <div class="flex gap-2 items-center min-h-[3rem]">
                    <p> دراجات نارية</p>
                    <img src="~assets/images/mototype.svg" />
                  </div>
                </label>
              </div>
            </div>
          </div>

          <div class="mb-6">
            <div class="w-fit mx-auto text-center">
              <h4 class="text-black text-xl font-medium pb-2">
                أضف معلومات اللوحة
              </h4>
              <p class="text-black text-base pb-4">
                قم بإضافة البيانات المطلوبة منك لإكمال الإعلان بنجاح
              </p>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2">
              <div>Plate</div>
              <div>
                <div class="expired mb-6">
                  <h6 class="text-sm pb-2">حالة الفحص الدوري</h6>
                  <div class="flex gap-4 items-center">
                    <div class="plate-types flex items-center gap-1">
                      <input
                        id="notExpired"
                        type="radio"
                        value="notExpired"
                        name="notExpired"
                        class="radio:bg-green-500"
                        v-model="isExpired"
                      />
                      <label for="notExpired">
                        <p>ساري</p>
                      </label>
                    </div>
                    <div class="plate-types flex items-center gap-1">
                      <input
                        id="expired"
                        type="radio"
                        value="expired"
                        name="expired"
                        v-model="isExpired"
                      />
                      <label for="expired">
                        <p>منتهي</p>
                      </label>
                    </div>
                  </div>
                </div>
                <div class="phone mb-6">
                  <h6 class="text-sm pb-2">رقم الجوال</h6>
                  <div class="flex gap-4 items-center">
                    <div class="plate-types flex items-center gap-1">
                      <input
                        id="isShown"
                        type="radio"
                        value="isShown"
                        name="isShown"
                        class="radio:bg-green-500"
                        v-model="showPhone"
                      />
                      <label for="isShown">
                        <p>ظاهر</p>
                      </label>
                    </div>
                    <div class="plate-types flex items-center gap-1">
                      <input
                        id="notShown"
                        type="radio"
                        value="notShown"
                        name="notShown"
                        v-model="showPhone"
                      />
                      <label for="notShown">
                        <p>مخفي</p>
                      </label>
                    </div>
                  </div>
                </div>
                <div class="comments mb-6">
                  <h6 class="text-sm pb-2">التعليقات</h6>
                  <div class="flex gap-4 items-center">
                    <div class="plate-types flex items-center gap-1">
                      <input
                        id="isShownComment"
                        type="radio"
                        value="isShownComment"
                        name="isShownComment"
                        class="radio:bg-green-500"
                        v-model="showComment"
                      />
                      <label for="isShownComment">
                        <p>تفعيل</p>
                      </label>
                    </div>
                    <div class="plate-types flex items-center gap-1">
                      <input
                        id="notShownComment"
                        type="radio"
                        value="notShownComment"
                        name="notShownComment"
                        v-model="showComment"
                      />
                      <label for="notShownComment">
                        <p>ايقاف</p>
                      </label>
                    </div>
                  </div>
                </div>
                <div class="adsType mb-6">
                  <h6 class="text-sm pb-2">نوع الأعلان</h6>
                  <div class="flex gap-4 items-center">
                    <div class="plate-types flex items-center gap-1">
                      <input
                        id="price"
                        type="radio"
                        value="price"
                        name="price"
                        class="radio:bg-green-500"
                        v-model="adsType"
                      />
                      <label for="price">
                        <p>السعر</p>
                      </label>
                    </div>
                    <div class="plate-types flex items-center gap-1">
                      <input
                        id="Auction"
                        type="radio"
                        value="Auction"
                        name="Auction"
                        v-model="adsType"
                      />
                      <label for="Auction">
                        <p>السوم</p>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="pb-6">
            <div class="w-fit mx-auto text-center">
              <h4 class="text-black text-xl font-medium pb-2">
                أضف تفاصيل الأعلان
              </h4>
              <p class="text-black text-base pb-4">
                قم بإضافة البيانات المطلوبة للإكمال الإعلان الخاص بك بنجاح
              </p>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div class="flex flex-col gap-4">
                <InputsBase
                  :label="$t('FORMS.Placeholders.price')"
                  id="price"
                  name="price"
                  :placeholder="$t('FORMS.Placeholders.price')"
                />
                <InputsBase
                  :label="$t('FORMS.Placeholders.detailsAds')"
                  id="detailsAds"
                  name="detailsAds"
                  :placeholder="$t('FORMS.Placeholders.detailsAds')"
                />
              </div>
              <div>
                <InputsBase
                  :label="$t('FORMS.Placeholders.detailsAds')"
                  id="detailsAds"
                  name="detailsAds"
                  :placeholder="$t('FORMS.Placeholders.detailsAds')"
                />
              </div>
            </div>
          </div>
          <button class="text-start main_btn px-2 py-1 mb-4" type="button">
            {{ $t("NAV.add-advertisement") }}
          </button>
        </form>
      </VeeForm>
    </div>
  </div>
</template>

<script setup>
const localePath = useLocalePath();

import * as yup from "yup";
import { useToast, POSITION } from "vue-toastification";
const toast = useToast();
const config = useRuntimeConfig();
const i18n = useI18n();

const schema = yup.object({
  phone: yup.string().required(i18n.t("FORMS.Validation.phone")),
  name: yup.string().required(i18n.t("FORMS.Validation.name")),
});
const categoryType = ref("");
const isExpired = ref("");
const showPhone = ref("");
const showComment = ref("");
const adsType = ref("");
const btnLoading = ref(false);

function onSubmit(e, actions) {
  btnLoading.value = true;
  const SUBMITDATA = new FormData();
  SUBMITDATA.append("phone", e.phone);
  $fetch("contact", {
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

<style lang="scss" scoped>
.plate-types {
  input {
    & ~ label {
      @apply block border-2 text-sm font-medium border-gray-100 rounded-3xl px-6 py-1 mx-2;
    }
  }

  input:checked {
    input {
      @apply bg-primary;
    }
    & ~ label {
      @apply border-primary;
    }
  }
}
</style>
