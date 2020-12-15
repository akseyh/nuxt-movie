<template>
    <div id="container" v-if="!mobileView">
        <div class="header" :style="`background-image: url(http://image.tmdb.org/t/p/w1920_and_h800_multi_faces/${selectedMovie.backdrop_path})`">
            <div class="custom_bg">
                <div class="single_column">
                    <div class="poster_wrapper">
                        <div class="poster">
                            <div class="image_content">
                                <img :src="`http://image.tmdb.org/t/p/w300_and_h450_bestv2/${selectedMovie.poster_path}`">
                            </div>
                        </div>
                        <div class="ott_offer">
                            <div class="text_wrapper">
                                <div class="button">
                                    <div class="provider">
                                        <img src="https://images.justwatch.com/icon/208857343/s100" width="36" height="36">
                                    </div>
                                    <div class="text">
                                        <span>
                                            <h4>Now Streaming</h4>
                                            <h3>Watch Now</h3>
                                        </span>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div class="header_poster_wrapper">
                        <div class="header_content">
                            <div class="header_content_title">
                                <h2>{{selectedMovie.title}}<span> ({{selectedMovie.release_date ? selectedMovie.release_date.split('-')[0] : '-'}})</span></h2>
                                <div class="facts">
                                    <span class="certification">R</span>
                                    <span class="release">{{dateFormat(selectedMovie.release_date)}} - </span>
                                    <span class="genres">&nbspAction, Fantasy, Science, Fiction - </span>
                                    <span class="runtime">&nbsp{{calcRunTime(selectedMovie.runtime)}}</span>
                                </div>
                            </div>
                            <ul class="actions">
                            </ul>
                            <div class="header_info">
                                <h3 class="tagline">{{selectedMovie.tagline}}</h3>
                                <h3>Overview</h3>
                                <div class="overview">{{selectedMovie.overview}}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="details">
            <div class="details_wrapper">
                <div class="left">
                    <div class="column">
                        <h3>Top Billed Cast</h3>
                        <div class="cast_scroller">
                            <ol>
                                <li v-for="cast in 12" :key="cast.id">
                                    <CastCard 
                                        imageLink="https://image.tmdb.org/t/p/w600_and_h900_bestv2/2RMV9JvFN8KZ4CrikO1BIJYYPwa.jpg"
                                        castName="Nicolas Cage"
                                        characterName="Wylie"/>
                                </li>
                            </ol>
                        </div>
                    </div>
                </div>
                <div class="right">
                    <MovieInfo 
                        :status="selectedMovie.status"
                        :original_language="selectedMovie.original_language"
                        :budget="selectedMovie.budget"
                        :revenue="selectedMovie.revenue"/>
                </div>
            </div>
        </div>
    </div>
    <div v-else id="container-mobile">
        <div class="customer_bg">
            <div class="poster_wrapper">
                <div class="image_content" :style="`background-image: url(http://image.tmdb.org/t/p/w1920_and_h800_multi_faces/${selectedMovie.backdrop_path})`">
                    <img class="poster" :src="`http://image.tmdb.org/t/p/w300_and_h450_bestv2/${selectedMovie.poster_path}`">
                </div>
            </div>
            <div class="header_poster_wrapper">
                <div class="title">
                    <div class="header">
                        <span class="flex items-center"><h2>{{selectedMovie.title}}</h2>&nbsp({{selectedMovie.release_date ? selectedMovie.release_date.split('-')[0] : ''}})</span>
                    </div>
                    <div class="second_header">
                        <ul class="flex">
                        </ul>
                    </div>
                    <div class="genre_wrapper">
                        <div class="facts">
                            <div>
                                <span class="certification">R</span>
                                <span class="release">{{dateFormat(selectedMovie.release_date)}} - </span>
                                <span class="runtime">&nbsp{{calcRunTime(selectedMovie.runtime)}}</span>
                            </div>
                            <span class="genres">Action, Fantasy, Science, Fiction </span>
                        </div>
                    </div>
                </div>
                <div class="header_info">
                    <h3 class="header_tagline">{{selectedMovie.tagline}}</h3>
                    <h3 class="title">Overview</h3>
                    <div class="overview">
                        <p>{{selectedMovie.overview}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
    name: 'movie-detail',
    computed: {
        mobileView() { return this.$store.getters.mobileView },
        ...mapState('movies', [
            'selectedMovie'
        ])
    },
    methods: {
        dateFormat(date) {
            if(!date) return ''
            const [year, month, day] = date.split('-')
            return `${month}/${day}/${year}`
        },
        calcRunTime(min) {
            if(!min) return ''
            let hour = parseInt(min / 60)
            let minutes = parseInt(min % 60)
            if(hour <= 0) return `${minutes}m`
            else if(minutes <= 0) return `${hour}h`
            else return `${hour}h ${minutes}m`
        }
    },
    created() {
        this.$store.dispatch('movies/FETCH_MOVIE_DETAILS', this.$route.params.id)
    },
    destroyed() {
        this.$store.commit('movies/setSelectedMovie', {})
    }
}
</script>

