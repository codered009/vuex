<template>
    <div id="connect">
        <div class="articles container-fluid">
            <div class="block-title">Connect & Learn</div>
            <div class="articles-container">
                <div class="articles-list">
                    <slick
                    ref="slick"
                    :options="sliderOptions">
                        <div class="articles-item-wrap"><div class="article-body">
                            <div class="article-image">
                                <img src="../../assets/connect/connect-image-1.png">
                            </div>
                            <div class="article-content">
                                <div>
                                    <div class="article-title">10 Winter Treks You Don`t Want to Miss In 2019</div>
                                    <div class="article-text">Target January, February and March for maximum snow, least
                                        crowd.
                                        Every year, I see massin crowds Throng to the mountains in December for the winter
                                        experiece
                                        (especially the last 15 days of December)</div>
                                </div>
                                <div class="article-button"><a href="#">Read More</a></div>
                            </div>
                        </div></div>
                        <div class="articles-item-wrap"><div class="article-body">
                            <div class="article-image">
                                <img src="../../assets/connect/connect-image-2.png">
                            </div>
                            <div class="article-content">
                                <div>
                                    <div class="article-title">A Solo Trekker Who Spent His Birthday Picking Up Litter</div>
                                    <div class="article-text">Here is someone who spent his birthday cleaning up the Valeyy of Flowers trail, all the way to Hemkund Sagib. Here is someone who spent his birthday cleaning up the Valeyy of Flowers trail, all the way to Hemkund Sagib.</div>
                                </div>
                                <div class="article-button"><a href="#">Read More</a></div>
                            </div>
                        </div></div>
                        <div class="articles-item-wrap"><div class="article-body">
                            <div class="article-image">
                                <img src="../../assets/connect/connect-image-3.png">
                            </div>
                            <div class="article-content">
                                <div>
                                    <div class="article-title">Brahmatal, for the love of Roopkund</div>
                                    <div class="article-text">Our co-founder, Sandhya UC, was deeply touched by the Brahmatal trek. After much contemplation, she puts down her thoughts about the trek here.</div>
                                </div>
                                <div class="article-button"><a href="#">Read More</a></div>
                            </div>
                        </div></div>
                        <div class="articles-item-wrap"><div class="article-body">
                            <div class="article-image">
                                <img src="../../assets/connect/connect-image-2.png">
                            </div>
                            <div class="article-content">
                                <div>
                                    <div class="article-title">A Solo Trekker Who Spent His Birthday Picking Up Litter</div>
                                    <div class="article-text">Here is someone who spent his birthday cleaning up the Valeyy of Flowers trail, all the way to Hemkund Sagib. Here is someone who spent his birthday cleaning up the Valeyy of Flowers trail, all the way to Hemkund Sagib.</div>
                                </div>
                                <div class="article-button"><a href="#">Read More</a></div>
                            </div>
                        </div></div>
                    </slick>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Slick from 'vue-slick';

export default {
  name: 'connect',
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
                    breakpoint: 992,
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


.articles {
    min-height: 150px;
    margin-top: 90px;
    margin-bottom: 90px;
}

.articles-item-wrap {
    padding: 30px 40px;
}
.articles .articles-title {
    color: #19216c;
    font-size: 35px;
    text-transform: uppercase;
    font-weight: 700;
    text-align: center;
    margin-bottom: 20px;
}


.articles .article-body {
    background: #f7f7f7;
    box-shadow: 0 10px 5px 0px rgba(0, 0, 0, 0.1);
}

.article-image img {
    width: 100%;
}

.articles .article-title {
    color: #19216c;
    font-size: 34px;
    padding: 20px;
    padding-right: 39px;
    padding-left: 25px;
    font-weight: 700;
    line-height: 1.3em;
}

.articles .article-text {
    font-weight: 500;
    padding: 0 20px;
    padding-right: 39px;
    padding-left: 25px;
    font-size: 20px;
    min-height: 150px;
}

.articles .article-button {
    color: #f22359;
    font-size: 27px;
    font-weight: 700;
    text-align: right;
    padding: 25px 39px 29px;
}

.articles .article-button a {
    color: #f22359;
}

.articles .block-title {
    margin-bottom: 25px;
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
    top: 25%;
    margin-top: -31px;
}
/deep/ .prev-arrow {
    background-image: url('../../assets/prev-arrow.png');
    left: 60px;
}
/deep/ .next-arrow {
    background-image: url('../../assets/next-arrow.png');
    right: 60px;
}
@media (max-width: 1890px) and (min-width: 1200px) {
    .articles-item-wrap {
        padding: 30px 20px;
    }
    .articles .article-title {
        font-size: 28px;
        min-height: 148px;
    }
    .articles .article-text {
        font-size: 18px;
        min-height: 216px;
    }
}

@media (max-width: 1199px) and (min-width: 992px) {
    .articles-item-wrap {
        padding: 30px 20px;
    }
}

@media (max-width: 991px) and (min-width: 768px) {
    .articles-item-wrap {
        padding: 30px 20px;
    }
}

@media (max-width: 767px) {
    .articles-item-wrap {
        padding: 30px 20px;
    }
}

@media (max-width: 575px) {
    /deep/ .prev-arrow, /deep/ .next-arrow {
        width: 30px;
        height: 30px;
    }
    .articles .articles-container {
        height: auto;
        overflow-y: hidden;
    }

    .articles .article-title {
        font-size: 20px;
    }

    .articles .article-text {
        font-size: 17px;
    }
    .articles .articles-list {
        padding: 0;
    }
}

</style>