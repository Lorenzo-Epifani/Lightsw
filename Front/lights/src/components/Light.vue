<template>
  <div class="hello">
    {{Light}}
    {{Count}}
  </div>
</template>

<script>
  export default {
      name: 'Light',
  
      data () {
          return { 
              Light: null,     
              Count: 0         
          }
      },

      mounted () {
          fetch('http://localhost:3000/light').then(response => 
              response.json().then(data => 
                  ({data:data})).then(res => {
                      this.Count=res.data.light[0]
                      this.Light=res.data.light[1]
                  }));
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
