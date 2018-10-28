<template>
  <div>
    <b-row>
      <col-b sm="12">
        <h1>Varukorg</h1>
      </col-b>
      
    </b-row>
    <b-row v-if="!countProduktsCheckout">
      <col-b sm="12">

        <span class="emptyVarukorg">Du har inga produkter i varukorgen. </span><br/>
          <router-link to="/" id="logoLink">
          <span class="emptyVarukorgA"> Tillbaka till produkt katalog</span>
         </router-link>
      </col-b>
      
    </b-row>
    <b-row v-else>
      <b-col sm="12">
        <el-table
          :data="tableData"
          style="width: 100%">
      <el-table-column
        prop="produkt"
        label="Produkt"
        width="180">
      </el-table-column>
      <el-table-column
        prop="antal"
        label="Antal"
        width="180">
      </el-table-column>
      <el-table-column
        prop="enhetspris"
        label="Enhetspris"
        width="180">
        
      </el-table-column>
       <el-table-column
        prop="total"
        label="total"
        width="180">
      </el-table-column>
    </el-table>



 
      </b-col>
    </b-row>
  
  </div>
</template>
<script>
// @ is an alias to /src
import Footer from "@/components/Footer.vue";
import { mapGetters } from "vuex";

export default {
  data() {
        return {
          tableData: [{
            produkt: 'Florencia',
            antal: 1,
            enhetspris: 300,
            total: 300
          },
          {
            produkt: 'Florencia3',
            antal: 1,
            enhetspris: 300,
            total: 300
          }]
        }
      },
  name: "varukorg",
  components: {
    Footer
  },
   computed: {
  ...mapGetters([
      'produkts',
      'countProduktsCheckout',
      'varukorg'
      
    ])
 }
  
};
</script>