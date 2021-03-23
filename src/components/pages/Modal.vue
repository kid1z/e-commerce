<template>
  <transition name="fade-modal">
    <div class="modal" v-if="isShow" v-focus>
      <div class="modal__block" @submit.prevent>
        <h1>{{change.changeTitle}}</h1>
        <div>
          <label for="">Category name</label>
          <input type="text" v-model="dataForm.name" />
        </div>
        <div>
          <label for="">Category description</label>
          <textarea type="text" v-model="dataForm.description" />
        </div>
        <div>
          <slot></slot>
        </div>
        <div class="modal__button">
          <div>
            <button @click="handleShow">Cancel</button>
            <button type="submit" @click="modifyItem()">{{change.changeButton}}</button>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>

export default {
  name: "Modal",
  props: ['isShow','change','dataForm'],
  directives: {
    focus: {
      inserted: function (el) {
        el.focus()
      }
    }
  },
  data () {
    return {
      queryName: null,
      queryDesc: null,
    }
  },
  methods : {
    handleShow () {
      this.dataForm.name = null
      this.dataForm.description = null
      this.$emit('change')
      
    },
    buttonCreate () {
        this.queryName = this.dataForm.name
        this.queryDesc = this.dataForm.description
        const data = {'name' : this.queryName , 'desc' : this.queryDesc}
        this.$emit('pushValueForm',data)
        this.dataForm.name = null
        this.dataForm.description = null
    },
    buttonUpdate () {
      const data = {'id' : this.dataForm.id, 'name' : this.dataForm.name , 'desc' : this.dataForm.description}
      this.$emit('pushValueForm',data)
      this.dataForm.name = null
      this.dataForm.description = null
    },
    modifyItem () {
      if (this.change.changeButton === 'Create') {
        this.buttonCreate()
      }
      else 
        this.buttonUpdate()
      
    },
   
  }
}
</script>
<style scoped>
.modal {
  content: "";
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.377);
}
.modal__block {
  height: 450px;
  width: 400px;
  background-color: #fff;
  position: absolute;
  border-radius: 15px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20px;
      box-shadow: 0px 0 12px 0px hsla(0, 0%, 35%, 0.788);
}
.modal__block h1 {
  margin-bottom: 20px;
}
.modal__block h1 + div {
    margin-bottom: 20px;
}
.modal__button {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    position: absolute;
    height: 70px;
    width: 100%;
    bottom: 0;
    left: 0;
    background-color: #F8F7FB;
    padding-right: 20px;
    padding-left: 20px;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
}

.modal__button button {
    font-weight: 700;
    color: #fff;
    background-color: rgb(214, 110, 41);
    box-shadow: -1px 1px 1px hsla(0, 0%, 0%, 0.231);
    border-radius: 5px;
    padding: 12px 25px;
    outline: 0;
    border: 1px solid hsla(24, 68%, 50%, 0.231);
    cursor: pointer;
    transition: .2s background-color ease;
}
.modal__button button:last-child:hover {
    background-color: rgb(196, 87, 15);
}
.modal__button button:not(:last-child) {
    background-color: #fff;
    color: #282d5b;
    margin-right: 10px;
}
.modal__button button:not(:last-child):hover {
    background-color: rgb(238, 238, 238);
}
label {
    display: block;
    margin-bottom: 10px;
}
input[type="text"],textarea {
  width: 100%;
  background-color: #F8F7FB;
  border: none;
  border-radius: 5px;
}
input[type="text"] {
  padding: 13px 10px;
}
textarea {
  height: 145px;
  padding: 10px;
  resize: none;
}
/* transition modal */
.fade-modal-enter-active {
  transition: .2s all ease;
  opacity: 1;
  visibility: visible;
  transform: scale(1);
}
.fade-modal-leave-active {
  transition: .2s all ease;
}
.fade-modal-enter,.fade-modal-leave-to {
  opacity: 0;
  visibility: hidden;
  transform: scale(1.1);

}
</style>
