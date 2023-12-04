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
                <InputsPhone
                  :label="$t('FORMS.Placeholders.phoneNumber')"
                  :placeholder="$t('FORMS.Placeholders.phoneNumber')"
                  code-color="text-text"
                  class="mb-2"
                />
                <InputsBase
                  :label="$t('FORMS.Placeholders.name')"
                  id="name"
                  name="name"
                  :placeholder="$t('FORMS.Placeholders.name')"
                />
                <div
                  class="card flex justify-content-center font-light border p-4 border-opacity-10 rounded-xl"
                >
                  <Calendar v-model="birthdate" showIcon iconDisplay="input" />
                </div>
                <InputsBase
                  :label="$t('FORMS.Placeholders.userId')"
                  id="userId"
                  name="userId"
                  :placeholder="$t('FORMS.Placeholders.userId')"
                />
                <div class="flex items-center justify-between">
                  <InputsSelect
                    class="w-fit"
                    id="nationality"
                    name="nationality"
                    :options="[
                      { name: 'Egy', code: 'egy' },
                      { name: 'KSA', code: 'ksa' },
                    ]"
                    :placeholder="$t('FORMS.Placeholders.nationality')"
                  />
                  <InputsSelect
                    class="w-fit"
                    id="gender"
                    name="gender"
                    :options="[
                      { name: 'Male', code: 'male' },
                      { name: 'Female', code: 'female' },
                    ]"
                    :placeholder="$t('FORMS.Placeholders.gender')"
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
const birthdate = ref("");
// const emit = defineEmits(["close", "forget", "new-account"]);
import * as yup from "yup";
import { useToast, POSITION } from "vue-toastification";
const toast = useToast();
const config = useRuntimeConfig();
const i18n = useI18n();
const schema = yup.object({
  price: yup.string().required(i18n.t("FORMS.Validation.name")),
});
const price = ref(null);
const phone_code = ref(null);
const btnLoading = ref(false);
function onSubmit(e, actions) {
  
  btnLoading.value = true;

  const SUBMITDATA = new FormData();
  SUBMITDATA.append("price", e.price);
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
<style scoped>
.inset-xe-3 {
  inset-inline-end: 1rem;
}
</style>
