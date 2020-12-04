<template>
  <q-page class="column bg-dark">
    <q-list 
      class="rounded-borders text-white q-ma-sm"
    >
      <list-item
        v-for="item in items"
          :key="item.caption[0]"
          :caption="item.caption"
      />
    </q-list>
  </q-page>
</template>

<script>
import ListItem from '../components/ListItem';

export default {
  name: 'Home',
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
  }
}
</script>

<style scoped lang="scss">
</style>
