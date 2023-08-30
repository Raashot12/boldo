import {Flex, Grid, Image, Stack, Text} from "@mantine/core"
import {Container} from "@mantine/core"
import IconFlower from "../../assets/IconFlower"
import {useState} from "react"
import IconLight from "../../assets/IconLight"
import IconEye from "../../assets/IconEye"

const data = [
  {
    text: "We connect our customers with the best.",
    type: "Flower",
    id: 1,
  },
  {
    text: "Advisor success customer launch party.",
    type: "Eye",
    id: 2,
  },
  {
    text: "Business-to-consumer long tail.",
    id: 3,
    type: "Light",
  },
]
const Connect = () => {
  const [activeIndex, setActiveIndex] = useState(1)
  const handleClick = (id: number) => {
    setActiveIndex(id)
  }
  return (
    <Container size={"lg"} sx={{overflow: "hidden"}}>
      <Grid
        pb={{base: 90, lg: 120}}
        gutterLg={158}
        gutterSm={50}
        gutterXs={60}
        px={0}
        pt={{base: 50, lg: 0}}
      >
        <Grid.Col md={6}>
          <Text
            ff="Manrope"
            fz={{base: 28, md: 36}}
            color="#000"
            pt={{base: 10, md: 50, lg: 90}}
          >
            We connect our customers with the best, and help them keep up-and
            stay open.
          </Text>
          <Stack mt={40} spacing={24}>
            {data.map(value => {
              return (
                <Flex
                  wrap={"nowrap"}
                  align={"center"}
                  columnGap={15}
                  onClick={() => handleClick(value.id)}
                  pl={20}
                  h={68}
                  sx={{
                    background: activeIndex === value.id ? "#0A2640" : "#FFF",
                    color: activeIndex === value.id ? "#FFF" : "#0A2640",
                    boxShadow: "0px 4px 32px 0px rgba(0, 0, 0, 0.08)",
                    cursor: "pointer",
                    borderRadius: "4px",
                  }}
                >
                  {value.type === "Flower" ? (
                    <IconFlower
                      fill={activeIndex === value.id ? "#FFF" : "#0A2640"}
                    />
                  ) : value.type === "Eye" ? (
                    <IconEye
                      fill={activeIndex === value.id ? "#FFF" : "#0A2640"}
                    />
                  ) : value.type === "Light" ? (
                    <IconLight
                      fill={activeIndex === value.id ? "#FFF" : "#0A2640"}
                    />
                  ) : (
                    ""
                  )}
                  <Text>{value.text}</Text>
                </Flex>
              )
            })}
          </Stack>
        </Grid.Col>
        <Grid.Col md={6}>
          <Image src="https://res.cloudinary.com/rashot/image/upload/v1693372337/girlcalling_yvsndw.svg" />
        </Grid.Col>
      </Grid>
    </Container>
  )
}

export default Connect
