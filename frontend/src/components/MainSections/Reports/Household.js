import React from 'react'
import { Row, Statistic, Card, Col } from 'antd';
import { StyledCard } from '../../Styled';

export default function Household() {

  return (
    <div>
      <h1 style={{textAlign: "center", fontSize: "25px"}}>Household Health Report</h1>
      <hr></hr>
      <br></br>
      {/* justify="space-around"  */}
      <Row justify="space-around" style={{padding: "0 10px"}}>
            <StyledCard bordered={false}>
                {/* <Card bordered={false}> */}
                    <h3>Title Individual</h3>
                    <div>
                      Tableau chart here
                    </div>
                {/* </Card> */}
            </StyledCard>

            <StyledCard bordered={false}>
                   <h3>Title 2</h3>
                    <div>
                      Tableau chart here dlfnad;iofshdf;uioab;u
                    </div>
            </StyledCard>
        </Row>
        <Row justify='center' style={{marginTop: "20px", padding: "0 10px"}}>
          <Col flex="auto">
          <Card bordered={false} style={{border: "2px solid black"}}>
                {/* <Card bordered={false}> */}
                    <h3>Title 3</h3>
                    <div>
                      Tableau chart here
                    </div>
                {/* </Card> */}
            </Card>
          </Col>
        
        </Row>
    </div>
  )
}
