<template>
  <q-page class="flex flex-center bg-dark">
    <q-list 
      class="rounded-borders text-white q-pa-sm full-width"
    >
      <list-item
        v-for="item in items"
          :key="item.caption[0]"
          :caption="item.caption"
        clickable=""
      />
    </q-list>
  </q-page>    
</template>

<script>
import ListItem from '../components/ListItem';

export default {
  name: 'Review',
  components: { ListItem },
  data() {
    return {
      items: [
        {
          caption: [
            'Red Button',
            'You have no subtitles saved yet'
          ]
        },
        {
          caption: [
            'Green Button',
            'You have no subtitles saved yet'
          ]
        },
        {
          caption: [
            'Blue Button',
            'You have no subtitles saved yet'
          ]
        },
        {
          caption: [
            'Yellow Button',
            'You have no subtitles saved yet'
          ]
        }
      ]
    }
  },
  methods: {
  }
}
</script>
