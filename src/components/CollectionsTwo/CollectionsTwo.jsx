import styled from "styled-components"
import zaraCollection from 'assets/images/zara-collection.svg'
import zaraWhiteText from 'assets/images/zara-white-text.svg'
import zaraGrayText from 'assets/images/zara-gray-text.svg';
import { Button } from "components/Button";
const StyledCollectionTwo = styled.div`
    /* position: absolute;
    left: 0;
    right: 0; */
    margin-top : 60px;
    width: 100vw;
    margin-left: calc(50% - 50vw);
    .collection {
        width: 100%;
        background-color: black;
        position: relative;
        .collection-back-ground {
            width: 100%;
        }
        .collection-text1 {
            position: absolute;
            top: 30%;
            right: 20%;
            max-width: 500px;
        }
        .collection-text2 {
            position: absolute;
            top: 5%;
            right: 0;
        }
        .desc {
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 400;
            font-size: 26px;
            line-height: 40px;
            text-transform: capitalize;
            color: #FF6F61;
            margin-top: 50px;
            margin-bottom: 50px;
        }
    }
    .see-collection-btn-small {
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
    @media (max-width: 1400px) {
        .collection-text1 {
            right: 10% !important;
        }  
        .collection-img {
            display: none;
        } 
        .see-collection-btn-small {
            display: block;
        }
        .see-collection-btn-large{
            display: none;
        }
    }
    @media (max-width: 1024px) {
        .collection-text1 {
            right: 0 !important;
            top: 6% !important;
        }
    }
    @media (max-width: 768px) {
        .desc,
        .collection-text2 {
            display: none;
        }
        .collection-text1 {
            right: 6% !important;
            top: 77% !important;
        }
    }

`
const CollectionsTwo = () => {
    return <StyledCollectionTwo>
        <div className="collection" id="collection-two">
            <img className="collection-back-ground" src={zaraCollection} alt="" />
            <img className="collection-text2" src={zaraGrayText} alt="" />

            <div className="collection-text1">
                <div className="collection-img">
                    <img src={zaraWhiteText} alt="" />
                </div>
                <p className="desc">
                    Lustrous yet understated. The new evening
                    wear collection exclusively offered at the
                    reopened Giorgio Armani boutique in Los
                    Angeles.
                </p>
                <div className="see-collection-btn-large">
                    <Button width='237px' height='72px' bgColor='#fff' textColor='#000' borderRadius='0px' fontSize='30px'>See Collection</Button>
                </div>
                <div className="see-collection-btn-small">
                    <Button width='150px' height='45px' bgColor='#fff' textColor='#000' borderRadius='0px' fontSize='20px'>See Collection</Button>
                </div>
            </div>

        </div>
    </StyledCollectionTwo>
}
{
    // // const collectionsTwoHeight = getComputedStyle(document.getElementById('collection-two')).getPropertyValue('height');
    // // console.log('collectionsTwoHeight = ',collectionsTwoHeight);
    // const collectionsTwoTag = document.getElementById('collection-two');
    // console.log('collectionsTwoTag ',collectionsTwoTag);
    // // const collectionsTwoStyle = getComputedStyle(collectionsTwoTag,"");
}
export default CollectionsTwo;