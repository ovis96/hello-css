import styled from 'styled-components';
import { Center, Col, Row } from './styles';

const Wrapper = styled.div`
  height: calc(100vh - 40px);
  background-color: white;
  padding: 20px;
`;

const Circle = styled.div`
  height: 250px;
  width: 250px;
  border-radius: 250px;
  background-color: #DB9393;
  padding: 20px;
`;

const PageBody = () => {
    return (
        <Wrapper>
            <Row columns="1fr 1fr" style={{ height: '100%' }}>
                <Col rows="1fr 1fr">
                    <div style={{ background: '#71C75C' }}></div>
                    <div style={{ background: '#8EBAE2' }}></div>
                </Col>
                <Col rows="1fr 1fr">
                    <Col rows="1fr 1fr">
                        <div style={{ background: '#9493BD' }}></div>
                        <Row columns="2fr 1fr">
                            <div style={{ background: '#BCDCDA' }}></div>
                            <div style={{ background: '#BCDCDA' }}></div>
                        </Row>
                    </Col>
                    <Center>
                        <Circle></Circle>
                    </Center>
                </Col>
            </Row>
        </Wrapper>
    )
}


export default PageBody;