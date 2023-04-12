import { addDoc, collection } from "@firebase/firestore"
import { firestore } from "@/lib/firebase/init_firebase";
import { useRef } from 'react';
import { Box } from "@chakra-ui/react";
function Testing() {
  const dataRef = useRef()
  const submithandler = (e) => {
    e.preventDefault()
    handleSubmit(dataRef.current.value)
    dataRef.current.value = ""
}
return (
<Box className="App" pt={40}>
<form onSubmit={submithandler}>
<input type= "text" ref={dataRef} />
<button type = "submit">Save</button>
</form>
</Box>
);
}

const handleSubmit = (testdata) => {
  const ref = collection(firestore, "test_data") // Firebase creates this automatically
  console.log(testdata)
  let data = {
    testData: testdata
  }
  try {
    addDoc(ref, data)
    console.log('aman')
  } catch(err) {
    console.log(err)
  }
  }
 
export default Testing;