<template lang="pug">
  #app
    el-header.header
      el-menu.menu(mode='horizontal')
        a#name(href='/') Shared Logs
        el-menu-item(index='1') Devices
        el-menu-item(index='2') Entries
    el-body
      router-view
</template>

<script>
export default {
  name: 'App'
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
    line-height: 60px;
    color: black;
    position: absolute;
    left: 0;
  }

  #name:focus { outline: none; }

  .menu {
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
