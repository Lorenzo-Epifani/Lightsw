<template>
  <div class="hello">
    <md-badge class="md-primary" v-bind:md-content="this.Count">
      <md-button class="md-fab" v-on:click="lightSwitch"><md-icon>settings_brightness</md-icon></md-button>
    </md-badge>

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
                          this.Light?document.body.style.backgroundColor = 'white':
                                document.body.style.backgroundColor = 'black' 
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

button.md-button.md-fab.md-theme-default  {
  transform: scale(1.3);
  background-Color: LightSlateGray;
  font-weight: bold;
}


</style>
