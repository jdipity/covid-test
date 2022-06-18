<template>
  <q-layout view="hHh lpR fFf">
    <q-header reveal elevated class="bg-primary text-white" height-hint="98">
      <div class="q-pa-md q-gutter-y-sm">
        <q-toolbar>
          <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />
          <q-toolbar-title>
            <q-avatar>
              <img
                src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg"
              />
            </q-avatar>
            <span class="logo"> YourTest™</span>
          </q-toolbar-title>
          <q-btn-dropdown icon="account_circle">
            <div class="text-center">
              <div class="q-ma-sm"><b>Christine Odenwald</b></div>
            </div>
            <q-separator />
            <UserMenu
              v-for="link in userItems"
              :key="link.title"
              v-bind="link"
            />
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
    <q-drawer v-model="leftDrawerOpen" side="left" behavior="mobile" bordered>
      <div><h6 class="q-ma-xs">Menu</h6></div>
      <UserMenu v-for="link in userItems" :key="link.title" v-bind="link" />
    </q-drawer>
    <router-view></router-view>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
import UserMenu from "src/components/UserMenu.vue";

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

export default defineComponent({
  name: "MainLayout",

  components: { UserMenu },

  setup() {
    const leftDrawerOpen = ref(false);

    return {
      tab: "test-results",
      userItems: menuItems,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>
