<template>
  <q-layout view="lHh Lpr lFf">
    <q-header 
      class="bg-dark" 
      elevated 
    >
      <q-toolbar class="text-center flex flex-center">
        <badge 
        v-for="badge in badges"
          :key="badge.color"
          :color="badge.color"
          :icon="badge.icon"
          :value="badge.value"
      />
      </q-toolbar>
    </q-header>
    <q-footer class="bg-dark row justify-end">
      <q-btn round outline color="green" class="q-ma-sm">
        <q-icon name="g_translate" color="green" @click="showReview" />
      </q-btn>
    </q-footer>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import Badge from '../components/Badge';

export default {
  name: 'HomeLayout',
  components: { Badge },
  data() {
    return {
      badges: [
        {
          color: 'white',
          icon: 'grading',
          value: '34'
        },
        {
          color: 'red-9',
          icon: 'subject',
          value: '3'
        },
        {
          color: 'green-9',
          icon: 'subject',
          value: '13'
        },
        {
          color: 'blue-9',
          icon: 'subject',
          value: '8'
        },
        {
          color: 'yellow-9',
          icon: 'subject',
          value: '16'
        }
      ]
    }
  },
  methods: {
    showReview() {
      this.$router.push('/review/');
    }
  }
}
</script>
