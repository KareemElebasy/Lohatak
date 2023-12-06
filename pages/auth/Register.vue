<template>
  <div class="w-full m-auto">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
      <div class="px-8">
        <nuxt-link class="block pb-4" :to="localePath('/')">
          <img class="w-fit" src="~assets/images/logo1.svg" alt="" />
        </nuxt-link>
        <div class="w-full max-w-[600px] rounded-[25px] px-8 pt-6 pb-8">
          <h5 class="text-lg pb-4">مرحبا بك!</h5>
          <h6 class="text-lg pb-4">انشاء حساب</h6>
          <p class="text-lg text-text-gray pb-4">
            الرجاء ادخال البيانات المطلوبة لأنشاء حساب جديد
          </p>
          <h3 class="font-bold text-3xl pb-4">اجعل لوحتك تعبر عن شخصيتك</h3>
          <VeeForm
            @click.stop
            as="div"
            @submit="onSubmit"
            :validation-schema="schema"
            class="w-full max-w-[600px] rounded-[25px] px-8 pt-6 pb-8 relative"
          >
            <form>
              <div class="flex flex-col gap-2">
                <!-- <InputsPhone
                  :label="$t('FORMS.Placeholders.phoneNumber')"
                  :placeholder="$t('FORMS.Placeholders.phoneNumber')"
                  code-color="text-text"
                  class="mb-2"
                /> -->
                <div class="flex gap-2 items-center justify-between">
                  <InputsSelect
                    class="w-fit"
                    :id="`phone_code`"
                    name="phone_code"
                    :options="[
                      { name: 'Ksa', code: '966' },
                      { name: 'UAE', code: '965' },
                    ]"
                    :placeholder="$t('FORMS.Placeholders.city')"
                  />
                  <InputsBase
                    :label="$t('FORMS.Placeholders.phone')"
                    :id="`phone`"
                    :name="`phone`"
                    :type="'text'"
                    :placeholder="$t('FORMS.Placeholders.phone')"
                  >
                  </InputsBase>
                </div>
                <InputsBase
                  :label="$t('FORMS.Placeholders.name')"
                  :id="`username`"
                  :name="`username`"
                  :type="'text'"
                  :placeholder="$t('FORMS.Placeholders.name')"
                />
                {{ date_of_birth.toLocaleDateString("en-US") }}
                <div class="font-light border p-4 border-opacity-10 rounded-xl">
                  <VeeField
                    name="date_of_birth"
                    v-model="date_of_birth"
                    v-slot="{ field }"
                  >
                    <div>
                      <Calendar
                        v-bind="field"
                        showIcon
                        dateFormat="dd-mm-yy"
                        inputId="date_of_birth"
                      />
                    </div>
                  </VeeField>
                </div>
                <div>
                  <!-- <Calendar v-model="date_of_birth" dateFormat="dd/mm/yy" /> -->
                </div>
                <InputsBase
                  :label="$t('FORMS.Placeholders.userId')"
                  :id="`ID_number`"
                  :name="`ID_number`"
                  :placeholder="$t('FORMS.Placeholders.userId')"
                />

                <div class="flex items-center justify-between">
                  <InputsSelect
                    class="w-fit"
                    :id="`gender`"
                    name="gender"
                    :options="[
                      { name: 'Male', code: 'male' },
                      { name: 'Female', code: 'female' },
                    ]"
                    :placeholder="$t('FORMS.Placeholders.gender')"
                  />
                  <InputsSelect
                    class="w-fit"
                    :id="`city`"
                    name="city"
                    :options="[
                      { name: 'Geddah', code: '1' },
                      { name: 'Makkah', code: '2' },
                    ]"
                    :placeholder="$t('FORMS.Placeholders.city')"
                  />
                </div>
              </div>

              <div class="mt-5">
                <button
                  :disabled="btnLoading"
                  class="main_btn w-full py-2 mb-2"
                  type="submit"
                >
                  {{ $t("newAccount") }}
                </button>
                <div class="text-center">
                  {{ $t("haveAccount") }}

                  <nuxt-link
                    :to="localePath('/auth/login')"
                    class="text-start text-primary font-medium mt-4"
                  >
                    {{ $t("login") }}
                  </nuxt-link>
                </div>
              </div>
            </form>
          </VeeForm>
        </div>
      </div>

      <div class="m-auto">
        <img src="~assets/images/bg-login.svg" alt="" />
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "auth",
});

const localePath = useLocalePath();
import * as yup from "yup";
import { useToast, POSITION } from "vue-toastification";
const toast = useToast();
const config = useRuntimeConfig();
const i18n = useI18n();

const schema = yup.object({
  phone: yup.string().required(i18n.t("FORMS.Validation.phone")),
  username: yup.string().required(i18n.t("FORMS.Validation.name")),
  // date_of_birth: yup.string().required(i18n.t("FORMS.Validation.name")),
  // phone_code: yup.mixed().required(),
  // ID_number: yup.string().required(i18n.t("FORMS.Validation.ID_number")),
  // gender: yup.required(i18n.t("FORMS.Validation.gender")),
});

const phone_code = ref(null);
const date_of_birth = ref(null);

const btnLoading = ref(false);
function onSubmit(e, actions) {
  btnLoading.value = true;

  const SUBMITDATA = new FormData();
  console.log(e.date_of_birth);
  console.log(e);
  SUBMITDATA.append("username", e.username);
  SUBMITDATA.append("phone_code", e.phone_code);
  SUBMITDATA.append("phone", e.phone);
  SUBMITDATA.append("gender", e.gender.value);
  SUBMITDATA.append("city", e.city.value);

  // let birth = ref("");
  // birth.value = e.date_of_birth.toISOString.slice(0, 10);
  SUBMITDATA.append("date_of_birth", e.date_of_birth);
  console.log(SUBMITDATA);
  // $fetch("contact", {
  //   method: "POST",
  //   body: SUBMITDATA,
  //   baseURL: config.public.baseURL,
  //   headers: {
  //     "Accept-Language": i18n.locale.value,
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
<style lang="scss">
.inset-xe-3 {
  inset-inline-end: 1rem;
}

.p-datepicker {
  @apply bg-white p-5 rounded-md;
}
</style>
