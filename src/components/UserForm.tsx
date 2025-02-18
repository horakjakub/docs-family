"use client";
import { Box, Button, Input } from "@chakra-ui/react";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import delay from "@/utils/delay";
import { redirect } from "next/navigation";

const UserForm: React.FC = () => {
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    await delay();
    redirect("create-family");
  };

  return (
    <Box p={4} bg="white" borderRadius="md" shadow="sm">
      <form onSubmit={handleSubmit}>
        <FormControl mb={4}>
          <FormLabel htmlFor="name">Name</FormLabel>
          <Input id="name" type="text" />
        </FormControl>
        <FormControl mb={4}>
          <FormLabel htmlFor="email">Email address</FormLabel>
          <Input id="email" type="email" />
        </FormControl>
        <Button type="submit" colorScheme="blue">
          Submit
        </Button>
      </form>
    </Box>
  );
};

export default UserForm;
