<template>
    <div id="me-and-thrills">
        <div class="stories">
            <div class="block-title">
                <div>Stories</div>
                <div class="stories-button"><a href="#">View All</a></div>
            </div>

            <div class="stories-slider">
                <slick
                    ref="slick"
                    :options="sliderOptions">
                    <div class="stories-sliders-pages">
                        <div class="stories-sliders-pages-image">
                            <img src="../../assets/myTrips/my-trip-image.png">
                        </div>
                        <div class="stories-sliders-pages-panel">
                            <div class="stories-sliders-pages-avatar">
                                <img src="../../assets/myTrips/my-trip-avatar.png">
                            </div>
                            <div class="stories-sliders-pages-info">
                                <div class="stories-sliders-pages-title">3 Day Trek - What I Learned</div>
                                <div class="stories-sliders-pages-by">By Anna, 04/09/2019</div>
                            </div>
                        </div>
                    </div>
                    <div class="stories-sliders-pages">
                        <div class="stories-sliders-pages-image">
                            <img src="../../assets/myTrips/my-trip-image.png">
                        </div>
                        <div class="stories-sliders-pages-panel">
                            <div class="stories-sliders-pages-avatar">
                                <img src="../../assets/myTrips/my-trip-avatar.png">
                            </div>
                            <div class="stories-sliders-pages-info">
                                <div class="stories-sliders-pages-title">3 Day Trek - What I Learned</div>
                                <div class="stories-sliders-pages-by">By Anna, 04/09/2019</div>
                            </div>
                        </div>
                    </div>
                    <div class="stories-sliders-pages">
                        <div class="stories-sliders-pages-image">
                            <img src="../../assets/myTrips/my-trip-image.png">
                        </div>
                        <div class="stories-sliders-pages-panel">
                            <div class="stories-sliders-pages-avatar">
                                <img src="../../assets/myTrips/my-trip-avatar.png">
                            </div>
                            <div class="stories-sliders-pages-info">
                                <div class="stories-sliders-pages-title">3 Day Trek - What I Learned</div>
                                <div class="stories-sliders-pages-by">By Anna, 04/09/2019</div>
                            </div>
                        </div>
                    </div>
                </slick>
            </div>
        </div>
    </div>
</template>

<script>
import Slick from 'vue-slick';

export default {
  name: 'my-trips',
  components: { Slick },
  data() {
    return {
        sliderOptions: {
            slidesToShow: 1,
            dots: true,
            arrows: false,
            infinite: true,
            speed: 500,
            fade: true,
            cssEase: 'linear',
            autoplay: true
        }
    }
  }
}
</script>

<style scoped>
    
.stories .block-title {
    position: relative;
    font-size: 57px;
    margin-bottom: 25px;
}

.stories {
    margin-left: 46px;
    margin-right: 46px;
    margin-top: 170px;
}

.stories .stories-sliders {
    position: relative;
}

.stories .stories-sliders-pages-avatar img {
    width: 128px;
    height: 128px;
    border-radius: 500px;
    border: #fff 3px solid;
}

.stories .stories-sliders-pages-panel {
    position: absolute;
    bottom: 38px;
    left: 40px;
    right: 30px;
    display: flex;
}

.stories .stories-sliders-pages-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 15px;
    color: #ffffff;
    font-weight: 600;
    padding-bottom: 25px;
}

.stories .stories-sliders-pages-title {
    font-size: 34px;
    font-weight: 700;
}

.stories .stories-sliders-pages-by {
    font-size: 22px;
    font-weight: 400;
}

.stories .stories-button {
    position: absolute;
    color: #f22359;
    font-size: 30px;
    right: 2px;
    bottom: 10px;
}

.stories .stories-button a{
    color: #f22359;
}

.stories .stories-sliders-pages-image img {
    width: 100%;
    max-height: 760px;
}

/deep/ .stories .slick-dots {
    list-style: none;
    padding: 0;
    margin: 0;
    text-align: center;
    margin-top: 18px;
}

/deep/ .stories .slick-dots li {
    background: #19216c;
    border-radius: 150px;
    width: 20px;
    height: 20px;
    margin: 0px 14px;
    display: inline-block;
    cursor: pointer;
}

/deep/ .stories .slick-dots li button {
    display: none;
}

/deep/ .stories .slick-dots li.slick-active {
    background: #f22359;
}

.stories .stories-slider-pages {
    display: flex;
    justify-content: center;
    margin-top: 10px;
}
@media (max-width: 767px) and (min-width: 576px) {
    .stories .stories-button {
        display: none;
    }
    .stories .stories-sliders-pages-title {
        font-size: 30px;
        font-weight: 600;
    }
    .stories .stories-sliders-pages-by {
        font-size: 20px;
        font-weight: 400;
    }
    .stories .block-title {
        font-size: 50px;
    }
    .stories .stories-sliders-pages-avatar img {
        width: 90px;
        height: 90px;
    }

    .stories .stories-sliders-pages-panel {
        bottom: 15px;
        left: 35px;
    }
}
@media (max-width: 575px) {
    .stories {
        margin-left: 15px;
        margin-right: 15px;
    }
    .stories .stories-button {
        display: none;
    }
    .stories .stories-sliders-pages-title {
        font-size: 15px;
        font-weight: 600;
    }
    .stories .stories-sliders-pages-by {
        font-size: 15px;
        font-weight: 400;
    }
    .stories .stories-sliders-pages-avatar img {
        width: 65px;
        height: 65px;
    }
    .stories .stories-sliders-pages-panel {
        bottom: 0px;
        left: 20px;
    }
    .stories-sliders-pages {
        position: relative;
    }
    .stories-sliders-pages-image {
        padding-bottom: 90%;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        background-image: url('../../assets/myTrips/my-trip-image.png');
    }
    .stories-sliders-pages-image img {
        display: none;
    }
}
</style>