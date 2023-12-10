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
                <!-- <InputsPhone
                  :label="$t('FORMS.Placeholders.phoneNumber')"
                  :placeholder="$t('FORMS.Placeholders.phoneNumber')"
                  code-color="text-text"
                  class="mb-2"
                /> -->
                <div class="flex gap-2 items-center">
                  <InputsBase
                    :label="$t('FORMS.Placeholders.phone')"
                    :id="`phone`"
                    :name="`phone`"
                    :type="'text'"
                    :placeholder="$t('FORMS.Placeholders.phone')"
                  >
                  </InputsBase>
                  <div>
                    <VeeField
                      type="text"
                      name="phone_code"
                      v-slot="{ meta, field }"
                    >
                      <div>
                        <Dropdown
                          v-bind="field"
                          :options="countriess"
                          :selected="countriess[0]"
                          optionLabel="name"
                          optionValue="phone_code"
                          class="font-light border p-4 border-opacity-10 rounded-xl"
                          dataKey="phone_code"
                          placeholder="966+"
                        >
                          <template #option="slotProps">
                            <div class="flex items-center gap-1">
                              <img
                                :alt="slotProps.option.label"
                                :src="slotProps.option.image"
                                class="w-10"
                              />
                              <div>+({{ slotProps.option.phone_code }})</div>
                            </div>
                          </template>
                        </Dropdown>
                        <VeeErrorMessage
                          v-if="!meta.valid && meta.touched"
                          name="phone_code"
                          as="div"
                          class="text-red-500 text-sm"
                        />
                      </div>
                    </VeeField>
                  </div>
                </div>
                <InputsBase
                  :label="$t('FORMS.Placeholders.name')"
                  :id="`username`"
                  :name="`username`"
                  :type="'text'"
                  :placeholder="$t('FORMS.Placeholders.name')"
                />
                {{ date_of_birth }}
                <div class="font-light border p-4 border-opacity-10 rounded-xl">
                  <VeeField
                    name="date_of_birth"
                    v-model="date_of_birth"
                    v-slot="{ field, meta }"
                  >
                    <div>
                      <Calendar
                        v-bind="field"
                        showIcon
                        dateFormat="dd-mm-yy"
                        inputId="date_of_birth"
                      />
                    </div>
                    <VeeErrorMessage
                      v-if="!meta.valid && meta.touched"
                      name="date_of_birth"
                      as="div"
                      class="error"
                    />
                  </VeeField>
                </div>
                <div>
                  <!-- <Calendar v-model="date_of_birth" dateFormat="dd/mm/yy" /> -->
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
definePageMeta({
  layout: "auth",
  middleware: "auth",
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
  date_of_birth: yup
    .string()
    .required(i18n.t("FORMS.Validation.date_of_birth")),
  phone_code: yup.mixed().required(i18n.t("FORMS.Validation.phone_code")),
  ID_number: yup.string().required(i18n.t("FORMS.Validation.ID_number")),
  gender: yup.mixed().required(i18n.t("FORMS.Validation.gender")),
  city: yup.mixed().required(i18n.t("FORMS.Validation.gender")),
});

const countriess = ref([
  {
    id: 1,
    name: "Saudi Arabia",
    image:
      "https://phpv8.aait-d.com/leak_detection/public/storage/images/countries/CUcLmKYWTzsEbBQg8Ha7l7i3QiKBPy5HROu7gzWV.png",
    phone_number_limit: 9,
    phone_code: "966",
  },
]);

const phone_code = ref(null);
const date_of_birth = ref(null);

const btnLoading = ref(false);
function onSubmit(e, actions) {
  btnLoading.value = true;
  const SUBMITDATA = new FormData();
  const date_of_birth_formated = e.date_of_birth.toISOString().slice(0, 10);
  console.log(e);
  SUBMITDATA.append("username", e.username);
  SUBMITDATA.append("phone_code", e.phone_code.value);
  SUBMITDATA.append("phone", e.phone);
  SUBMITDATA.append("gender", e.gender.value);
  SUBMITDATA.append("city_id", e.city.value);
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
      useCookie("phone_code").value = e.phone_code.value;

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
</style>
