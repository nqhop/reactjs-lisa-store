import styled from "styled-components"
import zaraCollection from 'assets/images/zara-collection.svg'
import zaraWhiteText from 'assets/images/zara-white-text.svg'
import zaraGrayText from 'assets/images/zara-gray-text.svg';
import { Button } from "components/Button";
const StyledCollectionTwo = styled.div`
    position: absolute;
    left: 0;
    right: 0;
    
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

`
const CollectionsTwo = () => {
    return <StyledCollectionTwo>
        <div className="collection" id="collection-two">
            <img className="collection-back-ground" src={zaraCollection} alt="" />
            <img className="collection-text2" src={zaraGrayText} alt="" />

            <div className="collection-text1">
                <img src={zaraWhiteText} alt="" />
                <p className="desc">
                    Lustrous yet understated. The new evening
                    wear collection exclusively offered at the
                    reopened Giorgio Armani boutique in Los
                    Angeles.
                </p>
                <Button width='237px' height='72px' bgColor='#fff' textColor='#000' borderRadius='0px' fontSize='30px'>See Collection</Button>
            </div>

        </div>
    </StyledCollectionTwo>
}
export default CollectionsTwo;