<style lang="sass" scoped>
#container
    width: 100%
    .header
        width: 100%
        height: 571px
        position: relative
        z-index: 1
        border-bottom: 1px solid var(--color-primary)
        background-position: right -200px top
        background-size: cover
        background-repeat: no-repeat
        .custom_bg
            background-image: linear-gradient(to right, rgba(7.45%, 14.51%, 18.04%, 1.00) 150px, rgba(7.45%, 14.51%, 18.04%, 0.84) 100%)
            height: 100%
            width: 100%
            display: flex
            align-items: center
            justify-content: center
            .single_column
                display: flex
                max-width: 1300px
                width: 100%
                height: 100%
                padding-top: 30px
                padding-bottom: 30px
                padding-left: 40px
                padding-right: 40px
                .poster_wrapper
                    height: auto
                    border-width: 0px
                    min-width: 300px
                    width: 300px
                    overflow: hidden
                    border-radius: 8px
                    .poster
                        display: block
                        min-width: 300px
                        width: 300px
                        height: 450px
                        position: relative
                        top: 0
                        left: 0
                        .image_content
                            border-radius: 10px
                            overflow: hidden
                            border-bottom-left-radius: 0
                            border-bottom-right-radius: 0
                    .ott_offer
                        cursor: default
                        color: #fff
                        position: relative
                        top: 0
                        left: 0
                        width: 100%
                        background-color: #032541
                        display: flex
                        justify-content: center
                        align-items: center
                        .text_wrapper
                            width: 100%
                            height: 60px
                            max-height: 60px
                            display: flex
                            align-items: stretch    
                            flex-wrap: wrap
                            .button
                                display: flex
                                justify-content: center
                                width: 100%
                                .provider
                                    display: flex
                                    align-content: center
                                    align-items: center
                                    padding-right: 8px
                                .text
                                    display: flex
                                    flex-wrap: wrap
                                    align-items: center
                                    align-content: center
                                    h3
                                        font-weight: 600
                                    h4
                                        font-weight: 400
                .header_poster_wrapper
                    display: flex
                    .header_content
                        color: white
                        display: flex
                        flex-wrap: wrap
                        align-items: flex-start
                        align-content: center
                        box-sizing: border-box
                        padding-left: 40px
                        .header_content_title
                            width: 100%
                            display: flex
                            flex-direction: column
                            margin-bottom: 24px
                            h2
                                font-size: 2.2rem
                                font-weight: 600
                                span
                                    font-weight: 400
                            .facts
                                display: flex
                                .certification
                                    border: 1px solid rgba(255,255,255,0.6)
                                    color: rgba(255,255,255,0.6)
                                    display: inline-flex
                                    white-space: nowrap
                                    align-items: center
                                    align-content: center
                                    padding: 0.06em 4px 0.15em 4px !important
                                    border: 1px solid rgba(255,255,255,0.6)
                                    line-height: 1
                                    border-radius: 2px
                                    margin-right: 7px
                        .actions
                            margin-bottom: 20px
                            width: 100%
                            height: 68px
                            display: flex
                            align-items: center
                            justify-content: flex-start
                        .header_info
                            .tagline
                                margin-bottom: 0
                                font-size: 1.1em
                                font-weight: 400
                                font-style: italic
                                opacity: 0.7
                            h3
                                margin-top: 10px
                                font-weight: 600
                                font-size: 1.3em
    .details
        width: 100%
        display: flex
        align-items: center
        justify-content: center
        .details_wrapper
            max-width: 1300px
            width: 100vw
            display: flex
            align-items: flex-start
            align-content: flex-start
            padding-left: 40px
            padding-right: 40px
            padding-top: 30px
            padding-bottom: 30px
            .left 
                .column
                    background-color: #fff
                    max-width: 960px
                    width: calc(100vw - 80px - 260px)
                    display: flex
                    flex-direction: column
                    flex-wrap: wrap
                    flex: 0 1 auto
                    padding-right: 30px
                    h3
                        font-weight: 600
                        font-size: 1.4em
                        margin-bottom: 20px
                    .cast_scroller
                        position: relative
                        top: 0
                        left: 0
                        width: 100%
                        ol
                            width: 100%
                            overflow-y: hidden
                            overflow-x: scroll
                            margin-left: -10px
                            margin-top: -10px
                            list-style-type: none
                            list-style-position: inside
                            margin: 0
                            padding: 0
                            display: flex
                            position: relative
                            top: 0
                            left: 0

