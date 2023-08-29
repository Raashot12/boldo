import {Box, Container, Divider, Flex, Grid, Image, Text} from "@mantine/core"
import DropDown from "../../assets/DropDown"

const BannerFaq = () => {
  return (
    <Container size="xl">
      <Box pt={{base: 60, md: 120}} pb={{base: 60, md: 120}}>
        <Image
          src={
            "https://res.cloudinary.com/rashot/image/upload/v1693342534/Rectangle_1270_1_jek0k2.png"
          }
          w={"100%"}
        />
        <Box pt={{base: 30, md: 50, lg: 90}}>
          <Grid gutterLg={"150px"} gutterXs={40}>
            <Grid.Col md={6}>
              <Text ff="Manrope" fz={{base: 28, md: 36}} color="#000">
                We connect our customers with the best, and help them keep
                up-and stay open.
              </Text>
            </Grid.Col>
            <Grid.Col md={6}>
              <Box mb={32}>
                <Flex justify={"space-between"} columnGap={50} align={"center"}>
                  <Text>We connect our customers with the best?</Text>
                  <DropDown />
                </Flex>
                <Divider mt={16} color="#C4C4C4" />
              </Box>
              <Box>
                <Flex justify={"space-between"} columnGap={50} align={"center"}>
                  <Text>We connect our customers with the best?</Text>
                  <DropDown />
                </Flex>
                <Divider mt={16} color="#C4C4C4" />
              </Box>
            </Grid.Col>
          </Grid>
        </Box>
      </Box>
    </Container>
  )
}

export default BannerFaq
