<template>
    <div>
        <div class="block-title">Itinerary</div>
        <div class="day-select">
            <ul>
                <li><span class="arrow left"></span></li>
                <li class="d-none d-lg-inline-block">Summary</li>
                <li>Day 1</li>
                <li>Day 2</li>
                <li><span class="dots"><i></i><i></i><i></i></span></li>
                <li>Day 9</li>
                <li>Day 10</li>
                <li><span class="arrow right"></span></li>
                <li class="d-none d-lg-inline-block icon"><img src="../../../assets/open-icon.png"></li>
            </ul>
        </div>
        <Details :title="'Arrival in Manali'" :day_number="1" :image="require('../../../assets/Day-1-image.jpg')">
            Be welcomed into a beautiful hill resort where you can relax and refresh. Explore the culture of major vantage points in and around Manali. Visit Hidimba Temple, dedicated to Goddess Hidimbi, the patron Goddess of manali. Continue to Vashisht Temple dedicated to Vashisht Muni, one of the seven sapta rishis of Hindu culture. Spend your evening shopping in Manali. End with a little briefing on the route, terrain, what to pack and what to expect.
        </Details>
        <Details :title="'Experience rustic village lifestyle'" :day_number="2" :image="require('../../../assets/Day-1-image.jpg')">
            First drive from Manali to Naggar and then to Rumsu, where we will spend the night. Interact with the villagers, have traditional food and visit the temples to get a first hand feel of the lifestyle and culture of the region.what to expect.
        </Details>
        <Trips/>
    </div>
</template>

<script>
import Details from './DetailsBlock.vue';
import Trips from './Trips.vue';

export default {
  name: 'itinerary-content',
  components: {
    Details,
    Trips
  },
  data() {
    return {

    }
  }
}
</script>

<style scoped>
.day-select ul {
    list-style: none;
    margin: 0;
    padding: 0;
    text-align: center;
    align-items: center;
    justify-content: center;
    display: flex;
}
.day-select ul li {
    color: #6e6e6e;
    font-weight: bold;
    font-size: 30px;
    margin: 0 20px;
    display: flex;
}
.day-select ul li img {
    display: block;
}
.arrow {
  border: solid #6e6e6e;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 6px;
}
.arrow.right {
  transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
}
.arrow.left {
  transform: rotate(135deg);
  -webkit-transform: rotate(135deg);
}

.dots i {
    width: 10px;
    height: 10px;
    background: #f22359;
    border-radius: 100%;
    display: inline-block;
    margin-right: 15px;
}
.dots i:last-child {
    margin-right: 0;
}
.day-select {
    margin-bottom: 95px;
}
.block-title {
    color: #19216c;
    font-weight: bold;
    font-size: 65px;
    line-height: 1;
    text-align: center;
    text-transform: uppercase;
    margin: 70px 0 30px;
    letter-spacing: 1px;
}

@media (max-width: 1890px) and (min-width: 1200px) {
    
}
@media (max-width: 1199px) and (min-width: 992px) {
    .day-select ul li {
        margin: 0 15px;
    }
}
@media (max-width: 991px) and (min-width: 768px) {
    .day-select ul li {
        margin: 0 15px;
    }
}
@media (max-width: 767px) { 
    .day-select ul li {
        margin: 0 10px;
        font-size: 24px;
    }
    .arrow {
        padding: 4px;
    }
    .dots i {
        background: #b1b1b1;
        width: 9px;
        height: 9px;
        margin-right: 10px;
    }
    .day-select {
        margin-bottom: 35px;
    }
}
@media (max-width: 575px) {
    .block-title {
        font-size: 40px;
        margin: 40px 0 15px;
    }
    .day-select ul li {
        margin: 0 5px;
        font-size: 14px;
    }
    .arrow {
        padding: 3px;
    }
    .dots i {        
        width: 5px;
        height: 5px;
        margin-right: 5px;
    }
}
</style>
