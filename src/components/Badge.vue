<template>
  <q-chip 
    outline 
    :color="color" 
    text-color="white" 
    :icon="icon"
  >
    {{value}}
  </q-chip>
</template>

<script>
export default {
  name: 'Badge',
  props: {
    color: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      required: true
    },
    value: {
      type: String,
      required: true
    }
  }
}
</script>

