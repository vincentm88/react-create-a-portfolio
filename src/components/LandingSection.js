import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Pete!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <VStack spacing={4}>
      <Avatar
        src="https://i.pravatar.cc/150?img=32"
        alt="Profile picture"
        size="2xl"
      />
      <Heading as="h2" size="md">
        {greeting}
      </Heading>
      <Heading as="h1" size="xl" textAlign={"center"} >
        {bio1}
        <br />
        {bio2}
      </Heading>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
