<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Light</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  background-color: Gray;
  text-align: center;
  color: black;
}
body {
}
#nav {
  padding: 30px;
  
}

#nav a {
  font-weight: bold;
  color: black;
}

#nav a.router-link-exact-active {
  color: SlateBlue;
}
</style>
