import React from 'react'
// import Tableau from "tableau-react";
import { Row, Col, Divider } from 'antd';
import Tableau from '../Tableau/Tableau';
// import { PowerBIEmbed } from 'powerbi-client-react';
// import { models } from 'powerbi-client';

export default function Dashboard() {
    const options = {
        hideTabs: true,
        hideToolbar: true,
        // height: "320px",
        // width:"1000px",
    };

  return (
    <div>
        <h1 style={{textAlign: "center", fontSize: "25px"}}>Health Round Analysis 2013 & 2018</h1>
        <Row className="row" justify="space-between">
            <Col flex="1 0 25%" className="column">
                Number of participants:
                <h1 style={{textAlign: "right", fontSize: "20px"}}>
                    888
                </h1>
            </Col>
            <Col flex="1 0 25%" className="column">
            Average age of participants:
                <h1 style={{textAlign: "right", fontSize: "20px"}}>
                    888
                </h1>
            </Col>
            <Col flex="1 0 25%" className="column">Blue</Col>
        </Row>
        
        <Row justify="space-between" style={{border: "2px solid black"}}>
            <Col span={4} flex="1 0 25%" className="column" style={{border: "2px solid black"}}>
                Number of participants:
                <h1 style={{textAlign: "right", fontSize: "20px"}}>
                    888
                </h1>
            </Col>
            <Col span={4} flex="1 0 25%" className="column" style={{border: "2px solid black"}}>
                Average age of participants:
                <h1 style={{textAlign: "right", fontSize: "20px"}}>
                    888
                </h1>
            </Col>
            <Col span={4} flex="1 0 25%" className="column" style={{border: "2px solid black"}}>
                Proportion of Male/Female/Other:
                <h1 style={{textAlign: "right", fontSize: "20px"}}>
                    49/49/2
                </h1>
            </Col>
            <Col span={4} flex="1 0 25%" className="column" style={{border: "2px solid black"}}>col-4</Col>
        </Row>
        <div >
            {/* <Tableau
                // url="https://public.tableau.com/shared/XTCDMZ8KF?:display_count=y&:origin=viz_share_link"
                url="https://public.tableau.com/views/test-3522-mobile/Dashboard1?:language=en-US&publish=yes&:display_count=n&:origin=viz_share_link"
                options={options}
            /> */}
            <Tableau
                vizUrl="https://public.tableau.com/views/test-3522-mobile/Dashboard1?:language=en-US&publish=yes&:display_count=n&:origin=viz_share_link"
                height={350}
                // width={1000}
                toolbar="bottom"
                hideTabs="true"
                hideToolbar="true"
            />
            {/* <PowerBIEmbed
                embedConfig = {{
                    type: 'report',   // Supported types: report, dashboard, tile, visual and qna
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
    </div>
  )
}
