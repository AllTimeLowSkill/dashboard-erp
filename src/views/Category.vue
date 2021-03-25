<template>
  <div>
    <form class="form" @submit.prevent="updateItem({ id: $route.params.id, data: category })">
        <div class="form-controls">
            <label class="label-control" for="">Название товара</label>
            <input class="input-control" v-model="category.title" type="text">
        </div>
        <div class="form-controls">
            <label class="label-control" for="">Описание товара</label>
            <textarea class="textarea-control" v-model="category.description" name="" id="" cols="150" rows="15"></textarea>
        </div>
        <button class="btn-update" type="submit">Изменить категорию</button>
    </form>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    computed: {
        ...mapGetters({
            category: 'category'
        })
    },

    mounted(){
        this.fetchCategory(this.$route.params.id)
    },

    methods: {
        ...mapActions({
            fetchCategory: 'fetchCategory',
            fetchUpdateCategory: 'fetchUpdateCategory'
        }),

        updateItem(id, data){
            this.fetchUpdateCategory(id, data)
            this.$router.push('/categories')
        }
    }
}
</script>

<style lang="scss" scoped>
.form{
        padding: 1rem 2rem;
        border-radius: 6px;
        border: 1px solid rgba(47, 93, 233, 0.746);

        .form-controls{
            margin-bottom: 2rem;
            padding: 1rem 2rem;
            box-shadow: 0 0 5px 0 rgba(47, 93, 233, 0.746);

            .input-control{
                width: 95%;
                padding: .5rem 1rem;
            }

            .label-control{
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
                font-size: 20px;
                color: rgba(47, 93, 233, 0.746);
                font-weight: 600;
            }
        }

        .btn-update{
            background-color:rgb(211, 214, 28);
            text-decoration: none;
            color: white;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
            font-weight: 600;
            cursor: pointer;
            
            padding: .5rem;
            
            border: none;
            border-radius: 4px;
        }
    }
</style>