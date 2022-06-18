<template>
  <q-card><h2>TEST</h2></q-card>
  <q-img
    src="src/assets/test.jpg"
    :ratio="16 / 9"
    style="max-width: 550px; height: 650px"
  >
    <div class="absolute-top text-center">Results: YOU ARE POSITIVE!!!</div>
  </q-img>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "ResultsPage",
  components: {},
});
</script>
