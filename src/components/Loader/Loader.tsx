import { ReactElement } from 'react';
import { Oval } from 'react-loader-spinner';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { selectLoading } from '../../store/common/meta';

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

const Container = styled.div`
  position: absolute;
  bottom: 15px;
  right: 15px;
`;

const Loader = (): ReactElement => {
  const isLoading = useSelector(selectLoading);

  return (
    <Container>
      <Oval visible={isLoading} height="50" width="50" strokeWidth={4} />
    </Container>
  );
};

export default Loader;
