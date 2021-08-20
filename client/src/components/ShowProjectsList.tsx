import React from "react";
import { Button, Grid } from "@chakra-ui/react";
import { useSubUsersProjects } from "@/hooks/useProject";
import { Link } from "react-router-dom";

const ShowProjectsList: React.FC = () => {
  const projects = useSubUsersProjects();

  return (
    <Grid
      placeItems="stretch"
      templateColumns="200px 200px 200px 200px"
      gap="4"
    >
      {projects.map((prj) => (
        <Link key={prj.id} to={`/projects/${prj.id}`}>
          <Button variant="outline" colorScheme="blue" w="full">
            {prj.name}
          </Button>
        </Link>
      ))}
    </Grid>
  );
};

export { ShowProjectsList };
