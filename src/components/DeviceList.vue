<template lang="pug">
  #devices(v-loading='!devices.length')
    el-card.device(v-for='device in devices', :key='device.id')
      div(slot='header') {{ device.name }}
      img.icon(src='https://assets.pcmag.com/media/images/417422-flashforge-finder-3d-printer.jpg?width=810&height=456')
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      devices: []
    }
  },
  created () {
    this.$api.access('/devices')
      .then((response) => { this.devices = response.data })
      .catch(() => this.$message.error('An error occured. Please try again later'))
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #devices {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    min-height: 200px;
    padding: 20px;
  }

  .device {
    margin: 10px;
    max-width: 300px;
  }

  .icon {
    width: 100%;
    height: 260px;
    object-fit: cover;
  }
</style>
