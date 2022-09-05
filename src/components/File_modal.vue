<template>
  <div>
    <div>
        <div class="modal-content">
            <slot name="title"></slot>
            <slot name="context"></slot>
            <slot name="footer"></slot>
            <button @click="close()">close</button>
        </div>
        
    </div>
  </div>
</template>

<script>
export default {
    methods: {
        close() {
            this.$emit("close")
        }
    }
}
</script>

<style>
.animatetop {
  -webkit-animation-name: animatetop;
  -webkit-animation-duration: 0.4s;
  animation-name: animatetop;
  animation-duration: 0.4s;
}
.animatebottom {
  -webkit-animation-name: animatebot;
  -webkit-animation-duration: 0.4s;
  animation-name: animatebot;
  animation-duration: 0.4s;
}
@-webkit-keyframes animatetop {
  from {
    top: -300px;
    opacity: 0;
  }
  to {
    top: 0;
    opacity: 1;
  }
}

@keyframes animatetop {
  from {
    top: -300px;
    opacity: 0;
  }
  to {
    top: 0;
    opacity: 1;
  }
}
@-webkit-keyframes animatebot {
  from {
    top: 0;
    opacity: 1;
  }
  to {
    top: -300px;
    opacity: 0;
  }
}

@keyframes animatebot {
  from {
    top: 0;
    opacity: 1;
  }
  to {
    top: -300px;
    opacity: 0;
  }
}


Cảm ơn vì mn nhiều 

.background-drop {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: #000;
  opacity: 0.5;
  /* z-index: 500; */
}

.modal {
  position: fixed;
  width: 500px;
  left: calc(50% - 250px);
  top: 50px;
}
.modal-content {
  overflow-y: initial !important;
  width: 100%;
  position: relative;
  pointer-events: auto;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid rgba(0, 0, 0, 0.7);
  outline: none;
  border-radius: 10px;
  overflow: hidden;
}
</style>