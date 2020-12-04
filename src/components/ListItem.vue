<template>
  <fragment>
    <transition name="flip" mode="out-in">
    <q-item 
      :key="key" 
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
    </transition>
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
      state: true,
      key: 0
    }
  },
  methods: {
    changeSide() {
      if(this.clickable != '') {
        this.state = !this.state;
        this.key += 1;
      }
    }
  } 
}
</script>

