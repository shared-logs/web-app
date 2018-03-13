<template lang="pug">
  #device(v-loading='!device.id')
    .container(v-if='device.id')
      .header
        .row
          span.h1 {{ device.name }}
          span.tag {{ device.id ? '#' + device.id : null }}
          span.device-modified.pull-right {{ device.modified | moment('from') }}
        .row
          span.subtag {{ device.model }}
      .row
        .log(v-for='log in logs', :key='log.id')
          span.link.tag(@click='clickLog(log.id)') {{ log.name }}
          span.log-modified.pull-right {{ log.modified | moment('from') }}
</template>

<script>
export default {
  name: 'Device',
  data () {
    return {
      device: {},
      logs: []
    }
  },
  created () {
    const id = this.$route.params.id

    this.$api.access(`/devices/${id}`)
      .then((response) => {
        this.device = response.data
        this.logs = this.device.logs.json ? this.device.logs.json : [ this.device.logs ]
      })
      .catch(() => this.$message.error('An error occured. Please try again later'))
  },
  methods: {
    clickLog (id) {
      this.$router.push({ path: `${this.$route.path}/logs/${id}` })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

#device {
  min-height: 200px;
}

.container {
  max-width: 100%;
  margin: 0 auto;
}

.tag {
  font-size: 24px;
}

.subtag {
  font-size: 18px;
}

.device-modified {
  line-height: 44px;
  height: 44px;
  padding-top: 2.3px;
}

.header {
  margin-bottom: 40px;
}

.log-modified {
  line-height: 34px;
  height: 34px;
  padding-top: 2.1px;
}

/* helper classes */

.h1 {
  font-size: 32px;
  font-weight: bold;
}

.link {
  border-bottom: 1px solid black;
  cursor: pointer;
  font-weight: 500;
}

.link:active {
  color: rgb(128, 128, 128);
  border-bottom-color: rgb(60, 60, 60);
}

.pull-right { float: right; }

/* container media queries */

@media (min-width: 576px) {
  .container { max-width: 85%; }
}

@media (min-width: 768px) {
  .container { max-width: 70%; }
}

@media (min-width: 992px) {
  .container { max-width: 55%; }
}

@media (min-width: 1200px) {
  .container { max-width: 40%; }
}

</style>
