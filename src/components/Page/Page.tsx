import { ReactElement, memo, useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

export type Props = {
  children: ReactElement;
};

const Container = styled.div`
  position: relative;
`;

const Page = memo(function Page({ children }: Props): ReactElement {
  const [contentReady, setContentReady] = useState(false);

  useEffect(() => {
    setContentReady(true);
  }, []);

  return <Container>{contentReady && children}</Container>;
});

export default Page;
