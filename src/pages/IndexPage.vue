<template>
  <!--<q-header elevated class="bg-primary text-white" height-hint="98">
    <div class="q-pa-md q-gutter-y-sm">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />
        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg" />
          </q-avatar>
          <span class="logo"> YourTest™</span>
        </q-toolbar-title>
        <q-btn-dropdown icon="account_circle">
          <div class="text-center">
            <div class="q-ma-sm"><b>Christine Odenwald</b></div>
          </div>
          <q-separator />
          <UserMenu v-for="link in userItems" :key="link.title" v-bind="link" />
        </q-btn-dropdown>
      </q-toolbar>
    </div>

    <q-tabs v-model="tab" align="left">
      <q-tab name="test-results" label="Test Results" />
      <q-route-tab
        to="/schedule-appointment"
        name="schedule-appointment"
        label="Schedule Appointment"
      />
      <q-route-tab to="/payments" name="payments" label="Payments" />
    </q-tabs>
  </q-header>

  <q-drawer show-if-above v-model="leftDrawerOpen" side="left" bordered>
    <div><h6 class="q-ma-xs">Menu</h6></div>
    <EssentialLink
      v-for="link in essentialLinks"
      :key="link.title"
      v-bind="link"
    />
  </q-drawer>-->

  <q-card class="q-pa-md">
    <q-card><h3>TEST</h3></q-card>
    <q-card-section
      ><h5 class="q-ma-sm">Hello, Christine!</h5>
      <p class="q-ma-sm">
        Select the test below that you would like to view.
      </p></q-card-section
    >
    <q-separator></q-separator>
    <q-card-section>
      <q-tab-panels v-model="tab" animated>
        <q-tab-panel name="test-results">
          <div class="text-h6">Tests</div>

          <q-card bordered>
            <q-list separator>
              <TestResults
                v-for="link in testResults"
                :key="link.title"
                v-bind="link"
              >
              </TestResults>
            </q-list>
          </q-card>

          <q-card-section>
            <p>
              Here you can see your lab results, along with the person who asked
              for the lab test to be done. Click a row to view more details.
            </p>
            <p>
              On average, test results are typically available in 1-2 days, but
              may take longer due to the current surge in COVID-19 cases and
              increased testing demand.
            </p>
          </q-card-section>
        </q-tab-panel>

        <q-tab-panel name="schedule-appointment">
          <div class="text-h6">Test</div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </q-tab-panel>

        <q-tab-panel name="payments">
          <div class="text-h6">Movies</div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </q-tab-panel>
      </q-tab-panels>
    </q-card-section>
  </q-card>
</template>

<script>
import { defineComponent, ref } from "vue";
import EssentialLink from "components/EssentialLink.vue";
import TestResults from "../components/TestResults.vue";
import UserMenu from "src/components/UserMenu.vue";

const tests = [
  {
    title: "Easy@Home hCG, Rapid Result Antibody Test",
    caption: "Self-administered",
    icon: "science",
    link: "#/test-result/4fGmt-x4m0mS4t27dxlPs",
    date: "June 01, 2022",
    new: true,
  },
  {
    title: "SARS-COV-2 RNA, QL NAAT, RT PCR/TMA (COVID-19)",
    caption: "Brittany Filliben",
    icon: "science",
    link: "#/test-result/2F4A3zuSxyl9jQ-3Dw3Xg",
    date: "July 23, 2021",
  },
  {
    title: "LumiraDX SARS-COV-2 Rapid Result Antigen Test",
    caption: "Mariana Cervantes",
    icon: "science",
    link: "#/test-result/24ij-2B61hCZtjF1ICtgb",
    date: "May 20, 2021",
  },
];

const menuItems = [
  {
    title: "Manage Account",
    caption: "",
    icon: "account_circle",
    link: "#/account",
  },
  {
    title: "Settings",
    caption: "",
    icon: "settings",
    link: "#/settings",
  },
  {
    title: "Logout",
    caption: "",
    icon: "power",
    link: "#/logout",
  },
];

const linksList = [
  {
    title: "My Visits",
    icon: "event",
    link: "#/my-visits",
  },
  {
    title: "Medications",
    icon: "medication",
    link: "#/medications",
  },
  {
    title: "Health Summary",
    icon: "assignment",
    link: "#/health-summary",
  },
];

export default defineComponent({
  name: "IndexPage",
  setup() {
    const leftDrawerOpen = ref(false);

    return {
      tab: ref("test-results"),
      testResults: tests,
      userItems: menuItems,
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
  components: { TestResults /*EssentialLink, TestResults, UserMenu */ },
});
</script>
