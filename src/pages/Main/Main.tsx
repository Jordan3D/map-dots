import { ReactElement } from 'react';
import styled from 'styled-components';
import Page from '../../components/Page/Page';

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  height: 100%;

  .buttons {
    display: flex;
    padding: 2rem 0 3rem;
  }
`;

const Main = (): ReactElement => {

  return <Container className="main_page__root">

  </Container>
}

const MainPage = (): ReactElement => <Page><Main /></Page>

export default MainPage;