<template>
    <div class="day-details-block">
        <div class="day-info-block">
            <div class="day-info-image" :style="'background-image: url('+image+')'"></div>
            <div class="day-info-content">
                <div class="title">
                    <div>Day {{day_number}}</div>
                    <div class="d-inline d-lg-none">-</div>
                    <div>{{title}}</div>
                </div>
                <div class="description"><slot></slot></div>
            </div>
        </div>
        <div class="day-features-block">
            <div class="day-features-wrapper">
                <div class="feature-item">
                    <div class="feature-image-wrap"><div class="feature-image" :style="'background-image:url('+require('../../../assets/197940047.png')+')'"></div></div>
                    <div class="feature-info">
                        <div class="feature-title">Accomodation</div>
                        <div class="feature-description">Boutique Hill Resort or a 5 star Hotel</div>
                    </div>
                </div>
                <div class="feature-item">
                    <div class="feature-image-wrap"><div class="feature-image" :style="'background-image:url('+require('../../../assets/food.jpg')+')'"></div></div>
                    <div class="feature-info">
                        <div class="feature-title">Food</div>
                        <div class="feature-description">Commental, Italic, Tribal</div>
                    </div>
                </div>
                <div class="feature-item">
                    <div class="feature-image-wrap"><div class="feature-image" :style="'background-image:url('+require('../../../assets/Trekking.jpg')+')'"></div></div>
                    <div class="feature-info">
                        <div class="feature-title">Video Here</div>
                        <div class="feature-description">Boutique Hill Resort or a 5 star Hotel</div>
                    </div>
                </div>
                <div class="feature-item">
                    <div class="feature-image-wrap"><div class="feature-image" :style="'background-image:url('+require('../../../assets/197940047.png')+')'"></div></div>
                    <div class="feature-info">
                        <div class="feature-title">Accomodation</div>
                        <div class="feature-description">Boutique Hill Resort or a 5 star Hotel</div>
                    </div>
                </div>                
                <div class="feature-item">
                    <div class="feature-image-wrap"><div class="feature-image" :style="'background-image:url('+require('../../../assets/Trekking.jpg')+')'"></div></div>
                    <div class="feature-info">
                        <div class="feature-title">Video Here</div>
                        <div class="feature-description">Boutique Hill Resort or a 5 star Hotel</div>
                    </div>
                </div>
                <div class="feature-item">
                    <div class="feature-image-wrap"><div class="feature-image" :style="'background-image:url('+require('../../../assets/food.jpg')+')'"></div></div>
                    <div class="feature-info">
                        <div class="feature-title">Food</div>
                        <div class="feature-description">Commental, Italic, Tribal</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'day-details',
  props: ['title', 'image', 'day_number'],
  data() {
    return {

    }
  }
}
</script>

<style scoped>
.day-details-block {
    margin-top: 25px;
    display: -ms-flexbox;
    display: -webkit-box;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
}
.day-info-block {
    position: relative;
    padding: 0 15px 0 0;
    -ms-flex: 0 0 73.42%;
    -webkit-box-flex: 0;
    flex: 0 0 73.42%;
    max-width: 73.42%;
}
.day-features-block {
    position: relative;
    padding: 0 0 0 15px;
    -ms-flex: 0 0 26.58%;
    -webkit-box-flex: 0;
    flex: 0 0 26.58%;
    max-width: 26.58%;
    
}
.day-features-wrapper {
    position: absolute;
    height: 100%;
    max-height: 100%;
    overflow-y: auto;
    left: 15px;
    right: 0;
}
.day-features-wrapper::-webkit-scrollbar {
  width: 5px;
}
.day-features-wrapper::-webkit-scrollbar-track {
  background: #f1f1f1;
}
.day-features-wrapper::-webkit-scrollbar-thumb {
  background: #aaa;
}
.day-features-wrapper::-webkit-scrollbar-thumb:hover {
  background: #999;
}

.day-info-image {    
    padding-bottom: 69%;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    position: relative;
}
.day-info-image::after {
    content: '';
    position: absolute;
    height: 100%;
    width: 100%;
    left: 0;
    top: 0;
    background: linear-gradient(90deg, rgba(0,0,0,0.8), transparent 50%, transparent);
}

