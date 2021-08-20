import React from "react";
import { Box, Heading } from "@chakra-ui/react";
import { CreateNewProject } from "@components/CreateNewProject";
import { ShowProjectsList } from "@/components/ShowProjectsList";

const Projects: React.FC = () => {
  return (
    <Box>
      <Heading as="h4" size="sm" mb="4">
        Projects
      </Heading>
      {/* CreateNewProject */}
      <Box mb="4">
        <CreateNewProject />
      </Box>
      {/* ShowProjectsList */}
      <ShowProjectsList />
    </Box>
  );
};

export { Projects };
