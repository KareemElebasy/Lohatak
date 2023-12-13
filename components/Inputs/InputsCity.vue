<template>
  <div>
    <VeeField id="city_id" type="text" name="city_id" v-slot="{ field, meta }">
      <Menu as="div" class="relative inline-block text-left">
        <div>
          <MenuButton
            class="font-light border p-4 border-opacity-10 rounded-xl"
          >
            <div class="flex items-center justify-center gap-1">
              <p>{{ city.name }}</p>
            </div>
          </MenuButton>
        </div>
        <transition
          enter-active-class="transition duration-100 ease-out"
          enter-from-class="transform scale-95 opacity-0"
          enter-to-class="transform scale-100 opacity-100"
          leave-active-class="transition duration-75 ease-in"
          leave-from-class="transform scale-100 opacity-100"
          leave-to-class="transform scale-95 opacity-0"
        >
          <MenuItems
            class="absolute right-0 mt-2 w-32 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none"
          >
            <div class="px-1 py-1">
              <MenuItem
                v-bind="field"
                v-slot="{ active }"
                v-for="item in cities.data"
                :key="item.id"
                as="div"
              >
                <button
                  :class="[
                    active ? 'bg-violet-500 text-primary' : 'text-gray-900',
                    'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                  ]"
                  @click="
                    city = item;
                    city_id.setValue(item.id);
                  "
                >
                  <div class="flex items-center justify-center gap-1">
                    <p>{{ item.name }}</p>
                  </div>
                </button>
              </MenuItem>
            </div>
          </MenuItems>
        </transition>
      </Menu>
      <VeeErrorMessage
        v-if="!meta.valid && meta.touched"
        name="city_id"
        as="div"
        class="text-red-500 text-sm"
      />
    </VeeField>
  </div>
</template>

<script setup>
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";

import { useField } from "vee-validate";
const config = useRuntimeConfig();
const i18n = useI18n();

const city_id = useField("city_id");
const city = ref(null);
const { data: cities } = await useFetch(
  `${config.public.baseURL}api/client_web/cities`,
  {
    headers: {
      "Accept-Language": i18n.locale.value,
    },
  }
);

watch(
  cities,
  (value) => {
    if (value) {
      city.value = value.data[0];
    }
  },
  {
    deep: true,
    immediate: true,
  }
);
</script>

<style lang="scss" scoped></style>
