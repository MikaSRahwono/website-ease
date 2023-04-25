import {
  Avatar,
  Box,
  Button,
  Checkbox,
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  HStack,
  Input,
  Stack,
  StackDivider,
  Text,
  Textarea,
  useColorModeValue,
  VStack,
  Switch,
  RadioGroup,
  Radio
} from '@chakra-ui/react'
import * as React from 'react'
import { FieldGroup } from './fieldGroup'
import { SingleDatepicker } from 'chakra-dayzed-datepicker';
import { useState } from 'react'
import DragAndDrop from './dragDrop';
import { useDB } from '@/lib/databaseContext';
import { Router, useRouter } from 'next/router';

function useAddProject() {
  const database = useDB()
  const router = useRouter();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState(new Date());
  const [place, setPlace] = useState('');
  const [category, setCategory] = useState('');
  const [fileList, setFileList] = useState([[]]);

  const onSubmit = () => {
    console.log(title)
    console.log(description)
    console.log(date)
    console.log(place)
    console.log(category)
    const listId =  database.uploadPhotos(fileList);
    database.setProject({
      title: title,
      description: description,
      place: place,
      category: category,
      listPhotos: listId
    })
    router.push('/dashboard?sort=all')
  }

  return { 
    title, setTitle, 
    description, setDescription, 
    date, setDate,
    place, setPlace, 
    category, setCategory, 
    fileList, setFileList,
    onSubmit
  };
}

export const App = () => {
  const {
    title, setTitle, 
    description, setDescription, 
    date, setDate,
    place, setPlace, 
    category, setCategory, 
    fileList, setFileList,
    onSubmit
  } = useAddProject();

  return (
    <Box
      px={{
        base: '4',
        md: '10',
      }}
      py="16"
      maxWidth="3xl"
      mx="auto"
    >
      <Stack spacing="4" divider={<StackDivider />}>
        <Heading size="lg" as="h1" paddingBottom="4">
          Add Project
        </Heading>
        <FieldGroup title="Info Project">
          <VStack width="full" spacing="6">
            <FormControl id="title">
              <FormLabel>Title</FormLabel>
              <Input type="text" maxLength={255} value={title} onChange={event => setTitle(event.currentTarget.value)}/>
            </FormControl>

            <FormControl id="desc">
              <FormLabel>Description</FormLabel>
              <Textarea rows={5} value={description} onChange={event => setDescription(event.currentTarget.value)}/>
              <FormHelperText>
                Brief description about the project
              </FormHelperText>
            </FormControl>

            <FormControl id="date">
              <FormLabel>Date</FormLabel>
              <SingleDatepicker
            name="date-input"
            date={date}
            onDateChange={setDate}
          />            
          </FormControl>

          <FormControl id="place">
            <FormLabel>Place</FormLabel>
            <Input type="text" onChange={event => setPlace(event.currentTarget.value)}/>
          </FormControl>

          <FormControl>
            <RadioGroup onChange={setCategory}>
              <Stack>
                <Radio value='creative'>Creative</Radio>
                <Radio value='studio'>Studio</Radio>
                <Radio value='zoom'>Zoom</Radio>
              </Stack>
            </RadioGroup>
          </FormControl>

          <DragAndDrop setFileList={setFileList} fileList={fileList}></DragAndDrop>
        </VStack>
      </FieldGroup>
    </Stack>
    <FieldGroup mt="8">
      <HStack width="full">
        <Button type="submit" onClick={onSubmit} colorScheme="blue">
          Save Changes
        </Button>
        <Button variant="outline">Cancel</Button>
      </HStack>
    </FieldGroup>
  </Box>
  )
}
