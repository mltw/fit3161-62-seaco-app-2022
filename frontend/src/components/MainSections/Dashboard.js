import React from 'react'
// import Tableau from "tableau-react";
import { Row, Col, Popover, Button, Statistic, Tabs, Card } from 'antd';
import Tableau from '../Tableau/Tableau';
import { InfoCircleOutlined } from '@ant-design/icons';
import { StyledCard } from '../Styled';
import QueueAnim from 'rc-queue-anim';

const { TabPane } = Tabs;

const cardTitle = (
    <>
        <InfoCircleOutlined /> Info panel
    </>
)

const ethnicityInfo = (
    <Tabs defaultActiveKey="1" size='small' tabPosition={'top'}>
        <TabPane tab="1-5" key="1">
            <div>
                <p>1 Malay</p>
                <p>2 Indian</p>
                <p>3 Chinese</p>
                <p>4 Bumiputera</p>
                <p>5 Other</p>
            </div>
        </TabPane>
        <TabPane tab="6-8" key="2">
            <div>
                <p>6 Refused to answer</p>
                <p>7 Don’t Know</p>
                <p>8 Orang Asli</p>
            </div>
        </TabPane>
    </Tabs>
)

const educationInfo = (
    <Tabs defaultActiveKey="1" size='small' tabPosition={'top'}>
        <TabPane tab="1-5" key="1">
            <div>
                <p>1 Never attended school</p>
                <p>2 Attended but did not finish Primary School</p>
                <p>3 Finished Primary School</p>
                <p>4 Started High School</p>
                <p>5 Finished Form 3</p>
            </div>
        </TabPane>
        <TabPane tab="6-10" key="2">
            <div>
                <p>6 Finished Form 5</p>
                <p>7 Finished Form 6</p>
                <p>8 Started College (Diploma)</p>
                <p>9 Finished College (Diploma)</p>
                <p>10 Started University (Degree)</p>
            </div>
        </TabPane>
        <TabPane tab="11-14" key="3">
            <div>
                <p>11 Finished University (Degree)</p>
                <p>12 Other</p>
                <p>13 Do not know</p>
                <p>14 Refused to answer</p>
            </div>
        </TabPane>
    </Tabs>
);

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
        {/* </QueueAnim> */}
        <hr key="line"></hr>
        <br></br>
        {/* <QueueAnim 
            delay={300} 
            duration={600} 
            className="queue-simple">  */}
            <Row key="stats" justify="space-around" style={{padding: "0 10px"}}>
                <StyledCard bordered={false}>
                    <Statistic title="Total participants:" value={21292} valueStyle={{textAlign:"end"}}/>
                </StyledCard>

                <StyledCard bordered={false}>
                    <Statistic title="Total unique participants:" value={10647} valueStyle={{textAlign:"end"}}/>
                </StyledCard>

                <StyledCard bordered={false}>
                    <Statistic title="Avg. age of participants in 2013/2018:" value={"42.07/47.03"} valueStyle={{textAlign:"end"}}/>
                </StyledCard>

                <StyledCard bordered={false}>
                    <Statistic title="% of Male/Female/Other:" value={"41.23/58.04/0.01"} valueStyle={{textAlign:"end"}}/>
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
                {/* <Row >
                    <Col flex={"120px"} style={{marginRight: "10px"}}>
                        <Card size="small" title={cardTitle} hoverable style={{borderWidth: "2px"}} type='inner'>
                            <p>
                                <Popover content={ethnicityInfo} title="Value / Label" trigger="click" placement='bottomRight'>
                                    <Button style={{width: "100px"}}>Ethnicity</Button>
                                </Popover>
                            </p>
                            <p>
                                <Popover content={educationInfo} title="Value / Label" trigger="click" placement='bottomRight' >
                                    <Button style={{width: "100px"}}>Education</Button>
                                </Popover>
                            </p>
                        </Card>
                    </Col>
                    <Col flex={"auto"}>
                        <Tableau
                            vizUrl="https://public.tableau.com/views/test-3522-mobile/Dashboard1?:language=en-US&publish=yes&:display_count=n&:origin=viz_share_link"
                            height={350}
                            // width={1000}
                            toolbar="bottom"
                            hideTabs="true"
                            hideToolbar="true"
                        />
                    </Col>
                </Row>
                <br></br>
                <br></br> */}
                
                {/* <Row justify="space-around" style={{padding: "0 10px"}}> */}
                <Row >
                    <Col flex={"auto"} style={{margin: "0 5px"}}>
                        <Card size="small" title={<div style={{fontSize: "1.2em"}}>Ethnicity</div>} style={{borderWidth: "2px"}} type='inner'>
                        <Tableau
                            vizUrl="https://public.tableau.com/views/Dashboard-eth/Eth?:language=en-US&:display_count=n&:origin=viz_share_link"
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
                            vizUrl="https://public.tableau.com/views/Dashboard-edu/Edu?:language=en-US&:display_count=n&:origin=viz_share_link"
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
                        vizUrl="https://public.tableau.com/views/Dashboard-genderage/GenderAge?:language=en-US&:display_count=n&:origin=viz_share_link"
                        height={350}
                        // width={1000}
                        toolbar="bottom"
                        hideTabs="true"
                        hideToolbar="true"
                    />
                </Card >
            </div>        
        </QueueAnim>
    </div>
  )
}
