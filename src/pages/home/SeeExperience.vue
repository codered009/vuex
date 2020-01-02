<template>
    <div id="see-and-experience">
        <div class="experience">
            <div class="block-title container-fluid padding-style">
                <div>See & Experience</div>
                <div class="experience-button"><a href="#">View All</a></div>
            </div>
            <div class="experience-body">
                <div class="experience-main-item">
                    <div class="experience-main-item-image"></div>
                    <div class="experience-main-title">Chanderkhani Pass Trek</div>
                    <div class="experience-main-hint">Video sub title goes here</div>
                    <div style="width: 210px;height: 210px;position: absolute;left: calc(50% - 50px);top: calc(50% - 50px);">
                        <img src="../../assets/play-button.png" style="width:100px;">
                    </div>
                </div>
                <div class="experience-items-list">
                    <div class="experience-items-wrapper">
                        <div class="experience-item">
                            <div class="experience-item-image-wrap"><div class="experience-item-image" :style="'background-image:url('+require('../../assets/experience/side-experience-1.png')+')'"></div></div>
                            <div class="experience-item-info">
                                <div class="experience-item-title">Title Here</div>
                            </div>
                        </div>
                        <div class="experience-item">
                            <div class="experience-item-image-wrap"><div class="experience-item-image" :style="'background-image:url('+require('../../assets/experience/side-experience-2.png')+')'"></div></div>
                            <div class="experience-item-info">
                                <div class="experience-item-title">Title Here</div>
                            </div>
                        </div>
                        <div class="experience-item">
                            <div class="experience-item-image-wrap"><div class="experience-item-image" :style="'background-image:url('+require('../../assets/experience/side-experience-3.png')+')'"></div></div>
                            <div class="experience-item-info">
                                <div class="experience-item-title">Title Here</div>
                            </div>
                        </div>
                        <div class="experience-item">
                            <div class="experience-item-image-wrap"><div class="experience-item-image" :style="'background-image:url('+require('../../assets/experience/side-experience-2.png')+')'"></div></div>
                            <div class="experience-item-info">
                                <div class="experience-item-title">Title Here</div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>

        <div class="email-sendler">
            <div class="block-title" style="margin-bottom: 0px">Go Royal</div>
            <div class="sendler-text-1">Lace up to freedom</div>
            <div class="sendler-text-2">You are exclusive and so is our destinations & deals</div>
            <div class="sendler-email-body">
                <input type="email" placeholder="Email Address">
                <div class="sendler-button"><a href="#">Join</a></div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
  name: 'see-experience',
  data() {
    return {

    }
  }
}
</script>

<style scoped>
.block-title {
    position: relative;
}

.experience {
    margin-top: 127px;
}

.experience .experience-button {
    right: 40px;
}

.experience .experience-body {
    display: -ms-flexbox;
    display: -webkit-box;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    margin-top: 40px;
}

.experience .experience-main-item {
    position: relative;
    padding: 0 10px 0 0;
    -ms-flex: 0 0 68.78%;
    -webkit-box-flex: 0;
    flex: 0 0 68.78%;
    max-width: 68.78%;
}

.experience .experience-items-list {
    position: relative;
    padding: 0 0 0 10px;
    -ms-flex: 0 0 31.22%;
    -webkit-box-flex: 0;
    flex: 0 0 31.22%;
    max-width: 31.22%;
}

.experience .experience-main-title {
    background: rgba(0, 0, 0, 0.4);
    padding: 5px 10px;
    color: #ffffff;
    text-transform: uppercase;
    font-size: 30px;
    font-weight: 600;
    position: absolute;
    top: 50px;
    left: 55px;
}

.experience .experience-main-hint {
    position: absolute;
    bottom: 40px;
    left: 0;
    font-size: 30px;
    font-weight: 500;
    right: 0;
    text-align: center;
}

.experience-items-wrapper {
    position: absolute;
    height: 100%;
    max-height: 100%;
    overflow-y: auto;
    left: 15px;
    right: 0;
}

.experience-items-wrapper::-webkit-scrollbar {
    width: 5px;
}
.experience-items-wrapper::-webkit-scrollbar-track {
    background: #f1f1f1;
}
.experience-items-wrapper::-webkit-scrollbar-thumb {
    background: #aaa;
}
.experience-items-wrapper::-webkit-scrollbar-thumb:hover {
    background: #999;
}

.experience-main-item-image  {    
    padding-bottom: 62.61%;
    background-image: url('../../assets/experience/main-experience.png');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    position: relative;
}

