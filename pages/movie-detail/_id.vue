<template>
    <div id="container">
        <div class="header">
            <div class="custom_bg">
                <div class="single_column">
                    <div class="poster_wrapper">
                        <div class="poster">
                            <div class="image_content">
                                <img src="http://image.tmdb.org/t/p/w300_and_h450_bestv2/eLT8Cu357VOwBVTitkmlDEg32Fs.jpg">
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
                                <h2>Jiu Jitsu<span>(2020)</span></h2>
                                <div class="facts">
                                    <span class="certification">R</span>
                                    <span class="release">11/20/2020 (US) - </span>
                                    <span class="genres">&nbspAction, Fantasy, Science, Fiction - </span>
                                    <span class="runtime">&nbsp1h 42m</span>
                                </div>
                            </div>
                            <ul class="actions">
                                <li>Chart</li>
                                <li>asfd</li>
                                <li>afs</li>
                                <li>asfd</li>
                                <li>asfdasd</li>
                            </ul>
                            <div class="header_info">
                                <h3 class="tagline">From the darkness, the ultimate fighter rises.</h3>
                                <h3>Overview</h3>
                                <div class="overview">
                                    Every six years, an ancient order of jiu-jitsu fighters joins forces to battle a vicious race of alien invaders. But when a celebrated war hero goes down in defeat, the fate of the planet and mankind hangs in the balance.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

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
        background-image: url(//image.tmdb.org/t/p/w1920_and_h800_multi_faces/jeAQdDX9nguP6YOX6QSWKDPkbBo.jpg)
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
                            
                            
</style>