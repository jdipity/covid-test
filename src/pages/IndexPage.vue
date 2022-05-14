<template>
  <q-header elevated class="bg-primary text-white" height-hint="98">
    <q-toolbar>
      <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />
      <q-toolbar-title>
        <q-avatar>
          <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg" />
        </q-avatar>
        <b> Your Test</b>
      </q-toolbar-title>
    </q-toolbar>

    <q-tabs v-model="tab" align="left">
      <q-tab name="test-results" label="Test Results" />
      <q-tab name="schedule-appointment" label="Schedule Appointment" />
      <q-tab name="payments" label="Payments" />
    </q-tabs>
  </q-header>

  <q-drawer show-if-above v-model="leftDrawerOpen" side="left" bordered>
    <EssentialLink
      v-for="link in essentialLinks"
      :key="link.title"
      v-bind="link"
    />
  </q-drawer>

  <q-card>
    <q-card-section>
      <h4>Hello, Christine!</h4>
    </q-card-section>
    <q-separator></q-separator>
    <q-card-section>
      <q-tab-panels v-model="tab" animated>
        <q-tab-panel name="test-results">
          <div class="text-h6">Tests</div>
          <q-list separator>
            <TestResults
              v-for="link in testResults"
              :key="link.title"
              v-bind="link"
            >
            </TestResults>
          </q-list>
          <q-separator></q-separator>
          <q-card-section
            ><p>
              Here you can see your lab results, along with the person who asked
              for the lab test to be done. Click a row to view more details.
            </p>
            <p>
              On average, test results are typically available in 1-2 days, but
              may take longer due to the current surge in COVID-19 cases and
              increased testing demand.
            </p></q-card-section
          >
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

const tests = [
  {
    title: "SARS-COV-2 RNA, QL NAAT, RT PCR/TMA (COVID-19)",
    caption: "Brittany Filliben",
    icon: "science",
    link: "",
    date: "July 23, 2021",
  },
  {
    title: "LumiraDX SARS-COV-2 Rapid Result Antigen Test",
    caption: "Mariana Cervantes",
    icon: "science",
    link: "",
    date: "May 20, 2021",
  },
];

const linksList = [
  {
    title: "Docs",
    caption: "quasar.dev",
    icon: "school",
    link: "https://quasar.dev",
  },
  {
    title: "Github",
    caption: "github.com/quasarframework",
    icon: "code",
    link: "https://github.com/quasarframework",
  },
  {
    title: "Discord Chat Channel",
    caption: "chat.quasar.dev",
    icon: "chat",
    link: "https://chat.quasar.dev",
  },
  {
    title: "Forum",
    caption: "forum.quasar.dev",
    icon: "record_voice_over",
    link: "https://forum.quasar.dev",
  },
  {
    title: "Twitter",
    caption: "@quasarframework",
    icon: "rss_feed",
    link: "https://twitter.quasar.dev",
  },
  {
    title: "Facebook",
    caption: "@QuasarFramework",
    icon: "public",
    link: "https://facebook.quasar.dev",
  },
  {
    title: "Quasar Awesome",
    caption: "Community Quasar projects",
    icon: "favorite",
    link: "https://awesome.quasar.dev",
  },
];

export default defineComponent({
  name: "IndexPage",
  setup() {
    const leftDrawerOpen = ref(false);

    return {
      tab: ref("test-results"),
      essentialLinks: linksList,
      testResults: tests,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
  components: { EssentialLink, TestResults },
});
</script>
