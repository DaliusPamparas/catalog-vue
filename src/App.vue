<template>

  <div id="app">
    
     <el-alert
      title="Projekt för att lära Vue.js /"
      type="info"
      center
      show-icon id="allertTop" > Har används Router/Sass/Cli3/Vuex/Element ui componenter/</el-alert>

    <el-container>
      <el-header>

        <el-row :gutter="20">
          <el-col :span="4">
            <router-link to="/" id="logoLink">
          <div id="logo">FiNE</div>
        
       
         </router-link>
          </el-col>
          <el-col :span="16">
            <div id="menu">#PRODUKTER</div>
          <div id="menu">#ONE MORE</div>
          <div id="menu">#SOME INFO</div>
         

          </el-col>
           <el-col :span="4">
             <el-button  id="varukorg" icon="el-icon-search" circle></el-button>
              <router-link to="/varukorg">
            <el-badge :value="3" class="item">
  <el-button   icon="el-icon-goods" circle></el-button>
</el-badge>
             
             
            
          </router-link>
             

          </el-col>
</el-row>

      </el-header>
      <el-main>
        <router-view/>
      </el-main>
      <el-footer>
        <Footer></Footer>
      </el-footer>
    </el-container>
 
  </div>
</template>
<script>
  import Footer from '@/components/Footer.vue'
 
  import {mapGetters} from 'vuex'

  export default {
  name: "app",
 
  components: {
    Footer
 }}
</script>

<style>
#allertTop {
  background-color: rgb(249, 234, 250);
  font-size: 0.8em;
  border-radius: 0px;
  padding-left: 160px;
}

@import url("https://fonts.googleapis.com/css?family=Work+Sans:200,700");

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: #2c3e50;
}


#varukorg{
  margin-top: 30px;
  margin-right: 15px;
  

}


#topallertCol {
  padding-right: 0px;
  padding-left: 0px;
}
#header{
  height: 120px;
}
#logo{
  font-family: 'Work sans', sans-serif;
  color: #2c3e50;
  font-size: 2em;
  font-weight: 700;
  padding-left: 30px;
  padding-top: 30px;
  
}
#logoLink{
  text-decoration: none;
}
#menu{
  display: inline-block;
  padding-top: 40px;
  padding-right: 20px;
}
h1{
  font-family: 'Work sans', sans-serif;
  color: #2c3e50;
  font-size: 4em;
  font-weight: 200;
}



</style>