.day-info-block .day-info-content {
    position: absolute;
	top: 130px;
    left: 70px;
    color: #fff;
    width: 36%;
    max-height: 100%;
    overflow-y: auto;
}
.day-info-block .title {
    font-weight: bold;
    font-size: 40px;
    line-height: 1.3;
    margin-bottom: 45px;
}
.day-info-block .description {
    font-size: 28px;
}

.feature-item {
    display: -ms-flexbox;
    display: -webkit-box;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    background: #fff;
    margin-bottom: 6px;
    overflow: hidden;
}
.feature-item:last-child{
    margin-bottom: 0;
}
.feature-image-wrap {
    -webkit-box-flex: 0;
    flex: 0 0 47.08%;
    max-width: 47.08%;
    position: relative;    
}
.feature-image {
    padding-bottom: 81.85%;    
    background-size: cover;
}
.feature-info {
    -webkit-box-flex: 0;
    flex: 0 0 52.92%;
    max-width: 52.92%;
    position: relative;
    color: #353535;
    padding: 50px 30px 0 15px;
}
.feature-title {
    font-weight: bold;
    font-size: 27px;
}
.feature-description {
    font-size: 16px;
}

@media (max-width: 1890px) and (min-width: 1200px) {
    .day-info-block .day-info-content {
        top: 80px;
        left: 60px;
        width: 60%;
    }
    .day-info-block .title {
        font-size: 38px;
        margin-bottom: 35px;
    }
    .day-info-block .description {
        font-size: 22px;
    }
    .feature-info {
        padding: 15px;
    }
    .feature-title {
        font-size: 20px;
    }
    .feature-description {
        font-size: 14px;
    }
}
@media (max-width: 1199px) and (min-width: 992px) {
    .day-info-block .day-info-content {
        top: 30px;
        left: 30px;
        width: 70%;
    }
    .day-info-block .title {
        font-size: 38px;
        margin-bottom: 25px;
    }
    .day-info-block .description {
        font-size: 20px;
    }
    .feature-info {
        padding: 10px;
    }
    .feature-title {
        font-size: 14px;
    }
    .feature-description {
        font-size: 10px;
    }
}
@media (max-width: 991px) {
    .day-details-block {
        display: block;
    }
    .day-info-block {
        position: relative;
        padding: 0;
        -ms-flex: none;
        -webkit-box-flex: none;
        flex: none;
        max-width: 100%;
    }
    .day-features-block {
        position: relative;
        padding: 0;
        -ms-flex: none;
        -webkit-box-flex: none;
        flex: none;
        max-width: 100%;
        overflow-x: auto;
    }
    .day-features-wrapper {
        position: relative;
        overflow-y: initial;
        left: 0;
        display: flex;
        width: fit-content;
    }
    .day-info-block .day-info-content {
        width: 100%;
        left: 0;
        top: 0;
        padding: 55px 125px 50px 45px;
    }
    .day-info-block .title {
        font-size: 30px;
        margin-bottom: 25px;
    }
    .day-info-block .description {
        font-size: 24px;
    }

    .day-info-block .title div {
        display: inline;
        margin-right: 10px;
    }

    .feature-item {
        display: block;
        background: transparent;
        margin: 30px 15px 0;
        width: 226px;
    }

    .feature-image-wrap {
        display: block;
        padding: 0;
        -ms-flex: none;
        -webkit-box-flex: none;
        flex: none;
        max-width: 100%;
    }
    .feature-image {
        padding-bottom: 167.26%;    
        background-size: cover;
        background-position: center;
    }
    .feature-info {
        display: block;
        padding: 0;
        -ms-flex: none;
        -webkit-box-flex: none;
        flex: none;
        max-width: 100%;
        padding: 0;
    }
    .feature-title {
        font-weight: bold;
        font-size: 27px;
        margin: 15px 5px 5px;
    }
    .feature-description {
        font-size: 16px;
        margin: 0 5px 25px;
    }
}
@media (max-width: 767px) {  
    
}
@media (max-width: 575px) {
    .day-info-image {  
        padding-bottom: 80%;
    }
    .day-info-block .day-info-content {
        width: 100%;
        left: 0;
        top: 0;
        padding: 30px 20px;
    }
    .day-info-block .title {
        font-size: 24px;
        margin-bottom: 15px;
    }
    .day-info-block .description {
        font-size: 16px;
    }
}

</style>
