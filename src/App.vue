<template>
  <div id="app">
    <Header/>
    <router-view></router-view>
    <Footer/>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
// import { mapGetters } from 'vuex'

export default {
  name: 'app',
  data() {
	// this.$store.dispatch('loadBlogsList');
	//     return {
	//         allBlogs: '' 
	//     }
		return {

		}
	},
  components: {
    Header,
    Footer,
  },
  computed: {
			// ...mapGetters({
			//     blogs: 'blogs/blogs'
			// })
	}, 
}
</script>

<style>
@font-face {
    font-family: "Sharp Sans No1"; 
    src: url("./assets/fonts/SharpSansNo1-Bold.otf"),
    url("./assets/fonts/SharpSansNo1-Bold.ttf") format("truetype");
    font-weight: bold;
    font-style: normal;
}
@font-face {
    font-family: "Sharp Sans No1"; 
    src: url("./assets/fonts/SharpSansNo1-Medium.otf"),
    url("./assets/fonts/SharpSansNo1-Medium.ttf") format("truetype");
    font-weight: normal;
}
@font-face {
    font-family: "Sharp Sans No1"; 
    src: url("./assets/fonts/SharpSansNo1-BoldItalic.otf"),
    url("./assets/fonts/SharpSansNo1-BoldItalic.ttf") format("truetype");
    font-weight: bold;
    font-style: italic;
}

a {
    text-decoration: none !important;
}
body {
    background: #f1f1f1;
    font-family: 'Sharp Sans No1';
    font-weight: normal;
    overflow-x: hidden;
}
img {
    max-width: 100%;
}
.body {
    background: #f1f1f1;
}
.flexed {
    display: flex;
}

.button {
    padding: 10px 25px;
    border-radius: 3px;
    box-shadow: 0 5px 15px 1px rgba(0, 0, 0, 0.3);
    display: flex;
    cursor: pointer;
    width: 200px;
    height: 78px;
    display: flex;
    justify-content: center;
    align-items: center;
}

a .button {
    color: white;
    font-weight: 300;
}

.pink-button {
    background: #f22359;
}

.pink-button.book {
    font-size: 24px;
    margin-bottom: 50px;
}

.container-fluid.padding-style {
    padding-right: 55px;
    padding-left: 55px;
}
@media (min-width: 1200px) {
    .container {
        max-width: 1200px;
    }
}


</style>
