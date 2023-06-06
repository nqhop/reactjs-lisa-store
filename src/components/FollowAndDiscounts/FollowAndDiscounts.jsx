import styled from "styled-components"
import FollowAndDiscount1 from 'assets/images/follow-and-discounts/image-product-8.svg';
import FollowAndDiscount2 from 'assets/images/follow-and-discounts/image-product-9.svg';
import FollowAndDiscount3 from 'assets/images/follow-and-discounts/image-product-10.svg';
import FollowAndDiscount4 from 'assets/images/follow-and-discounts/image-product-11.svg';
import FollowAndDiscount5 from 'assets/images/follow-and-discounts/image-product-12.svg';
import FollowAndDiscount6 from 'assets/images/follow-and-discounts/image-product-13.svg';

const StyledFollowAndDiscounts = styled.div`
    margin-top: 100px;
    background: #E5E5E5;
    position: absolute;
    left: 0;
    right: 0;
    .title {
        margin-top: 80px;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 500;
        font-size: 50px;
        line-height: 59px;
        /* identical to box height */
        text-align: center;
        text-transform: capitalize;
    }
    .listImg {
        max-width: 1320px;
        margin: 0 auto;
        margin-top: 60px;
        display: flex;
        justify-content: space-between;
    }
    .official{
        margin-top: 70px;
        margin-bottom: 100px;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 500;
        font-size: 28px;
        line-height: 33px;
        /* identical to box height */

        text-align: center;
        text-transform: capitalize;

        /* Primary */

        color: #FF6F61;
    }
`
const FollowAndDiscounts = () => {
    return <StyledFollowAndDiscounts>
        <p className="title">Follow products and discounts on Instagram</p>
        <div className="listImg">
            <img src={FollowAndDiscount1} alt="" />
            <img src={FollowAndDiscount2} alt="" />
            <img src={FollowAndDiscount3} alt="" />
            <img src={FollowAndDiscount4} alt="" />
            <img src={FollowAndDiscount5} alt="" />
            <img src={FollowAndDiscount6} alt="" />
        </div>
        <p className="official">@lisa.official</p>
    </StyledFollowAndDiscounts>
}
export default FollowAndDiscounts;