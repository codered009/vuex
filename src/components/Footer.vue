<template>
    <footer>
        <div class="footer-line"></div>
        <div class="container container-mob">
            <div class="row justify-content-center footer-menu">
                <div class="footer-menu-item">
                    <a href="#">About us</a>
                </div>
                <div class="footer-menu-item">
                    <a href="#">Privacy</a>
                </div>
                <div class="footer-menu-item">
                    <a href="#">Social impact</a>
                </div>
                <div class="footer-menu-item">
                    <a href="#">Partner</a>
                </div>
                <div class="footer-menu-item">
                    <a href="#">Affiliate</a>
                </div>
                <div class="footer-menu-item">
                    <a href="#">Contact</a>
                </div>
            </div>
            <div class="row justify-content-center footer-icons">
                <div class="footer-icon">
                    <a href="#"><img src="../assets/svg/blue/Svg-01.svg"></a>
                </div>
                <div class="footer-icon">
                    <a href="#"><img src="../assets/svg/blue/Svg-02.svg"></a>
                </div>
                <div class="footer-icon">
                    <a href="#"><img src="../assets/svg/blue/Svg-03.svg"></a>
                </div>
                <div class="footer-icon">
                    <a href="#"><img src="../assets/svg/blue/Svg-04.svg"></a>
                </div>
                <div class="footer-icon">
                    <a href="#"><img src="../assets/svg/blue/Svg-05.svg"></a>
                </div>
                <div class="footer-icon">
                    <a href="#"><img src="../assets/svg/blue/Svg-06.svg"></a>
                </div>
                <div class="footer-icon">
                    <a href="#"><img src="../assets/svg/blue/Svg-07.svg"></a>
                </div>
            </div>
            <div class="row copyright">
                <div class="col-md-12 justify-content-center">
                    <p>&copy; 2020 <span>Royal Thrills</span> - All Rights Reserved</p>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>

export default {
  name: 'site-footer',
  data() {
    return {

    }
  }
}
</script>

<style scoped>
footer {
    background: #ffffff;
    margin-top: 30px;
    position: relative;
}

footer, footer a {
    color: #373e7e;
    font-weight: 400;
}

footer a {
    font-size: 24px;
    line-height: 43px;
}

footer span {
    text-transform: uppercase;
    color: #f23c68;
}

footer .footer-icons {
    margin-top: 20px;
}

footer .copyright {
    font-weight: 500;
    margin-top: 35px;
    text-align: center;
}

footer .copyright p {
    margin-bottom: 40px;
    font-size: 24px;
}

footer .footer-menu-item {
    padding: 0px 25px;
    position: relative;
}

footer .footer-menu-item:not(:last-child):after {
    border-right: #b4b4b4 1px solid;
    position: absolute;
    content: '';
    width: 1px;
    height: 24px;
    background-color: #b4b4b4;
    right: 0;
    top: 20%;
}

footer .footer-icon {
    padding: 0 10px;
}

footer .footer-icon img {
    height: 85px;
    width: 85px;
}

footer .footer-line {
    border-top: #272f75 1px solid;
    width: 100%;
    padding-bottom: 45px;
}

@media (max-width: 767px) {
    footer a {
        font-size: 16px;
        line-height: 43px;
    }
    footer .footer-menu-item {
        padding: 0px 20px;
    }
    footer .footer-menu-item:first-child {
        padding-left: 0px;
    }
    footer .footer-menu-item:last-child {
        padding-right: 0px;
    }
    footer .container-mob {
        width: 100%;
        padding-right: 15px;
        padding-left: 15px;
        margin-right: auto;
        margin-left: auto;
        max-width: none;
    }
    footer .footer-icon img {
        height: 75px;
        width: 75px;
    }
    footer .copyright p {
        margin-bottom: 40px;
        font-size: 20px;
    }
    footer .footer-line {
        padding-bottom: 35px;
    }
    footer .copyright {
        margin-top: 25px;
    }
}

@media (max-width: 575px) {
    footer .footer-menu-item {
        padding: 0px 10px;
    }
    footer .footer-icon img {
        height: 55px;
        width: 55px;
    }
}
</style>
