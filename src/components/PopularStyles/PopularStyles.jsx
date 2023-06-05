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
const StyledPopularStyles = styled.div`
    margin-top: 760px;
    /* height: 400px; */
    background-color: #9797f1;
    .brand{
        display: flex;
        justify-content: space-around;
        padding: 90px 0;
    }
    .position-relative{
        position: relative;
    }
    .text-orientation{
        position: absolute;
        left: -20px;
        padding: 8px 0;
        height: 100%;
        writing-mode: vertical-rl;
        text-orientation: mixed;

        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 34px;
        line-height: 40px;
        text-align: center;
        text-transform: uppercase;
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
        <div className="popular-styles">
            <div className="row position-relative">
                <div className='text-orientation'>
                    Explore new and popular styles
                </div>
                <div className="col col-haft">
                    <Product width='648px' height='648px' name="Manto" quantity={56} img={popularProduct1} />
                </div>
                <div className="col col-haft">
                    <div className="row">
                        <div className="col col-haft">
                            <Product width='312px' height='312px' name="Pants" quantity={98} img={popularProduct2} sale={true} />
                        </div>
                        <div className="col col-haft">
                            <Product width='312px' height='312px' name="Coat" quantity={26} img={popularProduct3} sale={true} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col col-haft">
                            <Product width='312px' height='312px' name="Shirt" quantity={45} img={popularProduct4} />
                        </div>
                        <div className="col col-haft">
                            <Product width='312px' height='312px' name="Jacket" quantity={76} img={popularProduct5} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </StyledPopularStyles>
}
export default PopularStyles;