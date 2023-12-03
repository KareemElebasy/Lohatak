<template>
  <div class="bg-white p-2 rounded-lg pt-4">
    <div>
      <h4 class="text-base font-bold">بحث اللوحات</h4>
      <div class="flex flex-col pb-5">
        <label for="nums" class="py-6 font-medium">أرقام</label>
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
        <label for="chars" class="py-6 font-medium">حروف</label>
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
        <div
          class="mb-4 flex items-center justify-between p-2 border border-gray-200 rounded-md"
        >
          <label
            class="inline-block hover:cursor-pointer text-gray"
            for="item.key"
          >
            الأقدم
          </label>
          <input type="radio" value="item.key" id="item.key" />
        </div>
        <div
          class="mb-4 flex items-center justify-between p-2 border border-gray-200 rounded-md"
        >
          <label
            class="inline-block hover:cursor-pointer text-gray"
            for="item.key"
          >
            الأحدث
          </label>
          <input type="radio" value="item.key" id="item.key" />
        </div>
      </div>
      <div>
        <h4 class="text-sm font-bold pb-4">القيمة السعرية</h4>
        <div
          class="mb-4 flex items-center justify-between p-2 border border-gray-200 rounded-md"
        >
          <label
            class="inline-block hover:cursor-pointer text-gray"
            for="item.key"
          >
            الأعلى سعرا
          </label>
          <input type="radio" value="item.key" id="item.key" />
        </div>
        <div
          class="mb-4 flex items-center justify-between p-2 border border-gray-200 rounded-md"
        >
          <label
            class="inline-block hover:cursor-pointer text-gray"
            for="item.key"
          >
            الأقل سعرا
          </label>
          <input type="radio" value="item.key" id="item.key" />
        </div>
      </div>
    </div>
    <button class="main_btn w-full py-2">{{ $t("BUTTONS.search") }}</button>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
