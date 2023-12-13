<template>
  <div class="bg-white p-2 rounded-lg pt-4">
    <div>
      <h4 class="text-base font-bold">بحث اللوحات</h4>
      <div class="flex flex-col pb-">
        <label for="nums" class="py-4 font-medium">أرقام</label>
        <select
          id="nums"
          name="numslist"
          form="numsForm"
          class="font-light border p-4 border-opacity-10 rounded-xl w-full"
        >
          <option value="volvo">1</option>
          <option value="saab">2</option>
          <option value="opel">3</option>
          <option value="audi">4</option>
        </select>
      </div>
      <div class="flex flex-col pb-5">
        <label for="chars" class="py-4 font-medium">حروف</label>
        <select
          id="chars"
          name="charslist"
          form="charsForm"
          class="font-light border p-4 border-opacity-10 rounded-xl w-full"
        >
          <option value="volvo">A</option>
          <option value="saab">B</option>
          <option value="opel">C</option>
          <option value="audi">D</option>
        </select>
      </div>
    </div>

    <div>
      <h4 class="text-base font-bold pb-3">الترتيب حسب</h4>
      <div>
        <h4 class="text-sm font-bold pb-4">وقت التصدير</h4>
        <div class="options-types">
          <input
            id="oldest"
            type="radio"
            value="oldest"
            name="oldest"
            class="hidden"
            v-model="timeSort"
          />
          <label for="oldest">
            <div>
              <p>الأحدث</p>
              <i class="fa-regular fa-circle-dot text-primary"></i>
            </div>
          </label>
        </div>

        <div class="options-types">
          <input
            id="newest"
            type="radio"
            value="newest"
            name="newest"
            class="hidden"
            v-model="timeSort"
          />
          <label for="newest">
            <div>
              <p>الأقدم</p>
              <i class="fa-regular fa-circle-dot text-primary"></i>
            </div>
          </label>
        </div>
      </div>
      <div>
        <h4 class="text-sm font-bold pb-4">القيمة السعرية</h4>
        <div class="options-types">
          <input
            id="abovePriced"
            type="radio"
            value="abovePriced"
            name="abovePriced"
            class="hidden"
            v-model="priceSort"
          />
          <label for="abovePriced">
            <div>
              <p>الأعلي سعرا</p>
              <i class="fa-regular fa-circle-dot text-primary"></i>
            </div>
          </label>
        </div>

        <div class="options-types">
          <input
            id="lowPrice"
            type="radio"
            value="lowPrice"
            name="lowPrice"
            class="hidden"
            v-model="priceSort"
          />
          <label for="lowPrice">
            <div>
              <p>الأقل سعرا</p>
              <i class="fa-regular fa-circle-dot text-primary"></i>
            </div>
          </label>
        </div>
      </div>
    </div>
    <button class="main_btn w-full py-2">{{ $t("BUTTONS.search") }}</button>
  </div>
</template>

<script setup>
const priceSort = ref(null);
const timeSort = ref(null);

const filterOptions = ref({
  sorted_by: [],
  "sub_category_ids[0]": [],
  "category_ids[0]": [],
});
</script>

<style lang="scss" scoped>
.options-types {
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
  // input [type="radio"] {
  //   @apply accent-black
  // }
}
</style>
