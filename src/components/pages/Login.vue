<template>
  <main>
    <!-- <form class="login" action="/admin"> -->
    <form class="login" @submit.prevent="checkForm">
      <div class="login__logo">
        <img src="../../assets/now-logo.png" alt="" width="65px" />
      </div>
      <div class="login__body">
        <div class="login__user">
          <label @click="trimValue" v-if="user.email != ''">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="#a7a4a3"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.2253 4.81108C5.83477 4.42056 5.20161 4.42056 4.81108 4.81108C4.42056 5.20161 4.42056 5.83477 4.81108 6.2253L10.5858 12L4.81114 17.7747C4.42062 18.1652 4.42062 18.7984 4.81114 19.1889C5.20167 19.5794 5.83483 19.5794 6.22535 19.1889L12 13.4142L17.7747 19.1889C18.1652 19.5794 18.7984 19.5794 19.1889 19.1889C19.5794 18.7984 19.5794 18.1652 19.1889 17.7747L13.4142 12L19.189 6.2253C19.5795 5.83477 19.5795 5.20161 19.189 4.81108C18.7985 4.42056 18.1653 4.42056 17.7748 4.81108L12 10.5858L6.2253 4.81108Z"
                fill="#a7a4a3"
              />
            </svg>
          </label>

          <input
            type="email"
            placeholder="Username"
            autocomplete="off"
            class="input__user"
            v-model="user.email"
          />
          <span>
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="#a7a4a3"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M16 9C16 11.2091 14.2091 13 12 13C9.79086 13 8 11.2091 8 9C8 6.79086 9.79086 5 12 5C14.2091 5 16 6.79086 16 9ZM14 9C14 10.1046 13.1046 11 12 11C10.8954 11 10 10.1046 10 9C10 7.89543 10.8954 7 12 7C13.1046 7 14 7.89543 14 9Z"
                fill="#a7a4a3"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1ZM3 12C3 14.0902 3.71255 16.014 4.90798 17.5417C6.55245 15.3889 9.14627 14 12.0645 14C14.9448 14 17.5092 15.3531 19.1565 17.4583C20.313 15.9443 21 14.0524 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12ZM12 21C9.84977 21 7.87565 20.2459 6.32767 18.9878C7.59352 17.1812 9.69106 16 12.0645 16C14.4084 16 16.4833 17.1521 17.7538 18.9209C16.1939 20.2191 14.1881 21 12 21Z"
                fill="#a7a4a3"
              />
            </svg>
          </span>
        </div>
        <div class="login__password">
          <input
            type="checkbox"
            id="show-password"
            class="show-password input__password"
          />
          <label for="show-password" @click="changeTypePwd" v-if="user.pwd">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
              width="20"
              height="20"
              class="svg-toggle-password"
            >
              <path
                d="M24,9A23.654,23.654,0,0,0,2,24a23.633,23.633,0,0,0,44,0A23.643,23.643,0,0,0,24,9Zm0,25A10,10,0,1,1,34,24,10,10,0,0,1,24,34Zm0-16a6,6,0,1,0,6,6A6,6,0,0,0,24,18Z"
              />
              <rect
                x="20.133"
                y="2.117"
                height="44"
                transform="translate(23.536 -8.587) rotate(45)"
                class="closed-eye"
              />
              <rect
                x="22"
                y="3.984"
                width="4"
                height="44"
                transform="translate(25.403 -9.36) rotate(45)"
                style="fill:#fff"
                class="closed-eye"
              />
            </svg>
          </label>
          <input
            type="password"
            placeholder="Password"
            autocomplete="off"
            v-model="user.pwd"
          />
          <span>
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="#a7a4a3"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M13 12.8293C14.1652 12.4175 15 11.3062 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.3062 9.83481 12.4175 11 12.8293V16C11 16.5523 11.4477 17 12 17C12.5523 17 13 16.5523 13 16V12.8293ZM11 10C11 10.5523 11.4477 11 12 11C12.5523 11 13 10.5523 13 10C13 9.44772 12.5523 9 12 9C11.4477 9 11 9.44772 11 10Z"
                fill="#a7a4a3"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12Z"
                fill="#a7a4a3"
              />
            </svg>
          </span>
        </div>
      </div>
      <div class="login__submit">
        <button type="submit" @click="username">Login</button>
      </div>
    </form>
    <div class="sign">
      © 2021 <a href="https://fb.com/hiepga6719" target="_blank">Kid1z</a>
    </div>
  </main>
