<template>
  <div class="admin">
    <div class="sidebar">
      <a href="/" class="admin__logo">
        <img src="../../assets/now-logo.png" alt="" />
      </a>
      <div class="sidebar__features">
        <ul>
          <li v-for="(link,index) in links" :key="index" :class="{ active: isActive === link.id}" @click="changeIndex(index)">
            <span>
              <router-link :to="link.redirect" v-html="link.content">
              </router-link>
            </span>
          </li>
        </ul>
      </div>
    </div>
    <section>
      <div class="section__heading">
        <div class="section__header">
          <h1 class="section__title">DASHBOARD PANEL</h1>
        </div>
        <div class="section__logout">
          <div class="section__plus" @click="logOut">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="#fff"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.51428 20H4.51428C3.40971 20 2.51428 19.1046 2.51428 18V6C2.51428 4.89543 3.40971 4 4.51428 4H8.51428V6H4.51428V18H8.51428V20Z"
                fill="#fff"
              />
              <path
                d="M13.8418 17.385L15.262 15.9768L11.3428 12.0242L20.4857 12.0242C21.038 12.0242 21.4857 11.5765 21.4857 11.0242C21.4857 10.4719 21.038 10.0242 20.4857 10.0242L11.3236 10.0242L15.304 6.0774L13.8958 4.6572L7.5049 10.9941L13.8418 17.385Z"
                fill="#fff"
              />
            </svg>
          </div>
        </div>
      </div>
      <div class="section__banner" v-show="isShowImg">
        <img src="../../assets/bg.svg" alt="">
      </div>
      <div class="section__content">
        <router-view></router-view>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Admin",
  data() {
    return {
      links: [
        {'id': 0, 'redirect': '/admin/category','content': '<svg style="margin-right:20px" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 6C8.68629 6 6 8.68629 6 12H1C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23V18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6Z" fill="currentColor" /><path d="M7 18V13H12V18H7Z" fill="currentColor" /><path d="M3 18V22H7V18H3Z" fill="currentColor" /><path d="M3 18H1V16H3V18Z" fill="currentColor" /></svg>Category'},
        {'id': 1, 'redirect': '/admin/supplier','content': '<svg style="margin-right:20px" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" > <path d="M10.5445 19C14.4105 19 17.5445 15.866 17.5445 12C17.5445 8.13401 14.4105 5 10.5445 5C8.61148 5 6.86148 5.7835 5.59473 7.05025L3.47343 4.92896L3.45544 4.94694C5.26649 3.12672 7.7739 2 10.5445 2C16.0673 2 20.5445 6.47715 20.5445 12C20.5445 17.5228 16.0673 22 10.5445 22C7.78307 22 5.28308 20.8807 3.47343 19.0711L5.59475 16.9498C6.8615 18.2165 8.61149 19 10.5445 19Z" fill="currentColor" /> <path d="M10.5445 14C11.1376 14 11.6704 13.7418 12.0367 13.3317L14.1594 15.4544C13.249 16.4068 11.966 17 10.5445 17C7.78305 17 5.54447 14.7614 5.54447 12C5.54447 9.23858 7.78305 7 10.5445 7C11.966 7 13.249 7.59323 14.1594 8.54563L12.0367 10.6683C11.6704 10.2582 11.1376 10 10.5445 10C9.4399 10 8.54447 10.8954 8.54447 12C8.54447 13.1046 9.4399 14 10.5445 14Z" fill="currentColor" /></svg>Supplier'},
        {'id': 2, 'redirect': '/admin/product','content': '<svg style="margin-right:20px" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2 12C2 6.47715 6.47715 2 12 2V4H20V12H22C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM18 12H16V8H12V6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18C15.3137 18 18 15.3137 18 12Z" fill="currentColor" /></svg>Product'},
        {'id': 3, 'redirect': '/admin/shop','content': '<svg style="margin-right:20px" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.03509 12.9431C3.24245 14.9227 4.10472 16.8468 5.62188 18.364C7.13904 19.8811 9.0631 20.7434 11.0428 20.9508L3.03509 12.9431Z" fill="currentColor" /><path d="M3 11.4938L12.4921 20.9858C13.2976 20.9407 14.0981 20.7879 14.8704 20.5273L3.4585 9.11548C3.19793 9.88771 3.0451 10.6883 3 11.4938Z" fill="currentColor" /><path d="M3.86722 8.10999L15.8758 20.1186C16.4988 19.8201 17.0946 19.4458 17.6493 18.9956L4.99021 6.33659C4.54006 6.89125 4.16573 7.487 3.86722 8.10999Z" fill="currentColor" /><path d="M5.66301 5.59517C9.18091 2.12137 14.8488 2.135 18.3498 5.63604C21.8508 9.13708 21.8645 14.8049 18.3907 18.3228L5.66301 5.59517Z" fill="currentColor" /></svg>Shop'},
      ],
      isActive: null,
      isShowImg: true
    };
  },
  mounted() {
    const token = localStorage.getItem("token");
    if (!token) {
      this.$router.push({ path: "/login" });
    }

  },
  beforeUpdate () {
    let content = document.querySelector('.section__content')
    if ( content.children.length > 0) {
      this.isShowImg = false
    }
  },
  methods: {
    logOut() {
      localStorage.setItem("token", "");
      this.$router.push({ path: "/login" });
    },
    changeIndex (e) {
      this.isActive = e
    }
  },
};
</script>

