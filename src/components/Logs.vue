<template lang="pug">
  #logs(v-loading='!entries.length')
    .container(v-if='entries.length')
      .entry(v-for='entry in entries', :key='entry.id')
        .row
          span.h1 {{ entry.title }}
          span.tag {{ '#' + entry.id }}
        .row
          span {{ entry.user.first_name + ' ' + entry.user.last_name}}
          span.modified {{ entry.modified }}
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
      entries: {}
    }
  },
  created () {
    const id = this.$route.params.logid

    this.$api.access(`/logs/${id}/entries`)
      .then((response) => {
        this.entries = response.data.json ? response.data.json : [ response.data ]
        console.log(this.entries)
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
