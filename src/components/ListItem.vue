<template>
  <fragment>
    <q-item 
      :key="caption[0]" 
      clickable 
      @click="changeSide"
    >
      <q-item-section>
        <q-item-label class="text-h6 text-center">
          {{state ? caption[0] : caption[1]}}
        </q-item-label>
      </q-item-section>
      <q-item-section side top>
        <q-icon 
          :name="state ? 'keyboard_arrow_down' : 'keyboard_arrow_up'" 
          color="green"
        />          
      </q-item-section>
    </q-item>
    <q-separator 
      class="thick" 
      color="green-3" 
      spaced 
    />
  </fragment>
</template>

<script>
import { Fragment } from 'vue-fragment';
export default {
  name: 'ListItem',
  components: { Fragment },
  props: {
    caption: {
      type: Array,
      required: true
    },
    clickable: {
      type: String,
      default: () => 'true'
    }
  },
  data() {
    return {
      state: true
    }
  },
  methods: {
    changeSide() {
      if(this.clickable != '') this.state = !this.state;
    }
  } 
}
</script>

<style scoped>
.thick {
  height: 3px;
}
</style>
