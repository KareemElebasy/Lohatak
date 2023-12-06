<template>
  <VeeField :name="name" v-slot="{ field, meta }">
    <div
      class="select_wrapper w-fit"
      :class="{
        error: !meta.valid && meta.touched,
      }"
    >
      <Dropdown
        v-bind="field"
        :options="options"
        :selected="options[0]"
        :placeholder="placeholder"
        optionLabel="name"
        optionValue="code"
        class="font-light border p-4 border-opacity-10 rounded-xl"
        dataKey="code"
        v-model="currentValue"
      />
      <VeeErrorMessage
        v-if="!meta.valid && meta.touched"
        :name="name"
        as="div"
        class="text-red-500 text-sm"
      />
    </div>
  </VeeField>
</template>

<script setup>
import Dropdown from "primevue/dropdown";

const currentValue = ref(null);

defineProps({
  options: {
    required: true,
  },
  name: {
    required: true,
  },
  label: {
    type: String,
    required: false,
  },
  optionLabel: {
    default: "name",
    required: false,
  },
  id: {
    type: String,
    required: true,
  },
  placeholder: {
    required: true,
  },
});
</script>

<style lang="scss">
.select_wrapper {
  &.error {
    .p-dropdown {
      @apply border-red-500;
    }
  }
}
.p-dropdown-items-wrapper {
  @apply bg-white p-2 rounded-md text-center border border-b-primary;
}
</style>
