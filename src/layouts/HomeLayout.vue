<template>
  <q-layout view="lHh Lpr lFf">
    <q-header 
      class="bg-dark" 
      elevated 
      style="max-width: 380px"
    >
      <q-toolbar>
        <badge 
        v-for="badge in badges"
          :key="badge.color"
          :color="badge.color"
          :icon="badge.icon"
          :value="badge.value"
      />
      </q-toolbar>
    </q-header>
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
  }
}
</script>
