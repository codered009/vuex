<template>
    <div>
        <slick
            ref="slick"
            :options="topSliderOptions">
            <div class="slider-body">
                <div class="container">
                    <div class="slider-content">
                        <div class="slider-content-up">
                            <div>Off to the mountain <!-- <img src="../../assets/s.png"> --></div>
                            <div>Is the new Luxury</div>
                        </div>
                        <div class="slider-content-down">
                            <div><img src="../../assets/logo-02.png"></div>
                        </div>
                    </div>
                    <div class="slider-go">                    
                        <div class="wrap-input" @click="$refs.modal.show()">
                            <input type="text" disabled name="search" class="search-block" placeholder="Search Royal"><span><img src="../../assets/search-icon.png"></span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="slider-body">
                <div class="container">
                    <div class="slider-content">
                        <div class="slider-content-up">
                            <div>Off to the mountain <!-- <img src="../../assets/s.png"> --></div>
                            <div>Is the new Luxury</div>
                        </div>
                        <div class="slider-content-down">
                            <div><img src="../../assets/logo-02.png"></div>
                        </div>
                    </div>
                    <div class="slider-go">                    
                        <div class="wrap-input" @click="$refs.modal.show()">
                            <input type="text" disabled name="search" class="search-block" placeholder="Search Royal"><span><img src="../../assets/search-icon.png"></span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="slider-body">
                <div class="container">
                    <div class="slider-content">
                        <div class="slider-content-up">
                            <div>Off to the mountain <!-- <img src="../../assets/s.png"> --></div>
                            <div>Is the new Luxury</div>
                        </div>
                        <div class="slider-content-down">
                            <div><img src="../../assets/logo-02.png"></div>
                        </div>
                    </div>
                    <div class="slider-go">                    
                        <div class="wrap-input" @click="$refs.modal.show()">
                            <input type="text" disabled name="search" class="search-block" placeholder="Search Royal"><span><img src="../../assets/search-icon.png"></span>
                        </div>
                    </div>
                </div>
            </div>
        </slick>

        <Modal ref="modal" :title="'Search'"><div class="search-wrapper"><input class="search-input form-control"></div></Modal>

        <div class="block-for-you">
            <div class="">
                <h2>FOR YOU</h2>
                <div class="text">Always clean packaged water</div>
                <div class="slider-for-you">
                    <div class="for-you-slider-container">
                        <slick
                            ref="slick2"
                            :options="forYouSliderOptions">
                            <div class="for-you-slider-item">
                                <div class="wrap-col">
                                    <div class="col-md-6 left">
                                        <div class="left-content">
<div class="for-you-image" :style="'background-image:url(https://royal-data-bucket.s3.amazonaws.com/'+ blogs[0].detail_url +')'"></div>
                                            <div class="title">{{blogs[0].title}}</div>
                                        </div>
                                    </div>
                                    <div class="col-md-6 d-flex right">
                                        <div class="right-content">
                                            <div class="title">Chanderkhani Pass Trek</div>
                                            <p>High altitude trekking for the first time HimaLayan trekker.</p>
                                            <div class="moderate">MODERATE | 7 DAYS | 14000 FT</div>
                                            <div class="usd">USD</div>
                                            <div class="price"><span>$</span> 1008</div>
                                            <div class="btn-go-royal"><a href="#">Go Royal</a></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="for-you-slider-item">
                                <div class="wrap-col">
                                    <div class="col-md-6 left">
                                        <div class="left-content">
                                            <div class="for-you-image" :style="'background-image:url('+require('../../assets/slider-for-you.jpg')+')'"></div>
                                            <div class="title">Chanderkhani Pass Trek</div>
                                        </div>
                                    </div>
                                    <div class="col-md-6 d-flex right">
                                        <div class="right-content">
                                            <div class="title">Chanderkhani Pass Trek</div>
                                            <p>High altitude trekking for the first time HimaLayan trekker.</p>
                                            <div class="moderate">MODERATE | 7 DAYS | 14000 FT</div>
                                            <div class="usd">USD</div>
                                            <div class="price"><span>$</span> 1008</div>
                                            <div class="btn-go-royal"><a href="#">Go Royal</a></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="for-you-slider-item">
                                <div class="wrap-col">
                                    <div class="col-md-6 left">
                                        <div class="left-content">
                                            <div class="for-you-image" :style="'background-image:url('+require('../../assets/slider-for-you.jpg')+')'"></div>
                                            <div class="title">Chanderkhani Pass Trek</div>
                                        </div>
                                    </div>
                                    <div class="col-md-6 d-flex right">
                                        <div class="right-content">
                                            <div class="title">Chanderkhani Pass Trek</div>
                                            <p>High altitude trekking for the first time HimaLayan trekker.</p>
                                            <div class="moderate">MODERATE | 7 DAYS | 14000 FT</div>
                                            <div class="usd">USD</div>
                                            <div class="price"><span>$</span> 1008</div>
                                            <div class="btn-go-royal"><a href="#">Go Royal</a></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </slick>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Slick from 'vue-slick'
