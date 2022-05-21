import React from 'react'
import { Row, Col, Statistic, Card } from 'antd';
import Tableau from '../Tableau/Tableau';
import { StyledCard } from '../Styled';
import QueueAnim from 'rc-queue-anim';

export default function Dashboard() {

  return (
    <div>
        <QueueAnim 
            delay={300} 
            duration={600} 
            type='left'
            className="queue-simple"> 
            <h1 key="title" style={{textAlign: "center"}}>Health Round Analysis 2013 & 2018</h1>
            <h3 key="subtitle" style={{textAlign: "center"}}>Background & Statistics of participants</h3>
            <hr key="line"></hr>
            <br></br>
            <Row key="stats" justify="space-around" style={{padding: "0 10px"}}>
                <StyledCard bordered={false}>
                    <Statistic title="Total participants:" value={31393} valueStyle={{textAlign:"end"}}/>
                </StyledCard>

                <StyledCard bordered={false}>
                    <Statistic title="Total unique participants:" value={10647} valueStyle={{textAlign:"end"}}/>
                </StyledCard>

                <StyledCard bordered={false}>
                    <Statistic title="Avg. age of participants in 2013/2018:" value={"41.43/47.03"} valueStyle={{textAlign:"end"}}/>
                </StyledCard>

                <StyledCard bordered={false}>
                    <Statistic title="% of Male/Female/Other:" value={"41.75/58.24/0.01"} valueStyle={{textAlign:"end"}}/>
                </StyledCard>
            </Row>
        </QueueAnim>

        <br></br>
        
        <QueueAnim 
            delay={600} 
            duration={600} 
            type='right'
            className="queue-simple"> 
            <div key="chart" style={{textAlign: 'center'}}>
                <br></br>
                <Row >
                    <Col flex={"auto"} style={{margin: "0 5px"}}>
                        <Card size="small" title={<div style={{fontSize: "1.2em"}}>Ethnicity</div>} style={{borderWidth: "2px"}} type='inner'>
                        <Tableau
                            vizUrl="https://public.tableau.com/views/Dashboard-eth15522/Dashboard5?:language=en-US&publish=yes&:display_count=n&:origin=viz_share_link"
                            height={450}
                            // width={350}
                            toolbar="bottom"
                            hideTabs="true"
                            hideToolbar="true"
                        />
                        </Card>
                    </Col>

                    <Col flex={"auto"} style={{margin: "0 5px"}}>
                    <Card size="small" title={<div style={{fontSize: "1.2em"}}>Education</div>} style={{borderWidth: "2px"}} type='inner'>
                        <Tableau
                            vizUrl="https://public.tableau.com/views/Dashboard-edu15522/Edunewusing?:language=en-US&publish=yes&:display_count=n&:origin=viz_share_link"
                            height={450}
                            // width={350}
                            toolbar="bottom"
                            hideTabs="true"
                            hideToolbar="true"
                        />
                    </Card>
                    </Col>
                </Row>

                <br></br>
                <Card size="small" title={<div style={{fontSize: "1.2em"}}>Gender/Age Range</div>} style={{borderWidth: "2px"}} type='inner'>
                    <Tableau
                        vizUrl="https://public.tableau.com/views/Dashboard-genderage15522/GenderAge?:language=en-US&publish=yes&:display_count=n&:origin=viz_share_link"
                        height={350}
                        // width={1000}
                        toolbar="bottom"
                        hideTabs="true"
                        hideToolbar="true"
                    />
                </Card >

                <br></br>
                <Row >
                    <Col flex={"50%"} style={{margin: "0 5px"}}>
                        <Card size="small" title={<div style={{fontSize: "1.2em"}}>Income Range</div>} style={{borderWidth: "2px"}} type='inner'>
                        <Tableau
                            vizUrl="https://public.tableau.com/views/Dashboard-income15522/Dashboard6?:language=en-US&publish=yes&:display_count=n&:origin=viz_share_link"
                            height={450}
                            // width={350}
                            toolbar="bottom"
                            hideTabs="true"
                            hideToolbar="true"
                        />
                        </Card>
                    </Col>
                </Row>
            </div>        
        </QueueAnim>
    </div>
  )
}
