<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      Founded in the year 2000 for the purpose of digitalizing documentation process
    </p>
    <!--<h4>  {{ info }} </h4>-->
      <div v-for="currency in info" class="currency">
        {{ currency.description }}:
        <span class="lighten">
          <span v-html="currency.symbol"></span>{{ currency.rate_float | currencydecimal }}
        </span>
      </div>
      <b-button v-on:click="postNow" variant="primary">Submit</b-button>
      <h4>  {{ name1 }} </h4>
  </div>

</template>

<script>
export default {
  name: 'About',
  props: {
    msg: String
  },
  data () {
    return {
      info: null,
      name1: "test",
    }
  },
  mounted () {
  this.$axios
      .get('https://api.coindesk.com/v1/bpi/currentprice.json')
      .then(response => (this.info = response.data.bpi))
  },
  filters: {
  currencydecimal (value) {
    return value.toFixed(2)
    }
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.form));
    },
    greet: function (event) {
      if (event) {
        alert(event.target.tagName)
      }
    },
    postNow: function() {
      let data1 = JSON.stringify({
        name: 'sec entry'
      })
      this.$axios
      .post('http://localhost:3000/tasks',data1, {headers: {
      'Content-Type': 'application/json'}
    })
    .then(response => (this.name1 = response.data))
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
