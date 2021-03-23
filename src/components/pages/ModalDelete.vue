<template>
  <transition name="fade-modal">
    <div class="modal" v-if="isShowModalDelete">
      <div class="modal__block">
        <div class="warning">
          <h1>Are you sure you wanna detele this?</h1>
          <p>This change will reflect in your portal after an hour.</p>
        </div>
        <div class="icon-warning">
          <svg
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 286.054 286.054"
            style="enable-background:new 0 0 286.054 286.054;"
            xml:space="preserve"
          >
            <g>
              <path
                style="fill:#E2574C;"
                d="M143.027,0C64.04,0,0,64.04,0,143.027c0,78.996,64.04,143.027,143.027,143.027
		c78.996,0,143.027-64.022,143.027-143.027C286.054,64.04,222.022,0,143.027,0z M143.027,259.236
		c-64.183,0-116.209-52.026-116.209-116.209S78.844,26.818,143.027,26.818s116.209,52.026,116.209,116.209
		S207.21,259.236,143.027,259.236z M143.036,62.726c-10.244,0-17.995,5.346-17.995,13.981v79.201c0,8.644,7.75,13.972,17.995,13.972
		c9.994,0,17.995-5.551,17.995-13.972V76.707C161.03,68.277,153.03,62.726,143.036,62.726z M143.036,187.723
		c-9.842,0-17.852,8.01-17.852,17.86c0,9.833,8.01,17.843,17.852,17.843s17.843-8.01,17.843-17.843
		C160.878,195.732,152.878,187.723,143.036,187.723z"
              />
            </g>
          </svg>
        </div>
        <div class="modal__button">
          <div>
            <button @click="handleCancelModal">Cancel</button>
            <button type="submit" @click="handleDelete">Delete</button>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "ModalDetel",
  props: ['isShowModalDelete','dataForm'],
  data() {
    return {

    };
  },
  methods: {
    handleCancelModal () {
      this.$emit('changeShowModalDelete')
      this.dataForm.name = null
      
    },
    handleDelete () {
      let data = {'id': this.dataForm.id, 'name': this.dataForm.name}
      this.$emit('handleDeleteItem',data)
      this.dataForm.name = null
    }
  },
};
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
  height: 300px;
  width: 500px;
  background-color: #fff;
  position: absolute;
  border-radius: 15px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20px 35px;
  box-shadow: 0px 0 12px 0px hsla(0, 0%, 35%, 0.788);
}
.warning {
  margin-bottom: 5px;
}
.warning h1 {
  font-size: 22px;
  color: rgb(226, 87, 76);
}
.warning p {
  font-size: 15px;
  color: #615e5e;
}
.icon-warning {
    display: block;
    position: relative;
    width: 125px;
    height: auto;
    margin: 0 auto;
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
  background-color: #f8f7fb;
  padding-right: 20px;
  padding-left: 20px;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
}

.modal__button button {
  font-weight: 700;
  color: #fff;
  background-color: rgb(226, 87, 76);
  box-shadow: -1px 1px 1px hsla(0, 0%, 0%, 0.231);
  border-radius: 5px;
  padding: 12px 25px;
  outline: 0;
  border: none;
  cursor: pointer;
  transition: 0.2s background-color ease;
}

.modal__button button:not(:last-child) {
  background-color: #fff;
  color: #282d5b;
  margin-right: 10px;
}
.modal__button button:last-child:hover {
  background-color: rgb(196, 62, 52);
}
.modal__button button:not(:last-child):hover {
  background-color: rgb(238, 238, 238);
}

/* transition modal */
.fade-modal-enter-active {
  transition: 0.2s all ease;
  opacity: 1;
  visibility: visible;
  transform: scale(1);
}
.fade-modal-leave-active {
  transition: 0.2s all ease;
}
.fade-modal-enter,
.fade-modal-leave-to {
  opacity: 0;
  visibility: hidden;
  transform: scale(1.1);
}
</style>
