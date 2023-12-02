<template>
  <nav class="absolute w-full top-4">
    <div
      class="container bg-gradient-to-l from-[#DDDDDD4D] to-gray-300 rounded-lg px-6 py-3 gap-2 flex items-center justify-between"
    >
      <nuxt-link :to="localePath('/')">
        <img
          v-if="$route.path == '/' || ($route.path == '/ar' && !scrolled)"
          src="~/assets/images/logo.svg"
          alt="logo"
          width="71"
          height="37"
          loading="lazy"
        />
        <img
          v-else
          src="~/assets/images/logo.svg"
          alt="logo"
          width="71"
          height="37"
          loading="lazy"
        />
      </nuxt-link>

      <div class="nav_items_wrapper" :class="smallNav ? 'active' : ''">
        <button
          type="button"
          class="close_icon"
          aria-label="Close icon"
          @click="closeNav"
        >
          <i class="fas fa-times"></i>
        </button>
        <ul class="nav_items md:pt-0 pt-20">
          <li>
            <nuxt-link :to="localePath('/')">{{ $t("NAV.home") }}</nuxt-link>
          </li>
          <li>
            <nuxt-link :to="localePath('/search')">{{
              $t("NAV.search")
            }}</nuxt-link>
          </li>
          <li>
            <nuxt-link :to="localePath('/myplates')">{{
              $t("NAV.myplates")
            }}</nuxt-link>
          </li>
          <li>
            <nuxt-link :to="localePath('/blog')">{{
              $t("NAV.blog")
            }}</nuxt-link>
          </li>

          <li>
            <nuxt-link :to="localePath('/contact-us')">{{
              $t("NAV.contact")
            }}</nuxt-link>
          </li>
        </ul>
      </div>

      <ul class="flex items-center gap-3 lang_menu">
        <li>
          <button
            type="button"
            class="auth_btn"
            @click="modalNotification = true"
          >
            <span class="budge"></span>
            <i class="fa-regular fa-bell"></i>
          </button>
          <modal-notification
            v-if="modalNotification"
            @close="modalNotification = false"
          />
        </li>
        <li>
          <nuxt-link class="auth_btn" :to="localePath('/profile')">
            <i class="fa-regular fa-user"></i>
          </nuxt-link>
        </li>
        <li>
          <nuxt-link
            :to="switchLocalePath($i18n.locale == 'ar' ? 'en' : 'ar')"
            class="text-primary"
          >
            <i class="fas fa-globe"></i>
            {{ $t(`locale.${$i18n.locale}`) }}
          </nuxt-link>
        </li>

        <li class="text-2xl xl:hidden">
          <button
            type="button"
            class="py-2"
            aria-label="menu"
            @click="smallNav = !smallNav"
          >
            <i class="fa-solid fa-bars"></i>
          </button>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
const smallNav = ref(false);
const modalNotification = ref(false);

// const emit = defineEmits(["emit", "openFireup"]);
const switchLocalePath = useSwitchLocalePath();
const localePath = useLocalePath();

const route = useRoute();
const scrolled = ref(false);

function closeNav() {
  smallNav.value = false;
}
watch(
  () => route.path,
  () => {
    closeNav();
  }
);

onMounted(() => {
  if (window.scrollY > 50) {
    scrolled.value = true;
  } else {
    scrolled.value = false;
  }
  document.addEventListener("scroll", () => {
    if (window.scrollY > 20) {
      scrolled.value = true;
    } else {
      scrolled.value = false;
    }
  });
});
</script>

<style lang="scss">
nav {
  @apply relative z-30;
  .nav_items {
    @apply gap-2  items-center flex-wrap xl:flex;
    li {
      @apply px-3 py-1;
      a {
        @apply relative overflow-hidden transition  duration-300 font-normal  text-white;

        &.router-link-active.router-link-exact-active,
        &:hover {
          @apply text-primary font-medium;
        }
      }
    }
  }
  .close_icon {
    @apply p-3 flex ms-auto text-2xl text-primary xl:hidden;
  }

  @media (max-width: 1200px) {
    @apply z-50;
    .nav_items_wrapper {
      @apply w-screen h-screen fixed  top-0 bg-black opacity-90 p-4 -translate-x-full overflow-y-auto transition ease-in-out duration-300;
      inset-inline-start: 0;
      &.active {
        @apply translate-x-0;
      }
      .nav_items {
        > li {
          @apply my-2;
          & > a {
            @apply py-1 text-text-light;
          }
        }
      }
      .small_nav_bottom {
        > h2 {
          @apply text-xl text-text font-medium mb-2;
        }
        li {
          a {
            @apply py-1 flex;
          }
        }
      }
    }
  }
  .auth_btn {
    @apply bg-[#1F2B7B0D] relative w-11 h-11 flex justify-center items-center rounded-lg;
    .budge {
      @apply w-2 h-2 rounded-full bg-red-600 absolute -top-[2px];
      inset-inline-start: -2px;
    }
  }
  &.home {
    .nav_items {
      li {
        a {
          @apply text-white;
          &.router-link-active.router-link-exact-active,
          &:hover {
            @apply text-white;
          }
        }
      }
    }
    .lang_menu {
      li {
        a,
        button {
          @apply text-white;
        }
      }
    }
    .auth_btn {
      @apply bg-[#FFFFFF0D];
    }
  }
  &.scrolled {
    @apply bg-white;
    .nav_items {
      li {
        a {
          @apply text-primary;
          &.router-link-active.router-link-exact-active,
          &:hover {
            @apply text-primary;
          }
        }
      }
    }
    .lang_menu {
      li {
        a,
        button {
          @apply text-primary;
        }
      }
    }
    .auth_btn {
      @apply bg-[#1F2B7B0D];
    }
  }
}
</style>