<style scoped>
a {
  display: flex;
  align-items: center;
  color: rgb(216, 216, 216);
  font-weight: 700;
  text-decoration: none;
  transition: .2s all linear;
}
ul a:hover {
  color: #ffffff;
  background-color: hsla(0, 0%, 6%, 0.271);
}
.active {
  border-left: 2px solid #fff;
  background-color: hsla(0, 0%, 6%, 0.271);
}
.active a {
  color: #fff;

}
.active  a {
  padding-left: 40px !important;
}
.sidebar__features a {
  padding-left: 30px;
  padding-top: 15px;
  padding-bottom: 15px;
  padding-right: 10px;
}
.admin {
  display: block;
  position: relative;
  min-height: 100vh;
}
.admin__logo {
  display: block;
  margin-top: 30px;
  margin-bottom: 30px;
  text-align: center;
}
.admin__logo img {
  height: 200px;
}
.sidebar {
  height: 100vh;
  max-height: 100%;
  width: 300px;
  max-width: 400px;
  background-color: rgb(207, 86, 6);
  position: fixed;
  top: 0;
}
section {
  color: #282d5b;
  max-width: 100%;
  margin-left: 300px;
  min-height: 100vh;
  padding-left: 50px;
  padding-top: 30px;
  padding-right: 50px;
}
.section__heading {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
}
.section__title {
  font-size: 35px;
  font-weight: 900;
}
.section__logout {
  width: 50px;
  height: 50px;
  background-color: rgb(207, 86, 6);
  border-radius: 999px;
  position: relative;
  transition: 0.2s all cubic-bezier(0.85, 0.03, 0.51, 1.04);
}
.section__logout:hover {
  width: 200px;
}
.section__logout::before {
  content: "Log Out";
  position: absolute;
  white-space: nowrap;
  color: #fff;
  font-weight: 700;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -56%);
  margin-left: -20px;
  z-index: 99;
  opacity: 0;
  visibility: hidden;
}
.section__logout:hover.section__logout::before {
  transition: 0.4s all cubic-bezier(0.91, 0.03, 0, 0.99);
  opacity: 1;
  visibility: visible;
}
.section__plus {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 40px;
  background: rgb(255 255 255 / 20%);
  border-radius: 50%;
  position: absolute;
  right: 5px;
  top: 5px;
  cursor: pointer;
}
.section__plus:hover {
  background: rgb(255 255 255 / 10%);
}
.section__banner {
    text-align: center;
}
</style>
