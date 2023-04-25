import { useEffect, useState } from "react";
import {
  Box,
  Button,
  Center,
  IconButton,
  Stack,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import { FaEdit, FaTrash } from "react-icons/fa";
import { useDB } from "@/lib/databaseContext";
import { useRouter } from "next/router";

function ListItem({ item, onDelete, onEdit }) {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <Box
      borderWidth={1}
      borderRadius={5}
      p={4}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Link href={{ pathname: '/detail', query: { id: item[0] } }}><Text>{item[1]}</Text></Link>
        {isHovering && (
          <Stack direction="row" spacing={2}>
            <IconButton
              icon={<FaEdit />}
              aria-label="Edit"
              variant="ghost"
              onClick={onEdit}
            />
            <IconButton
              icon={<FaTrash />}
              aria-label="Delete"
              variant="ghost"
              onClick={onDelete}
            />
          </Stack>
        )}
      </Stack>
    </Box>
  );
}

function List({ items }) {
  const handleDelete = (index) => {
    // Implement your delete logic here
  };

  const handleEdit = (index) => {
    // Implement your edit logic here
  };

  return (
    <Center>
      <Box w="md" mt={8}>
        <Stack spacing={4}>
          {items.map((item, index) => (
            <ListItem
              key={index}
              item={item}
              onDelete={() => handleDelete(index)}
              onEdit={() => handleEdit(index)}
            />
          ))}
        </Stack>
      </Box>
    </Center>
  );
}

export default function Lists() {
  const database = useDB()
  const router = useRouter()
  const [items, setItems] = useState([]);

  useEffect(() => {
    if (router.query.sort == "all") {
      database.getAllProjects().then(
        list => {setItems(list)}
      )
    } else if (router.query.sort == 'zoom') {
      database.getZoomProjects().then(
        list => {setItems(list)}
      )
    } else if (router.query.sort == 'studio') {
      database.getStudioProjects().then(
        list => {setItems(list)}
      )
    } else if (router.query.sort == 'creative') {
      database.getCreativeProjects().then(
        list => {setItems(list)}
      )
    }
  }, [database, router])


  return (
    <Box mr='10vw' ml='10vw' mt='2vh'>
        <Link href="/addproject"><Text textAlign='end'>+ add project</Text></Link>
        <List items={items}/>
    </Box>
  )
}
