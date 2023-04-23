//App.vue
<script>
import styles from "./assets/scss/style.scss?inline";
import mainStyles from "./assets/scss/main.scss?inline";
import BoardView from "./components/BoardView.vue";

import { defineComponent } from "vue";
export default defineComponent({
  styles: [styles, mainStyles],
  components: { BoardView },

});
</script>
<template>
  <board-view />
</template>
