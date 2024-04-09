import React, { useState } from "react";
import { Box, Heading, Text, Input, Stack, Avatar, Badge, Button, Container, Grid, GridItem, Flex, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, useDisclosure } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";

const developers = [
  {
    id: 1,
    name: "John Doe",
    location: "New York",
    technologies: ["React", "Node.js", "JavaScript"],
    avatar: "https://images.unsplash.com/photo-1469833120660-1a218b53d28a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtYWxlJTIwZGV2ZWxvcGVyJTIwcG9ydHJhaXR8ZW58MHx8fHwxNzEyNjg3MjA5fDA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 2,
    name: "Jane Smith",
    location: "London",
    technologies: [".NET", "C#", "Go"],
    avatar: "https://images.unsplash.com/photo-1485217988980-11786ced9454?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjBkZXZlbG9wZXIlMjBwb3J0cmFpdHxlbnwwfHx8fDE3MTI2ODcyMDl8MA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  // Add more developers here...
];

const Index = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDeveloper, setSelectedDeveloper] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const filteredDevelopers = developers.filter((developer) => developer.name.toLowerCase().includes(searchTerm.toLowerCase()));

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleDeveloperClick = (developer) => {
    setSelectedDeveloper(developer);
    onOpen();
  };

  return (
    <Container maxW="container.lg" py={8}>
      <Heading as="h1" size="2xl" mb={8} textAlign="center">
        Particles - Marketplace for Software Talent
      </Heading>
      <Text fontSize="xl" mb={8} textAlign="center">
        Find the best developers specializing in web technologies like React, Node.js, .NET, Go, and JavaScript.
      </Text>

      <Flex mb={8} justify="center">
        <Input placeholder="Search developers..." value={searchTerm} onChange={handleSearch} mr={4} />
        <Button leftIcon={<FaSearch />}>Search</Button>
      </Flex>

      <Grid templateColumns="repeat(auto-fill, minmax(250px, 1fr))" gap={6}>
        {filteredDevelopers.map((developer) => (
          <GridItem key={developer.id} p={4} borderWidth={1} borderRadius="lg" cursor="pointer" onClick={() => handleDeveloperClick(developer)}>
            <Flex align="center" mb={4}>
              <Avatar src={developer.avatar} mr={4} />
              <Box>
                <Heading as="h3" size="md">
                  {developer.name}
                </Heading>
                <Text>{developer.location}</Text>
              </Box>
            </Flex>
            <Stack direction="row">
              {developer.technologies.map((tech) => (
                <Badge key={tech} colorScheme="blue">
                  {tech}
                </Badge>
              ))}
            </Stack>
          </GridItem>
        ))}
      </Grid>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Send Message to {selectedDeveloper?.name}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input placeholder="Your message..." />
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3}>
              Send
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Container>
  );
};

export default Index;
