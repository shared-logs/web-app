<template lang="pug">
  #device(v-loading='!device.id')
    h1 {{ device.name }}
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      device: {}
    }
  },
  created () {
    const id = this.$route.params.id

    this.$api.access(`/devices/${id}`)
      .then((response) => { this.device = response.data })
      .catch(() => this.$message.error('An error occured. Please try again later'))
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

#device {
  min-height: 200px;
}

</style>
