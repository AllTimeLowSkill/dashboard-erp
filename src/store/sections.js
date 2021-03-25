import vuex from 'vuex'
import vue from 'vue'

const state = () => ({
    sections: [
        {
            title: 'Главная',
            to: '/'
        },
        {
            title: 'Товары',
            to: '/products'
        },
        {
            title: 'Категории',
            to: '/categories'
        },
    ]
})

const getters = {
    sections: ({ sections }) => sections
}

export default {
    state,
    getters
}