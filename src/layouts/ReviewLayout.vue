<template>
  <q-layout view="lHh Lpr lFf">
    <q-header 
      class="bg-dark" 
      elevated 
      style="max-width: 380px"
    >
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="keyboard_arrow_left"
          style="color: darkorchid"
          aria-label="Menu"
          @click="back"
        />
        <q-toolbar-title class="text-center">
          Review
        </q-toolbar-title>
        <q-btn
          flat
          dense
          round
          icon="menu"
          style="color: darkorchid"
          aria-label="Menu"
        />
      </q-toolbar>
      <q-bar class="bg-grey-9">
        <div class="col text-center text-weight-bold text-grey-5">
          Welcome to AnkiApp
        </div>
      </q-bar>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'ReviewLayout',
  data () {
    return {
    }
  },
  methods: {
    back() {
      this.$router.back();
    }
  }
}
</script>
