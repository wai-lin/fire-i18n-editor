import React from "react";
import {
  HStack,
  IconButton,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightElement,
} from "@chakra-ui/react";
import { VscSave } from "react-icons/vsc";

const TranslationItem: React.FC<{
  label: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit?: (e: React.FormEvent<HTMLDivElement>) => void;
  icon?: React.ReactElement;
}> = ({ label, onChange, onSubmit, icon }) => {
  return (
    <HStack as="form" onSubmit={onSubmit}>
      <InputGroup size="sm">
        <InputLeftAddon>{label}</InputLeftAddon>
        <Input onChange={onChange} />
        <InputRightElement>{icon}</InputRightElement>
      </InputGroup>
      <IconButton aria-label="save" size="sm" icon={<VscSave />} />
    </HStack>
  );
};

export { TranslationItem };
