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
        <Image src={"/img/easelogo/whitetrans.png"} width={200} height={200} alt="logo" />
      </LogoBox>
  );
}
