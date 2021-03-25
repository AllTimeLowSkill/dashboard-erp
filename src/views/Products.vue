<template>
    <div>
        <h2 class="page-title">Товары</h2>
        <List :items="products" @delete-item="deleteItem" :route="route"/>
        <router-link class="btn-create" to="/createproduct">Добавить</router-link>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    data(){
        return{
            route: 'product'
        }
    },
    computed: {
        ...mapGetters({
            products: 'products'
        })
    },

    mounted(){
        this.fetchProducts()
    },

    components: {
        List: () => import('../components/list')
    },

    methods: {
        ...mapActions({
            fetchProducts: 'fetchProducts',
            fetchDeleteProduct: 'fetchDeleteProduct'
        }),

        deleteItem(id){
            this.fetchDeleteProduct(id)
            
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

    .btn-create{
        background-color:rgb(42, 139, 42);
        text-decoration: none;
        color: white;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-weight: 600;
        cursor: pointer;
        
        padding: .5rem;
        
        border: none;
        border-radius: 4px;
    }
</style>