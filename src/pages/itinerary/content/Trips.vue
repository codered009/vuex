<template>
    <div class="trips-list">
        <div class="container-fluid padding-style">
            <div class="slick-wrapper">
                <slick
                    ref="slick"
                    :options="sliderOptions">
                    <div class="trips-slider-item">
                        <div class="trips-slider-item-image" :style="'background-image:url('+require('../../../assets/Girl-jumping.jpg')+');'"></div>
                        <div class="trips-slider-item-title">Hampta Pass</div>
                    </div>
                    <div class="trips-slider-item">
                        <div class="trips-slider-item-image" :style="'background-image:url('+require('../../../assets/Girl-1.jpg')+');'"></div>
                        <div class="trips-slider-item-title">Sarakundi Pass</div>
                    </div>
                    <div class="trips-slider-item">
                        <div class="trips-slider-item-image" :style="'background-image:url('+require('../../../assets/Right-image.jpg')+');'"></div>
                        <div class="trips-slider-item-title">Chanderkhani Pass Trek</div>
                    </div>
                    <div class="trips-slider-item">
                        <div class="trips-slider-item-image" :style="'background-image:url('+require('../../../assets/Girl-jumping.jpg')+');'"></div>
                        <div class="trips-slider-item-title">Hampta Pass</div>
                    </div>
                    <div class="trips-slider-item">
                        <div class="trips-slider-item-image" :style="'background-image:url('+require('../../../assets/Girl-1.jpg')+');'"></div>
                        <div class="trips-slider-item-title">Sarakundi Pass</div>
                    </div>
                    <div class="trips-slider-item">
                        <div class="trips-slider-item-image" :style="'background-image:url('+require('../../../assets/Right-image.jpg')+');'"></div>
                        <div class="trips-slider-item-title">Chanderkhani Pass Trek</div>
                    </div>
                </slick>
            </div>
        </div>
        <div class="more-trips">
            <a href="#">View Similar Trips</a>
        </div>
    </div>
</template>

<script>
import Slick from 'vue-slick';

export default {
  name: 'trips',
  components: { Slick },
  data() {
    return {
        sliderOptions: {
            slidesToShow: 3,
            dots: false,
            arrows: true,
            infinite: true,
            autoplay: false,
            autoplaySpeed: 6000,
            prevArrow: '<span class="prev-arrow"></span>',
            nextArrow: '<span class="next-arrow"></span>',
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1
                    }
                },
            ]
        }
    }
  }
}
</script>

<style scoped>
.trips-list {
    margin-top: 40px;
}
.trips-slider-item {
    padding: 25px;
    position: relative;
}
.trips-slider-item-image {
    padding-bottom: 86%;
    background-size: cover;
    background-position: center;
}
.trips-slider-item-title {
    position: absolute;
    top: 50px;
    left: 50px;
    padding: 0 15px;
    background: rgba(255, 255, 255, 0.3);
    color: #19216c;
    font-size: 30px;
    text-transform: uppercase;
    font-weight: bold;
    max-width: 80%;
}

.more-trips {
    text-align: center;
    margin-top: 20px;
    padding-bottom: 22px;
}
.more-trips a {
    font-weight: bold;
    font-size: 31px;
    text-decoration: underline !important;
    color: #f22359;
}
.more-trips a:hover {
    text-decoration: none !important;
}
.slick-wrapper {
    margin-left: -25px;
    margin-right: -25px;
    position: relative;
}

/deep/ .prev-arrow, /deep/ .next-arrow {
    position: absolute;
    z-index: 999;
    width: 61px;
    height: 61px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    cursor: pointer;
    top: 50%;
    margin-top: -31px;
}
/deep/ .prev-arrow {
    background-image: url('../../../assets/prev-arrow.png');
    left: 50px;
}
/deep/ .next-arrow {
    background-image: url('../../../assets/next-arrow.png');
    right: 50px;
}

@media (max-width: 1890px) and (min-width: 1200px) {
    .trips-slider-item-title {
        left: 45px;
        top: 45px;
        font-size: 22px;
    }
}
@media (max-width: 1199px) and (min-width: 992px) {
    
}
@media (max-width: 991px) and (min-width: 768px) {
    

}
@media (max-width: 767px) {  
    .trips-slider-item {
        padding: 0;
        position: relative;
    }
    .trips-slider-item-title {
        left: 15px;
        top: 15px;
        font-size: 20px;
    }
}
@media (max-width: 575px) {
    /deep/ .prev-arrow, /deep/ .next-arrow {        
        width: 30px;
        height: 30px;
        margin-top: -15px;
    }
    /deep/ .prev-arrow {
        left: 15px;
    }
    /deep/ .next-arrow {
        right: 15px;
    }
}

</style>
