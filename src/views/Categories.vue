<template>
    <div>
        <h2 class="page-title">Категории товаров</h2>
         <List :items="categories" @delete-item="deleteCategory" :route="route" />
         <router-link class="btn-create" to="/createcategory">Добавить</router-link>
    </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex'
import List from '../components/list'

export default {
    data(){
        return {
            route: 'category'
        }
    },
    computed: {
        ...mapGetters({
            categories: 'categories'
        })
    },

    components: {
        List
    },

    mounted(){
        this.fetchCategories()
    },

    methods: {
        ...mapActions({
            fetchCategories: 'fetchCategories',
            fetchDeleteCategory: 'fetchDeleteCategory'
        }),

        ...mapMutations({
            SET_CATEGORIES: 'SET_CATEGORIES'
        }),

        deleteCategory(id){
            this.fetchDeleteCategory(id)
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