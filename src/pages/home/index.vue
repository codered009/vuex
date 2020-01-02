<template>
  <div class="home body">
    <Promo :blogs="blogs"/>
    <PlanBook/>
    <SeeExperience/>
    <MyTrips/>
    <Connect/>
  </div>
</template>

<script> 
import Promo from './Promo'
import PlanBook from './PlanBook'
import SeeExperience from './SeeExperience'
import MyTrips from './MyTrips'
import Connect from './Connect'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'home',
  data () {
    return {
      allBlogs: '' 
    }
  },
  components: {
    Promo,
    PlanBook,
    SeeExperience,
    MyTrips,
    Connect
  },
  computed: {
    ...mapGetters('blogs', ['blogs'])
  },
  created () {
    this.loadBlogsList()
  },
  methods: {
    ...mapActions('blogs', ['loadBlogsList'])
  }
}
</script>

<style scoped>
/deep/ .block-title {
  color: #19216c;
  font-size: 70px;
  text-transform: uppercase;
  font-weight: bold;
  text-align: center;
}
@media (max-width: 1199px) and (min-width: 992px) {
  /deep/ .block-title {
    font-size: 55px;
  }
}
@media (max-width: 991px) and (min-width: 768px) {
  /deep/ .block-title {
    font-size: 50px;
  }
}
@media (max-width: 767px) and (min-width: 576px) {
  /deep/ .block-title {
    font-size: 50px;
  } 
}
@media (max-width: 575px) {
  /deep/ .block-title {
    font-size: 40px;
  }
}
</style>
