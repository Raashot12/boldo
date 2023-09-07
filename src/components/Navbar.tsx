import {Link} from "react-router-dom"
import logo from "../img/logo.png"
import {useState} from "react"
import {Box, Container} from "@mantine/core"
const Navbar = () => {
  const [showNav, setShowNav] = useState(false)
  const toggleHamburger = () => {
    setShowNav(!showNav)
  }
  const isBlogPath = window.location.pathname === "/blog"
  return (
    <Container size={"lg"} pos={"relative"} px={0}>
      <Box
        component="nav"
        className="flex flex-wrap
          items-center
          justify-between
          w-full
          text-lg
          absolute
          z-50"
        style={{backgroundColor: isBlogPath ? "black" : "none"}}
        px={16}
        top={{base: 16, md: 56}}
      >
        <div className="cursor-pointer">
          <Link to={"/"}>
            <img src={logo} alt="" className="h-9 w-auto" />
          </Link>
        </div>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          id="menu-button"
          className="h-6 w-6 cursor-pointer md:hidden block"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          onClick={toggleHamburger}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>

        <div
          className={`${
            !showNav ? "hidden" : ""
          } w-full md:flex md:items-center base:bg-blue-200 md:bg-transparent md:w-auto text-black base:mt-3  lg:mt-0 rounded-sm px-2 base:py-3 md:py-0`}
          id="menu"
        >
          <Box
            component={"ul"}
            sx={{alignItems: "center"}}
            className="
              text-lg	
              md:flex
              md:justify-between"
          >
            <Box
              component="li"
              ff={"Open Sans"}
              fw={600}
              mr={{base: 0, sm: 40}}
              color="#0A2640"
            >
              <Link to={"product"}>Product</Link>
            </Box>
            <Box
              component="li"
              ff={"Open Sans"}
              fw={600}
              pt={{base: 16, sm: 0}}
              mr={{base: 0, sm: 40}}
            >
              <Link to={"services"}>Services</Link>
            </Box>
            <Box
              component="li"
              ff={"Open Sans"}
              fw={600}
              pt={{base: 16, sm: 0}}
              mr={{base: 0, sm: 40}}
            >
              <Link to="about">About</Link>
            </Box>

            <Box
              mt={{base: 16, sm: 0}}
              px={40}
              py={8}
              sx={{
                border: "2px solid #0A2640",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "24px",
              }}
            >
              <Box color="#0A2640" fw={700}>
                Log In
              </Box>
            </Box>
          </Box>
        </div>
      </Box>
    </Container>
  )
}

export default Navbar
