import { Global } from "@emotion/react";

const Fonts = () => (
  <Global
    styles={`
      @import url('https://fonts.googleapis.com/css?family=Aileron');
      @import url('https://fonts.googleapis.com/css?family=Open+Sans');
      @import url('https://fonts.cdnfonts.com/css/glacial-indifference-2');
    `}
  />
);

export default Fonts;
