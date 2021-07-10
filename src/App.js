import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import NavBar from './NavBar';
import PageBody from './PageBody';

const PageWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: white;
  display: grid;
  grid-template-columns: 250px 1fr;
`;

function App() {
  return (
    <div>
      <PageWrapper>
        <NavBar />
        <PageBody />
      </PageWrapper>
    </div>
      
  );
}

export default App;
