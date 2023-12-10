<template>
  <div class="w-full m-auto wow animate fadeInLeftBig" data-wow-delay=".2">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
      <div class="px-8 wow animate bounceIn" data-wow-delay=".2s">
        <nuxt-link class="block w-fit pb-4" :to="localePath('/')">
          <img class="w-fit" src="~assets/images/logo1.svg" alt="" />
        </nuxt-link>
        <div class="w-full max-w-[600px] rounded-[25px] px-8 pt-6 pb-8">
          <h5 class="text-lg pb-4">مرحبا مجددا!</h5>
          <h6 class="text-2xl font-semibold pb-4">مرحبًا بعودتك</h6>
          <p class="text-lg text-text-gray pb-4">
            الرجاء إدخال عنوان البريد الإلكتروني الصحيح وكلمة المرور الخاصة بك
          </p>
          <VeeForm
            @click.stop
            as="div"
            @submit="onSubmit"
            :validation-schema="schema"
            class="w-full max-w-[600px] pt-6"
          >
            <form>
              <div class="flex flex-col gap-2">
                <div class="flex gap-2 items-center justify-between">
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
                  <!-- <InputsSelect
                    class="w-fit"
                    :id="`phone_code`"
                    name="phone_code"
                    :options="[
                      { name: 'Ksa', code: '966' },
                      { name: 'UAE', code: '965' },
                    ]"
                    :placeholder="$t('FORMS.Placeholders.city')"
                  /> -->
                </div>
              </div>
              <div class="mt-5">
                <button
                  :disabled="btnLoading"
                  class="main_btn w-full py-3 mb-4"
                  type="submit"
                >
                  {{ $t("login") }}
                </button>

                <div class="text-center text-sm font-semibold">
                  {{ $t("dontHaveAccount") }}

                  <nuxt-link
                    :to="localePath('/auth/register')"
                    class="text-start text-primary font-medium mt-4"
                  >
                    {{ $t("createAccount") }}
                  </nuxt-link>
                </div>
              </div>
            </form>
          </VeeForm>
        </div>
      </div>

      <div class="m-auto">
        <img
          class="w-full object-cover wow animate fadeInLeftBig"
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

const selectedCountry = ref();
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

const localePath = useLocalePath();
import * as yup from "yup";
import { useToast, POSITION } from "vue-toastification";
const toast = useToast();
const config = useRuntimeConfig();
const i18n = useI18n();

const schema = yup.object({
  phone: yup.string().required(i18n.t("FORMS.Validation.phone")),
  phone_code: yup.mixed().required(i18n.t("FORMS.Validation.phone_code")),
});
const phone_code = ref(null);
const btnLoading = ref(false);
function onSubmit(e, actions) {
  console.log(e);
  console.log(phone_code);
  btnLoading.value = true;
  const SUBMITDATA = new FormData();
  SUBMITDATA.append("phone", e.phone);
  SUBMITDATA.append("phone_code", e.phone_code.value);
  $fetch("api/client_web/login", {
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
      navigateTo("/auth/verify", { replace: true });
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
<style scoped>
.inset-xe-3 {
  inset-inline-end: 1rem;
}
</style>
