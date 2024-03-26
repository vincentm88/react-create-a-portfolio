import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <VStack 
      alignItems="flex-start"
      backgroundColor={"white"}
      color={"black"}
      borderRadius="lg"
    >
      <Image 
        src={imageSrc} 
        alt={title} 
        w="full" 
        h="200px" 
        objectFit="cover"
        borderRadius={"lg"}
      />
      <VStack p={4} alignItems={"flex-start"} spacing={4}>
        <Heading as="h3" size="md">
          {title}
        </Heading>
        <Text>{description}</Text>
        <a href="/#projects-section">
          {"See More "}
          <FontAwesomeIcon icon={faArrowRight} size="1x" />
        </a>
      </VStack>
    </VStack>

  )
  return null;
};

export default Card;
