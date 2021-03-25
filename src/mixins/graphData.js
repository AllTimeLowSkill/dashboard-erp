export default {
    data(){
        return{
            chartOptions: {
                hoverBorderWidth: 20
            },
            chartData: {
                hoverBackgroundColor: "red",
                hoverBorderWidth: 10,
                labels: ['Доход', 'Затраты на товары'],
                
                datasets: [
                    {
                        backgroundColor: ["#41B883", "#E46651"],
                        data: [this.testM(), 570]
                    }
                ]
            }
        }
    },


    methods: {

        testM(){
            // console.log(this.sales)
            // let sumSale = 0
            // this.sales.forEach(sale => {
            //     sumSale += sale.total
            // })

            // let sumPriceIn = 0
            // this.products.forEach(item => {
            //     sumPriceIn += item.pricein
            // })

            // const res = sumSale - sumPriceIn
            
            return 2330
        }
    }
}