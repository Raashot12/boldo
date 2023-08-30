/* eslint-disable @typescript-eslint/no-explicit-any */
import {Container, Box, Grid, Text, Flex, Stack} from "@mantine/core"

import {useNavigate} from "react-router-dom"
import Bodo from "../assets/Bodo"

const Footer = () => {
  const router = useNavigate()

  const pathPushTo = (value: string) => {
    router(`/${value}`)
  }
  return (
    <Box
      py={{base: 70, sm: 145}}
      sx={{
        background: "white",
        color: "#777777",
        overflowX: "hidden",
      }}
    >
      <Container size={"lg"}>
        <Grid gutter={100}>
          <Grid.Col sm={6} md={4}>
            <Bodo />
            <Text
              fw={400}
              fz={"16px"}
              lh={"28px"}
              sx={{color: "#777"}}
              ff={"Open Sans"}
              mt={30}
            >
              Social media validation business model canvas graphical user
              interface launch party creative facebook iPad twitter.
            </Text>
          </Grid.Col>
          <Grid.Col md={8}>
            <Grid>
              <Grid.Col sm={6} md={4} sx={{cursor: "pointer"}}>
                <Text mb={32} fw={700} fz={20} color="#000">
                  Landings
                </Text>
                <Stack spacing={28}>
                  <Text
                    onClick={() => pathPushTo("/")}
                    fz={"20px"}
                    fw={400}
                    ff={" Open Sans"}
                  >
                    Home
                  </Text>
                  <Text
                    onClick={() => pathPushTo("/products")}
                    fz={"20px"}
                    fw={400}
                    ff={" Open Sans"}
                  >
                    Services
                  </Text>
                  <Text
                    onClick={() => pathPushTo("/about")}
                    fz={"20px"}
                    fw={400}
                    ff={" Open Sans"}
                  >
                    About
                  </Text>
                </Stack>
              </Grid.Col>
              <Grid.Col sm={6} md={4}>
                <Text mb={32} fw={700} fz={20} color="#000">
                  Company
                </Text>
                <Stack spacing={28}>
                  <Text
                    onClick={() => pathPushTo("/")}
                    fz={"20px"}
                    fw={400}
                    ff={" Open Sans"}
                  >
                    Home
                  </Text>
                  <Flex fz={"20px"} fw={400} ff={" Open Sans"} columnGap={16}>
                    <Text onClick={() => pathPushTo("/products")}>Careers</Text>
                    <Flex
                      align={"center"}
                      bg={"#65E4A3"}
                      sx={{
                        borderRadius: "120px",
                        color: "#0A2640",
                        cursor: "pointer",
                      }}
                      fz={13}
                      pt={1}
                      fw={700}
                      px={14}
                    >
                      Hiring!
                    </Flex>
                  </Flex>
                  <Text
                    onClick={() => pathPushTo("/about")}
                    fz={"20px"}
                    fw={400}
                    ff={" Open Sans"}
                  >
                    Services
                  </Text>
                </Stack>
              </Grid.Col>
              <Grid.Col sm={6} md={4}>
                <Text mb={32} fw={700} fz={20} color="#000">
                  Resources
                </Text>
                <Stack spacing={28}>
                  <Text
                    onClick={() => pathPushTo("/blog")}
                    fz={"20px"}
                    fw={400}
                    ff={" Open Sans"}
                  >
                    Blog
                  </Text>
                  <Text
                    onClick={() => pathPushTo("/products")}
                    fz={"20px"}
                    fw={400}
                    ff={" Open Sans"}
                  >
                    Products
                  </Text>
                  <Text
                    onClick={() => pathPushTo("/services")}
                    fz={"20px"}
                    fw={400}
                    ff={" Open Sans"}
                  >
                    Services
                  </Text>
                </Stack>
              </Grid.Col>
            </Grid>
          </Grid.Col>
        </Grid>
        <Text fz={16} fw={400} ff={" Open Sans"} mt={20} color="#777">
          All rights reserved.
        </Text>
      </Container>
    </Box>
  )
}

export default Footer
