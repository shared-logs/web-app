<template lang="pug">
  #app
    el-header.header
      el-menu.menu(mode='horizontal')
        a#name(href='/') Shared Logs
    el-main
      router-view(:isMobile='isMobile')
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      isMobile: window.innerWidth <= 684
    }
  },
  created () {
    window.addEventListener('resize', this.handleResize)
  },
  methods: {
    handleResize () {
      this.isMobile = window.innerWidth <= 684
    }
  }
}
</script>

<style scoped>
  .header {
    position: sticky;
    top: 0;
    background: white;
  }

  #name {
    text-decoration: none;
    height: 60px;
    line-height: 60px;
    color: black;
    position: absolute;
    left: 0;
  }

  #name:focus { outline: none; }

  .menu {
    min-height: 60px;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
  }
</style>

<style>
html, body {
  margin: 0;
  padding: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}

.el-message__content {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}
</style>
