import styled from 'styled-components'

import searhIcon from 'assets/icons/search.svg'
import { Button } from 'components/Button'
import userIcon from 'assets/icons/user.svg'
import cartIcon from 'assets/icons/cart.svg'

const StyledHeader = styled.div`
    display: flex;
    background-color: #9ccaf5;
    justify-content: space-between;
    align-items: center;
    height: 90px;
    padding: 0 8px;
    border-bottom: #E3E3E3 solid 1px;
    .store-name {
        font-family: 'AmstelvarAlpha';
        font-style: normal;
        font-weight: 400;
        font-size: 42px;
        line-height: 90px;
        
    }
    .right-header {
        display: flex;
        flex-direction: row;
        .account-btn {
            margin-right: 24px;
        }
    }
    @media screen and (max-width: 470px){
        .store-name {
            display: none;
        }
    }
`

const Header = () => {
    return <StyledHeader>
        <img src={searhIcon} alt="" style={{ width: '20px' }} />
        <p className='store-name'>Lisa Stote</p>
        <div className='right-header'>
            <div className="account-btn">
                <Button textColor='#1E2832' icon={userIcon}>Account</Button>
            </div>
            <Button textColor='#1E2832' icon={cartIcon}>Shoping</Button>
        </div>
    </StyledHeader>
}
export default Header;