import Modal from '../../components/modal'

export default {
  name: 'promo',
  components: {
    Slick, Modal
  },
  props: {
    blogs: Array
  },
  data() {
    return {
        topSliderOptions: {
            slidesToShow: 1,
            dots: true,
            arrows: false,
            infinite: true,
            speed: 500,
            fade: true,
            cssEase: 'linear',
            autoplay: true
        },
        forYouSliderOptions: {
            slidesToShow: 1,
            dots: false,
            arrows: true,
            infinite: true,
            speed: 500,
            centerMode: true,
            centerPadding: '60px',
            prevArrow: '<span class="prev-arrow"></span>',
            nextArrow: '<span class="next-arrow"></span>',
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        centerMode: false,
                    }
                },
            ]
        }
    }
  }
}
</script>

<style scoped>

.slider-body {
    background-image: url('../../assets/Banner.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    height: 100vh;
    min-height: 1060px;
}

.slider-body .slider-background {
    width: 100%;
    min-height: 150px;
}

.slider-body .slider-content {
    color: #ffffff;
    font-size: 25px;
    display: inline-block;
    background-image: url('../../assets/shadow.png');
    background-position: 50% 115%;;
    background-repeat: no-repeat;
    position: relative;
    padding: 375px 55px 0;
}

.slider-content .slider-content-down {
    border-top: #ffffff 2px solid;
    width: 100%;
}

.slider-body .slider-go {
    padding: 220px 60px 80px;
    display: flex;
    justify-content: center;
}
.slider-body .slider-go .wrap-input {
    position: relative;
}

.slider-body .slider-content-up div:first-child {
    font-size: 49px;
    text-transform: uppercase;
    position: relative;
}
.slider-body .slider-content-up div:first-child:after {
    position: absolute;
    content: url(../../assets/s.png);
    top: 0px;
    right: 14px;
}

.slider-body .slider-content-up div:last-child {
    font-size: 34px;
    letter-spacing: 16.5px;
    text-transform: uppercase;
}

.slider-body .slider-content-down div {
    padding-top: 20px;
}
.button {
    width: 220px;
    box-shadow: 0px 4px 8px 0px rgba(5, 11, 63, 0.7);
    height: 100%;
    font-size: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.block-for-you h2 {
    text-align: center;
    color: #f22359;
    font-weight: bold;
    font-size: 65px;
    margin-bottom: 0;
    padding-top: 160px;
}
.block-for-you .text {
    font-weight: bold;
    font-style: italic;
    font-size: 40px;
    color: #585858;
    padding-top: 30px;
    text-align: center;
    padding-bottom: 65px;
}
.left-content {
    position: relative;    
}
.for-you-image {
    padding-bottom: 86.32%;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
}
.left-content .title {
    position: absolute;
    left: 35px;
    top: 35px;
    font-size: 45px;
    color: #19216c;
    text-transform: uppercase;
    font-weight: bold;
    padding: 5px 15px;
    background-color: rgba(255, 255, 255, 0.6);
}

.for-you-slider-container {
    padding-right: 0;
    height: 100%;
}
.slider-for-you {
    background-color: #f22359;
}
.right-content {
    padding: 0px 40px 0px 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: #fff;
}
.right-content .title {
    font-weight: bold;
    font-size: 50px;
    padding-bottom: 40px;
}
.right-content p {
    font-size: 40px;
    padding-bottom: 50px;
} 
.right-content .moderate {
    font-size: 35px;
    padding-bottom: 30px;
    font-weight: bold;
}
.right-content .usd {
    font-size: 19px;
    font-weight: bold;
}
.right-content .price {
    font-size: 30px;
    font-weight: bold;
}
.right-content .price span {
    font-size: 20px;
}
.search-block {
    width: 600px;
    height: 78px;
    background-color: rgba(0, 0, 0, 0.75);
    border: none;
    padding: 25px 30px;
    font-size: 24px;
    position: relative;
    color: #fff;
}
.search-block::-webkit-input-placeholder {color: #fff;}
.search-block:-ms-input-placeholder {color: #fff;}
.search-block::placeholder { color: #fff;}
.slider-body .slider-go .wrap-input span {
    position: absolute;
    content: '';
    width: 40px;
    height: 40px;
    top: 30%;
    right: 30px;
}
.btn-go-royal {
    font-size: 30px;
    color: #f22359;
    width: 200px;
    height: 78px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f1f1f1;
    border-radius: 3px;
    box-shadow: 1px 6px 16px 0px rgba(0, 0, 0, 0.27);
    cursor: pointer;
    margin-top: 40px;
}
.btn-go-royal a {
    color: #f22359;
}
.wrap-col {
    display: flex;
    position: relative;
}
.wrap-col .left {
    flex: 0 0 53%;
    max-width: 53%;
    padding-left: 30px;
}
.wrap-col .right {
    flex: 0 0 47%;
    max-width: 47%;
}
.for-you-slider-item {
    padding: 60px 0px;
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
/deep/ .slick-initialized.slick-slider {
    position: relative;
    height: 100%;
}
/deep/ .prev-arrow, /deep/ .next-arrow  {
    height: 70px;
    display: block;
    position: absolute;
    width: 36px;
    cursor: pointer;
    top: 50%;
    z-index: 9999;
    background-repeat: no-repeat;
    background-size: contain;
}
/deep/ .prev-arrow {
    background-image: url(../../assets/arrow.png);
    left: 1%;
}
/deep/ .next-arrow {
    background-image: url(../../assets/arrow.png);
    right: 4%;
    transform: scaleX(-1);
}
/deep/ .slick-slide {
    opacity: 0.53;
}
/deep/ .slick-slide.slick-active {
    opacity: 1;
}
@media (max-width: 1890px) and (min-width: 1200px) {
    .slider-body {
        min-height: 700px;
    }
    .slider-body .slider-content {
        padding-top: 200px;
    }

    .slider-body .slider-go {
        padding-top: 120px;
    }
    .left-content .title {
        font-size: 35px;
    }
    .right-content .title {
        font-weight: bold;
        font-size: 35px;
        padding-bottom: 20px;
        line-height: 1.2;
    }
    .right-content p {
        font-size: 26px;
        padding-bottom: 20px;
    }
    .right-content .moderate {
        font-size: 20px;
        padding-bottom: 20px;
    }
}
@media (max-width: 1199px) and (min-width: 992px) {
    .slider-body .slider-content-up div:first-child {
        font-size: 31px;
    }
    .slider-body .slider-content-up div:last-child {
        font-size: 21px;
        letter-spacing: 11.5px;
    }
    .slider-content .slider-content-down {
        width: 65%;
    }
    .slider-body .slider-content-up div:first-child:after {
        position: absolute;
        content: '';
        background-image: url(/img/s.cf42daa7.png);
        background-repeat: no-repeat;
        background-size: 68%;
        top: 12px;
        right: 217px;
        height: 36px;
        width: 24px;
    }
    .slider-body {
        min-height: 650px;
    }
    .slider-body .slider-content {
        padding-top: 190px;
    }

    .slider-body .slider-go {
        padding-top: 115px;
    }
    .button {
        width: 180px;
    }
    /deep/ .prev-arrow, /deep/ .next-arrow {
        height: 50px;
    }
    .right-content .moderate, .right-content p {
        font-size: 16px;
        padding-bottom: 15px;
    }
    .right-content .title {
        font-size: 26px;
        padding-bottom: 15px;
    }
    .left-content .title {
        position: absolute;
        left: 30px;
        top: 20px;
        font-size: 25px;
    }
    .btn-go-royal {
        font-size: 22px;
        width: 150px;
        height: 60px;
    }
}
@media (max-width: 991px) and (min-width: 768px) {
    .slider-body {
        min-height: 600px;
    }
    .slider-body .slider-content {
        padding-top: 200px;
        padding-bottom: 100px;
    }

    .slider-body .slider-go {
        flex-direction: column;
        padding-top: 0;
    }
    .slider-body .slider-content-up div:last-child {
        font-size: 19px;
        letter-spacing: 10.5px;
    }
    .slider-body .slider-content-up div:first-child {
        font-size: 29px;
        text-transform: uppercase;
        position: relative;
    }
    .slider-content .slider-content-down {
        width: 61%;
    }
    .slider-body .slider-content-up div:first-child:after {
        position: absolute;
        content: '';
        background-image: url(/img/s.cf42daa7.png);
        background-repeat: no-repeat;
        background-size: 66%;
        height: 36px;
        width: 24px;
        left: 330px;
        top: 9px;
    }
    .slider-body .slider-content {
        background-position: 50% 110%;
        background-size: contain;
    }
    .slider-body {
        height: 100%;
        background-position: bottom;
    }
    .droplist {
        padding-bottom: 20px;
    }
    .button.pink-button {
        margin-top: 10px;
    }
    .slider-go a {
        display: flex;
        justify-content: center;
    }
    .block-for-you h2 {
        padding-top: 100px;
        font-size: 50px;
    }
    .block-for-you .text {
        padding-top: 15px;
        padding-bottom: 40px;
        font-size: 30px;
    }
    .container-fluid {
        padding: 0 45px;
    }
    .slider-for-you .row {
        flex-direction: column;
        height: 1225px;
    }
    .slider-for-you {
        height: 100%;
    }
    .col-md-6 {
        max-width: none;
        height: 50%;
    }
    .left-content {
        padding: 0;
        background-size: cover;
    }
    .right-content {
        padding: 0px 45px 0px 20px;
    }
    .right-content p {
        font-size: 15px;
        padding-bottom: 15px;
    }
    .right-content .usd {
        font-size: 16px;
        line-height: 1;
    }
    .right-content .price {
        font-size: 24px;
    }
    .right-content .moderate {
        font-size: 14px;
        padding-bottom: 15px;
    }
    .right-content .title {
        font-size: 24px;
        padding-bottom: 15px;
        line-height: 1.2;
    }
    .left-content .title {
        position: absolute;
        left: 30px;
        top: 20px;
        font-size: 16px;
    }
    .btn-go-royal {
        font-size: 22px;
        width: 130px;
        height: 45px;
        margin-top: 15px;
    }
    
    .left-content div {
        font-size: 20px;
        margin: 15px 0 0 10px;
    }
    .wrap-col .col-md-6 {
        height: auto;
    }

}
@media (max-width: 991px) {
    .search-block {
        width: 100%;
    }
}
@media (max-width: 767px) {  
    .slider-body .slider-content {
        padding-top: 200px;
        padding: 200px 0 100px 0; 
    }

    .slider-body .slider-go {
        flex-direction: column;
        padding-top: 100px;
    }
    .slider-body .slider-content {
        padding-top: 200px;
        padding-bottom: 100px;
    }

    .slider-body .slider-go {
        flex-direction: column;
        padding: 0;
    }
    .slider-body .slider-content-up div:last-child {
        font-size: 19px;
        letter-spacing: 10.5px;
    }
    .slider-body .slider-content-up div:first-child {
        font-size: 29px;
        text-transform: uppercase;
        position: relative;
    }
    .slider-content .slider-content-down {
        width: 68%;
    }
    .slider-body .slider-content-up div:first-child:after {
        position: absolute;
        content: '';
        background-image: url(/img/s.cf42daa7.png);
        background-repeat: no-repeat;
        background-size: 66%;
        height: 36px;
        width: 24px;
        left: 330px;
        top: 9px;
    }
    .slider-body .slider-content {
        background-position: 50% 110%;
        background-size: contain;
    }
    .slider-body {
        background-position: bottom;
    }
    .droplist {
        padding-bottom: 20px;
    }
    .button.pink-button {
        margin-top: 10px;
    }
    .slider-go a {
        display: flex;
        justify-content: center;
    }
    .block-for-you h2 {
        padding-top: 60px;
        font-size: 40px;
    }
    .block-for-you .text {
        padding-top: 15px;
        padding-bottom: 40px;
        font-size: 25px;
    }
    .container-fluid {
        padding: 0 45px;
    }
    .slider-for-you .row {
        flex-direction: column;
        height: 1000px;
    }
    .slider-for-you {
        height: 100%;
    }
    .for-you-slider-item {
        padding: 60px 35px;
    }
    /deep/ .next-arrow {
        right: 5px;
        height: 35px;
    }
    /deep/ .prev-arrow {
        left: 5px;
        height: 35px;
    }
    .wrap-col .col-md-6.left, .wrap-col .col-md-6.right  {
        max-width: none;
        display: block;
        padding-left: 0;
        padding-right: 0;
    }

    .left-content .title {
        font-size: 28px;        
    }
    .right-content {
        padding: 0;
    }
    .right-content p {
        margin-bottom: 0;
        font-size: 30px;
        padding-bottom: 30px;
    }
    .right-content .price span {
        font-size: 45px;
    }
    .right-content .title {
        padding-top: 40px;
        font-size: 40px;
        padding-bottom: 10px;
    }
    .right-content .moderate {
        font-size: 28px;
        padding-bottom: 30px;
    }
    .right-content .usd {
        font-size: 20px;
        line-height: 1;
    }
    .right-content .price {
        font-size: 56px;
        line-height: 1;
    }

    .slider-body .container {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }
    .wrap-col {
        flex-direction: column;
    }
}
@media (max-width: 575px) {
    .slider-body .slider-content {
        padding-right: 20px;
        padding-left: 20px;
    }
    .slider-body .slider-content-up div:first-child {
        font-size: 21px;
    }
    .slider-body .slider-content-up div:first-child:after {
        background-size: 50%;
        left: 238px;
        top: 7px;
    }
    .slider-body .slider-content-up div:last-child {
        font-size: 13px;
        letter-spacing: 7.5px;
    }
    .slider-content .slider-content-down {
        width: 100%;
        max-width: 250px;
    }
    .button.pink-button {
        width: auto;
        font-size: 16px;
    }
    .block-for-you h2 {
        padding-top: 40px;
        font-size: 35px;
    }
    .block-for-you .text {
        font-size: 20px;
        padding-bottom: 30px;
    }
    .container-fluid {
        padding: 0 25px;
    }
    .left-content .title {
        font-size: 14px;
        left: 15px;
        top: 15px;
    }
    .slider-for-you .row {
        height: 600px;
    }
    .right-content .price span {
        font-size: 32px;
    }
    .right-content .title {
        font-size: 23px;
    }
    .right-content p {
        font-size: 16px;
    }
    .right-content .moderate {
        font-size: 18px;
        padding-bottom: 20px;
    }
    .right-content .usd {
        font-size: 23px;
    }
    .right-content .price {
        font-size: 36px;
    }
    .slider-body .slider-content {
        padding-top: 150px;
        padding-bottom: 60px;
    }
    .slider-body .slider-content {
        background-position: 50% 70%;
    }
    .slider-body .slider-go {
        padding-bottom: 200px;
    }
    .slider-body {
        min-height: auto;
    }
}

</style>
