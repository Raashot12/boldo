import styled from "@emotion/styled"
import {Box, Center, Container, Group, Text, TextInput} from "@mantine/core"
import CirlcleNewletter from "../../assets/CirlcleNewletter"

const Newsletter = () => {
  return (
    <Container size={"lg"} py={{base: 94, md: 124}}>
      <Box
        pos={"relative"}
        w={"100%"}
        bg={"#0A2640"}
        sx={{borderRadius: "12px"}}
        py={72}
      >
        <Center>
          <Box sx={{zIndex: 20}}>
            <Text
              color="white"
              ff="Manrope"
              fz={{base: 28, md: 48}}
              fw={400}
              ta={"center"}
              px={{base: 16, sm: 60, md: 85, lg: 190}}
            >
              An enterprise template to ramp up your company website
            </Text>
            <Center>
              <Group
                px={{base: 16, sm: 60, md: 155, lg: 190}}
                mt={50}
                spacing={20}
              >
                <TextInput
                  placeholder="Your email address"
                  type="email"
                  sx={{
                    input: {
                      height: "58px",
                      borderRadius: "240px",
                      width: "370px",
                      maxWidth: "100%",
                      fontSize: 16,
                      "@media (max-width: 36em)": {
                        width: "330px",
                      },
                    },
                    "& ::placeholder": {
                      fontSize: "20px",
                      color: "#000",
                      fontWeight: 400,
                      fontFamily: "Open Sans",
                    },
                  }}
                />
                <StartNowBtn>Start Now</StartNowBtn>
              </Group>
            </Center>
          </Box>
        </Center>
        <Box pos={"absolute"} top={0} right={0}>
          <CirlcleNewletter />
        </Box>
      </Box>
    </Container>
  )
}

export default Newsletter

export const StartNowBtn = styled.button`
  height: 58px;
  padding: 0px 56px;
  justify-content: center;
  align-items: center;
  background-color: #65e4a3;
  border-radius: 56px;
  color: #0a2640;
  gap: 8px;
  flex-shrink: 0;
  font-family: Open Sans;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 28px;
  &:hover {
    background-color: #44926a;
    color: #0a2640;
    transition: all 0.5s ease-in-out;
  }
`
