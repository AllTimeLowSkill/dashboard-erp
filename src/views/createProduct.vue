<template>
  <div>
      <form class="form" @submit.prevent="createProduct({ title, description, price, amount, pricein })">
        <div class="form-controls">
            <label for="" class="label-control">Название товара</label>
            <input v-model="title" type="text" class="input-control">
        </div>
        <div class="form-controls">
            <label for="" class="label-control">Цена товара</label>
            <input v-model="price" type="text" class="input-control">
        </div>
        <div class="form-controls">
            <label for="" class="label-control">Цена закупа товара</label>
            <input v-model="pricein" type="text" class="input-control">
        </div>
        <div class="form-controls">
            <label for="" class="label-control">Количество товара</label>
            <input v-model="amount" type="text" class="input-control">
        </div>
        <div class="form-controls">
            <label for="" class="label-control">Описание товара</label>
            <br>
            <textarea v-model="description" class="textarea-control" name="" id="" cols="130" rows="15"></textarea>
        </div>
        <button class="btn-create" type="submit">Создать товар</button>
      </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    data(){
        return{
            title: '',
            description: '',
            price: 0,
            amount: 0,
            pricein: 0
        }
    },

    methods: {
        ...mapActions({
            fetchCreateProduct: 'fetchCreateProduct'
        }),

        createProduct(data){
            this.fetchCreateProduct(data)
            this.$router.push('/products')
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
    }
</style>