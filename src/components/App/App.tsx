import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Provider as ReduxProvider, useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import ErrorPage from '../../pages/Error/Error';
import { MainPage } from '../../pages/Main';
import ErrorBoundary from '../../partials/ErrorBoundary';
import Loader from '../Loader/Loader';
import routes from '../../router';
import { store } from '../../store';
import { ThemeProvider } from 'styled-components';
import { ReactElement } from 'react';
import { dark, light, TThemes } from '../../theme';
import { selectTheme } from '../../store/common/meta';
import GlobalStyles from '../../theme/GlobalStyles';
import 'react-toastify/dist/ReactToastify.css';

const themes: TThemes = {
  dark,
  light,
};

const CustomThemeProvider = (props: any): ReactElement => {
  const themeColor: keyof TThemes = useSelector(selectTheme);
  return <ThemeProvider theme={themes[themeColor]} {...props} />;
};

function App() {
  const backOnError = () => {
    window.location.replace(routes.main());
  };

  return (
    <BrowserRouter>
      <HelmetProvider>
        <ReduxProvider store={store}>
          <CustomThemeProvider>
            <GlobalStyles />
            <ErrorBoundary>
              <>
                <Loader />
                <ToastContainer />
                <Routes>
                  <Route path={routes.main()} element={<MainPage />} />
                  <Route path="" element={<Navigate to={routes.main()} />} />
                  <Route
                    path="*"
                    element={<ErrorPage helmetTitle="Not found" backButtonHandler={backOnError} />}
                  />
                </Routes>
              </>
            </ErrorBoundary>
          </CustomThemeProvider>
        </ReduxProvider>
      </HelmetProvider>
    </BrowserRouter>
  );
}

export default App;
