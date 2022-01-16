<template>
  <div id="app">
    <div id="nav">
      <ul id="nav-mobile" class="center hide-on-med-and-down">
        <li><router-link to="/Today">Today's Forecast</router-link> | </li>
        <li><router-link to="/Week">This Week</router-link> | </li>
      </ul>
    </div>
    <Title />
    <router-view/>
  </div>
</template>

<script>
  import M from 'materialize-css'
  import Title from './components/Title.vue';

  export default {
    mounted () {
      M.AutoInit(),
      M.Tabs.init()
    },
    name: 'App',
    components: {
      Title
    }
  }
</script>

<style >

#app {
  font-family: 'Oswald', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #3e2b2f;
}

#nav {
  padding: 0;
  margin-top: -5.5rem;
  margin-bottom: 80px;
  margin-left: 35%;
}
#nav-mobile>li{
  display: inline-block;
}

#nav-mobile>li:last-child{
  padding-left: 2px;
}

#nav a {
  font-size: 20px;
  font-weight: 600;
  color: #3e2b2f;
  padding: 5px;
}

#nav a.router-link-exact-active {
  color: #90d5ac;
}

</style>
