import styled from "styled-components"
import userIcon from 'assets/icons/user.svg'

const StyledButton = styled.button`
    width: ${props => props.width};
    height: ${props => props.height};
    border-radius: ${props => props.borderRadius};
    border: ${props => props.boderColor ? `1px solid ${props.boderColor}` : 'none'};
    background-color: ${props => props.bgColor};
    font-weight: 500;
    color: ${props => props.textColor};
    font-size: ${props => props.fontSize};
    display: flex;
    flex-direction: row;
    align-items: center;
    font-family: 'Roboto';
    div{
        padding: 5px 15px;
    }
`

export const Button = ({ width, height, textColor, bgColor, boderColor, icon, marginRightIcon, borderRadius, fontSize, children }) => {
    return <StyledButton
        width={width}
        height={height}
        textColor={textColor}
        bgColor={bgColor}
        borderRadius={borderRadius}
        fontSize={fontSize}
        boderColor={boderColor}

    >
        <div>
            {icon ? <img style={{ marginRight: marginRightIcon }} src={icon} /> : ''}
            {children}
        </div>
    </StyledButton>
}

Button.defaultProps = {
    bgColor: 'transparent',
    // bgColor: 'red',
    textColor: '#000',
    // width: "128px",
    height: "46px",
    borderRadius: '40px',
    marginRightIcon: '10px',
    fontSize: '18px'

};