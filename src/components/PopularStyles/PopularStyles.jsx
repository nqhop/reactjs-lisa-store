import styled from 'styled-components'
import '../../App.css';
import band1 from 'assets/images/brand/01.svg'
import band2 from 'assets/images/brand/02.svg'
import band3 from 'assets/images/brand/03.svg'
import band4 from 'assets/images/brand/04.svg'
import band5 from 'assets/images/brand/05.svg'
import Product from 'components/Product/Product';
import popularProduct1 from 'assets/images/popular-styles/image-category-1.svg';
import popularProduct2 from 'assets/images/popular-styles/item-category-1.svg';
import popularProduct3 from 'assets/images/popular-styles/item-category-2.svg';
import popularProduct4 from 'assets/images/popular-styles/item-category-hover 1.svg'
import popularProduct5 from 'assets/images/popular-styles/item-category.svg';
import device from 'assets/js/devices';
const StyledPopularStyles = styled.div`
    /* margin-top: 760px; */
    /* height: 400px; */
    background-color: #9797f1;
    .brand{
        /* display: flex; */
        /* justify-content: space-around; */
        padding: 90px 0;
    }
    .position-relative{
        position: relative;
    }
    .text-orientation{
        position: absolute;
        left: -20px;
        padding: 8px 0;
        /* height: 100%; */
        /* writing-mode: vertical-rl;
        text-orientation: mixed; */
        
        transform: rotate(270deg);
        transform-origin: left;
        bottom: -12px;
        left: 0;

        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 34px;
        line-height: 40px;
        text-align: center;
        text-transform: uppercase;
    }
    /*
    min-width
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    tablet: '768px',
    laptop: '1024px',
    laptopL: '1440px',
    desktop: '2560px', */
    @media (${device.mobileS}) {
        .col-device-right {
            width: 100%;
        }
        .col-device-left {
            width: 100%;
        }
    }

    @media (${device.mobileL}) {
        .col-device-left {
            width: 50%;
        }
        .col-device-right {
            width: 50%;
        }
    }
    @media (${device.tablet}) {
        .col-device-right {
            width: 25%;
        }
    }
    @media (max-width: 1014px) {
        .brand {
            padding: 20px 0;
        }
    }
    @media (max-width: 425px) {
        .brand {
            display: none;
        }
    }
    @media (max-width: 1380px) {
        .text-orientation {
            display: none;
        }
    }

`
const PopularStyles = () => {
    return <StyledPopularStyles>
        <div className="brand">
            <img src={band1} alt="" />
            <img src={band2} alt="" />
            <img src={band3} alt="" />
            <img src={band4} alt="" />
            <img src={band5} alt="" />
        </div>
        {/* <div className="row brand">
            <div className="col col-device-band">
                <img src={band1} alt="" />
            </div>
            <div className="col col-device-band">
                <img src={band2} alt="" />
            </div>
            <div className="col col-device-band">
                <img src={band3} alt="" />
            </div>
            <div className="col col-device-band">
                <img src={band4} alt="" />
            </div>
            <div className="col col-device-band">
                <img src={band5} alt="" />
            </div>
        </div> */}

        <div className="popular-styles">
            <div className="row position-relative">
                <div className='text-orientation'>
                    Explore new and popular styles
                </div>
                {/* <div className="col col-haft">
                    <Product category="Manto" quantity={56} img={popularProduct1} />
                </div> */}
                <div className="col">
                    <div className="row">
                        <div className="col col-device-left">
                            <Product category="Manto" quantity={56} img={popularProduct1} />
                        </div>
                        <div className="col col-device-right">
                            <Product category="Pants" quantity={98} img={popularProduct2} sale={true} />
                        </div>
                        <div className="col col-device-right">
                            <Product category="Coat" quantity={26} img={popularProduct3} sale={true} />
                        </div>
                        <div className="col col-device-right">
                            <Product category="Shirt" quantity={45} img={popularProduct4} />
                        </div>
                        <div className="col col-device-right">
                            <Product category="Jacket" quantity={76} img={popularProduct5} />
                        </div>
                    </div>
                    {/* <div className="row">
                        <div className="col col-haft">
                            <Product category="Shirt" quantity={45} img={popularProduct4} />
                        </div>
                        <div className="col col-haft">
                            <Product category="Jacket" quantity={76} img={popularProduct5} />
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    </StyledPopularStyles>
}
export default PopularStyles;