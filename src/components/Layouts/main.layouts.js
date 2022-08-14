import { Container } from 'react-bootstrap';
import Navigation from './navigation.layouts';

const MainLayouts = ({ children }) => {
  return (
    <Container fluid="true">
      <Navigation />
      {children}
    </Container>
  );
};

export default MainLayouts;
