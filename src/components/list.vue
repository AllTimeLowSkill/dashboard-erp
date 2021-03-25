<template>
 <div>
    <ul class="list">
        <li class="list-item" v-for="(item, idx) in items" :key="idx">
            {{ item.title }}
            <div class="btns">
                <router-link :to="{ path: `${route}/${item._id}` }" class="btn-update">Изменить</router-link>
                <button @click="$emit('delete-item', item._id)" class="btn-delete">&times;</button>
            </div>
        </li>
    </ul>
   
 </div>
</template>

<script>


export default {
    props: {
        items: {
            type: Array,
        },
        route: {
            type: String
        }
    }
}
</script>

<style lang="scss" scoped>
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

        .btn-update{
            text-decoration: none;
            display: inline-block;
            background-color: rgb(248, 182, 60);
            
            color: white;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
            font-weight: 600;
            cursor: pointer;
            margin-right: 1rem;
            
            padding: .5rem;
            
            border: none;
            border-radius: 4px;
        }

        .btn-delete{
            background-color:red;
            
            color: white;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
            font-weight: 600;
            cursor: pointer;
            
            padding: .8rem;
            
            border: none;
            border-radius: 4px;
        }
    }
}


</style>