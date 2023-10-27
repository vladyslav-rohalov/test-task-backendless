import { useState, useEffect } from 'react';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { Container, Main } from './sharedLayout.styled';
import Panel from '../panel/panel';
import data from '../../tabs.json';

export default function SharedLayout() {
  const [tabValue, setTabValue] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const id = location.pathname.substring(1);
    const tab = data.find(item => item.id === id);
    if (tab) {
      setTabValue(tab.order);
    }
  }, [location]);

  return (
    <Container>
      <Panel
        value={tabValue}
        handleChange={value => setTabValue(value)}
        data={data}
      />
      <Main>
        <Suspense>
          <Outlet />
        </Suspense>
      </Main>
    </Container>
  );
}
