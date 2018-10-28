import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
   
    produkts: [
      {
        id: '00001',
        name: 'Cambridge1',
        pris: 200,
        image: 'https://cdn.shopify.com/s/files/1/0628/2445/products/4252_BT_large.jpg?v=1536090756'

      }, {
        id: '00002',
        name: 'Oslo',
        pris: 250,
        image: 'https://cdn.shopify.com/s/files/1/0628/2445/products/4252_BT_large.jpg?v=1536090756'

      }, {
        id: '00003',
        name: 'Geneva O',
        pris: 300,
        image: 'https://cdn.shopify.com/s/files/1/0628/2445/products/4252_BT_large.jpg?v=1536090756'

      }, {
        id: '00004',
        name: 'Rondo IX',
        pris: 260,
        image: 'https://cdn.shopify.com/s/files/1/0628/2445/products/4252_BT_large.jpg?v=1536090756'

      }, {
        id: '00005',
        name: 'Rondo',
        pris: 270,
        image: 'https://cdn.shopify.com/s/files/1/0628/2445/products/4252_BT_large.jpg?v=1536090756'

      }, {
        id: '00006',
        name: 'Raaaa',
        pris: 220,
        image: 'https://cdn.shopify.com/s/files/1/0628/2445/products/4252_BT_large.jpg?v=1536090756'

      }

    ],
    varukorg: [
      {
        id: '00001',
        name: 'Cambridge1',
        pris: 200,
        image: 'https://cdn.shopify.com/s/files/1/0628/2445/products/4252_BT_large.jpg?v=1536090756',
        antal: 1
      }
    ]
  },
  getters: {
    countProdukts: state => {
      return state.produkts.length
    },
    countProduktsCheckout: state => {
      return state.varukorg.length
    },
    produkts: state => {
      return state.produkts
    },
    varukorg: state => {
      return state.varukorg
    }
  },
  mutations: {
    AddProdukt: (state, produkt) => {
      state.produkts.push(produkt)
    }
  },
  actions: {

  }
})
