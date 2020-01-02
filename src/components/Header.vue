<template>
    <header :class="'absolute-header'">
        <div class="container-fluid padding-style">
            <div class="row desktop-header-menu">
                <div class="col-md-12 col-lg-2 header-logo">
                    <img @click="menuClick()" src="../assets/Logo-01.png">
                </div>
                <div class="col-md-9 col-lg-8 flexed">
                    <div class="header-menu">
                        <div class="header-menu-item">
                            <a href="#" @click="menuClick('#plan-and-book')">Plan & Book</a>
                        </div>
                        <div class="header-menu-item">
                            <a href="#" @click="menuClick('#see-and-experience')">See & Experience</a>
                        </div>
                        <div class="header-menu-item">
                            <a href="#" @click="menuClick('#me-and-thrills')">Me & My Thrills</a>
                        </div>
                        <div class="header-menu-item">
                            <a href="#" @click="menuClick('#connect')">Connect & Learn</a>
                        </div>
                    </div>
                </div>
                <div class="col-md-3 col-lg-2 align-items-center login">
                    <a href="#">Login</a>
                    <a href="#" class="btn-icon"><img src="../assets/svg/white/phone-icon.svg"></a>
                    <a href="#" class="btn-icon"><img src="../assets/chat-icon.png"></a>
                    <a href="#" class="btn-icon" @click="$refs.modal.show()"><img src="../assets/search-icon.png"></a>
                </div>
            </div>
            <div class="row mobile-header-menu">
                <div class="col menu"> 
                    <img src="../assets/hamburger.png" @click="mobileMenuVisible = true" class="hamburger">
                    <a href="#" class="btn-icon-mob"><img src="../assets/svg/white/phone-icon.svg"></a>
                </div>
                <div class="col logo">
                    <img @click="menuClick()" src="../assets/logo-03.png">
                </div>
                <div class="col login">
                    <a href="#" class="btn-icon-mob"><img src="../assets/chat-icon.png"></a>
                    <a href="#" class="btn-icon-mob"><img src="../assets/login-icon.png"></a>
                </div>
            </div>
        </div>
        <div class="mobile-menu-wrapper" v-if="mobileMenuVisible">
            <div class="mobile-header-menu-header">
                <div class="col logo">
                    <img src="../assets/svg/white/Logo-02.svg">
                </div>
                <div class="col mobile-menu-close">
                    <a href="#" @click="mobileMenuVisible = false"><img src="../assets/close.svg"></a>
                </div>
            </div>
            <div class="mobile-header-menu-content">
                <div class="mobile-header-menu-title">Menu</div>
                <div class="mobile-header-menu-item">
                    <a href="#" @click="menuClick('#plan-and-book', true)">Plan & Book</a>
                </div>
                <div class="mobile-header-menu-item">
                    <a href="#" @click="menuClick('#see-and-experience', true)">See & Experience</a>
                </div>
                <div class="mobile-header-menu-item">
                    <a href="#" @click="menuClick('#me-and-thrills', true)">Me & My Thrills</a>
                </div>
                <div class="mobile-header-menu-item">
                    <a href="#" @click="menuClick('#connect', true)">Connect & Learn</a>
                </div>
            </div>
        </div>
        <Modal ref="modal" :title="'Search'"><div class="search-wrapper"><input class="search-input form-control"></div></Modal>
    </header>
</template>

<script>
import Modal from './modal'
export default {
  name: 'site-header',
  components: {
    Modal
  },
  data() {
    return {
      mobileMenuVisible: false
    }
  },
  methods: {
    menuClick: function (selector = null, isMobile = false) {
        const vm = this;
        if (this.$store.state.route.name == 'home' && !selector) {
            return;
        }
        this.$router.push({name: 'home', hash: '#'}, function () {
            if (selector) {
                setTimeout(function () {vm.$scrollTo(selector)}, 0);
            }
            if (isMobile) {
                vm.mobileMenuVisible = false;
            }
        });
    }
  }
}
</script>

<style scoped>

