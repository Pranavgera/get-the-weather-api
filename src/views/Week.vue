<template>
  <div class="cart">
      <MiniProfile />
      <div class="container">

        <div id="cartBod" class="grey lighten-2">
        <h3>Shopping Cart</h3>

          <div id="innerBox" class="green lighten-4">
            <table>
              <tr>
                  <th>My Items</th>
                  <th>Sign Out Date</th>
                  <th>Return Date</th>
              </tr>
              <tr>
                  <td>item</td>
                  <td>date</td>
                  <td>date</td>
                  <td id="clear" class="center">x</td>
              </tr>

            </table>

          </div>

          <div id="cols">
            <div id="col1">
              <p id="hmBtn" v-on:click="returnHome">Back</p>
            </div>
            <div id="col2">
              <button id="ckBtn" v-on:click="checkOut">Check Out</button>
            </div>

          </div>




        </div>

      </div>

    </div>
</template>

<script>

import MiniProfile from '../components/MiniProfile.vue';

export default {
  name: 'Cart',
  components: {
    MiniProfile,
  },
  methods: {
    returnHome () {
      this.$router.push('Home');
    },
    checkOut () {
      this.$router.push('CheckOut');
    }
  }
}
</script>

<style scoped>

#cartBod {
  height: auto;
  margin-top: 90px;
}

h3 {
    font-size: 35px;
    font-weight: 600;
    color: #3e2b2f;
}

#innerBox {
  margin: 30px;
}

th {
  text-align: center;
}

tr {
  border: none;
}

td{
  text-align: center;
  font-size: 18px;
  font-weight: 600;
}

#clear {
  width: 10px;
  padding-right: 20px;
  color: red;
}

#col1 {
  display: inline-block;
  text-align: left;
  margin-right: 40%;
  color: rgba(85, 196, 85, 0.762);
  font-weight: 600;
  font-size: 20px;
}

#col2 {
  display: inline-block;
  text-align: left;
  margin-right: 42%;
}

#ckBtn {
    background-color: #3e2b2f;
    color: white;
}

</style>