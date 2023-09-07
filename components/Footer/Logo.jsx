import { Image } from "@chakra-ui/react";
import styled from "@emotion/styled";

const LogoBox = styled.span`
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 5px;
  margin-top: 10px;
`;

export function Logo() {
  return (
      <LogoBox>
        <Image src={"https://firebasestorage.googleapis.com/v0/b/website-ease.appspot.com/o/img%2Feaselogo%2Fwhitetrans3.png?alt=media&token=c725e8f9-2a03-43d3-b746-fe2ea9fc2495"}
         width={170.83} height={77.5} alt="logo"/>
      </LogoBox>
  );
}
