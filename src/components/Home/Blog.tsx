import {
  Box,
  BoxProps,
  Container,
  Text,
  Image,
  Group,
  Center,
} from "@mantine/core"
import React from "react"
import styled from "styled-components"

const GridWripper = styled(Box)<BoxProps>`
  display: grid;
  margin-top: 2rem;
  grid-gap: 2rem;
  grid-template-columns: repeat(auto-fill, minmax(18.75rem, 1fr));
  box-sizing: border-box;
  font-family: "Montserrat", sans-serif;
  text-decoration: none !important;
  cursor: pointer;
`
const Blog = () => {
  return (
    <Container
      size={"lg"}
      pt={{base: 20, sm: 60, md: 50}}
      pb={{base: 20, sm: 60, md: 50}}
    >
      <Text color="#777" fw={400} fz={20} ff="Open Sans" ta={"center"}>
        Our Blog
      </Text>
      <Text
        ff="Manrope"
        fz={{base: 28, md: 48}}
        color="#000"
        ta={"center"}
        px={{base: 10, lg: 120}}
        fw={400}
        mt={12}
      >
        Value proposition accelerator product management venture
      </Text>
      <Box mt={{base: 69, sm: 79}}>
        <GridWripper>
          {blogData.map(value => {
            return (
              <React.Fragment key={value.id}>
                <Box>
                  <Image src={value.image} />
                  <Box mt={24}>
                    <Group spacing={10}>
                      <Text color="#0A2640" fw={700} ff="Open Sans">
                        {value.category}
                      </Text>
                      <Text color="#777" fw={400} fz={16} ff="Open Sans">
                        {value.date}
                      </Text>
                      <Box
                        component="article"
                        fw={400}
                        h={99}
                        fz={20}
                        ff="Open Sans"
                        color="#00"
                      >
                        {value.content}
                      </Box>
                    </Group>
                    <Group spacing={10} mt={20}>
                      <img
                        src={value.profileImage}
                        alt={value.name}
                        loading="eager"
                        style={{
                          maxHeight: "auto",
                          width: "32px",
                          verticalAlign: "middle",
                        }}
                      />
                      <Text fw={400} fz={16} ff={"Open Sans"} lh={"28px"}>
                        {value.name}
                      </Text>
                    </Group>
                  </Box>
                </Box>
              </React.Fragment>
            )
          })}
        </GridWripper>
        <Center mt={84}>
          <ExploreBtn>Load more</ExploreBtn>
        </Center>
      </Box>
    </Container>
  )
}

export default Blog

const blogData = [
  {
    id: 1,
    content: "Pitch termsheet backing validation focus release.",
    image:
      "https://res.cloudinary.com/rashot/image/upload/v1693374743/Rectangle_1270_avuz0m.svg",
    profileImage:
      "https://res.cloudinary.com/rashot/image/upload/v1693374745/Ellipse_10_iguc11.svg",
    category: "Category",
    date: "November 22, 2021",
    name: "Chandler Bing",
  },
  {
    id: 2,
    content:
      "Seed round direct mailing non-disclosure agreement graphical user interface rockstar.",
    image:
      "https://res.cloudinary.com/rashot/image/upload/v1693374770/Rectangle_1270_2_cypq05.svg",
    profileImage:
      "https://res.cloudinary.com/rashot/image/upload/v1693374744/Ellipse_10_1_ibwmkz.svg",
    category: "Category",
    date: "November 22, 2021",
    name: "Rachel Green",
  },
  {
    id: 3,
    content:
      "Beta prototype sales iPad gen-z marketing network effects value proposition",
    image:
      "https://res.cloudinary.com/rashot/image/upload/v1693375157/Rectangle_1270_3_avgg8p.svg",
    profileImage:
      "https://res.cloudinary.com/rashot/image/upload/v1693374744/Ellipse_10_2_r4hcq4.svg",
    category: "Category",
    date: "November 22, 2021",
    name: "Monica Geller",
  },
]
const ExploreBtn = styled.button`
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
`
