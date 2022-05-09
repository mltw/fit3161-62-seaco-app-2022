import React from 'react'
// import Tableau from "tableau-react";
import { Row, Col, Popover, Button, Statistic, Tabs, Card } from 'antd';
import Tableau from '../Tableau/Tableau';
import { InfoCircleOutlined } from '@ant-design/icons';
import { StyledCard } from '../Styled';
// import { PowerBIEmbed } from 'powerbi-client-react';
// import { models } from 'powerbi-client';
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
        <h1 style={{textAlign: "center", fontSize: "25px"}}>Health Round Analysis 2013 & 2018</h1>
        <hr></hr>
        <br></br>
        <QueueAnim 
            delay={300} 
            duration={600} 
            className="queue-simple"> 
            <Row key="stats" justify="space-around" style={{padding: "0 10px"}}>
                <StyledCard bordered={false}>
                    <Statistic title="Total participants:" value={10647} valueStyle={{textAlign:"end"}}/>
                </StyledCard>

                <StyledCard bordered={false}>
                    <Statistic title="Average age of participants:" value={44.55} valueStyle={{textAlign:"end"}}/>
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
            type='left'
            className="queue-simple"> 
            <div key="chart" style={{textAlign: 'center'}}>
            {/* <Tableau
                // url="https://public.tableau.com/shared/XTCDMZ8KF?:display_count=y&:origin=viz_share_link"
                url="https://public.tableau.com/views/test-3522-mobile/Dashboard1?:language=en-US&publish=yes&:display_count=n&:origin=viz_share_link"
                options={
                    hideTabs: true,
                    hideToolbar: true,
                    height: "320px",
                    width:"1000px",
                }
            /> */}
                <br></br>
                <Row >
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
            {/* <PowerBIEmbed
                embedConfig = {{
                    type: 'report',   // Supported types: report, dashboard, tile, visual and reports
                    id: '<Report Id>',
                    embedUrl: '<Embed Url>',
                    accessToken: '<Access Token>',
                    tokenType: models.TokenType.Embed,
                    settings: {
                        panes: {
                            filters: {
                                expanded: false,
                                visible: false
                            }
                        },
                        background: models.BackgroundType.Transparent,
                    }
                }}

                eventHandlers = { 
                    new Map([
                        ['loaded', function () {console.log('Report loaded');}],
                        ['rendered', function () {console.log('Report rendered');}],
                        ['error', function (event) {console.log(event.detail);}]
                    ])
                }
                    
                cssClassName = { "report-style-class" }

                getEmbeddedComponent = { (embeddedReport) => {
                    this.report = embeddedReport;
                }}
            /> */}
            </div>
        </QueueAnim>
    </div>
  )
}
