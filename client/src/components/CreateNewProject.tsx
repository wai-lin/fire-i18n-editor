import React from "react";
import { Button } from "@chakra-ui/react";
import { CgMathPlus } from "react-icons/cg";
import { useProject } from "@hooks/useProject";

const CreateNewProject: React.FC = () => {
  const { createProject } = useProject();

  return (
    <Button rightIcon={<CgMathPlus />} onClick={createProject}>
      Add New Project
    </Button>
  );
};

export { CreateNewProject };
