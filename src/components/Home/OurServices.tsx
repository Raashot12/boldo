import {
  Box,
  Center,
  Container,
  Divider,
  Group,
  Stack,
  Text,
} from "@mantine/core"
import IconForward from "../../assets/IconForward"
import {Carousel} from "@mantine/carousel"

const OurServices = () => {
  return (
    <Box bg={"#0A2640"} pt={{base: 45, md: 84}} pb={{base: 45, md: 84}}>
      <Text
        sx={{color: "#F1F1F1"}}
        ff={"Open Sans"}
        fz={20}
        fw={400}
        lh={"32px"}
        ta={"center"}
      >
        Our services
      </Text>
      <Center mb={72}>
        <Text
          ff={"Manrope, sans-serif"}
          fz={{base: "30px", md: "48px"}}
          lh={{base: "48px", md: "64px", lg: "72px"}}
          ta={"center"}
          maw={"842px"}
          sx={{maxWidth: "842px", width: "100%"}}
          color="white"
        >
          Handshake infographic mass market crowdfunding iteration.
        </Text>
      </Center>
      <Container size={"xl"}>
        <Carousel
          withIndicators={false}
          withControls={false}
          slideSize="300px"
          loop
          align="center"
          breakpoints={[
            {maxWidth: "md", slideSize: "25%"},
            {maxWidth: "sm", slideSize: "50%", slideGap: 20},
          ]}
        >
          {ourserviceData.map(value => {
            return (
              <Box
                className="is-clone"
                pos={"relative"}
                mr={{base: 40, lg: 90}}
                key={value.id}
                sx={{
                  maxWidth: "300px",
                  flexShrink: 0,
                  width: "100%",
                }}
              >
                <Box pos={"relative"}>
                  <Box
                    component="img"
                    src={value.graphicPic}
                    onDragStart={() => false}
                    alt="cause images"
                    sx={{
                      objectFit: "cover",
                      verticalAlign: "middle",
                    }}
                    w={"100%"}
                    loading="lazy"
                  />
                </Box>
                <Box pt={19}>
                  <Text
                    fz={16}
                    fw={400}
                    mb={15}
                    ff={"Open Sans"}
                    sx={{cursor: "pointer"}}
                    color="white"
                  >
                    {value.text}
                  </Text>

                  <Stack
                    w={"fit-content"}
                    mt={28}
                    spacing={0}
                    sx={{cursor: "pointer"}}
                  >
                    <Group spacing={12}>
                      {" "}
                      <Text fw={700} fz={20} ff={"Open Sans"} color="white">
                        Explore page
                      </Text>
                      <IconForward />
                    </Group>
                    <Divider color="white" />
                  </Stack>
                </Box>
              </Box>
            )
          })}
        </Carousel>
      </Container>
    </Box>
  )
}

export default OurServices

const ourserviceData = [
  {
    id: 1,
    text: "Cool feature title",
    graphicPic:
      "https://res.cloudinary.com/rashot/image/upload/v1693373023/Walking_gvxzkk.svg",
  },
  {
    id: 2,
    text: "Even cooler feature",
    graphicPic:
      "https://res.cloudinary.com/rashot/image/upload/v1693373070/shakinghands_pr7oxk.svg",
  },
  {
    id: 3,
    text: "Cool feature title",
    graphicPic:
      "https://res.cloudinary.com/rashot/image/upload/v1693373139/house_jjk8fs.svg",
  },
]
