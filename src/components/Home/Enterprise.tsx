import {Box, Container, Flex, Group, Stack, Text} from "@mantine/core"
import {Carousel, Embla} from "@mantine/carousel"
import IconPrev from "../../assets/IconPrev"
import IconNext from "../../assets/IconNext"
import {useMediaQuery} from "@mantine/hooks"
import {useCallback, useState} from "react"
import {blogData} from "../../data"

const Enterprise = () => {
  const largeScreen = useMediaQuery("(max-width: 48em)")
  const [embla, setEmbla] = useState<Embla | null>(null)

  const scrollPrev = useCallback(() => {
    if (embla) embla.scrollPrev()
  }, [embla])

  const scrollNext = useCallback(() => {
    if (embla) embla.scrollNext()
  }, [embla])
  return (
    <Box bg="#0A2640" pt={{base: 80, sm: 100}} pb={{base: 80, sm: 100}}>
      <Container size={"lg"} mb={62}>
        <Flex
          justify={"space-between"}
          wrap={{base: "wrap", md: "nowrap"}}
          rowGap={30}
          columnGap={{base: "0px", md: "200px", lg: "400px"}}
        >
          <Text ff="Manrope" fz={{base: 24, md: 36}} color="#FFF">
            An enterprise template to ramp up your company website
          </Text>
          <Group spacing={24} noWrap>
            <IconPrev size={largeScreen ? "42" : "72"} onclick={scrollPrev} />
            <IconNext size={largeScreen ? "42" : "72"} onclick={scrollNext} />
          </Group>
        </Flex>
      </Container>
      <Carousel
        dragFree
        slideSize={"350px"}
        slideGap="xl"
        loop={true}
        getEmblaApi={setEmbla}
        initialSlide={0}
        withControls={false}
        onNextSlide={() => null}
      >
        {slideData.map(value => {
          return (
            <Carousel.Slide key={value.id} sx={{cursor: "pointer"}}>
              <Box
                bg="white"
                pr={30}
                pt={40}
                pb={40}
                pl={40}
                sx={{borderRadius: "12px"}}
              >
                <Text
                  fz={24}
                  fw={400}
                  lh={"36px"}
                  ff={"Open Sans"}
                  mb={43}
                  color="#0A2640"
                >
                  {value.text}
                </Text>
                <Group>
                  <img
                    src={value.image}
                    alt={value.text}
                    loading="eager"
                    style={{
                      maxHeight: "auto",
                      width: "58px",
                      verticalAlign: "middle",
                    }}
                  />
                  <Stack spacing={1}>
                    <Text color="#0A2640" fw={700}>
                      {value.name}
                    </Text>
                    <Text
                      ff={"Open sans"}
                      sx={{fontSize: "14px"}}
                      color="#0A2640"
                      fw={400}
                    >
                      {value.subtitle}
                    </Text>
                  </Stack>
                </Group>
              </Box>
            </Carousel.Slide>
          )
        })}
      </Carousel>
    </Box>
  )
}

export default Enterprise

const slideData = [
  {
    id: 1,
    text: "“Buyer buzz partner network disruptive non-disclosure agreement business”",
    image:
      "https://res.cloudinary.com/rashot/image/upload/v1693341490/Ellipse_4_3_bntjbw.png",
    name: "Albus Dumbledore",
    subtitle: "Manager @ Howarts",
  },
  {
    text: "“Learning curve infrastructure value proposition advisor strategy user experience hypotheses investor.”",
    id: 2,
    image:
      "https://res.cloudinary.com/rashot/image/upload/v1693341518/Ellipse_4_2_eeimvo.png",
    name: "Severus Snape",
    subtitle: "Manager @ Slytherin",
  },
  {
    text: "“Release facebook responsive web design business model canvas seed money monetization.”",
    id: 3,
    image:
      "https://res.cloudinary.com/rashot/image/upload/v1693341645/Ellipse_4_1_aprch4.png",
    name: "Harry Potter",
    subtitle: "Team Leader @ Gryffindor",
  },
]
