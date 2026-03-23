import Box from "@mui/material/Box";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Hero from "./components/Hero";
import Project from "./components/Project";
import Study from "./components/Study";
import Hobby from "./components/Hobby";
import Contact from "./components/Contact";
import { useRef } from "react";

export default function ScrollSnapLayout() {
  const projectRef = useRef<HTMLDivElement>(null);
  const studyRef = useRef<HTMLDivElement>(null);
  const hobbyRef = useRef<HTMLDivElement>(null);

  const scrollToProject = () => {
    projectRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToStudy = () => {
    studyRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToHobby = () => {
    hobbyRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Box
      sx={{
        height: "100vh",
        overflowY: "scroll",
        scrollSnapType: "y mandatory",
      }}
    >
      <Hero
        scrollToProject={scrollToProject}
        scrollToStudy={scrollToStudy}
        scrollToHobby={scrollToHobby}
      />

      <Project props={{}} ref={projectRef} />

      <Study ref={studyRef} />

      <Hobby ref={hobbyRef} />

      <Contact />
    </Box>
  );
}
