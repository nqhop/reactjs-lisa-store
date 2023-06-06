import styled from "styled-components"
import Header from "components/Header/Header"
import Collections from "components/Collections/Collections"
import PopularStyles from "components/PopularStyles/PopularStyles"
import AllProduct from "components/AllProduct/AllProduct"
import CollectionsTwo from "components/CollectionsTwo/CollectionsTwo"
import BestSellers from "components/BestSellers/BestSellers"
import FollowAndDiscounts from "components/FollowAndDiscounts/FollowAndDiscounts"
import Footer from "components/Footer/Footer"
const StyledHome = styled.div`
    

`

export const Home = () => {
    return <StyledHome>
        <Header />
        <Collections />
        <PopularStyles />
        <AllProduct/>
        <CollectionsTwo/>
        <BestSellers/>
        <FollowAndDiscounts/>
        <Footer/>

    </StyledHome>
}