.experience-item {
    display: -ms-flexbox;
    display: -webkit-box;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    background: #fff;
    margin-bottom: 15px;
    overflow: hidden;
}
.experience-item:last-child{
    margin-bottom: 0;
}
.experience-item-image-wrap {
    -webkit-box-flex: 0;
    flex: 0 0 47.27%;
    max-width: 47.27%;
    position: relative;    
}
.experience-item-image {
    padding-bottom: 73.46%;    
    background-size: cover;
}
.experience-item-info {
    -webkit-box-flex: 0;
    flex: 0 0 52.73%;
    max-width: 52.73%;
    position: relative;
    color: #353535;
    padding: 80px 30px 0 40px;
}
.experience-item-title {
    font-weight: bold;
    font-size: 30px;
    color: #19216c;
}

.experience .experience-button {
    position: absolute;
    color: #553d44;
    font-size: 30px;
    right: 50px;
    bottom: 0;
}

.experience .experience-button a {
    color: #f22359;
}

.email-sendler {
    margin-top: 80px;
    text-align: center;
    width: 873px;
    margin-left: auto;
    margin-right: auto;
}

.email-sendler .sendler-text-1 {
    text-transform: uppercase;
    font-weight: 400;
    font-size: 40px;
}

.email-sendler .sendler-text-2 {
    font-size: 30px;
    font-weight: 500;
    margin-top: 10px;
}

.email-sendler .sendler-title {
    margin-bottom: 0px;
}

.email-sendler .sendler-email-body {
    position: relative;
}

.email-sendler .sendler-button {
    position: absolute;
    bottom: 34px;
    right: 20px;
    color: #f22359;
    font-size: 20px;
    font-weight: 500;
}

.email-sendler .sendler-button a {
    color: #f22359;
}

.email-sendler .sendler-email-body input {
    background: none;
    border: 0;
    border-bottom: #b3b3b4 1px solid;
    width: 100%;
    padding: 10px 70px 34px 10px;
    font-size: 20px;
    margin-top: 20px;
}

@media (max-width: 1890px) and (min-width: 1200px) {
    .experience-item-info {
        padding: 35px 20px 0 20px
    }
}
@media (max-width: 1199px) and (min-width: 992px) {
    .experience-item-info {
        padding: 25px 10px 0 10px
    }
    .experience-item-title {
        font-size: 24px;
    }
}

@media (max-width: 991px) and (min-width: 768px) {
    .email-sendler {
        width: 100%;
    }
    .email-sendler .sendler-text-1 {
        text-transform: uppercase;
        font-weight: 400;
        font-size: 35px;
    }
    .email-sendler .sendler-text-2 {
        font-size: 25px;
    }
    .experience .experience-button {
        right: 20px;
    }
}

@media (max-width: 991px) {
    .experience .experience-body {
        display: block;
    }
    .experience .experience-main-item {
        position: relative;
        padding: 0;
        -ms-flex: none;
        -webkit-box-flex: none;
        flex: none;
        max-width: 100%;
    }
    .experience .experience-items-list {
        position: relative;
        padding: 0;
        -ms-flex: none;
        -webkit-box-flex: none;
        flex: none;
        max-width: 100%;
        overflow-x: auto;
    }
    .experience-items-wrapper {
        position: relative;
        overflow-y: initial;
        left: 0;
        display: flex;
        width: fit-content;
    }

    .experience-item {
        display: block;
        background: transparent;
        margin: 30px 15px 0;
        width: 226px;
    }

    .experience-item-image-wrap {
        display: block;
        padding: 0;
        -ms-flex: none;
        -webkit-box-flex: none;
        flex: none;
        max-width: 100%;
    }
    .experience-item-image {
        padding-bottom: 142.31%;    
        background-size: cover;
        background-position: center;
    }
    .experience-item-info {
        display: block;
        -ms-flex: none;
        -webkit-box-flex: none;
        flex: none;
        max-width: 100%;
        padding: 0;
        margin-top: 10px;
        margin-bottom: 30px;
    }
    .experience-title {
        font-weight: bold;
        font-size: 27px;
        margin: 15px 5px 5px;
    }
    .experience-description {
        font-size: 16px;
        margin: 0 5px 25px;
    }
    .email-sendler {
        width: 88%;
        margin-top: 120px;
    }
}

@media (max-width: 767px) {    
    .experience .experience-button {
        display: none;
    }    
}

@media (max-width: 575px) {    
    .experience .experience-button {
        display: none;
    }
    .experience .experience-main-title {
        top: 20px;
        left: 20px;
        font-size: 15px;
    }
    .experience .experience-main-hint {
        bottom: 20px;
        font-size: 15px;
    }
    .email-sendler .sendler-text-2 {
        font-size: 20px;
    }
}
</style>