header {
    position: relative;
    z-index: 1000;
    background: linear-gradient(90deg, #506c94, #364d73);
    box-shadow: 0 0 40px 0px rgba(0, 0, 0, 0.6);
    padding: 40px 0px;
    text-transform: uppercase;
}
header.absolute-header {
    position: absolute;
    width: 100%;
    left: 0;
    top: 0;
}

header, header a, header a:hover {
    color: #ffffff;
}

header .header-logo {
    padding-right: 0;
}

header img {
    max-width: 100%;
}

header .header-icon img {
    height: 30px;
}

header .header-menu {
    display: flex;
    align-items: center;
    width: 100%;
    font-size: 18px;
    justify-content: center;
}

header .header-menu-item {
    padding: 0 32px;
}
header .login {
    font-size: 18px;
    display: flex;
    justify-content: flex-end;
}
.btn-search {
    width: 40px;
    cursor: pointer;
    margin-left: 30px;
}
.mobile-header-menu {
    display: none;
}
header .btn-icon {
    height: 35px;
    width: 35px;
    margin-left: 20px;
    cursor: pointer;
    display: flex;
    align-items: center;
}

header .btn-icon-mob {
    padding-left: 25px;
}
header .btn-icon-mob img {
    height: 45px;
    width: 45px;
}
.desktop-header-menu {
    align-items: center;
}

@media (max-width: 1890px) and (min-width: 1200px) {
    header .header-menu {
        font-size: 15px;
    }
    header .header-menu-item {
        padding: 0 14px;
    }
    .btn-search {
        width: 30px;
        margin-left: 40px;
    }
    header .login {
        font-size: 15px;
    }
}
@media (max-width: 1199px) and (min-width: 992px) {
    header .header-menu {
        font-size: 12px;
        line-height: 2;
    }
    header .header-menu-item {
        padding: 0 10px;
        display: inline-block;
    }
    .btn-search {
        width: 20px;
        margin-left: 0;
        float: right;
    }
    header .login {
        font-size: 12px;
    }
    header .btn-icon {
        margin-left: 15px;
    }
}

@media (max-width: 991px) and (min-width: 768px) {
    header .header-menu {
        display: block;
        font-size: 12px;
        line-height: 2;
    }
    header .header-menu-item {
        padding: 0 10px;
        display: inline-block;
    }
    .btn-search {
        width: 20px;
        margin-left: 0;
        float: right;
    }
    header {
        padding: 25px 0;
    }
    header .login {
        font-size: 12px;
    }
    header .header-logo {
        text-align: center;
        margin-bottom: 15px;
        padding-right: 15px;
    }
    header .header-logo img {
        width: 40%
    }
}

@media (max-width: 767px) {
    header {
        padding: 20px 0;
    }
    .mobile-header-menu {
        display: flex;
    }
    .desktop-header-menu {
        display: none;
    }
    .mobile-header-menu .logo {
        text-align: center;
    }
    .mobile-header-menu .logo img {
        width: 100%;
    }

    .mobile-header-menu .col {
        align-self: center;
    }

    .mobile-menu-wrapper {
        background: #f22359;
        position: fixed;
        left: 0;
        top: 0;
        height: 100%;
        width: 80%;
        padding: 55px 35px;
        z-index: 9999;
    }
    .mobile-header-menu-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .mobile-header-menu-header .logo img {
        width: 55%;
    }
    .mobile-header-menu-header .mobile-menu-close {
        text-align: right;
    }
    .mobile-header-menu-content {
        padding: 30px 15px;
        overflow-y: auto;
    }
    .mobile-header-menu-title {
        text-transform: uppercase;
        font-size: 35px;
        padding: 40px 10px;
    }
    .mobile-header-menu-item a {
        display: block;
        cursor: pointer;
        padding: 25px 10px;
        font-size: 27px;
        border-bottom: 1px solid;
        position: relative;
    }
    .mobile-header-menu-item a::after {
        content: '';
        display: block;
        background: url('../assets/arrow-r.svg') no-repeat;
        position: absolute;
        right: 0;
        top: 50%;
        margin-top: -13px;
        height: 25px;
        width: 15px;
    }
    .mobile-header-menu-item:last-child a {
        border-bottom: none;
    }
    .mobile-header-menu-item a:hover {
        cursor: pointer;
    }
    .container-fluid.padding-style {
        padding-right: 55px;
        padding-left: 55px;
    }
}
@media (max-width: 575px) {

    .mobile-header-menu-title {
        font-size: 23px;
        padding-bottom: 15px;
    }
    header {
        box-shadow: 0 0 20px 20px rgba(0, 0, 0, 0.5);
    }
    header .login {
        font-size: 18px;
    }
    .mobile-header-menu-item a {
        font-size: 15px;
    }
    .container-fluid.padding-style {
        padding-right: 25px;
        padding-left: 25px;
    }
    header .btn-icon-mob img {
        height: 25px;
        width: 25px;
    }
    header .btn-icon-mob {
        padding-left: 10px;
    }
    .hamburger {
        width: 25px;
    }
}
@media (min-width: 768px) {
    .mobile-menu-wrapper {
        display: none !important;
    }
}

/deep/ .modal-header {
    color: #222;
}
</style>
