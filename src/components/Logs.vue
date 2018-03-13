<template lang="pug">
  #logs(v-loading='!entries.length || !device.id')
    .container(v-if='entries.length && device.id')
      .header
        router-link.no-decoration(:to='"/device/" + device.id')
          span.h1.link {{ device.name }}
        span.tag {{ device.id ? '#' + device.id : null }}
        span.device-modified.pull-right {{ device.modified | moment('from') }}
      .add + Add Entry
      .entry(v-for='entry in entries', :key='entry.id')
        .row
          span.h1 {{ entry.title }}
          span.tag {{ '#' + entry.id }}
        .row
          span {{ entry.user.first_name + ' ' + entry.user.last_name}}
          span.modified {{ entry.modified | moment('from') }}
        .row
          vue-markdown {{ entry.detail }}
</template>

<script>
import VueMarkdown from 'vue-markdown'

export default {
  name: 'Logs',
  components: { VueMarkdown },
  data () {
    return {
      device: {},
      entries: []
    }
  },
  created () {
    const id = this.$route.params.logid

    this.$api.access(`/logs/${id}/entries`)
      .then((response) => {
        this.entries = response.data.json ? response.data.json : [ response.data ]
      })
      .catch(() => this.$message.error('An error occured. Please try again later'))

    this.$api.access(`/devices/${id}`)
      .then((response) => {
        this.device = response.data
      })
      .catch(() => this.$message.error('An error occured. Please try again later'))
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

#logs {
  min-height: 200px;
}

.container {
  max-width: 100%;
  margin: 0 auto;
}

.header { position: relative; }

.device-modified {
  height: 44px;
  line-height: 44px;
  position: absolute;
  right: 0;
}

.add {
  text-align: center;
  color: #575A65;
  cursor: pointer;
  font-weight: 500;
  padding: 13px;
  margin-top: 30px;
  margin-bottom: 15px;
  border-top: solid 1px #e6e6e6;
  border-bottom: solid 1px #e6e6e6;
}

.entry {
  position: relative;
  font-size: 22px;
}

.tag {
  font-size: 24px;
}

.modified {
  color: rgb(140, 140, 140);
  position: absolute;
  right: 0;
}

/* helper classes */

.h1 {
  font-size: 32px;
  font-weight: bold;
}

.no-decoration {
  color: initial;
  text-decoration: none;
}

.link {
  cursor: pointer;
  font-weight: 500;
}

.link:active {
  color: rgb(128, 128, 128);
}

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
