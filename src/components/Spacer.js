import styled from "styled-components";

function Spacer({ w, h }) {
  return <Root w={w} h={h} />;
}

const Root = styled.div`
  width: ${({ w }) => w}px;
  height: ${({ h }) => h}px;
`;

export default Spacer;
