<template>
  <q-layout view="lHh Lpr lFf">
    <q-header 
      class="bg-dark" 
      elevated 
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
    <q-footer 
      class="bg-dark" 
      elevated 
    >
      <tabs
        :tabs="tabData"
        bgClass="bg-dark"
      />
    </q-footer>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import Tabs from '../components/Tabs';

export default {
  name: 'ReviewLayout',
  components: { Tabs },
  data () {
    return {
      tabs: [
        {
          name: 'fail',
          label: 'Fail',
          color: 'red'
        },
        {
          name: 'hard',
          label: 'Hard',
          color: 'yellow'
        },
        {
          name: 'good',
          label: 'Good',
          color: 'blue'
        },
        {
          name: 'easy',
          label: 'Easy',
          color: 'green'
        }
      ],
      flip: [
        {
          name: 'flip',
          label: 'Flip',
          color: 'purple'
        }
      ]
    }
  },
  methods: {
    back() {
      this.$router.back();
    }
  },
  computed: {
    tabData() {
      if(this.$router.currentRoute.path == '/review/') return this.flip;
      else if(this.$router.currentRoute.path == '/review/flip/') return this.tabs;
    }
  }
}
</script>
