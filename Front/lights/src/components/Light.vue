<template>
  <div class="hello">
  <md-button v-on:click="lightSwitch">LightButton</md-button>
    {{Light}}
    {{Count}}
  </div>
</template>

<script>
  export default {
      name: 'Light',
  
      data () {
          return { 
              boolean: false,
              Light: null,     
              Count: 0         
          }
      },

    methods: { 
        lightSwitch() {

            fetch('http://localhost:3000/light/event_0',{method: 'POST'})
            this.refreshComp()               
        },

        refreshComp(){
          fetch('http://localhost:3000/light').then(response => 
              response.json().then(data => 
                  ({data:data})).then(res => {
                      this.Count=res.data.light[0]
                      this.Light=res.data.light[1]
                  }));
        }
                
    },
      mounted () {
         this.refreshComp();
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

.md-switch {
  transform: scale(3);
}
</style>
