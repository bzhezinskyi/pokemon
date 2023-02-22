import { Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Navigation from './Navigation';

export default function Layout() {
  return (
    <>
      <header>
        <Navigation />
      </header>
      <main>
        <Container>
          <Outlet />
        </Container>
      </main>
    </>
  );
}
