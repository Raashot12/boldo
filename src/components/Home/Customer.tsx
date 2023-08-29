import {Box, Grid, Group, Image, Stack, Text} from "@mantine/core"
import {Container} from "@mantine/core"
import IconChecked from "../../assets/IconChecked"
import styled from "@emotion/styled"

const Customer = () => {
  return (
    <Container size={"lg"}>
      <Grid pt={{base: 90, lg: 120}} gutterLg={150} gutterSm={50} px={0}>
        <Grid.Col md={6}>
          <Image src="/src/img/caller.svg" />
        </Grid.Col>
        <Grid.Col md={6}>
          <Text
            ff="Manrope"
            fz={{base: 28, md: 36}}
            color="#000"
            pt={{base: 10, lg: 70}}
          >
            We connect our customers with the best, and help them keep up-and
            stay open.
          </Text>
          <Stack mt={40} spacing={24}>
            <Group>
              <IconChecked />
              <Text ff="Open Sans" fz={{base: 18, sm: 20}} color="#000">
                Advisor success customer launch party.
              </Text>
            </Group>
            <Group>
              <IconChecked />
              <Text
                ff="Open Sans"
                fz={{base: 18, sm: 20}}
                fw={400}
                color="#000"
              >
                Advisor success customer launch party.
              </Text>
            </Group>
            <Group>
              <IconChecked />
              <Text ff="Open Sans" fz={{base: 18, sm: 20}} color="#000">
                Business-to-consumer long tail.
              </Text>
            </Group>
          </Stack>
          <Box mt={{base: 40, md: 56}}>
            <BuyTemplateBtn>Start now</BuyTemplateBtn>
          </Box>
        </Grid.Col>
      </Grid>
    </Container>
  )
}

export default Customer

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
