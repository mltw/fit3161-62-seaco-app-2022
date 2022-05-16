import React from 'react'
import { Row, Card, Col } from 'antd';
import Tableau from '../../Tableau/Tableau';
import QueueAnim from 'rc-queue-anim';

export default function Household() {

  return (
    <div>
      <QueueAnim 
            delay={300} 
            duration={600} 
            type='left'
            className="queue-simple"> 
            <h1 key='title' style={{textAlign: "center", fontSize: "25px"}}>Household Health Reports</h1>
            <hr key='line'></hr>
            <br></br>
      </QueueAnim>
      <QueueAnim 
            delay={600} 
            duration={600} 
            type='right'
            className="queue-simple"> 
        <Row key='chart1'>
            <Col flex={"auto"} style={{margin: "0 5px"}}>
                <Card size="small" title={<div style={{fontSize: "1.2em"}}>Top 5 diseases among households</div>} style={{borderWidth: "2px"}} type='inner'>
                <Tableau
                    vizUrl="https://public.tableau.com/views/Householdcharts-disease16522/Dashboard2?:language=en-US&:display_count=n&:origin=viz_share_link"
                    height={450}
                    // width={350}
                    toolbar="bottom"
                    hideTabs="true"
                    hideToolbar="true"
                />
                </Card>
            </Col>
            <Col flex={"300px"} style={{margin: "0 5px"}}>
                <Card size="small" title={<div style={{fontSize: "1.2em"}}>Observations</div>} style={{borderWidth: "2px"}} type='inner'>
                <div>
                    <p>The chart shows the 5  most common diseases among all households, with hypertension being the most common one, appearing in 6456 households.</p>
                </div>
                </Card>
            </Col>
        </Row>
        <br></br>
        <Row key='chart2'>
            <Col flex={"auto"} style={{margin: "0 5px"}}>
                <Card size="small" title={<div style={{fontSize: "1.2em"}}>Top 5 diseases among households</div>} style={{borderWidth: "2px"}} type='inner'>
                <Tableau
                    vizUrl="https://public.tableau.com/views/Householdcharts-disease16522/Dashboard2?:language=en-US&:display_count=n&:origin=viz_share_link"
                    height={450}
                    // width={350}
                    toolbar="bottom"
                    hideTabs="true"
                    hideToolbar="true"
                />
                </Card>
                <br></br>
            </Col>
            <Col flex={"300px"} style={{margin: "0 5px"}}>
                <Card size="small" title={<div style={{fontSize: "1.2em"}}>Observations</div>} style={{borderWidth: "2px"}} type='inner'>
                <div>
                    <p>The chart shows the 5  most common diseases among all households, with hypertension being the most common one, appearing in 6456 households.</p>
                </div>
                </Card>
            </Col>
        </Row>
      </QueueAnim>
    </div>
  )
}
