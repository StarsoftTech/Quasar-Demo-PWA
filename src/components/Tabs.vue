<template>
  <q-tabs
    v-model="activeTab"
    no-caps
    inline-label
    class="bg-white text-white shadow-2"
  >
    <q-tab 
      v-for="tab in tabs"
        :key="tab.name"
        :name="tab.name" 
        :label="tab.label"
        style="border: 0.5px solid #f2f2f2"
        :style="'border-top: 2px solid ' + tab.color"
        :class="'text-' + tab.color"
    />
  </q-tabs>
</template>

<script>
export default {
  name: 'Tabs',
  data() {
    return {
      activeTab: ''
    }
  },
  props: {
    tabs: {
      type: Array,
      default: () => [],
      required: true
    }
  }
}
</script>