#container-mobile
    width: 100%
    position: relative
    z-index: 1
    border-bottom: 1px solid grey
    background: linear-gradient(to bottom right, rgba(7.45%, 14.51%, 18.04%, 1.00), rgba(7.45%, 14.51%, 18.04%, 0.84))
    .customer_bg
        display: flex
        justify-content: center
        flex-wrap: wrap
        .poster_wrapper
            box-shadow: none
            width: 100%
            height: auto
            min-width: 100%
            min-height: auto
            .image_content
                background-image: url(//image.tmdb.org/t/p/w1000_and_h450_multi_faces/jeAQdDX9nguP6YOX6QSWKDPkbBo.jpg)
                background-size: cover
                background-repeat: no-repeat
                width: 100%
                min-width: 100%
                height: 100%
                z-index: 4
                .poster
                    border: 20px solid transparent
                    width: 122px
                    min-width: 122px
                    height: auto
                    min-height: 100px
                    border-radius: 8px
        .header_poster_wrapper
            width: 100%
            max-width: 100%
            .header
                width: 100%
                display: flex
                justify-content: center
                align-items: center
                flex-wrap: wrap
                box-sizing: border-box
                padding: 16px 20px
                color: #fff
                h2
                    font-size: calc(0.7em + 3vw)
                    font-weight: 600
            .second_header
                width: 100%
                color: #fff
                min-height: auto
                padding: 0 20px 16px 20px
                box-sizing: border-box
                display: flex
                align-items: center
                justify-content: space-around
            .genre_wrapper
                width: 100%
                color: #fff
                display: flex
                justify-content: center
                align-content: center
                align-items: center
                background-color: rgba(0,0,0,0.1)
                border-top: 1px solid rgba(0,0,0,0.2)
                border-bottom: 1px solid rgba(0,0,0,0.2)
                padding: 10px
                z-index: 0
                .facts
                    display: flex
                    flex-direction: column
                    justify-content: center
                    align-items: center
                    .certification
                        border: 1px solid rgba(255,255,255,0.6)
                        color: rgba(255,255,255,0.6)
                        display: inline-flex
                        white-space: nowrap
                        align-items: center
                        align-content: center
                        padding: 0.06em 4px 0.15em 4px !important
                        border: 1px solid rgba(255,255,255,0.6)
                        line-height: 1
                        border-radius: 2px
                        margin-right: 7px
        .header_info
            padding: 20px
            color: #fff
            .header_tagline
                margin-bottom: 0
                font-size: 1.1em
                font-weight: 400
                font-style: italic
                opacity: 0.7
            .title
                font-weight: 600
                margin: 10px 0 8px 0
                font-size: 1.3em
                .overview
                    p
                        margin-bottom: 30px 

</style>