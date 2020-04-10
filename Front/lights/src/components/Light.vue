<template>
  <div class="hello">
    {{Light}}
  </div>
</template>

<script>
export default {
  name: 'Light',
  
  data () 
    {
      return { 
                Light: null                
                }
    },

  mounted () {
      fetch('http://localhost:3000/light')
          .then((response) => {
          this.Light = response.json();
          })
          .then((data) => {
          console.log(data);
          });
    },
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
