<template>
    <div id="plan-and-book">
        <div class="plan container-fluid">
            <div class="block-title">Plan & Book</div>
            <div class="plan-subtitle">
                <div class="plan-menu">
                    <div class="plan-menu-item active-item">Treks</div>
                    <div class="plan-menu-item">More Thrills</div>
                </div>
                <div class="plan-button"><a href="#">Explore all thrills</a></div>
            </div>
            <div class="plan-list-container">
                <slick
                    ref="slick"
                    :options="sliderOptions">
                    <div class="plan-list-item-wrap">
                        <div class="plan-list-item">
                            <div class="plan-item-image-wrap">
                                <div class="plan-item-image"></div>
                                <div class="plan-item-image-title">Chanderkhani pass trek</div>
                                <div class="like"><img src="../../assets/heart.png"></div>
                            </div>
                            <div class="plan-content">
                                <div class="plan-item-title">High altitude trekking for the first time.</div>
                                <div class="plan-item-description">Moderate | 7 Days | 14000 ft</div>
                                <div class="plan-item-info">
                                    <div class="plan-item-cost">
                                        <div class="plan-item-currency">USD</div>
                                        <div class="plan-item-value">$ <span>1008</span></div>
                                    </div>
                                    <div class="plan-item-button">
                                        <a href="#">
                                            <div class="button pink-button">Go Royal</div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="plan-list-item-wrap">
                        <div class="plan-list-item">
                            <div class="plan-item-image-wrap">
                                <div class="plan-item-image"></div>
                                <div class="plan-item-image-title">Chanderkhani pass trek</div>
                                <div class="like"><img src="../../assets/heart-active.png"></div>
                            </div>
                            <div class="plan-content">
                                <div class="plan-item-title">High altitude trekking for the first time.</div>
                                <div class="plan-item-description">Moderate | 7 Days | 14000 ft</div>
                                <div class="plan-item-info">
                                    <div class="plan-item-cost">
                                        <div class="plan-item-currency">USD</div>
                                        <div class="plan-item-value">$ <span>1008</span></div>
                                    </div>
                                    <div class="plan-item-button">
                                        <a href="#">
                                            <div class="button pink-button">Go Royal</div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="plan-list-item-wrap">
                        <div class="plan-list-item">
                            <div class="plan-item-image-wrap">
                                <div class="plan-item-image"></div>
                                <div class="plan-item-image-title">Chanderkhani pass trek</div>
                                <div class="like"><img src="../../assets/heart.png"></div>
                            </div>
                            <div class="plan-content">
                                <div class="plan-item-title">High altitude trekking for the first time.</div>
                                <div class="plan-item-description">Moderate | 7 Days | 14000 ft</div>
                                <div class="plan-item-info">
                                    <div class="plan-item-cost">
                                        <div class="plan-item-currency">USD</div>
                                        <div class="plan-item-value">$ <span>1008</span></div>
                                    </div>
                                    <div class="plan-item-button">
                                        <a href="#">
                                            <div class="button pink-button">Go Royal</div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="plan-list-item-wrap">
                        <div class="plan-list-item">
                            <div class="plan-item-image-wrap">
                                <div class="plan-item-image"></div>
                                <div class="plan-item-image-title">Chanderkhani pass trek</div>
                                <div class="like"><img src="../../assets/heart.png"></div>
                            </div>
                            <div class="plan-content">
                                <div class="plan-item-title">High altitude trekking for the first time.</div>
                                <div class="plan-item-description">Moderate | 7 Days | 14000 ft</div>
                                <div class="plan-item-info">
                                    <div class="plan-item-cost">
                                        <div class="plan-item-currency">USD</div>
                                        <div class="plan-item-value">$ <span>1008</span></div>
                                    </div>
                                    <div class="plan-item-button">
                                        <a href="#">
                                            <div class="button pink-button">Go Royal</div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>                    
                </slick>
            </div>
            <div class="plan-mobile-button"><a href="#">Explore all thrills</a></div>
        </div>

        <div class="sales-body">
            <div class="sales-title">ROYAL SALE</div>
            <div class="sales-text">50% OFF SECOND GUEST</div>
            <div class="sales-description">+ up to $150 instant savings</div>
            <a href="#">
                <div class="button pink-button book">Let's Go</div>
            </a>
        </div>
    </div>
</template>

<script>
import Slick from 'vue-slick'

export default {
  name: 'book',
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
                        arrows: false,
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        arrows: false,
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
#plan-and-book {
    width: 100%;
    overflow: hidden;
}
.plan {
    margin-top: 160px;
    margin-bottom: 80px;
}

.block-title {
    font-size: 70px;
    margin-bottom: 20px;
}

.plan .plan-subtitle {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
}

.plan .plan-menu {
    display: flex;
}

.plan .plan-menu-item {
    padding-right: 30px;
    padding-left: 30px;
    font-size: 40px;
    text-transform: uppercase;
    font-weight: normal;
    cursor: pointer;
    color: #474747;
}

.plan .plan-menu-item:not(:last-child) {
    border-right: #000000 3px solid;
}

.plan .plan-menu-item.active-item {
    font-weight: 700;
    color: #19216c;
    font-weight: bold;
}

.plan .plan-button, .plan .plan-mobile-button {
    color: #f22359;
    font-size: 27px;
    text-transform: uppercase;
    font-weight: 700;
    position: absolute;
    right: 38px;
    bottom: 4px;
}

.plan .plan-mobile-button {
    display: none;
    position: unset;
}

.plan .plan-button a, .plan .plan-mobile-button a {
    color: #f22359;
}

