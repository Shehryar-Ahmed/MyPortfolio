import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";

const pages = ["Home", "About", "Projects", "Skills", "Contact"];

function Navbar(props) {
  const [activePage, setActivePage] = React.useState("Home");
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleSmoothScroll = (page) => {
    setActivePage(page);
    const targetElement = document.getElementById(page);
    setAnchorElNav(null);
    setTimeout(() => {
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
        });
      }
    }, 100);
  };

  const handleSectionIntersection = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setActivePage(entry.target.id);
      }
    });
  };

  React.useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const sectionElements = pages.map((page) => document.getElementById(page));
    const observer = new IntersectionObserver(
      handleSectionIntersection,
      observerOptions
    );

    sectionElements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <AppBar
      className="slide-in"
      sx={{
        backgroundColor: "transparent",
        border: "none",
        boxShadow: "none",
        paddingX: "5rem",
        animationDelay: "0.5s",
      }}
    >
      <Container maxWidth="xl" style={{ paddingLeft: "0px" }}>
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontWeight: 700,
              color: "inherit",
              textDecoration: "none",
              fontFamily: "Poppins",
            }}
          >
            ShehryarAhmed.
          </Typography>

          {/* Mobile */}

          <Box
            id="cantFind"
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              // backgroundColor: "#00abf0",
              width: "100vw", // Take up the whole horizontal space
              position: "fixed",
              left: 0,
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
          </Box>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            disableScrollLock
            sx={{
              display: { xs: "flex", md: "none" },
              width: "97vw", // Take up the whole horizontal space
              // height: "100%",
              // position: "fixed",
              marginRight: "1rem",
              top: 0,
              left: 0,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "transparent",
            }}
          >
            {pages.map((page) => (
              <MenuItem
                key={page}
                onClick={() => {
                  handleSmoothScroll(page);
                }}
                sx={{
                  minWidth: "100vw", // Take up the whole horizontal space
                  backgroundColor: "#0c2a40", // Set the background color
                }}
              >
                <Typography
                  className="MenuText"
                  textAlign="center"
                  sx={{
                    color: activePage === page ? "#00abf0" : "white",
                    fontFamily: "Poppins",
                  }}
                >
                  {page}
                </Typography>
              </MenuItem>
            ))}
          </Menu>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontWeight: 700,
              color: "inherit",
              textDecoration: "none",
              fontFamily: "Poppins",
            }}
          >
            ShehryarAhmed.
          </Typography>

          {/* Laptops */}

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "right",
            }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                onClick={() => handleSmoothScroll(page)}
                disableFocusRipple
                disableTouchRipple
                disableRipple
                disableElevation
                sx={{
                  my: 2,
                  mx: 1,
                  color: activePage === page ? "#00abf0" : "white",
                  display: "block",
                  fontFamily: "Poppins",
                  textTransform: "none",
                  fontWeight: "500",
                  "&:hover": {
                    color: "#00abf0",
                    backgroundColor: "transparent",
                  },
                }}
              >
                {page}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
