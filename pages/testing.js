import { addDoc, collection } from "@firebase/firestore"
import { firestore } from "@/lib/firebase/init_firebase";
import { useEffect, useRef, useState } from 'react';
import { Box, Image } from "@chakra-ui/react";
import { useDB } from "@/lib/databaseContext";

const Testing = () => {
  const [url, setUrl] = useState("");

  const database = useDB()
  useEffect(() => {
    database.getPhoto("1b71575b-aa4e-45db-996e-5cd31f793440").then(
      res => {
        setUrl(res)
        console.log(res)
      }
    )
  }), [database]
  return (
  <Image src={url}>
  </Image>
);}
export default Testing;