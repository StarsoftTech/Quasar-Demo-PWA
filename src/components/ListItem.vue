<template>
  <fragment>
    <q-item 
      :key="caption[0]" 
      clickable 
      @click="changeSide"
    >
      <q-item-section>
        <q-item-label>
          <span class="text-h6">
            {{state ? caption[0] : caption[1]}}
          </span>
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
    }
  },
  data() {
    return {
      state: true
    }
  },
  methods: {
    changeSide() {
      this.state = !this.state;
    }
  } 
}
</script>

<style scoped>
.thick {
  height: 3px;
}
</style>
