<template>
  <q-tabs
    v-model="activeTab"
    no-caps
    inline-label
    :indicator-color="indicatorColor"
    :class="bgClass + ' text-white shadow-2'"
  >
    <q-tab 
      align="justify"
      v-for="(tab, index) in tabs"
        :key="tab.name"
        :name="tab.name" 
        :label="tab.label"
        style="border: 0.5px solid #f2f2f2"
        :style="'border-top: 2px solid ' + tab.color"
        :class="'text-' + tab.color"
        @click="onTab(index)"
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
    },
    bgClass: {
      type: String,
      required: true
    },
    hasIndicator: {
      type: String,
      default: () => '1'
    }
  },
  computed: {
    indicatorColor() {
      if(this.hasIndicator == '') return 'transparent';
      else return '';
    }
  },
  methods: {
    onTab(index) {
      if (this.$router.currentRoute.path == '/review/') this.$router.push('/review/flip/');
      else if (this.$router.currentRoute.path == '/review/flip/') {
        if(this.hasIndicator != '') this.$store.commit('review/SetActiveTabIndex', index);
      }
    }
  }
}
</script>

