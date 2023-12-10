<template>
  <div class="bg-gradient">
    <GeneralTitleHeader
      :title="`الحساب الشخصي`"
      :desc="`بيانات الحساب الشخصي الخاصة بك`"
    />
  </div>
  <div class="container mx-auto">
    <div class="block md:hidden" @click="toggleSideBar">
      <button class="relative group p-2">
        <div
          class="relative flex items-center justify-center rounded-full w-[50px] h-[50px] transform transition-all bg-slate-700 ring-0 ring-gray-300 hover:ring-8 group-focus:ring-4 ring-opacity-30 duration-200 shadow-md"
        >
          <div
            class="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 group-focus:-rotate-[45deg] origin-center"
          >
            <div
              class="bg-primary h-[2px] w-1/2 rounded transform transition-all duration-300 group-focus:-rotate-90 group-focus:h-[1px] origin-right delay-75 group-focus:-translate-y-[1px]"
            ></div>
            <div class="bg-primary h-[1px] rounded"></div>
            <div
              class="bg-primary h-[2px] w-1/2 rounded self-end transform transition-all duration-300 group-focus:-rotate-90 group-focus:h-[1px] origin-left delay-75 group-focus:translate-y-[1px]"
            ></div>
          </div>
        </div>
      </button>
    </div>
    <!-- <div v-if="showSidebar" class="w-full mt-4 p-2">
      <div class="pt-2 flex flex-col gap-2">
        <div class="flex justify-between isActive">
          <div class="flex items-center gap-4 pb-4">
            <i
              class="fa-regular fa-user bg-gray-400 text-white p-2 rounded-full"
            ></i>
            <nuxt-link :to="localePath('/profile')" class="text-small">{{
              $t("PersonalAccount")
            }}</nuxt-link>
          </div>
          <i
            class="fa-solid fa-chevron-left taxt-lg text-gray-400 p-1 rounded-full"
          ></i>
        </div>
        <div class="flex justify-between isActive">
          <div class="flex items-center gap-4 pb-4">
            <i
              class="fa-regular fa-heart bg-gray-400 text-white p-2 rounded-full"
            ></i>
            <nuxt-link :to="localePath('/profile/favs')" class="text-small">{{
              $t("PROFILE.favs")
            }}</nuxt-link>
          </div>
          <i
            class="fa-solid fa-chevron-left taxt-lg text-gray-400 p-1 rounded-full"
          ></i>
        </div>
        <div class="flex justify-between isActive">
          <div class="flex items-center gap-4 pb-4">
            <i
              class="fa-regular fa-comment-dots bg-gray-400 text-white p-2 rounded-full"
            ></i>
            <nuxt-link :to="localePath('/profile/chats')" class="text-small">{{
              $t("PROFILE.chat")
            }}</nuxt-link>
          </div>
          <i
            class="fa-solid fa-chevron-left taxt-lg text-gray-400 p-1 rounded-full"
          ></i>
        </div>
        <div class="flex justify-between items-center isActive">
          <div class="flex items-center gap-4 pb-4">
            <i
              class="fa-regular fa-bell bg-gray-400 text-white p-2 rounded-full"
            ></i>
            <nuxt-link class="text-small">{{ $t("notifications") }}</nuxt-link>
          </div>

          <div class="toggle-icon">
            <label
              class="relative inline-flex items-center mb-5 cursor-pointer"
            >
              <input type="checkbox" value="" class="sr-only peer" />
              <div
                class="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"
              ></div>
            </label>
          </div>
        </div>
        <div class="flex justify-between isActive">
          <div class="flex items-center gap-4 pb-4">
            <i
              class="fa-solid fa-shield-halved bg-gray-400 text-white p-2 rounded-full"
            ></i>
            <nuxt-link :to="localePath('/privacy-policy')" class="text-small">{{
              $t("PROFILE.privacy")
            }}</nuxt-link>
          </div>
          <i
            class="fa-solid fa-chevron-left taxt-lg text-gray-400 p-1 rounded-full"
          ></i>
        </div>
        <div class="flex justify-between isActive">
          <div class="flex items-center gap-4 pb-4">
            <i
              class="fa-solid fa-shield-halved bg-gray-400 text-white p-2 rounded-full"
            ></i>
            <nuxt-link
              :to="localePath('/terms-and-conditions')"
              class="text-small"
              >{{ $t("PROFILE.terms") }}</nuxt-link
            >
          </div>
          <i
            class="fa-solid fa-chevron-left taxt-lg text-gray-400 p-1 rounded-full"
          ></i>
        </div>
        <div class="flex justify-between isActive">
          <div class="flex items-center gap-4 pb-4">
            <i
              class="fa-solid fa-building-columns bg-gray-400 text-white p-2 rounded-full"
            ></i>
            <nuxt-link
              :to="localePath('/profile/bankaccounts')"
              class="text-small"
              >{{ $t("PROFILE.bankaccount") }}</nuxt-link
            >
          </div>
          <i
            class="fa-solid fa-chevron-left taxt-lg text-gray-400 p-1 rounded-full"
          ></i>
        </div>
        <div class="flex justify-between isActive">
          <div class="flex items-center gap-4 pb-4">
            <i
              class="fa-solid fa-share-nodes bg-gray-400 text-white p-2 rounded-full"
            ></i>
            <nuxt-link @click="showSharedModal = true" class="text-small">{{
              $t("PROFILE.shared")
            }}</nuxt-link>
          </div>
          <i
            class="fa-solid fa-chevron-left taxt-lg text-gray-400 p-1 rounded-full"
          ></i>
        </div>
        <ModalsSharedSocial
          v-if="showSharedModal"
          @close="showSharedModal = false"
        ></ModalsSharedSocial>
        <div class="flex justify-between isActive">
          <div class="flex items-center gap-4 pb-4">
            <i
              class="fa-solid fa-phone-flip bg-gray-400 text-white p-2 rounded-full"
            ></i>
            <nuxt-link :to="localePath('/contact-us')" class="text-small">{{
              $t("PROFILE.contact")
            }}</nuxt-link>
          </div>
          <i
            class="fa-solid fa-chevron-left taxt-lg text-gray-400 p-1 rounded-full"
          ></i>
        </div>
        <div class="flex justify-between isActive text-red-500">
          <div class="flex items-center gap-4 pb-4">
            <i class="fa-regular fa-user text-red-500 p-1 rounded-full"></i>
            <nuxt-link
              @click="showLogout = true"
              class="text-small text-red-500"
              >{{ $t("PROFILE.logout") }}</nuxt-link
            >
          </div>
          <i
            class="fa-solid fa-chevron-left taxt-lg text-gray-400 p-1 rounded-full"
          ></i>
        </div>
        <ModalsBasicGeneral
          v-if="showLogout"
          @close="showLogout = false"
          :mainHeading="`تسجيل الخروج`"
          :message="`هل أنت متأكد من تسجيل الخروج من الحساب؟`"
          :confirmBtn="`تسجيل الخروج`"
          :cancelBtn="`لا`"
        ></ModalsBasicGeneral>
        <div class="flex justify-between isActive text-red-500">
          <div class="flex items-center gap-4 pb-4">
            <i class="fa-regular fa-user text-red-500 p-1 rounded-full"></i>
            <nuxt-link
              @click="showDelete = true"
              class="text-small text-red-500"
              >{{ $t("PROFILE.delete") }}</nuxt-link
            >
          </div>
          <i
            class="fa-solid fa-chevron-left taxt-lg text-gray-400 p-1 rounded-full"
          ></i>
        </div>

        <ModalsBasicGeneral
          v-if="showDelete"
          @close="showDelete = false"
          :mainHeading="`حذف الحساب`"
          :message="`هل أنت متأكد من أنه سيتم حذف الحساب الشخصي؟`"
          :confirmBtn="`نعم احذف`"
          :cancelBtn="`لا، احتفظ بها`"
        ></ModalsBasicGeneral>
      </div>
    </div> -->
    <div class="grid md:grid-cols-12 gap-5">
      <div
        class="hidden md:block col-span-4 mt-4 p-2 wow animated zoomIn"
        data-wow-delay=".3s"
      >
        <div class="pt-2 flex flex-col gap-2">
          <div class="flex justify-between isActive">
            <div class="flex items-center gap-4 pb-4">
              <i
                class="fa-regular fa-user bg-gray-400 text-white p-2 rounded-full"
              ></i>
              <nuxt-link :to="localePath('/profile')" class="text-small">{{
                $t("PersonalAccount")
              }}</nuxt-link>
            </div>
            <i
              class="fa-solid fa-chevron-left taxt-lg text-gray-400 p-1 rounded-full"
            ></i>
          </div>
          <div class="flex justify-between isActive">
            <div class="flex items-center gap-4 pb-4">
              <i
                class="fa-regular fa-heart bg-gray-400 text-white p-2 rounded-full"
              ></i>
              <nuxt-link :to="localePath('/profile/favs')" class="text-small">{{
                $t("PROFILE.favs")
              }}</nuxt-link>
            </div>
            <i
              class="fa-solid fa-chevron-left taxt-lg text-gray-400 p-1 rounded-full"
            ></i>
          </div>
          <div class="flex justify-between isActive">
            <div class="flex items-center gap-4 pb-4">
              <i
                class="fa-regular fa-comment-dots bg-gray-400 text-white p-2 rounded-full"
              ></i>
              <nuxt-link
                :to="localePath('/profile/chats')"
                class="text-small"
                >{{ $t("PROFILE.chat") }}</nuxt-link
              >
            </div>
            <i
              class="fa-solid fa-chevron-left taxt-lg text-gray-400 p-1 rounded-full"
            ></i>
          </div>
          <div class="flex justify-between items-center isActive">
            <div class="flex items-center gap-4 pb-4">
              <i
                class="fa-regular fa-bell bg-gray-400 text-white p-2 rounded-full"
              ></i>
              <nuxt-link class="text-small">{{
                $t("notifications")
              }}</nuxt-link>
            </div>

            <div class="toggle-icon">
              <label
                class="relative inline-flex items-center mb-5 cursor-pointer"
              >
                <input type="checkbox" value="" class="sr-only peer" />
                <div
                  class="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"
                ></div>
              </label>
            </div>
          </div>
          <div class="flex justify-between isActive">
            <div class="flex items-center gap-4 pb-4">
              <i
                class="fa-solid fa-shield-halved bg-gray-400 text-white p-2 rounded-full"
              ></i>
              <nuxt-link
                :to="localePath('/privacy-policy')"
                class="text-small"
                >{{ $t("PROFILE.privacy") }}</nuxt-link
              >
            </div>
            <i
              class="fa-solid fa-chevron-left taxt-lg text-gray-400 p-1 rounded-full"
            ></i>
          </div>
          <div class="flex justify-between isActive">
            <div class="flex items-center gap-4 pb-4">
              <i
                class="fa-solid fa-shield-halved bg-gray-400 text-white p-2 rounded-full"
              ></i>
              <nuxt-link
                :to="localePath('/terms-and-conditions')"
                class="text-small"
                >{{ $t("PROFILE.terms") }}</nuxt-link
              >
            </div>
            <i
              class="fa-solid fa-chevron-left taxt-lg text-gray-400 p-1 rounded-full"
            ></i>
          </div>
          <div class="flex justify-between isActive">
            <div class="flex items-center gap-4 pb-4">
              <i
                class="fa-solid fa-building-columns bg-gray-400 text-white p-2 rounded-full"
              ></i>
              <nuxt-link
                :to="localePath('/profile/bankaccounts')"
                class="text-small"
                >{{ $t("PROFILE.bankaccount") }}</nuxt-link
              >
            </div>
            <i
              class="fa-solid fa-chevron-left taxt-lg text-gray-400 p-1 rounded-full"
            ></i>
          </div>
          <div class="flex justify-between isActive">
            <div class="flex items-center gap-4 pb-4">
              <i
                class="fa-solid fa-share-nodes bg-gray-400 text-white p-2 rounded-full"
              ></i>
              <nuxt-link @click="showSharedModal = true" class="text-small">{{
                $t("PROFILE.shared")
              }}</nuxt-link>
            </div>
            <i
              class="fa-solid fa-chevron-left taxt-lg text-gray-400 p-1 rounded-full"
            ></i>
          </div>
          <ModalsSharedSocial
            v-if="showSharedModal"
            @close="showSharedModal = false"
          ></ModalsSharedSocial>
          <div class="flex justify-between isActive">
            <div class="flex items-center gap-4 pb-4">
              <i
                class="fa-solid fa-phone-flip bg-gray-400 text-white p-2 rounded-full"
              ></i>
              <nuxt-link :to="localePath('/contact-us')" class="text-small">{{
                $t("PROFILE.contact")
              }}</nuxt-link>
            </div>
            <i
              class="fa-solid fa-chevron-left taxt-lg text-gray-400 p-1 rounded-full"
            ></i>
          </div>
          <div class="flex justify-between isActive text-red-500">
            <div class="flex items-center gap-4 pb-4">
              <i class="fa-regular fa-user text-red-500 p-1 rounded-full"></i>
              <nuxt-link
                @click="showLogout = true"
                class="text-small text-red-500"
                >{{ $t("PROFILE.logout") }}</nuxt-link
              >
            </div>
            <i
              class="fa-solid fa-chevron-left taxt-lg text-gray-400 p-1 rounded-full"
            ></i>
          </div>
          <ModalsBasicGeneral
            v-if="showLogout"
            @close="showLogout = false"
            :mainHeading="`تسجيل الخروج`"
            :message="`هل أنت متأكد من تسجيل الخروج من الحساب؟`"
            :confirmBtn="`تسجيل الخروج`"
            :cancelBtn="`لا`"
          ></ModalsBasicGeneral>
          <div class="flex justify-between isActive text-red-500">
            <div class="flex items-center gap-4 pb-4">
              <i class="fa-regular fa-user text-red-500 p-1 rounded-full"></i>
              <nuxt-link
                @click="showDelete = true"
                class="text-small text-red-500"
                >{{ $t("PROFILE.delete") }}</nuxt-link
              >
            </div>
            <i
              class="fa-solid fa-chevron-left taxt-lg text-gray-400 p-1 rounded-full"
            ></i>
          </div>

          <ModalsBasicGeneral
            v-if="showDelete"
            @close="showDelete = false"
            :mainHeading="`حذف الحساب`"
            :message="`هل أنت متأكد من أنه سيتم حذف الحساب الشخصي؟`"
            :confirmBtn="`نعم احذف`"
            :cancelBtn="`لا، احتفظ بها`"
          ></ModalsBasicGeneral>
        </div>
      </div>
      <div
        class="col-span-12 md:col-span-8 p-2 bg-gray wow animated zoomIn"
        data-wow-delay=".5s"
      >
        <NuxtPage />
      </div>
    </div>
    <div></div>
  </div>
</template>

<script setup>
import { useGlobalDataStore } from "../stores/globalData";

definePageMeta({
  middleware: "auth",
});
const localePath = useLocalePath();
const store = useGlobalDataStore();
// const { data } = useAsyncData(("userData", () => store.fetchUserData()));
onMounted(() => {
  console.log(store.fetchUserData());
  console.log(store.userInformation);
});
const showSharedModal = ref(false);
const showLogout = ref(false);
const showDelete = ref(false);

const route = useRoute();
const showSidebar = ref(false);

const toggleSideBar = () => {
  showSidebar.value = true;
};

watch(
  () => route.path,
  () => {
    toggleSideBar();
  }
);
</script>

<style lang="scss">
.router-link-exact-active {
  & ~ i {
    @apply bg-primary text-black;
  }
  @apply text-primary;
}
</style>
