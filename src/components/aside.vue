<template>
    <aside class="aside">
        <ul class="list">
            <li class="list-item" v-for="(section, idx) in sections" :key="idx">
                <router-link class="section-link" :to="section.to">{{  section.title  }}</router-link>
            </li>
        </ul>
    </aside>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    computed: {
        ...mapGetters({
            sections: 'sections'
        })
    }
}
</script>

<style lang="scss" scoped>
    .aside{
        width: 15vw;
        box-shadow: 0 0 5px 0;

        padding-left: 2rem;
        padding-top: 2rem;

        min-height: 100vh;

        background-color: rgba(47, 93, 233, 0.746);

        .list{
            list-style: none;
            padding-inline-start: 0;

            .list-item{
                margin-top: 2rem;

                .section-link{
                    display: inline-block;
                    padding: .5rem 1rem;

                    text-decoration: none;
                    color: white;
                    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
                    font-size: 20px;
                    font-weight: 600;

                    transition: .3s;
                }

                .section-link:hover{
                    box-shadow: 0 0 5px 0;

                    transition: .3s;
                }
            }   
        }
    }
</style>