.plan .plan-item-image-wrap {
    position: relative;
}
.plan .plan-item-image {
    position: relative;
    background-size: cover;
    background-image: url('../../assets/planBook/plans-img-1.png');
    background-repeat: no-repeat;
    padding-bottom: 53.57%;
}

.plan .plan-item-image-title {
    position: absolute;
    top: 30px;
    left: 24px;
    padding: 5px 15px;
    background: rgba(255, 255, 255, 0.3);
    color: #19216c;
    font-size: 25px;
    text-transform: uppercase;
    font-weight: bold;
}
.plan .like {
    position: absolute;
    top: 30px;
    right: 24px;
    cursor: pointer;
}

.plan .plan-item-title {
    color: #19216c;
    font-size: 30px;
    font-weight: 600;
    padding-bottom: 40px;
}

.plan .plan-content {
    padding: 20px 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 45%;
}

.plan-list-item-wrap {
    padding: 15px;
}
.plan .plan-list-item {
    background: #f7f7f7;
    box-shadow: 0 10px 5px 0px rgba(0, 0, 0, 0.1);
}

.plan .plan-item-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.plan .plan-item-value {
    font-size: 40px;
    font-weight: bold;
}

.plan .plan-item-value span {
    font-size: 47px;
    color: #19216c;
}

.plan .plan-item-cost {
    transform: translate(10px, -8px);
}

.plan .plan-item-currency {
    font-weight: 700;
    font-size: 23px;
}

.plan .plan-item-description {
    font-size: 24px;
    padding-bottom: 35px;
}

.plan .plan-list-container {
    margin-top: 60px;
    width: 120%;
}

.plan .plan-item-button {
    font-size: 24px;
}

.plan .plan-item-button .button {
    width: 200px;
    height: 78px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.sales-body {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 50px 20px;
    min-height: 150px;
}

.sales-body, .sales-body a {
    background: #fcfcfc;
    color: #272f75;
    font-weight: 500;
}

.sales-body .sales-title {
    font-size: 41px;
    margin-top: 50px;
}

.sales-body .sales-description {
    margin-bottom: 22px;
    font-size: 40px;
    text-transform: uppercase;
}

.sales-body .sales-text {
    font-size: 76px;
    font-weight: 600;
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
    background-image: url('../../assets/prev-arrow.png');
    left: 50px;
}
/deep/ .next-arrow {
    background-image: url('../../assets/next-arrow.png');
    right: 20%;
}

@media (max-width: 1199px) and (min-width: 992px) {
    .plan .plan-button {
        position: unset;
        margin-top: 20px;
    }
}

@media (max-width: 991px) and (min-width: 768px) {
    .plan .plan-button {
        position: unset;
        margin-top: 20px;
    }
    .plan .plan-item-image-title {
        font-size: 20px;
    }
    .plan .like {
        width: 40px;
    }
    .plan .plan-item-button .button {
        width: 170px;
    }
}

@media (max-width: 767px) {    
    .plan .plan-list-container {
        width: 100%;
    }

    /deep/ .next-arrow {
        right: 50px;
    }

    .plan .plan-item-image-title, .plan .plan-item-title,  .plan .plan-button{
        font-size: 28px;
    }

    .plan .plan-item-description {
        font-size: 22.5px;
    }

    .plan .plan-item-value span {
        font-size: 43.7px;
    }

    .plan .plan-item-value {
        font-size: 37.6px;
    }

    .plan .plan-item-currency {
        font-size: 26.6px;
    }

    .plan .plan-item-button {
        font-size: 26.3px;
    }

    .plan .plan-button {
        display: none;
    }

    .plan .plan-mobile-button {
        display: block;
        text-align: center;
        margin-top: 40px;
        font-size: 28px;
    }
    .plan {
        margin-top: 90px;
    }
    .sales-body .sales-text {
        font-size: 50px;
    }
    .sales-body .sales-description {
        margin-bottom: 50px;    
    }
    .pink-button.book {
        margin-bottom: 0;
    }
}


@media (max-width: 575px) {
    
    .plan .plan-menu-item {
        font-size: 18px;
        padding-right: 10px;
        padding-left: 10px;
    }
    .plan .plan-item-image-title, .plan .plan-item-title, .plan .plan-button {
        font-size: 18px;
    }
    .plan .plan-content .plan-item-image-title {
        font-size: 18px;
        padding-bottom: 25px;
    }
    .plan .plan-item-description {
        font-size: 15px;
        padding-bottom: 20px;
    }
    .plan .plan-content {
        padding: 15px;
    }

    .plan .plan-item-value {
        display: flex;
    }

    .plan .plan-item-currency, .plan .plan-item-value, .plan .plan-item-value span {
        font-size: 20px;
        transform: unset;
    }

    .plan {
        margin-top: 50px;
        margin-bottom: 40px;
    }

    .plan .block-title {
        margin-bottom: 30px;
    }
    .plan .plan-list-container {
        margin-top: 35px;
    }
    .sales-body .sales-text {
        font-size: 34px;
    }
    .sales-body .sales-description {
        margin-bottom: 15px;
        font-size: 22px;
    }
    .pink-button.book {
        font-size: 24px;
        margin-bottom: 0px;
    }
    .plan .plan-item-button {
        font-size: 16px;
    }
    .plan .plan-item-button .button {
        width: 120px;
        height: 50px;
    }
    .plan .like{
        top: 15px;
        right: 15px;
    }
    .plan .plan-item-image-title {
        top: 15px;
        left: 15px;
        font-size: 13px;
    }
    .sales-body .sales-title {
        font-size: 30px;
        margin-top: 20px;
    }
}
</style>