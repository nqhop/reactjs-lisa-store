import styled from "styled-components"
import cartWhiteIcon from 'assets/icons/cart-white.svg'

const StyledShowNowButton = styled.button`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 223px;
    height: 72px;
    color: #fff;
    background-color: #1E2832;
    font-size: 29px;
    border: none;
    img{
        margin: 0 8px;
    }
`
export const ShopNowButton = () => {
    return <StyledShowNowButton>
            <img src={cartWhiteIcon} alt="" />
            <span> Shop Now </span>
    </StyledShowNowButton>
}