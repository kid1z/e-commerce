<template>
  <div id="app">
    <transition name="fade" :duration="2000">
      <div class="loading" v-if="show">
        <div class="spinner">
          <div class="double-bounce1"></div>
          <div class="double-bounce2"></div>
        </div>
      </div>
    </transition>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      show: true
    }
  },
  created() {
      window.addEventListener("load", this.onWindowLoad);
  },
  methods: {
    onWindowLoad() {
      var vm = this
      setTimeout(function(){
        vm.show = false
      },2000)
    },
  },
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;400;700;900&display=swap');
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}
#app {
  max-width: 1600px;
  margin: 0 auto;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
ul {
    list-style: none;
}
.fade-leave-active {
  transition: .5s all linear;
}
.fade-leave {
  opacity: 1;
  visibility: visible;
}
.fade-leave-to {
  opacity: 0;
  visibility: hidden;
}
.loading {
  position: fixed;
  height: 100vh;
  width: 100%;
  left: 0;
  background-color: rgb(207, 86, 6);
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
}
.spinner {
  width: 50px;
  height: 50px;
  position: relative;
}

.double-bounce1, .double-bounce2 {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: #fff;
  opacity: 0.6;
  position: absolute;
  top: 0;
  left: 0;
  -webkit-animation: sk-bounce 2.0s infinite ease-in-out;
  animation: sk-bounce 2.0s infinite ease-in-out;
}

.double-bounce2 {
  -webkit-animation-delay: -1.0s;
  animation-delay: -1.0s;
}

@-webkit-keyframes sk-bounce {
  0%, 100% { -webkit-transform: scale(0.0) }
  50% { -webkit-transform: scale(1.0) }
}

@keyframes sk-bounce {
  0%, 100% { 
    transform: scale(0.0);
    -webkit-transform: scale(0.0);
  } 50% { 
    transform: scale(1.0);
    -webkit-transform: scale(1.0);
  }
}

</style>
