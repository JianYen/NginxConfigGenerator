<template>
  <div class="hello">
    <div >
      <b-card title="Card Title" no-body>
        <b-card-header header-tag="nav">
          <b-button-group size="lg">
            <b-button v-bind:active="activeActive" @click="textShadows('Active')">Server</b-button>
            <b-button v-bind:active="activeLink" @click="textShadows('Link')" >Https</b-button>
            <b-button v-bind:active="activeAnother" @click="textShadows('Another')">Reverse Proxy</b-button>
          </b-button-group>
        </b-card-header>

        <b-card-body class="text-center">
          <b-card-text v-if="bar=='Active'">

            <div  class="row server-content">
              <div class="col-md-6 xxx">
                <div class="row">
                  <div class="col-md-4 xxx">
                    <div>Domain</div>
                    <div>Path</div>
                    <div>Document root</div>
                  </div>
                  <div class="col-md-8 xxx">
                    <input class="server-input" type="text" placeholder="example.com">
                    <input class="server-input" type="text" placeholder="/var/www/example.com">
                    <input class="server-input" type="text" placeholder="/public">
                   </div>
                  </div>
                </div>
              <div class="col-md-6 xxx">Domain</div>
            </div>
          </b-card-text>
          <b-card-text v-if="bar=='Link'">
            Link
          </b-card-text>
          <b-card-text v-if="bar=='Another'">
            Another.
          </b-card-text>
          <b-card-text v-if="bar=='disabled'">
            disabled
          </b-card-text>
        </b-card-body>
      </b-card>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      bar: 'Active',
      activeActive: true,
      activeLink: false,
      activeAnother: false,
      activedisabled: false
    }
  },
  methods: {
    textShadows (s) {
      this.activeActive = false
      this.activeLink = false
      this.activeAnother = false

      switch (s) {
        case 'Active':
          this.bar = 'Active'
          this.activeActive = true
          break
        case 'Link':
          this.bar = 'Link'
          this.activeLink = true
          break
        case 'Another':
          this.bar = 'Another'
          this.activeAnother = true
          break
      }
    }
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
  .card{
    margin:0 auto;
    width: 85%;
    box-shadow: 3px 3px 9px #dbd9d9;
  }
  .xxx{
    text-align: left;
  }

</style>