</template>

<script>
import firebase from 'firebase/app'
export default {
  name: "Login",
  data() {
    return {
      user : {
        email: "",
        pwd: ""
      },
      checkShow: false,
    };
  },
  methods: {
    trimValue() {
      this.user.email = "";
    },
    changeTypePwd() {
      this.checkShow = !this.checkShow;
      const input = document.querySelectorAll("input")[2];
      if (this.checkShow) {
        input.setAttribute("type", "text");
      } else input.setAttribute("type", "password");
    },
    checkForm () {
      firebase.auth().signInWithEmailAndPassword(this.user.email, this.user.pwd)
      .then( (user) => {
        localStorage.setItem("token", "loi");
        // this.$router.push({ name: "Admin" });
        this.$router.replace({ name: "Admin" });
        this.$route.params.pathMatch; 
        alert('success ' + user)
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorCode,errorMessage)
      })
    },
    username() {
      // localStorage.setItem("token", "loi");
      // this.$router.push({ name: "Admin" });
      // this.$route.params.pathMatch;
      // console.log(this.user)
    },
  },
};
</script>

<style scoped>
  ::placeholder {
    color: #ffffff;
    opacity: 0.8;
  }
  main {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    width: 100%;
    background-image: url("../../assets/bg19.jpg");
    background-repeat: no-repeat;
    background-position: right center;
    background-size: cover;
  }
  main::before {
    position: absolute;
    z-index: 0;
    width: 100%;
    height: 100%;
    display: block;
    left: 0;
    top: 0;
    content: "";
  }
  main::before {
    background-color: rgba(0, 0, 0, 0.7);
  }
  .login {
    /* width: calc(100% / 3); */
    margin: 0 auto;
    width: 310px;
    position: relative;
    z-index: 1;
  }
  .login__logo {
    text-align: center;
    margin-bottom: 60px;
  }
  .login__user,
  .login__password {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row-reverse;
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 999px;
    margin-bottom: 10px;
  }
  .login__password {
    margin-bottom: 40px;
  }
  span {
    padding-left: 17px;
    /* transform: scale(0.8); */
    height: 52px;
    display: flex;
    align-items: center;
    border-top-left-radius: 999px;
    border-bottom-left-radius: 999px;
    transition: 0.2s background-color ease;
  }

  input {
    width: 100%;
    background: transparent;
    border: none;
    outline: none;
    padding-top: 16px;
    padding-bottom: 16px;
    padding-left: 19px;
    padding-right: 35px;
    color: #fff;
    border-top-right-radius: 999px;
    border-bottom-right-radius: 999px;
    transition: 0.2s background-color ease;
  }
  input:focus {
    background-color: rgba(255, 255, 255, 0.2);
  }
  input:focus + span {
    background-color: rgba(255, 255, 255, 0.2);
  }
  button {
    width: 100%;
    padding: 15px 48px;
    background-color: #f96332;
    color: #ffffff;
    border: 0;
    border-radius: 999px;
    cursor: pointer;
    outline: 0;
    transition: 0.2s background-color linear;
  }
  button:hover {
    box-shadow: 0 3px 8px 0 rgba(0, 0, 0, 0.17);
    background-color: #df4917;
  }
  .sign {
    position: absolute;
    bottom: 30px;
    right: 50px;
    color: #fff;
    font-size: 14px;
  }
  .sign a {
    text-decoration: none;
    color: #f96332;
  }
  .sign a:hover {
    text-decoration: underline;
  }
  .show-password {
    display: none;
  }
  .show-password:checked ~ label .svg-toggle-password .closed-eye {
    opacity: 1;
    transition: opacity 300ms ease, height 400ms ease;
    width: 4px;
    height: 44px;
  }
  label {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
    position: absolute;
    right: 0;
  }
  svg.svg-toggle-password {
    fill: #a7a4a3;
  }
  svg.svg-toggle-password .closed-eye {
    opacity: 0;
    height: 0;
  }
</style>
