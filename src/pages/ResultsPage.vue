<template>
  <q-card><h2>TEST</h2></q-card>
  <q-card class="relative-position card-example">
    <q-card-section>
      <transition
        appear
        enter-active-class="animated fadeIn"
        leave-active-class="animated fadeOut"
      >
        <q-img
          v-show="showSimulatedReturnData"
          src="~assets/test.jpg"
          :ratio="16 / 9"
          style="max-width: 550px; height: 650px"
        >
          <div class="absolute-top text-center">
            Results: YOU ARE POSITIVE!!!
          </div>
        </q-img>
      </transition>
    </q-card-section>

    <q-inner-loading
      :showing="visible"
      label="Loading Results..."
      label-class="text-teal"
      label-style="font-size: 1.1em"
    />
  </q-card>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "ResultsPage",
  components: {},
  setup() {
    const visible = ref(false);
    const showSimulatedReturnData = ref(false);

    return {
      visible,
      showSimulatedReturnData,

      showTextLoading() {
        visible.value = true;
        showSimulatedReturnData.value = false;

        setTimeout(() => {
          visible.value = false;
          showSimulatedReturnData.value = true;
        }, 3000);
      },
    };
  },
  mounted() {
    console.log("TEST");
    this.showTextLoading();
  },
});
</script>

<style scoped>
.card-example {
  width: auto;
  height: 700px;
}
</style>
