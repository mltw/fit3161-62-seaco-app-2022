import styled from 'styled-components';
import { Row, Col, Card } from 'antd';
import background from '../background.jpg';

const StyledRow = styled(Row)`
  min-height: 100vh;
  background-image: url(${background});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const StyledCol = styled(Col)`
    background: rgba(255, 255, 255, 1);
    padding: 20px 20px 10px 20px;
    box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034), 0 6.7px 5.3px rgba(0, 0, 0, 0.048), 
                0 12.5px 10px rgba(0, 0, 0, 0.06), 0 22.3px 17.9px rgba(0, 0, 0, 0.072), 
                0 41.8px 33.4px rgba(0, 0, 0, 0.086), 0 100px 80px rgba(0, 0, 0, 0.12);
    borderRadius: 5px
`

const StyledCard = styled(Card)`
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
    // background: rgba(0, 0, 0, 0.05);
    margin: 5px 0;
    borderRadius: 15px;
    min-width: 230px;

    @media screen and (max-width: 450px) {
        min-width: 150px;
    }
`

export { StyledRow, StyledCol, StyledCard }