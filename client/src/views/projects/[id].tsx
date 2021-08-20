import React from "react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { TranslationItem } from "@/components/TranslationItem";

const ProjectsId: React.FC = () => {
  return (
    <>
      <ButtonGroup isAttached variant="outline" size="sm">
        <Button>Translations</Button>
        <Button>Namespaces</Button>
      </ButtonGroup>
      <TranslationItem label="en" />
    </>
  );
};

export { ProjectsId };
