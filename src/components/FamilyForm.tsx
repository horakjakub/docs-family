"use client"
import React from 'react';
import { Box, FormControl, FormLabel, Input, Button } from '@chakra-ui/react';

const FamilyForm: React.FC = () => {
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log('Family name submitted');
  };

  return (
    <Box p={4} bg="white" borderRadius="md" shadow="sm">
      <form onSubmit={handleSubmit}>
        <FormControl mb={4}>
          <FormLabel htmlFor="familyName">Family Name</FormLabel>
          <Input id="familyName" type="text" />
        </FormControl>
        <Button type="submit" colorScheme="blue">
          Submit
        </Button>
      </form>
    </Box>
  );
};

export default FamilyForm;