import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Hero from "./components/Hero";
import Project from "./components/Project";
import Study from "./components/Study";
import Hobby from "./components/Hobby";
import Work from "./components/Work";

export default function ScrollSnapLayout() {
  return (
    <Box
      sx={{
        height: "100vh",
        overflowY: "scroll",
        scrollSnapType: "y mandatory",
      }}
    >
      <Hero />

      <Project />

      <Study />

      <Hobby />

      <Work />
    </Box>
  );
}
