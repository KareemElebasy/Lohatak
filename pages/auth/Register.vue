<template>
  <div class="w-full mt-2 wow animate fadeInLeftBig" data-wow-delay=".2">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
      <div class="px-8 wow animate bounceIn" data-wow-delay=".2s">
        <nuxt-link class="block pb-1" :to="localePath('/')">
          <img class="w-fit" src="~assets/images/logo1.svg" alt="" />
        </nuxt-link>
        <div class="w-full max-w-[600px] rounded-[25px] px-8 pt-6 pb-8">
          <h5 class="text-lg pb-2">مرحبا بك!</h5>
          <h6 class="text-2xl font-semibold pb-2">انشاء حساب</h6>
          <p class="text-base text-text-gray pb-2">
            الرجاء ادخال البيانات المطلوبة لأنشاء حساب جديد
          </p>
          <VeeForm
            @click.stop
            as="div"
            @submit="onSubmit"
            :validation-schema="schema"
            class="w-full max-w-[600px] rounded-[25px] pt-3"
          >
            <form>
              <div class="flex flex-col gap-2">
                <InputsInputPhone
                  :label="$t('FORMS.Placeholders.phoneNumber')"
                  :placeholder="$t('FORMS.Placeholders.phoneNumber')"
                  code-color="text-text"
                  class="mb-2"
                >
                </InputsInputPhone>
                <InputsBase
                  :label="$t('FORMS.Placeholders.name')"
                  :id="`username`"
                  :name="`username`"
                  :type="'text'"
                  :placeholder="$t('FORMS.Placeholders.name')"
                />
                <div>
                  <VeeField
                    name="date_of_birth"
                    v-model="date_of_birth"
                    v-slot="{ field, meta }"
                  >
                    <div class="font-light border border-opacity-10 rounded-xl">
                      <VueDatePicker v-bind="field" v-model="date_of_birth">
                        <template #clock-icon>
                          <img class="slot-icon" src="/logo1.svg" />
                        </template>
                      </VueDatePicker>
                    </div>
                    <VeeErrorMessage
                      v-if="!meta.valid && meta.touched"
                      name="date_of_birth"
                      as="div"
                      class="text-red-500 text-sm mb-2"
                    />
                  </VeeField>
                </div>

                <InputsBase
                  :label="$t('FORMS.Placeholders.userId')"
                  :id="`ID_number`"
                  :name="`ID_number`"
                  :type="'text'"
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
                  <InputsCity
                    :label="$t('FORMS.Placeholders.city')"
                    :placeholder="$t('FORMS.Placeholders.city')"
                    code-color="text-text"
                    class="mb-2"
                    :id="`city_id`"
                    :name="`city_id`"
                  >
                  </InputsCity>
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
        <img
          class="wow animate fadeInLeftBig"
          data-wow-delay=".5s"
          src="~assets/images/bg-login.svg"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import * as yup from "yup";
import { useToast, POSITION } from "vue-toastification";
import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";
import { useField } from "vee-validate";

const phone_code = useField("phone_code");
const city_id = useField("city_id");

definePageMeta({
  layout: "auth",
  middleware: "auth",
});

const localePath = useLocalePath();
const toast = useToast();
const config = useRuntimeConfig();
const i18n = useI18n();

const schema = yup.object({
  phone: yup.string().required(i18n.t("FORMS.Validation.phone")),
  username: yup.string().required(i18n.t("FORMS.Validation.name")),
  date_of_birth: yup
    .string()
    .required(i18n.t("FORMS.Validation.date_of_birth")),
  phone_code: yup.mixed().required(i18n.t("FORMS.Validation.phone_code")),
  ID_number: yup.string().required(i18n.t("FORMS.Validation.ID_number")),
  gender: yup.mixed().required(i18n.t("FORMS.Validation.gender")),
  city_id: yup.mixed().required(i18n.t("FORMS.Validation.gender")),
});

const date_of_birth = ref(null);
const btnLoading = ref(false);

function onSubmit(e, actions) {
  btnLoading.value = true;
  const SUBMITDATA = new FormData();
  const date_of_birth_formated = e.date_of_birth.toISOString().slice(0, 10);
  SUBMITDATA.append("username", e.username);
  SUBMITDATA.append("phone_code", e.phone_code);
  SUBMITDATA.append("phone", e.phone);
  SUBMITDATA.append("gender", e.gender.value);
  SUBMITDATA.append("city_id", e.city_id);
  SUBMITDATA.append("ID_number", e.ID_number);
  SUBMITDATA.append("date_of_birth", date_of_birth_formated);
  console.log(SUBMITDATA);
  $fetch("api/client_web/register", {
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
      useCookie("phone").value = e.phone;
      useCookie("phone_code").value = e.phone_code;

      navigateTo("/auth/verify");
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
<style lang="scss">
.inset-xe-3 {
  inset-inline-end: 1rem;
}

.p-datepicker {
  @apply bg-white p-5 rounded-md;
}

.slot-icon {
  height: 20px;
  width: auto;
}
</style>
