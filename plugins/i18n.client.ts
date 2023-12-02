export default defineNuxtPlugin(app => {
    if (app.$i18n.locale.value == "en") {
      document.body.setAttribute("dir", "ltr");
      document.documentElement.setAttribute('lang', "en")
    } else if (app.$i18n.locale.value == "ar") {
      document.documentElement.setAttribute('lang', "ar")
      document.body.setAttribute("dir", "rtl");
    }
    app.$i18n.onLanguageSwitched = (oldLocale: string, newLocale: string) => {
  
      if (app.$i18n.locale.value == "en") {
        document.body.setAttribute("dir", "ltr");
        document.documentElement.setAttribute('lang', "en")
      } else if (app.$i18n.locale.value == "ar") {
        document.documentElement.setAttribute('lang', "ar")
        document.body.setAttribute("dir", "rtl");
      }
      // setTimeout(() => window.location.reload(), 300)
    }
  })
  