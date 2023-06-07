import styled from "styled-components"
import { Button, ShopNowButton } from "components/Button"
import cartWhiteIcon from 'assets/icons/cart-white.svg'
import collectionImage from 'assets/images/collection1.svg'
import collectionImageBackground from 'assets/images/collection1-background.svg';
import flowerImage from 'assets/images/flower.svg'
import flowerImage2 from 'assets/images/flower2.svg'

const StyledCollections = styled.div`
    height: 760px;
    /* position: absolute;
    left: 0;
    right: 0; */
    width: 100vw;
    margin-left: calc(50% - 50vw);
    background-color: #c9e5f1;
    padding: 120px 16px 50px;
    .wrapper {
        max-width: 1320px;
        margin: 0 auto;
    }

    .collections {
        position: relative;
    }

    .collections-stytle{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 300;
        font-size: 74px;
        line-height: 55px;
        text-transform: capitalize;
    }
    .collections-desc {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 30px;
        line-height: 55px;
        text-transform: capitalize;
        max-width: 680px;
        width: 50%;
        margin-top: 52px;
    }
    .collection-image{
        position: absolute;
        right: 0;
        top: 0;
        width: 424px;
        height: 542px;
        display: flex;
        z-index: 1;
        img{
            width: 100%;
        }
    }
    .collection-iamge-background{
        position: absolute;
        right: -20px;
        top: 24px;
        width: 424px;
        height: 542px;
        display: flex;
        img{
            width: 100%;
        }   
    }
    .shop-now-btn {
        margin-top: 40px;
    }
    .small-btn {
        display: none;
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
    @media screen and (max-width: 865px) {
        .collection-image,
        .collection-iamge-background{
            display: none;
        }
        .collections-stytle {
            font-size: 30px;
        }
        .collections-desc{
            font-size: 20px;
            margin-top: 12px;
            line-height: 30px;
            width: 100%;
        }
        .shop-now-btn {
            margin-top: 16px;
        }
        .nomal-btn {
            display: none;
        }
        .small-btn {
            display: block;
        }
        padding: 30px;
        height: auto;
    }
`
const StyledFlower1 = styled.div`
    position: absolute;
    right: 0;
    top: 300px;
`
const StyledFlower2 = styled.div`
    position: absolute;
    left: -0px;
    top: 400px;
`

const Collections = () => {
    return <>
        <StyledCollections>
            <div className="wrapper">

                <div className="collections">
                    <p className="collections-stytle">Collections</p>
                    <div className="collections-desc">
                        <span >you can explore ans shop many differnt collection
                            from various barands here.</span>
                    </div>
                    <div className="shop-now-btn">
                        <div className="nomal-btn">
                            <Button width='223px' height='72px' textColor='#fff' bgColor='#1E2832' borderRadius='0px' fontSize='29px' icon={cartWhiteIcon}>Shop Now</Button>
                        </div>
                        <div className='small-btn'>
                            <Button width='120px' height='40px' textColor='#fff' bgColor='#1E2832' borderRadius='0px' fontSize='20px'>Shop Now</Button>
                        </div>
                    </div>
                    {/* <ShopNowButton /> */}

                    <div className="collection-image">
                        <img src={collectionImage} alt="" />
                    </div>
                    <div className="collection-iamge-background">
                        <img src={collectionImageBackground} alt="" />
                    </div>
                </div>
            </div>

        </StyledCollections>
        <StyledFlower1>
            <img className="flower" src={flowerImage} alt="" />
        </StyledFlower1>
        <StyledFlower2>
            <img className="flower" src={flowerImage2} alt="" />
        </StyledFlower2>
    </>
}
export default Collections;