<template>
    <div class="top-page-slider">
        <slick
            ref="slick"
            :options="sliderOptions">
            <div class="banner-body">        
                <div class="banner-content">
                    <div class="banner-content-up">
                        <div class="first">KING OF THE MOUNTAIN<span class="s-char"><img src="../../assets/s.png"></span></div>
                        <div class="second">TOP OF YOUR BUCKET LIST</div>
                    </div>
                    <div class="banner-content-down">
                        CHANDERKHANI PASS TREK
                    </div>
                </div>
            </div>
            <div class="banner-body">        
                <div class="banner-content">
                    <div class="banner-content-up">
                        <div class="first">KING OF THE MOUNTAIN<span class="s-char"><img src="../../assets/s.png"></span></div>
                        <div class="second">TOP OF YOUR BUCKET LIST</div>
                    </div>
                    <div class="banner-content-down">
                        CHANDERKHANI PASS TREK
                    </div>
                </div>
            </div>
            <div class="banner-body">        
                <div class="banner-content">
                    <div class="banner-content-up">
                        <div class="first">KING OF THE MOUNTAIN<span class="s-char"><img src="../../assets/s.png"></span></div>
                        <div class="second">TOP OF YOUR BUCKET LIST</div>
                    </div>
                    <div class="banner-content-down">
                        CHANDERKHANI PASS TREK
                    </div>
                </div>
            </div>
        </slick>
    </div>
</template>

<script>
import Slick from 'vue-slick';

export default {
  name: 'banner',
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

.banner-body {
    background-image: url('../../assets/ItineraryBanner.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    height: 100vh;
    min-height: 1060px;
}
 

.banner-body .banner-content {
    color: #ffffff;
    text-align: justify;
    -moz-text-align-last: justify;
    text-align-last: justify;
    position: relative;
    padding: 280px 0px 0px;
    width: 730px;
    margin: 0 auto;
}


.banner-body .banner-content .banner-content-up  {
    border-bottom: 2px solid #ffffff;
    box-shadow: 0px 5px 10px -10px #222;
}
.banner-body .banner-content .banner-content-up .first {
    font-size: 58px;
}
.banner-body .banner-content .banner-content-up .second {
    font-size: 40px;
    letter-spacing: 8px;
}
.banner-body .banner-content .banner-content-down {
    font-weight: bold;
    font-size: 52px;
    letter-spacing: 2px;
}
.s-char {
    margin-left: 4px;
}
.s-char img {
    width: 28px;
    vertical-align: baseline;
    display: inline-block;
}

/deep/ .slick-dots {
    list-style: none;
    padding: 0;
    margin: 0;
    text-align: center;
    position: absolute;
    bottom: 55px;
    width: 100%;
}

/deep/ .slick-dots li {
    background: #f1f1f1;
    border-radius: 100%;
    width: 25px;
    height: 25px;
    margin: 0px 15px;
    display: inline-block;
    cursor: pointer;
}

/deep/ .slick-dots li button {
    display: none;
}

/deep/ .slick-dots li.slick-active {
    background: #f22359;
}

@media (max-width: 1890px) and (min-width: 1200px) {
    .banner-body {
        min-height: 680px;
    }
}
@media (max-width: 1199px) and (min-width: 992px) {
    .banner-body {
        min-height: 600px;
    }
    .banner-body .banner-content {
        padding-top: 200px;
    }
}
@media (max-width: 991px) and (min-width: 768px) {
    .banner-body {
        min-height: 600px;
    }
    .banner-body .banner-content {
        padding-top: 200px;
        width: 480px;
    }
    .banner-body .banner-content .banner-content-up .first {
        font-size: 38px;
    }
    .banner-body .banner-content .banner-content-up .second {
        font-size: 25px;
        letter-spacing: 4px;
    }
    .banner-body .banner-content .banner-content-down {
        font-weight: bold;
        font-size: 32px;
    }
    .s-char {
        margin-left: 3px;
    }
    .s-char img {
        width: 20px;
    }
}
@media (max-width: 767px) {  
    .banner-body {
        min-height: 800px;
    }
    .banner-body .banner-content {
        padding-top: 400px;
        width: 520px;
    }
    .banner-body .banner-content .banner-content-up .first {
        font-size: 40px;
    }
    .banner-body .banner-content .banner-content-up .second {
        font-size: 32px;
        letter-spacing: 4px;
    }
    .banner-body .banner-content .banner-content-down {
        font-weight: bold;
        font-size: 34px;
    }
    .s-char {
        margin-left: 3px;
    }
    .s-char img {
        width: 20px;
    }
}
@media (max-width: 575px) {
    .banner-body {
        min-height: 600px;
    }
    .banner-body .banner-content {
        padding-top: 300px;
        width: 300px;
    }
    .banner-body .banner-content .banner-content-up .first {
        font-size: 22px;
    }
    .s-char {
        margin-left: 2px;
    }
    .s-char img {
        width: 12px;
    }
    .banner-body .banner-content .banner-content-up .second {
        font-size: 16px;
        letter-spacing: 3px;
    }
    .banner-body .banner-content .banner-content-down {
        font-weight: bold;
        font-size: 18px;
    }
}

</style>
