<template>
<header id="headerTop">

    <div id="dclogo" class="left">
      <router-link to="/">
        <img :src="logo" alt="DC Logo" />
      </router-link>
    </div>

</header>
</template>

<script>
import logo from "../assets/logo.png"

export default {
  name: 'Header',
  data: () =>{
    return{
      logo: logo
    }
  }
}
</script>

<style>

#dclogo {
  display: inline-block;
  padding: 10px;
  margin-top: 45px;
  margin-left: 230px;
}

#headerTop{
    background-image: url("../assets/headerbg.png");
    background-size: cover;
    height: 195px;
    margin-top: -10px;
}

</style>