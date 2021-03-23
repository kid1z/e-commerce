<template>
  <div class="category">
    <Modal 
      :isShow="isShow" 
      @change="handleShow" 
      @pushValueForm="pushValueForm" 
      :change="change" 
      :dataForm="dataForm">
    </Modal>
    <ModalDelete 
      :isShowModalDelete="isShowModalDelete" 
      @changeShowModalDelete="changeShowModalDelete"
      @handleDeleteItem="handleDeleteItem"
      :dataForm="dataForm"
    >
    </ModalDelete>
    <div style="display: flex; margin-bottom: 20px">
      <h1 class="category__heading">Category</h1>
      <button class="category__button" @click="defaultModal" >Add new</button>
    </div>
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>DESCRIPTION</th>
            <th>EDIT</th>
            <th>DELETE</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item,index) in list" :key="index">
            <td>{{index}}</td>
            <td>{{item.name}}</td>
            <td>{{item.description}}</td>
            <td @click="getItem(item,index)" ><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12C20 16.4183 16.4183 20 12 20ZM2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM11 7V9H9V11H11V13H13V11H15V9H13V7H11ZM9 15V17H15V15H9Z" fill="currentColor" /></svg></td>
            <td @click="delItem(item,index)"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M17 5V4C17 2.89543 16.1046 2 15 2H9C7.89543 2 7 2.89543 7 4V5H4C3.44772 5 3 5.44772 3 6C3 6.55228 3.44772 7 4 7H5V18C5 19.6569 6.34315 21 8 21H16C17.6569 21 19 19.6569 19 18V7H20C20.5523 7 21 6.55228 21 6C21 5.44772 20.5523 5 20 5H17ZM15 4H9V5H15V4ZM17 7H7V18C7 18.5523 7.44772 19 8 19H16C16.5523 19 17 18.5523 17 18V7Z" fill="currentColor" /><path d="M9 9H11V17H9V9Z" fill="currentColor" /><path d="M13 9H15V17H13V9Z" fill="currentColor" /></svg></td>
          </tr>
          
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import ModalDelete from './ModalDelete.vue'
export default {
  components: { ModalDelete },
  name: 'Category',
  data () {
    return {
      isShow: false,
      isShowModalDelete: false,
      list : [
        {id: 0, 'name' : 'Computer', 'description' : 'Computers are very important nowadays'},
        {id: 1, 'name' : 'Laptop', 'description' : 'Laptop is awesome'},
        {id: 2, 'name' : 'Tivi', 'description' : 'Tivi is a not bad choice '},
      ],
      nextIndex: Number,
      handleId: null,
      change : {
        changeTitle: null,
        changeButton: null
      },
      dataForm : {
        'id': null,
        'description': null,
        'name': null
      },
    }
  },
  methods : {
    defaultModal () {
      this.isShow = true
      this.change.changeTitle = 'Create an event',
      this.change.changeButton = 'Create'
    },
    handleShow () {
      this.isShow = false
    },
    changeModal () {
      this.change.changeTitle = 'Update an event'
      this.change.changeButton = 'Update'
    },
    pushValueForm (data) {
      if (this.change.changeButton === 'Create') {
        this.list.push({ 'id': this.list.length, 'name' : data.name, 'description' : data.desc })
        this.isShow = false
      }
      else {
        this.list[data.id].name = data.name
        this.list[data.id].description = data.desc
        this.isShow = false
      }

    },
    getItem (e,idx) {
      this.changeModal()
      this.isShow = true
      this.dataForm.id = idx
      this.dataForm.description = e.description
      this.dataForm.name = e.name
    },
    // modaldelete
    changeShowModalDelete () {
      this.isShowModalDelete = false
    },
    delItem (e,idx) {
      e.id = idx
      this.handleId = idx
      this.dataForm.name = e.name
      this.dataForm.id = idx
      this.isShowModalDelete = true
    },
    handleDeleteItem (e) {
      console.log(this.handleId)
      if (e.id === this.handleId) {
        this.list.splice(e.id, 1)
      }
      this.isShowModalDelete = false
    }
  }
}
</script>

<style scoped>
  
  .category__heading {
    margin-right: 1.5rem;
  }
  .category__button {
    padding: 0 20px;
    background-color: rgb(214, 110, 41);
    border: none;
    border-radius: 999px;
    color: #fff;
    transition: .2s all ease;
    cursor: pointer;
    outline: none;
  }
  .category__button:hover {
    background-color: rgb(197, 90, 18);
  }
  table {
    border-collapse: collapse;
    width: 100%;
    margin-bottom: 20px;
  }
  table td, table th {
    text-transform: capitalize;
    border: 1px solid #ddd;
    padding: 8px;
  }
  table td:first-of-type, table td:last-of-type,table td:nth-last-of-type(2) {
    text-align: center;
    transition: .2s color linear;
    cursor: pointer;
  }
  table td:nth-child(2), table td:nth-child(3) {
    max-width: 350px;
    word-break: break-all;
  }
  table td:nth-last-of-type(2):hover {
    color: rgb(3, 189, 3);
  }
  table td:last-of-type:hover {
    color: rgb(224, 0, 0);
  }
</style>