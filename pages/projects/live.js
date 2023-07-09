
import { Box, Image } from "@chakra-ui/react";
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"

function Live() {
  
    return (
      <Box pt='10vh' bg='white'>
      <ResponsiveMasonry
      >
          <Masonry>
            <Image p='0.5vw'  alt="easeyourneeds" src="https://firebasestorage.googleapis.com/v0/b/website-ease.appspot.com/o/images%2Fb224f566-04bf-435e-85cd-fc2a2b0197fc?alt=media&token=bc304000-6ea9-46f6-bcfe-6399aa4d31ff" />
            <Image p='0.5vw'  alt="easeyourneeds" src="https://firebasestorage.googleapis.com/v0/b/website-ease.appspot.com/o/images%2F1b12e432-3575-4372-b677-fea0a44fa30d?alt=media&token=2dfa9e8b-6334-416c-95d4-77e161cca1f9" />
            <Image p='0.5vw'  alt="easeyourneeds" src="https://firebasestorage.googleapis.com/v0/b/website-ease.appspot.com/o/images%2F154d6166-9cd3-42c3-a5e2-9343110e96c8?alt=media&token=5878ca53-ac6a-4826-bb07-d01242845504" />
            <Image p='0.5vw'  alt="easeyourneeds" src="https://firebasestorage.googleapis.com/v0/b/website-ease.appspot.com/o/images%2F76b554e6-45e2-4515-bdcf-832068676047?alt=media&token=92a2332e-8888-410c-baf7-dea6cfe629f9" />
            <Image p='0.5vw'  alt="easeyourneeds" src="https://firebasestorage.googleapis.com/v0/b/website-ease.appspot.com/o/images%2F269efb6e-cbfb-4f82-acd3-d33d8dcfe194?alt=media&token=498f79c1-ba9e-49b4-8f3b-aebb0e90db30" />
            <Image p='0.5vw'  alt="easeyourneeds" src="https://firebasestorage.googleapis.com/v0/b/website-ease.appspot.com/o/images%2Fc3576259-e14b-4550-b0c1-a12448b8196a?alt=media&token=0fe3cd5d-bb62-4b86-aaa6-7b66af2eccff" />
            <Image p='0.5vw'  alt="easeyourneeds" src="https://firebasestorage.googleapis.com/v0/b/website-ease.appspot.com/o/images%2Fc08bfa70-c80f-4eb1-a577-006be04e03ee?alt=media&token=2e5ed6cd-16c2-4130-af15-76ac70cb0d10" />
              {/* Children */}
          </Masonry>
      </ResponsiveMasonry>
      </Box>
  );
  }
  
  export default Live;
  