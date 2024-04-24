import { Box, Container, Button, Typography } from "@mui/material";

export default function Home() {
  return (
    <Container
      sx={{
        minWidth: "100vw",
        minHeight: "99vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Navbar */}
      <Box
        sx={{
          padding: "10px",
          display: "flex",
          justifyContent: "space-between",
          gap: "10px",
        }}
      >
        {/* Company Name/Logo */}
        <Button
          variant="contained"
          color="error"
          href="#"
          sx={{ fontWeight: "bold" }}
        >
          WEM System
        </Button>
        {/* Links */}
        <Box
          sx={{
            display: "flex",
            gap: "20px",
          }}
        >
          <Button
            size="small"
            href="#"
            sx={{
              color: "white",
              borderBottom: "1px solid red",
              borderRadius: 0,
              paddingBottom: 0,
              ":hover": {
                background: "red",
                borderRadius: "5px",
              },
            }}
          >
            Event Management
          </Button>
          <Button
            size="small"
            href="#"
            sx={{
              color: "white",
              borderBottom: "1px solid red",
              borderRadius: 0,
              paddingBottom: 0,
              ":hover": {
                background: "red",
                borderRadius: "5px",
              },
            }}
          >
            Event Registration
          </Button>
          <Button
            size="small"
            href="#"
            sx={{
              color: "white",
              borderBottom: "1px solid red",
              borderRadius: 0,
              paddingBottom: 0,
              ":hover": {
                background: "red",
                borderRadius: "5px",
              },
            }}
          >
            Ticket Sales
          </Button>
          <Button
            size="small"
            href="#"
            sx={{
              color: "white",
              borderBottom: "1px solid red",
              borderRadius: 0,
              paddingBottom: 0,
              ":hover": {
                background: "red",
                borderRadius: "5px",
              },
            }}
          >
            Event Schedule
          </Button>
          <Button
            size="small"
            href="#"
            sx={{
              color: "white",
              borderBottom: "1px solid red",
              borderRadius: 0,
              paddingBottom: 0,
              ":hover": {
                background: "red",
                borderRadius: "5px",
              },
            }}
          >
            About Us
          </Button>
          <Button
            size="small"
            href="#"
            sx={{
              color: "white",
              borderBottom: "1px solid red",
              borderRadius: 0,
              paddingBottom: 0,
              ":hover": {
                background: "red",
                borderRadius: "5px",
              },
            }}
          >
            Contact
          </Button>
        </Box>
        {/* SignIn/SignOut Sign Up Buttons */}
        <Box display="flex" gap={2}>
          <Button variant="contained" size="small" color="secondary" href="#">
            Sign In
          </Button>
          <Button variant="contained" size="small" color="error" href="#">
            Sign Up
          </Button>
        </Box>
      </Box>
      {/* Main Area */}
      <Box minWidth="100%" minHeight="90vh" display="flex">
        <Box
          alignSelf="center"
          justifySelf="center"
          fontSize={20}
          padding={5}
          width={1000}
        >
          <Typography variant="h2" fontWeight="bold" color="error">
            WEM System
          </Typography>
          <Typography
            variant="h4"
            width={800}
            mb={2}
            textAlign="left"
            fontWeight="bold"
            color="white"
          >
            Your Ultimate Destination for Seamless Event Planning and
            Management!
          </Typography>
          <Button variant="contained" color="error" size="large">
            Explore More
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
