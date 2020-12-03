<template>
  <q-page class="flex column flex-center bg-dark">
    <div class="q-pa-md">
      <!-- <badge 
        v-for="badge in badges"
          :key="badge.color"
          :color="badge.color"
          :icon="badge.icon"
          :value="badge.value"
      /> -->
    </div>
    <div class="q-pa-md" style="flex-grow: 1">
      <q-list 
        class="rounded-borders text-white"
        style="max-width:380px"
      >
        <list-item
          v-for="item in items"
            :key="item.caption[0]"
            :caption="item.caption"
        />
      </q-list>
    </div>
    <div class="q-pa-md self-end">
          
    </div>
  </q-page>
</template>

<script>
import ListItem from '../components/ListItem';
import Badge from '../components/Badge';

export default {
  name: 'PageIndex',
  components: { ListItem, Badge },
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
        },
      ],
      items: [
        {
          caption: [
            'Red You have no subtitles saved yet',
            'Red Back'
          ]
        },
        {
          caption: [
            'Green You have no subtitles saved yet',
            'Green Back'
          ]
        },
        {
          caption: [
            'Blue You have no subtitles saved yet',
            'Blue Back'
          ]
        }
      ]
    }
  },
  methods: {
    showReview() {
      this.$router.push('/review');
    }
  }
}
</script>

<style scoped lang="scss">
</style>
