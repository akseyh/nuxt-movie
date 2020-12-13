<template>
    <div class="w-full header-container">
        <div class="content">
            <NuxtLink to="/">
                <Logo class="logo" />
            </NuxtLink>
            <ul class="menu-list">
                <li>
                    <NuxtLink to="/movies">Movies</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="#">TV Shows</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="#">People</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="#">More</NuxtLink>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import Logo from '@/assets/logo'
export default {
    name: 'HeaderMenu',
    components: {Logo}
}
</script>

<style lang="sass" scoped >
.header-container
    width: 100%
    background: var(--color-primary)
    display: flex
    justify-content: center

.content
    width: 100vw
    max-width: 1300px
    height: 64px
    display: flex
    align-items: center
    padding: 0 40px

.menu-list 
    display: flex
    flex-direction: row
    color: white
    li
        margin-right: 14px
        padding: .5rem .5rem
        font-weight: 600

.logo 
    width: 154px
    height: 20px
    margin-right: 16px
    cursor: pointer

</style>