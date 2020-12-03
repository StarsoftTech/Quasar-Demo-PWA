<template>
  <fragment>
    <q-page class="flex flex-center bg-dark">
      <div style="width: 100%">
        <div class="text-h6 text-center text-white">
          What does these buttons mean?
        </div>
        <tabs
          :tabs="tabs"
        />
        <transition 
          appear 
          enter-active-class="animated flipInX"
          leave-active-class="animated flipOutX" 
          :duration="2000"
        >
          <q-separator
            v-if="showTable"
            class="thick" 
            color="green-3"
            spaced 
          />
        </transition>
        <transition 
          appear 
          enter-active-class="animated flipInX"
          leave-active-class="animated flipOutX" 
          :duration="2000"
        >
          <q-table
            class="text-grey-9"
            bordered
            v-if="showTable"
            :data="data"
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
    <q-footer 
      class="bg-dark" 
      elevated 
      style="max-width: 380px"
      @click="showTable=!showTable"
    >
      <tabs
        v-if="showTable"
        :tabs="tabs"
      />
      <tabs
        v-else
        :tabs="flip"
      />
    </q-footer>
    
  </fragment>
</template>

<script>
import { Fragment } from 'vue-fragment';
import Tabs from '../components/Tabs';

export default {
  name: 'PageIndex',
  components: { Fragment, Tabs },
  data() {
    return {
      tab: '',
      showTable: true,
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
      data: [
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
      ]
    }
  }
}
</script>
