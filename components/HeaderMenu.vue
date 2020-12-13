<template>
    <div class="w-full header-container">
        <div v-if="mobileView" class="content-responsive">
            <div class="w-1/3 flex justify-start">
                <HamburgerMenuIcon class="menu-icon"/>
            </div>
            <NuxtLink to="/" class="w-1/3 flex justify-center">
                <Logo class="logo-responsive" />
            </NuxtLink>
            <div class="w-1/3"></div>
        </div>
        <div v-else class="content">
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
import Logo from '@/assets/LogoIcon'
import HamburgerMenuIcon from '@/assets/HamburgerMenuIcon'
export default {
    name: 'HeaderMenu',
    components: {
        Logo,
        HamburgerMenuIcon
    },
    computed: {
        mobileView() { return this.$store.getters.mobileView }
    }
}
</script>

<style lang="sass" scoped >
.header-container
    width: 100%
    height: 64px
    background: var(--color-primary)
    display: flex
    justify-content: center
    align-items: center

.content
    width: 100vw
    max-width: 1300px
    height: 64px
    display: flex
    align-items: center
    padding: 0 40px

.content-responsive
    width: 100%
    height: 40px
    overflow: hidden
    padding: 0 20px
    display: flex
    align-items: center
    justify-content: center

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

.logo-responsive
    width: 55px
    height: 40px
    cursor: pointer

.menu-icon 
    color: white

</style>