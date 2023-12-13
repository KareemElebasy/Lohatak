<template>
  <div class="bg-gradient">
    <GeneralTitleHeader
      :title="`اضف إعلانك`"
      :desc="`قم بإضافة اعلانك الجديد عبر الخطوات التالية `"
    />
    <div class="container">
      <VeeForm @click.stop as="div" @submit="onSubmit">
        <form>
          <div class="mx-auto w-fit text-center my-6">
            <h4 class="text-black text-xl font-medium pb-2">نوع التسجيل</h4>
            <p class="text-black text-base pb-4">
              حدد نوع تسجيل اللوحة التي ترغب في اضافتها للإعلان
            </p>
            <div class="flex items-center justify-center flex-wrap gap-4">
              <div
                class="plate-types"
                v-for="item in categories.data"
                :key="item.id"
              >
                <input
                  :id="item.type"
                  type="radio"
                  :value="item.type"
                  name="categoryType"
                  class="hidden"
                />

                <label
                  :for="item.type"
                  @click="
                    () => {
                      handleSubBar(item.sub_categories);
                    }
                  "
                >
                  <div class="flex gap-2 items-center min-h-[3rem]">
                    <p> {{ item.title }}</p>
                    <img :src="item.image" />
                  </div>
                </label>
              </div>
            </div>
            <div
              v-if="sub_categories"
              class="flex flex-wrap gap-2 items-center justify-center py-1"
            >
              <div
                v-for="subItem in sub_categories"
                :key="subItem.id"
                class="plate-types"
              >
                <input
                  :id="subItem.type"
                  type="radio"
                  :value="subItem.type"
                  name="subCategoryType"
                  class="hidden"
                />
                <label :for="subItem.type" class="min-h-[3rem] pt-8">
                  <p class="pt-1">{{ subItem.title }}</p>
                </label>
              </div>
            </div>
          </div>
          <div class="mb-6">
            <div class="w-fit mx-auto text-center mb-6">
              <h4 class="text-black text-xl font-medium pb-2">
                أضف معلومات اللوحة
              </h4>
              <p class="text-black text-base">
                قم بإضافة البيانات المطلوبة منك لإكمال الإعلان بنجاح
              </p>
            </div>

            <div
              class="grid grid-cols-1 md:grid-cols-2 gap-10 bg-white rounded-xl py-4"
            >
              <div class="flex flex-col">
                <div
                  class="bg-gray-100 flex border border-black rounded-md m-5 overflow-hidden"
                >
                  <div class="p-2">
                    <img src="~assets/images/platenumbers.svg" alt="" />
                  </div>
                  <table class="w-full text-center">
                    <tr>
                      <th>Contact</th>
                      <th>Country</th>
                    </tr>

                    <tr>
                      <td>Alfreds Futterkiste</td>

                      <td>Maria Anders</td>
                    </tr>
                  </table>
                </div>
                <div
                  class="flex items-center justify-evenly gap-4 bg-white p-3 rounded-md"
                >
                  <InputsSelect
                    class="w-fit"
                    id="firstLetter"
                    name="firstLetter"
                    :currentValue="firstLetter"
                    :options="firstLetterData"
                    placeholder="Dد"
                  />
                  <InputsSelect
                    class="w-fit"
                    id="secondLetter"
                    name="secondLetter"
                    :options="[
                      { name: 'Dد', code: 'd' },
                      { name: 'Mم', code: 'm' },
                    ]"
                    placeholder="Dد"
                  />
                  <InputsSelect
                    class="w-fit"
                    id="thirdLetter"
                    name="thirdLetter"
                    :options="[
                      { name: 'Dد', code: 'd' },
                      { name: 'Mم', code: 'm' },
                    ]"
                    placeholder="Dد"
                  />
                  <InputsSelect
                    class="w-fit"
                    id="numbers"
                    name="numbers"
                    :options="[
                      { name: '555', code: '555' },
                      { name: '333', code: '333' },
                    ]"
                    placeholder="555"
                  />
                </div>
                <div
                  class="flex items-center justify-between m-4 p-2 rounded-md bg-gray-100"
                >
                  <p>ارفاق صورة اللوحة (اختياري)</p>

                  <div>
                    <input
                      id="img"
                      type="file"
                      accept="image/*"
                      name="img"
                      class="hidden"
                    />
                    <label for="img">
                      <div
                        class="flex justify-between items-center min-h-[2rem]"
                      >
                        <i
                          class="fa-regular fa-image text-blue border border-dashed border-gray-400 rounded-lg p-2"
                        ></i>
                      </div>
                    </label>
                  </div>
                </div>
              </div>
              <div class="p-4">
                <div class="expired mb-6">
                  <h6 class="text-base pb-4">حالة الفحص الدوري</h6>
                  <div class="flex gap-4 items-center">
                    <div class="plate-types">
                      <input
                        id="notExpired"
                        type="radio"
                        value="notExpired"
                        name="notExpired"
                        class="hidden"
                        v-model="isExpired"
                      />
                      <label for="notExpired">
                        <div>
                          <p>ساري</p>
                          <i class="fa-regular fa-circle-dot"></i>
                        </div>
                      </label>
                    </div>
                    <div class="plate-types">
                      <input
                        id="expired"
                        type="radio"
                        value="expired"
                        name="expired"
                        class="hidden"
                        v-model="isExpired"
                      />
                      <label for="expired">
                        <div>
                          <p>منتهي</p>
                          <i class="fa-regular fa-circle-dot"></i>
                        </div>
                      </label>
                    </div>
                  </div>
                </div>
                <div class="phone mb-6">
                  <h6 class="text-base pb-4">رقم الجوال</h6>
                  <div class="flex gap-4 items-center">
                    <div class="plate-types">
                      <input
                        id="isShown"
                        type="radio"
                        value="isShown"
                        name="isShown"
                        class="hidden"
                        v-model="showPhone"
                      />
                      <label for="isShown">
                        <div class="flex gap-6 items-center min-h-[2rem]">
                          <p>ظاهر</p>
                          <i class="fa-regular fa-circle-dot text-primary"></i>
                        </div>
                      </label>
                    </div>
                    <div class="plate-types">
                      <input
                        id="notShown"
                        type="radio"
                        value="notShown"
                        name="notShown"
                        class="hidden"
                        v-model="showPhone"
                      />
                      <label for="notShown">
                        <div class="flex gap-6 items-center min-h-[2rem]">
                          <p>ظاهر</p>
                          <i class="fa-regular fa-circle-dot text-primary"></i>
                        </div>
                      </label>
                    </div>
                  </div>
                </div>
                <div class="comments mb-6">
                  <h6 class="text-base pb-4">التعليقات</h6>
                  <div class="flex gap-4 items-center">
                    <div class="plate-types">
                      <input
                        id="comment-on"
                        type="radio"
                        value="comment-on"
                        name="comment-on"
                        class="hidden"
                        v-model="showComment"
                      />
                      <label for="comment-on">
                        <div>
                          <p>تفعيل</p>
                          <i class="fa-regular fa-circle-dot text-primary"></i>
                        </div>
                      </label>
                    </div>
                    <div class="plate-types">
                      <input
                        id="comment-off"
                        type="radio"
                        value="comment-off"
                        name="comment-off"
                        class="hidden"
                        v-model="showComment"
                      />
                      <label for="comment-off">
                        <div class="flex gap-6 items-center min-h-[2rem]">
                          <p>ايقاف</p>
                          <i class="fa-regular fa-circle-dot text-primary"></i>
                        </div>
                      </label>
                    </div>
                  </div>
                </div>
                <div class="adsType mb-6">
                  <h6 class="text-base pb-4">نوع الأعلان</h6>
                  <div class="flex gap-4 items-center">
                    <div class="plate-types">
                      <input
                        id="plate-price"
                        type="radio"
                        value="plate-price"
                        name="plate-price"
                        class="hidden"
                        v-model="adsType"
                      />
                      <label for="plate-price">
                        <div class="flex gap-6 items-center min-h-[2rem]">
                          <p>السعر</p>
                          <i class="fa-regular fa-circle-dot text-primary"></i>
                        </div>
                      </label>
                    </div>
                    <div class="plate-types">
                      <input
                        id="plate-Auction"
                        type="radio"
                        value="plate-Auction"
                        name="plate-Auction"
                        class="hidden"
                        v-model="adsType"
                      />
                      <label for="plate-Auction">
                        <div>
                          <p>السوم</p>
                          <i class="fa-regular fa-circle-dot text-primary"></i>
                        </div>
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
            <div
              class="grid grid-cols-1 md:grid-cols-2 gap-4 bg-white rounded-xl p-4"
            >
              <div class="flex flex-col gap-4">
                <InputsBase
                  :label="$t('FORMS.Placeholders.addressAds')"
                  id="adsAddress"
                  name="adsAddress"
                  :placeholder="$t('FORMS.Placeholders.addressAds')"
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
                  :label="$t('FORMS.Placeholders.price')"
                  id="price"
                  name="price"
                  :placeholder="$t('FORMS.Placeholders.price')"
                />
              </div>

              <button class="w-fit main_btn px-2 py-1 mb-4" type="button">
                {{ $t("NAV.add-advertisement") }}
              </button>
            </div>
          </div>
        </form>
      </VeeForm>
    </div>
  </div>
