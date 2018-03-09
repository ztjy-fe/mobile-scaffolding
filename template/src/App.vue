<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
{{#if_eq proType "mobile"}}
import { UserApi } from '@/api/index'
import { UserMock } from '@/mock/index'
{{/if_eq}}

export default {
  name: 'App'{{#if_eq proType "mobile"}},
  created() {
    // mock
    UserMock.getUserInfoMock()
    UserApi.getUserInfo({
      params: {}}, (res) => {
      console.log(res)
    })
  }{{/if_eq}}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
