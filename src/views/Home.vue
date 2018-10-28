<template>
  <div class="home">
  
      <el-col>
        <h1>
          Katalog 
        </h1>
      </el-col>
   


   
   
    
    <el-col  :xs="4" :sm="6" :md="8" :lg="8" :xl="8" v-for="(produkt, index) in produkts"  v-bind:key="index">
      
      
       <img :src="produkt.image"   class="prodImage" />
      
        
       
         <span class="prodName">{{produkt.name}}</span>
         <span  class="prodPris">{{produkt.pris}}kr.  <el-button size="small" round class="tillVarukorg">Till varukorg</el-button></span>
       
      
   
    
  </el-col>

 

 

  </div>
</template>

<script>
// @ is an alias to /src
import Footer from '@/components/Footer.vue'
import {mapGetters} from 'vuex'

export default {
  name: "home",
  components: {
    Footer
 },
 computed: {
  ...mapGetters([
      'produkts'
      
    ])
 }
};
</script>
<style>
@import url("https://fonts.googleapis.com/css?family=Work+Sans:200,500,700");
body
{
    font-size: 1em;
    font-family: Arial, Helvetica, sans-serif;
}
h1{
  font-family: 'Work sans', sans-serif;
  color: #394c5e;
  font-size: 4em;
  font-weight: 200;
  margin-top: 20px;
  margin-left: 25px;
  margin-bottom: 30px;
}
.emptyVarukorg{
  font-family: 'Work sans', sans-serif;
  color: #394c5e;
  font-size: 3em;
  font-weight: 300;
  padding-left: 20px;
}
.emptyVarukorgA{
  font-family: 'Work sans', sans-serif;
  color: #9e11a3;
  font-size: 3em;
  font-weight: 300;
   text-decoration: none;
  
  padding-left: 20px;

}
.prodImage{
     width: 100%;
    height: auto;
}
.prodName{
  display: table; margin: 0 auto;
 
  color: #394c5e;
  font-size: 1em;
   margin-bottom: 15px;
}
.prodPris{
  display: table; margin: 0 auto;
 
  color: #697681;
  font-size: 1em;
 

}
.tillVarukorg{
  margin-left: 7px;
}
</style>
