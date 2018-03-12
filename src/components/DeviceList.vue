<template lang="pug">
  #devices(v-loading='!devices.length')
    .device(v-for='device in devices', :key='device.id', @click='clickDevice(device.id)')
      el-card
        div(v-if='isMobile')
          div {{ device.name }}
        div(v-else)
          div(slot='header') {{ device.name }}
          img.icon(src='https://assets.pcmag.com/media/images/417422-flashforge-finder-3d-printer.jpg?width=810&height=456')
    .phantom(v-for='i in devices.length', :key='i + devices.length')
</template>

<script>
export default {
  name: 'HelloWorld',
  props: ['isMobile'],
  data () {
    return {
      devices: []
    }
  },
  created () {
    this.$api.access('/devices')
      .then((response) => { this.devices = response.data.json })
      .catch(() => this.$message.error('An error occured. Please try again later'))
  },
  methods: {
    clickDevice (id) {
      this.$router.push({ path: `device/${id}` })
    }
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
  }

  .device, .phantom {
    margin: 10px;
    max-width: 300px;
  }

  .device {
    cursor: pointer;
  }

  @media screen and (max-width: 684px) {
    .device {
      max-width: none;
      max-height: 62px;
      text-align: center;
      flex-grow: 1;
    }

    .phantom {
      display: none;
    }
  }

  .icon {
    width: 100%;
    height: 260px;
    object-fit: cover;
  }

  .phantom {
    content: '';
    width: 100%;
  }
</style>
