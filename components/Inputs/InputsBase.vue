<template>
  <VeeField :type="type" :name="name" v-slot="{ field, meta }">
    <div
      class="input_wrapper"
      :class="(!meta.valid && meta.touched ? 'error' : '', classes)"
    >
      <input
        :type="type"
        :id="id"
        :accept="accept"
        v-bind="field"
        :placeholder="placeholder"
        class="font-light border p-4 border-opacity-10 rounded-xl w-full"
        :class="
          !meta.valid &&
          meta.touched &&
          'border-red-500  placeholder:text-red-500 lg:text-lg text-sm error'
        "
        @change="emit('change', $event)"
      />

      <VeeErrorMessage
        v-if="!meta.valid && meta.touched"
        :name="name"
        as="div"
        class="error"
      />
    </div>
  </VeeField>
</template>

<script setup>
defineProps({
  id: {
    required: true,
  },
  name: {
    required: true,
  },
  label: {
    required: false,
  },
  placeholder: {
    required: true,
  },
  classes: {
    required: false,
  },
  accept: {
    required: false,
  },
  type: {
    required: false,
    default: "text",
  },
});
const emit = defineEmits(["change"]);

</script>

<style lang="scss" scoped>
.error {
  @apply text-red-500 text-sm mt-1;
}
</style>
