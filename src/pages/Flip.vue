<template>
  <q-page class="flex flex-center bg-dark">
    <div style="width: 100%">
      <div class="text-h6 text-center text-white">
        What does these buttons mean?
      </div>
      <tabs
        :tabs="tabs"
        hasIndicator=""
        bgClass="bg-white"
      />
      <q-separator
        class="thick" 
        color="green-3"
        spaced 
      />
      <transition name="flip" mode="out-in">
        <q-table
          class="text-grey-9 q-mx-sm"
          bordered
          :key="key"
          :data="selectedData"
          :columns="columns"
          separator="vertical"
          :hide-pagination="true"
          row-key="name"
          dark
          color="amber"
        />
      </transition>
    </div>
  </q-page>    
</template>

<script>
import Tabs from '../components/Tabs';
import { mapGetters } from "vuex";

export default {
  name: 'Flip',
  components: { Tabs },
  data() {
    return {
      key: 1,
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
      columns: [
        {
          name: 'button',
          required: true,
          label: 'Button',
          align: 'left',
          field: row => row.name,
          format: val => `${val}`
        },
        {
          name: 'meaning',
          align: 'left', 
          label: 'Meaning', 
          field: 'meaning',
          style: 'white-space: normal'
        }
      ],
      datas: [
        {
          name: 'Fail',
          meaning: 'When you flipped the card, it wasn\'t what you expected'
        },
        {
          name: 'Hard',
          meaning: 'When you flipped the flashcard, it wasn what you expected, but you were\'t sure it would be'
        },
        {
          name: 'Good',
          meaning: 'When you flipped the flashcard, it wasn what you expected, but it didn\'t come to you fluently'
        },
        {
          name: 'Easy',
          meaning: 'When you flipped the flashcard, it wasn what you expected, but it came to you fluently'
        }
      ],
    }
  },
  computed: {
    selectedData() {
      let index = this.$store.state.review.activeTabIndex;
      return this.datas.slice(index, index+1);
    }
  },
  watch: {
    selectedData() {
      this.key += 1;
    }
  }
}
</script>

