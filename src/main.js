import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import BaseCard from "./components/ui/BaseCard.vue";
import BaseButton from "./components/ui/BaseButton.vue";
import BaseBadge from "./components/ui/BaseBadge.vue";
import BaseSpinner from "./components/ui/BaseSpinner.vue";
import BaseDialog from "./components/ui/BaseDialog.vue";

createApp(App)
  .use(store)
  .use(router)
  //registrer base-card component which point to the imported BaseCard component
  // This global component can be used in CoachedList.vue
  .component("base-card", BaseCard)
  .component("base-button", BaseButton)
  .component("base-badge", BaseBadge)
  .component("base-spinner", BaseSpinner)
  .component("base-dialog", BaseDialog)
  .mount("#app");
