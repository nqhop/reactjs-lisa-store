import styled from "styled-components"
import '../../App.css';
import '../../assets/css/best-seller-style.css'
import filterIcon from 'assets/icons/filter.svg'
import { Button } from "components/Button"
import Card from "components/Card/Card";
import { useEffect } from "react";

import producImage1 from 'assets/images/products/image-product.svg'
import producImage2 from 'assets/images/products/image-product-1.svg'
import producImage3 from 'assets/images/products/image-product-2.svg'
import producImage4 from 'assets/images/products/image-product-3.svg'
import producImage5 from 'assets/images/products/image-product-4.svg'
import producImage6 from 'assets/images/products/image-product-5.svg'
import producImage7 from 'assets/images/products/image-product-6.svg'
import producImage8 from 'assets/images/products/image-product-7.svg'
import Swiper from "swiper";
const StyledBestSellers = styled.div`
    margin-top: 65%;
    .title{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 500;
        font-size: 50px;
        line-height: 59px;

        text-align: center;
        text-transform: capitalize;
        color: #000000;
    }
    .all-products{
        display: flex;
        justify-content: space-between;
        margin-top: 36px;
    }
    .all-products > div:first-child {
        margin-left: -35px;
    }
    .chose-product{
        padding: 0 35px;
        font-family: 'Open Sans';
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 22px;
        color: rgba(0, 0, 0, 0.5);
        text-transform: capitalize;
    }
    .active {
        color: #000;
    }
`
const BestSellers = () => {
    useEffect(() => {
        // const script = document.createElement("script");
        // script.src = 'https://unpkg.com/swiper@8/swiper-bundle.min.js';
        // script.async = true;
        // document.body.appendChild(script);

        console.log('useEffect');
        
    }, [])

    let swiper = new Swiper(".mySwiper", {
        pagination: {
            el: ".swiper-pagination",
        },
        // navigation: {
        //     // nextEl: ".swiper-button-next",
        //     // prevEl: ".swiper-button-prev",
        // },
        slidesPerView: 4,
        spaceBetween: 30
    });


    return <StyledBestSellers>
        {console.log('StyledBestSellers')}
        <p className="title">Best sellers</p>
        <div className="all-products">
            <div>
                <span className="chose-product active">all products</span>
                <span className="chose-product">t-shirt</span>
                <span className="chose-product">hoodies</span>
                <span className="chose-product">jacket</span>
            </div>
            <Button bgColor='#000' borderRadius='0' textColor='#fff' width='100px' height='32px'>Show All</Button>
        </div>
        <div className="row mt-28">
            <div className="col col-quarter">
                <Card img={producImage1} price='63.85' categoty='dress' name='Adicolor Classics Joggers' />
            </div>
            <div className="col col-quarter">
                <Card img={producImage1} price='63.85' categoty='dress' name='Adicolor Classics Joggers' />
            </div>
            <div className="col col-quarter">
                <Card img={producImage1} price='63.85' categoty='dress' name='Adicolor Classics Joggers' />
            </div>
            <div className="col col-quarter">
                <Card img={producImage1} price='63.85' categoty='dress' name='Adicolor Classics Joggers' />
            </div>
        </div>

        <div className="container">
            <div class="swiper mySwiper">
                <div class="swiper-wrapper">
                    <div class="swiper-slide slide_1">Slide 1</div>
                    <div class="swiper-slide slide_2">Slide 2</div>
                    <div class="swiper-slide slide_3">Slide 3</div>
                    <div class="swiper-slide slide_4">Slide 4</div>
                    <div class="swiper-slide slide_5">Slide 5</div>
                    <div class="swiper-slide slide_5">Slide 6</div>
                    <div class="swiper-slide slide_5">Slide 7</div>
                </div>
                <div class="swiper-pagination"></div>
                <div class="swiper-button-next"></div>
                <div class="swiper-button-prev"></div>
            </div>
        </div>
    </StyledBestSellers>

}
export default BestSellers;