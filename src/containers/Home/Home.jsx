import styled from "styled-components"
import Header from "components/Header/Header"
import Collections from "components/Collections/Collections"
import PopularStyles from "components/PopularStyles/PopularStyles"
import AllProduct from "components/AllProduct/AllProduct"
const StyledHome = styled.div`
    

`

export const Home = () => {
    return <StyledHome>
        <Header />
        <Collections />
        <PopularStyles />
        <AllProduct/>

    </StyledHome>
}