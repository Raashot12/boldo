import AOSInit from "../shared/AOSInit"
import {Box, Container, Flex, Grid, Image, Text} from "@mantine/core"
import styled from "styled-components"
import Circle from "../../assets/Circle"
import {Carousel} from "@mantine/carousel"
import {brand} from "../shared/Brand"

const HeroSection = () => {
  AOSInit({
    disable: false,
  })
  return (
    <>
      <Box
        mih={{base: 729, sm: 700, lg: 801}}
        bg={"white"}
        bgr={"no-repeat"}
        bgp={"center"}
        className="
        bg-black] 
        relative
        top-0
        z-10
        flex"
      >
        <Box pos={"absolute"} right={0} top={0}>
          <Circle />
        </Box>
        <Container
          data-aos="fade-right"
          data-aos-offset="400"
          data-aos-easing="ease-in-sine"
          pos={"relative"}
          size={"lg"}
          w={"100%"}
          sx={{overflow: "hidden"}}
        >
          <Box top={{base: 53, md: 154}} pos={"relative"}>
            <Grid gutterXl={60} gutterSm={50} p={0}>
              <Grid.Col md={7}>
                <Box pt={{base: 65, md: 0, lg: 30}}>
                  <Text
                    ff={"Manrope"}
                    fz={{base: 30, md: 48}}
                    lh={{base: "42px", md: "72px"}}
                    fw={400}
                  >
                    Save time by building fast with Boldo Template
                  </Text>
                  <Text ff={"Open Sans"} fw={400} fz={16} lh={"28px"} mt={16}>
                    Funding handshake buyer business-to-business metrics iPad
                    partnership. First mover advantage innovator success
                    deployment non-disclosure.
                  </Text>
                  <Flex
                    mt={50}
                    columnGap={24}
                    rowGap={24}
                    wrap={{base: "wrap", sm: "nowrap"}}
                  >
                    <BuyTemplateBtn>Buy template</BuyTemplateBtn>
                    <ExploreBtn>Explore</ExploreBtn>
                  </Flex>
                </Box>
              </Grid.Col>
              <Grid.Col md={5}>
                <Image
                  src={
                    "https://res.cloudinary.com/rashot/image/upload/v1693370554/HeroGraphics_r5m4eq.svg"
                  }
                />
              </Grid.Col>
            </Grid>
            <Box mt={95}>
              <Carousel
                withIndicators={false}
                withControls={false}
                slideSize="200px"
                slideGap="sm"
                loop
                align="center"
                breakpoints={[
                  {maxWidth: "md", slideSize: "25%"},
                  {maxWidth: "sm", slideSize: "35%", slideGap: 10},
                ]}
              >
                {brand.map(item => (
                  <Carousel.Slide key={item.id}>{item.brand}</Carousel.Slide>
                ))}
              </Carousel>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  )
}
export default HeroSection

const BuyTemplateBtn = styled.button`
  height: 58px;
  padding: 0px 56px;
  justify-content: center;
  align-items: center;
  background-color: #0a2640;
  border-radius: 56px;
  border: 2px solid #0a2640;
  color: white;
  gap: 8px;
  flex-shrink: 0;
  font-family: Open Sans;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 28px;
  &:hover {
    background-color: transparent;
    color: #0a2640;
    transition: all 0.5s ease-in-out;
  }
  @media only screen and (max-width: 47.5em) {
    width: 100%;
  }
`
export const ExploreBtn = styled.button`
  height: 58px;
  padding: 0px 56px;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: 56px;
  border: 2px solid #0a2640;
  color: #0a2640;
  gap: 8px;
  flex-shrink: 0;
  font-family: Open Sans;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 28px;
  &:hover {
    background-color: transparent;
    color: #0a2640;
    transition: all 0.5s ease-in-out;
  }
  @media only screen and (max-width: 47.5em) {
    width: 100%;
  }
`
