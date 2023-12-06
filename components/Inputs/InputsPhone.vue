<template>
  <div class="phone_wrapper flex gap-2 items-center">
    <VeeField type="text" name="phone_code" v-slot="{ meta }">
      <Menu
        as="div"
        v-if="country"
        class="relative flex items-center"
        v-slot="{ open }"
      >
        <MenuButton :id="id">
          <div
            class="flex items-center gap-2 drop_name bg-white text-text border rounded-xl py-3 px-1"
          >
            <nuxt-img
              width="20"
              height="15"
              :alt="country.name"
              :src="country.image"
              :srcset="`${country.image} 480w, ${country.image} 1080w`"
              :class="`  w-5 h-auto flag flag-${country.phone_code}`"
              format="webp"
              loading="lazy"
            />

            +{{ country.phone_code }}

            <i
              class="fa-solid text-lg"
              :class="open ? 'fa-angle-up' : 'fa-angle-down'"
            ></i>
          </div>
        </MenuButton>

        <transition
          enter-active-class="transition duration-100 ease-out"
          enter-from-class="transform scale-95 opacity-0"
          enter-to-class="transform scale-100 opacity-100"
          leave-active-class="transition duration-75 ease-in"
          leave-from-class="transform scale-100 opacity-100"
          leave-to-class="transform scale-95 opacity-0"
        >
          <MenuItems
            class="absolute top-full w-[95px] origin-top-right divide-y rounded-md divide-gray-100 bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
            :class="$i18n.locale == 'ar' ? 'left-0  ' : '   right-0'"
          >
            <MenuItem
              as="div"
              class="text-start"
              v-for="(item, index) in countries"
              :key="index"
            >
              <button
                type="button"
                @click="country = item"
                class="text-start py-4 px-2 gap-2 flex items-center text-text"
              >
                <nuxt-img
                  format="webp"
                  width="20"
                  height="15"
                  :alt="item.name"
                  :src="item.image"
                  :class="` w-5 h-4 flag flag-${item.phone_code}`"
                  loading="lazy"
                />
                <span>+ {{ item.phone_code }}</span>
              </button>
            </MenuItem>
          </MenuItems>
        </transition>
      </Menu>

      <VeeErrorMessage
        v-if="!meta.valid && meta.touched"
        name="phone_code"
        as="div"
        class="text-red-500 text-sm"
      />
    </VeeField>

    <VeeField type="phone" name="phone" v-slot="{ field, meta }">
      <div
        class="input_wrapper flex-1 flex-col mb-0"
        :class="(!meta.valid && meta.touched ? 'error' : '', classes)"
      >
        <input
          type="phone"
          id="phone"
          v-bind="field"
          :placeholder="placeholder"
          class="font-light border p-4 border-opacity-10 rounded-xl"
          :class="
            !meta.valid &&
            meta.touched &&
            'border-red-500  placeholder:text-red-500 lg:text-lg text-sm error'
          "
        />
      </div>
    </VeeField>
  </div>
  <VeeErrorMessage name="phone" as="div" class="text-red-500 text-sm mb-2" />
</template>

<script setup>
import { useField } from "vee-validate";
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";

const phoneCode = useField("phone_code");

// import Dropdown from "primevue/dropdown";

defineProps({
  placeholder: {
    required: true,
  },
  label: {
    required: true,
  },
  classes: {
    required: false,
  },
  phoneColor: {
    required: false,
  },
  codeColor: {
    required: false,
    default: "text-white",
  },
});

// const props = defineProps(["modelValue", "name", "label"]);
// const emit = defineEmits(["code_change", "update:modelValue"]);

const countries = ref([
  {
    id: 1,
    name: "Saudi Arabia",
    image:
      "https://phpv8.aait-d.com/leak_detection/public/storage/images/countries/CUcLmKYWTzsEbBQg8Ha7l7i3QiKBPy5HROu7gzWV.png",
    phone_number_limit: 9,
    phone_code: "966",
  },
]);

const country = ref(null);
const config = useRuntimeConfig();
const i18n = useI18n();

function updatePhoneCode(item) {
  country.value = item;
  phoneCode.setValue(item);
}
</script>
<style lang="scss">
.help.is-danger {
  @apply text-red-700 text-sm;
  font-size: 14px !important;
}
.phone_wrapper {
  @apply relative;

  .input_wrapper {
    @apply relative flex;
    input {
      @apply text-sm;
    }
  }
}

body[dir="rtl"] {
  .phone_wrapper {
    .input_wrapper {
      > div {
        @apply order-2;
      }
      input {
        @apply order-1;
        // direction: rtl;
      }
    }
  }
}
</style>
