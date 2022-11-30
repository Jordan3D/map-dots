import { Component, ReactElement } from 'react';

import { Error } from '../../pages/Error';

type Props = Readonly<{
  children: ReactElement;
}>;

type State = Readonly<{
  hasError: boolean;
}>;

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  componentDidCatch(exception: Error): void {
    console.error(exception);
  }

  static getDerivedStateFromError = () => ({ hasError: true });

  reload = () => {
    window.location.reload();
  };

  render() {
    const { children } = this.props;
    const { hasError } = this.state;

    if (hasError)
      return <Error helmetTitle={'Something happend'} backButtonHandler={this.reload} />;

    return children;
  }
}

export default ErrorBoundary;
