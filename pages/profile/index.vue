<template>
  <div v-if="store" class="wow animated zoomIn" data-wow-delay=".5s">
    <div class="bg-white rounded-lg">
      <VeeForm
        @click.stop
        as="div"
        @submit="onSubmit"
        :validation-schema="schema"
        class="w-full max-w-[600px] rounded-[25px] px-8 pt-6 pb-8 relative"
      >
        <form>
          <div class="flex flex-col gap-2">
            <!-- UserImage -->
            <div>
              <img src="~assets/images/profileheader.svg" alt="" />
              <img
                :src="store.userInformation?.image"
                alt=""
                class="-mt-12 mx-4 w-24 h-24 rounded-full"
              />
            </div>
            <!-- UserName -->
            <div class="flex gap-4 items-center">
              <InputsBase
                :label="$t('FORMS.Placeholders.name')"
                id="username"
                name="username"
                :placeholder="store?.userInformation?.username"
              />
              <InputsCity
                :label="$t('FORMS.Placeholders.city')"
                :placeholder="store?.userInformation?.city.name"
                code-color="text-text"
                class="mb-2 w-44"
                :id="`city_id`"
                :name="`city_id`"
              >
              </InputsCity>
            </div>
            <!-- Phone Number -->
            <InputsInputPhone
              :label="$t('FORMS.Placeholders.phoneNumber')"
              :placeholder="store?.userInformation?.phone"
              code-color="text-text"
              class="mb-2"
              :disabled="`true`"
            >
            </InputsInputPhone>
            <!-- Edit Phone Number -->
            <div>
              <p
                @click="showEditModal = true"
                class="text-primary py-2 text-lg cursor-pointer w-fit"
              >
                تغيير رقم الهاتف
              </p>
              <Teleport to="body">
                <ModalsEditPhone
                  v-if="showEditModal"
                  @close="showEditModal = false"
                  @openVerifyModal="showVerifyModal = true"
                >
                </ModalsEditPhone>
                <ModalsEditOtp
                  v-if="showVerifyModal"
                  @close="showVerifyModal = false"
                >
                </ModalsEditOtp>
              </Teleport>
            </div>
            <!-- DateOfBirth -->
            <div>
              <VeeField name="date_of_birth" v-slot="{ field, meta }">
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
            <!-- ID NUMBER  -->
            <VeeField name="ID_number" v-slot="{ field, meta }">
              <div
                class="input_wrapper w-full"
                :class="!meta.valid && meta.touched ? 'error' : ''"
              >
                <input
                  type="text"
                  id="ID_number"
                  v-bind="field"
                  :placeholder="store.userInformation?.ID_number"
                  class="font-light border p-4 border-opacity-10 rounded-xl w-full"
                  disabled
                />
              </div>
            </VeeField>
            <!-- Gender and City -->
            <div class="flex items-center gap-4">
              <div class="options-types">
                <input
                  id="male"
                  type="radio"
                  value="male"
                  name="male"
                  class="hidden"
                  v-model="gender"
                />
                <label for="male">
                  <div>
                    <p>ذكر</p>
                    <i class="fa-regular fa-circle-dot text-primary"></i>
                  </div>
                </label>
              </div>
              <div class="options-types">
                <input
                  id="female"
                  type="radio"
                  value="female"
                  name="female"
                  class="hidden"
                  v-model="gender"
                />
                <label for="female">
                  <div>
                    <p>انثي</p>
                    <i class="fa-regular fa-circle-dot text-primary"></i>
                  </div>
                </label>
              </div>
            </div>
          </div>

          <div class="mt-5">
            <button
              :disabled="btnLoading"
              class="main_btn w-fit py-2 px-14 mb-2"
              type="submit"
            >
              {{ $t("BUTTONS.save") }}
            </button>
          </div>
        </form>
      </VeeForm>
    </div>
  </div>
</template>

<script setup>
const emit = defineEmits(["change"]);

import * as yup from "yup";
import { useToast, POSITION } from "vue-toastification";

const localePath = useLocalePath();
const toast = useToast();

const config = useRuntimeConfig();
const i18n = useI18n();

// Fetch User Data
import { useGlobalDataStore } from "../stores/globalData";
const store = useGlobalDataStore();
console.log(store);

//Start Edit Profile
const schema = yup.object({
  phone: yup.string().required(i18n.t("FORMS.Validation.phone")),
  username: yup.string().required(i18n.t("FORMS.Validation.name")),
  date_of_birth: yup
    .string()
    .required(i18n.t("FORMS.Validation.date_of_birth")),
  // phone_code: yup.mixed().required(i18n.t("FORMS.Validation.phone_code")),
  ID_number: yup.string().required(i18n.t("FORMS.Validation.ID_number")),
  gender: yup.mixed().required(i18n.t("FORMS.Validation.gender")),
  city: yup.mixed().required(i18n.t("FORMS.Validation.gender")),
});

const birthdate = ref("");
const phone_code = ref(null);
const date_of_birth = ref(store.userInformation?.date_of_birth);
const gender = ref(store.userInformation?.gender);
const btnLoading = ref(false);

function onSubmit(e, actions) {
  btnLoading.value = true;
  const SUBMITDATA = new FormData();
  // const date_of_birth_formated = e.date_of_birth.toISOString().slice(0, 10);
  console.log(e);
  SUBMITDATA.append("username", e.username);
  SUBMITDATA.append("phone_code", e.phone_code.value);
  SUBMITDATA.append("phone", e.phone);
  SUBMITDATA.append("gender", e.gender.value);
  SUBMITDATA.append("city_id", e.city.value);
  SUBMITDATA.append("ID_number", e.ID_number);
  SUBMITDATA.append("date_of_birth", date_of_birth_formated);
  SUBMITDATA.append("_method", "PUT");
  console.log(SUBMITDATA);
  // $fetch("api/client_web/profile_edit", {
  //   body: SUBMITDATA,
  //   method: "POST",
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
// Edit Modals
const showEditModal = ref(false);
const showVerifyModal = ref(false);
</script>
<style scoped lang="scss">
.inset-xe-3 {
  inset-inline-end: 1rem;
}

.options-types {
  @apply w-32;

  input {
    & ~ label {
      @apply block border text-sm font-medium border-gray-300 w-full min-h-[3rem] rounded-md px-6 py-1 my-1;
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
}
</style>
