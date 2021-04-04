<template>
  <angleTool />
</template>

<script setup>
import angleTool from "./components/angleTool.vue";
// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/script-setup-2/active-rfcs/0000-script-setup.md
</script>

<style>
* {
  padding: 0;
  margin: 0;
}

*,::after,::before{
  box-sizing: border-box;
}

html,
body,
#app {
  height: 100%;
  overflow: hidden;
}
#app {
  font-family: "微软雅黑", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  position: relative;
  background-color: #fafafa;
  overflow: auto;
}
</style>