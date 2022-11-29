import { ReactElement, memo, useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

export type Props = {
    children: ReactElement,
    isSecure?: boolean
}

const Container = styled.div`
 position: relative;
 height: 100%;
 padding-left: 12rem;
 display: flex;
    .page {
      &__content {
        padding: ${props => props.theme.page.content.padding};
         flex-grow: 1;
         background-color: ${props => props.theme.page.bgColor};
      }
    }
    .page__sidebar {
        position: fixed;
        top: 0;
        left: 0;
        box-shadow: 0.2rem 0.2rem 2px 0px rgba(0, 0, 0, 0.144); 
    }
`

const Page = memo(function Page({ children, isSecure = false }: Props): ReactElement {
    const [contentReady, setContentReady] = useState(false);
    const headerRef = useRef<HTMLDivElement>(null);
    const [paddingTop, setPaddingTop] = useState(0);

    useEffect(() => {
        setContentReady(true);
        setPaddingTop(headerRef.current?.clientHeight || 0);
    }, [])

    return <Container style={{ paddingTop }}>
        <div className='page__content'>
            {contentReady && children}
        </div>

    </Container>
});

export default Page;