</template>

<script setup>
const localePath = useLocalePath();

import * as yup from "yup";
import { useToast, POSITION } from "vue-toastification";
const config = useRuntimeConfig();
const i18n = useI18n();
//Get categories
const { data: categories } = await useAsyncData("categories", () =>
  $fetch(`${config.public.baseURL}api/client_web/category`, {
    headers: {
      "Accept-Language": i18n.locale.value,
    },
  })
);
const sub_categories = ref(null);
const handleSubBar = (categories) => {
  console.log(categories);
  sub_categories.value = categories;
};
const toast = useToast();

const schema = yup.object({
  price: yup.string().required(i18n.t("FORMS.Validation.price")),
  adsAddress: yup.string().required(i18n.t("FORMS.Validation.adsAddress")),
});
const categoryType = ref("");
const subCategoryType = ref("");
const isExpired = ref("");
const showPhone = ref("");
const showComment = ref("");
const adsType = ref("");
const btnLoading = ref(false);
const firstLetter = ref("");
const firstLetterData = ref([
  { name: "Dد", code: "d" },
  { name: "Mم", code: "m" },
]);
const price = ref(null);
const adsAddress = ref(null);

function onSubmit(e, actions) {
  console.log(e);
  const SUBMITDATA = new FormData();
  SUBMITDATA.append("category_type", e.categoryType);
  SUBMITDATA.append("category_type", e.subCategoryType);

  console.log();
  // btnLoading.value = true;

  // SUBMITDATA.append("adsAddress", e.adsAddress);
  // $fetch("api/client_web/advertisement", {
  //   method: "POST",
  //   body: SUBMITDATA,
  //   baseURL: config.public.baseURL,
  //   headers: {
  //     "Accept-Language": i18n.locale.value,
  //     Authorization: `Bearer ${useCookie("token").value}`,
  //   },
  // })
  //   .then((res) => {
  //     btnLoading.value = false;
  //     actions.resetForm();
  //     toast.success(res.message, {
  //       timeout: 2000,
  //       position:
  //         i18n.locale.value == "en"
  //           ? POSITION.BOTTOM_RIGHT
  //           : POSITION.BOTTOM_LEFT,
  //     });
  //   })
  //   .catch((err) => {
  //     btnLoading.value = false;
  //     toast.error(err.response._data.message, {
  //       timeout: 2000,
  //       position:
  //         i18n.locale.value == "en"
  //           ? POSITION.BOTTOM_RIGHT
  //           : POSITION.BOTTOM_LEFT,
  //     });
  //   });
}
</script>

<style lang="scss" scoped>
.plate-types {
  input {
    & ~ label {
      @apply block border text-sm font-medium border-gray-300 w-36 min-h-[3rem] rounded-3xl px-6 py-1 mx-2;
      div {
        @apply flex justify-between items-center min-h-[2rem];
      }

      i {
        @apply text-gray-100;
      }
    }
  }

  input:checked {
    & ~ label {
      @apply border-primary;
      div {
        @apply flex justify-between items-center min-h-[2rem];
      }
      i {
        @apply text-primary;
      }
    }
  }

  // input [type="radio"] {
  //   @apply accent-black
  // }
}

th,
td {
  border: 1px solid black;
}
</style>
