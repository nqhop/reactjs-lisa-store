import styled from "styled-components"
import facebookIcon from 'assets/icons/media/icon.svg'
import twetterIcon from 'assets/icons/media/icon-1.svg'
import instagramIcon from 'assets/icons/media/icon-2.svg'
import indeedIcon from 'assets/icons/media/icon-3.svg'
import paymentIcon from 'assets/images/payment.svg'
import arrowTop from 'assets/icons/arrow-top.svg'
import '../../App.css';
const StyledFooter = styled.div`
    background-color: #638497;
    position: absolute;
    bottom: -1178px;
    left: 0;
    right: 0;
    margin-top: 700px;
    .footer-top {
        max-width: 1320px;
        margin: 0 auto;
        margin-top: 200px;
        .store-name{
            font-family: 'AmstelvarAlpha';
            font-style: normal;
            font-weight: 400;
            font-size: 28px;
            line-height: 34px;
        }
        .desc {
            font-family: 'Open Sans';
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 22px;
            text-transform: capitalize;
            color: rgba(30, 40, 50, 0.75);
            margin-top: 32px;
        }
        .media {
            margin-top: 32px;
            img {
                margin-right: 40px;
            }
        }
        .title {
            font-family: 'Open Sans';
            font-style: normal;
            font-weight: 600;
            font-size: 16px;
            line-height: 22px;
            text-transform: capitalize;
            margin-bottom: 22px;
        }
        .item {
            font-family: 'Open Sans';
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            line-height: 24px;
            text-transform: capitalize;
            color: #1E2832;
            margin-bottom: 12px;
        }
    }
    .footer-bottom {
        background-color: #1E2832;
        height: 52px;
        .footer-desc {
            height: 100%;
            color: #fff;
            max-width: 1320px;
            margin: 0 auto;
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
    }
    `
const Footer = () => {
    return <StyledFooter>
        <div className="footer-top">

            <div className="row">
                <div className="col col-quarter">
                    <p className="store-name">Lisa</p>
                    <p className="desc">Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua</p>
                    <div className="media">
                        <img src={facebookIcon} alt="" />
                        <img src={twetterIcon} alt="" />
                        <img src={instagramIcon} alt="" />
                        <img src={indeedIcon} alt="" />
                    </div>
                </div>

                <div className="col col-quarter">
                    <p className="title">CATALOG</p>
                    <p className="item">Necklaces</p>
                    <p className="item">hoodies</p>
                    <p className="item">Jewelry Box</p>
                    <p className="item">t-shirt</p>
                    <p className="item">jacket</p>
                </div>

                <div className="col col-quarter">
                    <p className="title">ABOUT US</p>
                    <p className="item">Our Producers</p>
                    <p className="item">Sitemap</p>
                    <p className="item">FAQ</p>
                    <p className="item">About Us</p>
                    <p className="item">Terms & Conditions</p>
                </div>

                <div className="col col-quarter">
                    <p className="title">CUSTOMER SERVICES</p>
                    <p className="item">Contact Us</p>
                    <p className="item">Track Your Order</p>
                    <p className="item">Product Care & Repair</p>
                    <p className="item">Book an Appointment</p>
                    <p className="item">Shipping & Returns</p>
                </div>
            </div>
        </div>
        <div className="footer-bottom">
            <div className="footer-desc">
                <p>© 2023 LISA , Inc.</p>
                <img src={paymentIcon} alt="" />
                <div>

                    <span>Scroll to top </span>
                    <img src={arrowTop} alt="" />
                </div>
            </div>
        </div>
    </StyledFooter>
}
export default Footer;