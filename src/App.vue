<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">

    <div class="nav-bar">
      <b-card title="Card Title" no-body>
        <b-card-header header-tag="nav">
          <b-button-group size="lg">
            <b-button @click="add('Server')">Server</b-button>
            <b-button @click="add('Https')">Https</b-button>
            <b-button>Reverse Proxy</b-button>
          </b-button-group>
        </b-card-header>
      </b-card>
      <div class="button-content">
        <keep-alive>
          <router-view/>
        </keep-alive>
      </div>
    </div>

    <pre class="config-content">
      worker_processes  1;

      events {
      worker_connections  1024;
      }

      http {
      include       mime.types;
      default_type  application/octet-stream;

      #access_log  logs/access.log  main;

      sendfile        on;

      keepalive_timeout  65;

      #gzip  on;
      {{addServers}}
      location / {
      root   html;
      index  index.html index.htm;
      }

      error_page   500 502 503 504  /50x.html;
      location = /50x.html {
      root   html;
      }

      }
    </pre>
  </div>
</template>

<script>
import Vue from 'vue'
import HelloWorld from './components/NavBar.vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.config.productionTip = false

export default {
  name: 'app',
  components: {
    HelloWorld
  },
  methods: {
    add (param) {
      this.$router.push({name: param})
    }
  }
}
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  .config-content{
    background-color: #f9f9f9;
    box-shadow: 0 1px 1px rgba(0,0,0,.125);
    text-align: left;
  }
  .button-content{
    width:80%;
    margin: 20px 10% 20px 10%;
  }
  .nav-bar{
    width: 90%;
    margin: auto;
  }
</style>
