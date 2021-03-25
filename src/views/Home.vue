<template>
  <div>
    <h2 class="page-title">Главная</h2>
    <pie-graph class="graph" :data="datag" :options="chartOptions"></pie-graph>
    <ul class="list">
      <li class="list-item" v-for="(sale, idx) in sales" :key="idx">
        <span>{{ sale.date }}</span>
        <span>{{ sale.total }}</span> 
      </li>
    </ul>
    <h2 class="page-title">Доход с продаж за всё время: {{ test }}</h2>
    <line-graph class="lineGraph" :data="datal"></line-graph>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

import PieGraph from '../components/pieGraph'
import LineGraph from '../components/lineGraph'

export default {
  name: 'Home',
  data(){
    return{
      datag: {},
      chartOptions: {
         hoverBorderWidth: 20
      },
      datal: {}
    }
  },
  components: {
    PieGraph,
    LineGraph
  },

  computed: {
    ...mapGetters({
      sales: 'sales',
      products:'products'
    }),

    test(){
      let sumSale = 0
      this.sales.forEach(sale => {
        sumSale += sale.total
      })

      let sumPriceIn = 0
      this.products.forEach(item => {
        sumPriceIn += item.pricein
      })
      return sumSale - sumPriceIn
    }
  },
  
  created(){
    this.fetchSales()
    this.fetchProducts()
    this.dataFetch()
  },

  methods: {
    ...mapActions({
      fetchSales: 'fetchSales',
      fetchProducts: 'fetchProducts'
    }),

    dataFetch(){
      this.datag = {
        hoverBackgroundColor: "red",
        hoverBorderWidth: 10,
        labels: ['Доход', 'Затраты на товары'],
        
        datasets: [
            {
                backgroundColor: ["#41B883", "#E46651"],
                data: [this.income(), this.outcome()]
            }
        ]
      }

      this.datal = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
          {
            label: 'График покупок',
            backgroundColor: '#f87979',
            data: [40, 39, 10, 40, 39, 80, 40]
          }
        ]
      }
    },

    outcome(){
     
      let sumPriceIn = 0
      this.products.forEach(item => {
        sumPriceIn += item.pricein
      })

      return sumPriceIn
    },

    income(){
      
      let sumSale = 0
      this.sales.forEach(sale => {
        sumSale += sale.total
      })
      
      
      let sumPriceIn = 0
      this.products.forEach(item => {
        sumPriceIn += item.pricein
      })

      return sumSale - sumPriceIn
    }
  }
}
</script>

<style lang="scss" scoped>
.page-title{
  color: rgba(47, 93, 233, 0.746);
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight: 600;
}

 .list{
    list-style: none;
    padding-inline-start: 0;

    .list-item{
        display: flex;
        justify-content: space-between;
        align-items: center;

        padding: 1rem 2rem;
        margin-top: 2rem;

        border: 1px solid rgba(47, 93, 233, 0.746);
        border-radius: 4px;
        box-shadow: 0 0 5px 0 rgba(47, 93, 233, 0.746);

        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size: 20px;
        font-weight: 600;
        color: rgba(47, 93, 233, 0.746);
    }
}

.graph{
  width: 450px;
  height: 450px;
}

.lineGraph{
  width: 50vw;
  height: 50vh;
}
</style>
