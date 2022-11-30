import { Button } from '@mui/material';
import { ReactElement } from 'react';
import styled from 'styled-components';
import Map from '../../components/Map/Map';
import Page from '../../components/Page/Page';

const Container = styled.div`
  height: 100vh;
`;

const Main = (): ReactElement => {
  console.log('Main');
  return (
    <Container className="main_page__root">
      <Map />
    </Container>
  );
};

const MainPage = (): ReactElement => (
  <Page>
   <Main />
  </Page>
);

export default MainPage;
