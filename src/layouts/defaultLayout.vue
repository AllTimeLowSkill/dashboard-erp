<template>
    <div class="container">
        <Aside />
        <main class="main">
            <Header />
            <router-view />
        </main>
    </div>
</template>

<script>

export default {
    components: {
        Aside: () => import('../components/aside'),
        Header: () => import('../components/header')

    }
}
</script>

<style lang="scss" scoped>
    .container{
        display: flex;
        min-height: 100vh;

        .main{
            width: 85vw;
            padding: 0 2rem;
        }
    }
</style>