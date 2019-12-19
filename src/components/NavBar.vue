<template>
  <div class="hello">
    <div >
      <b-card title="Card Title" no-body>
        <b-card-header header-tag="nav">
          <b-nav card-header tabs >
            <b-nav-item v-bind:active="activeActive" @click="textShadows('Active')">Server</b-nav-item>
            <b-nav-item v-bind:active="activeLink" @click="textShadows('Link')" >Https</b-nav-item>
            <b-nav-item v-bind:active="activeAnother" @click="textShadows('Another')">Reverse Proxy</b-nav-item>
          </b-nav>
        </b-card-header>

        <b-card-body class="text-center">
          <b-card-text v-if="bar=='Active'">
            <div  class="row server-content">
              <div class="col-md-4 xxx">Domain</div>
              <div class="col-md-4 xxx">Path</div>
              <div class="col-md-4 xxx">Document root</div>
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
