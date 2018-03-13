<template lang="pug">
  #app
    el-header.header
      el-menu.menu(mode='horizontal')
        router-link#name.no-decoration(to='/') Shared Logs
        #signin(@click='handleSignIn') Sign In
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
    },
    handleSignIn () {
      console.log('Signin')
    }
  }
}
</script>

<style scoped>
  .header {
    position: sticky;
    top: 0;
    background: white;
    z-index: 100;
  }

  .no-decoration {
    outline: none;
    color: initial;
    text-decoration: none;
  }

  #name {
    text-decoration: none;
    height: 61px;
    line-height: 61px;
    color: black;
    position: absolute;
    left: 0;
  }

  #signin {
    position: absolute;
    right: 0;
    float: left;
    height: 61px;
    line-height: 61px;
    outline: none;
    margin: 0;
    padding: 0 20px;
    font-size: 14px;
    color: #909399;
    cursor: pointer;
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
