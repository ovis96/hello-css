import styled from 'styled-components';

const Wrapper = styled.div`
  height: 100vh;
  background-color: #39727A;
  display: grid;
  grid-template-rows: 1fr 150px;
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LinkWrapper = styled.div`
    width: 180px;
    height: 50px;
    display: flex;
    align-items: center;
    padding-left: 20px;
    margin-bottom: 20px;
    background-color: #529FAA;
    color: white;
    font-size: 18px;
    cursor: pointer;
`;

const LogoutWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const LogoutButton = styled.div`
    height: 20px;
    padding: 10px;
    background-color: #ff6767;
    cursor: pointer;
    color: white;
`

const NavBar = () => {
    return (
        <Wrapper>
            <Links>
                <div>
                    <LinkWrapper> Home </LinkWrapper>
                    <LinkWrapper> Products </LinkWrapper>
                    <LinkWrapper> Downloads </LinkWrapper>
                </div>
                
            </Links>
            <LogoutWrapper>
                <LogoutButton>Logout</LogoutButton>
            </LogoutWrapper>
        </Wrapper>
    )
}

export default NavBar;