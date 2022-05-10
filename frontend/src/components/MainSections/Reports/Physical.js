import React from 'react'
import { Row, Card, Col } from 'antd';
import Tableau from '../../Tableau/Tableau';

export default function Physical() {

  return (
    <div>
      <h1 style={{textAlign: "center", fontSize: "25px"}}>Physical Report</h1>
      <hr></hr>
      <br></br>
      <Row >
            <Col flex={"auto"} style={{margin: "0 5px"}}>
                <Card size="small" title={<div style={{fontSize: "1.2em"}}>Intensity / Age Group</div>} style={{borderWidth: "2px"}} type='inner'>
                <Tableau
                    vizUrl="https://public.tableau.com/views/Physicalcharts-ageintensity/Dashboard1?:language=en-US&publish=yes&:display_count=n&:origin=viz_share_link"
                    height={450}
                    // width={350}
                    toolbar="bottom"
                    hideTabs="true"
                    hideToolbar="true"
                />
                </Card>
            </Col>
            <Col flex={"300px"} style={{margin: "0 5px"}}>
                <Card size="small" title={<div style={{fontSize: "1.2em"}}>Remarks</div>} style={{borderWidth: "2px"}} type='inner'>
                {/* <Tableau
                    vizUrl="https://public.tableau.com/views/Individualcharts-diseaseEth1/Dashboard1?:language=en-US&publish=yes&:display_count=n&:origin=viz_share_link"
                    height={350}
                    // width={350}
                    toolbar="bottom"
                    hideTabs="true"
                    hideToolbar="true"
                /> */}
                <div>
                    Activities of type 'moderate' include sports, fitness and recreational.
                </div>
                </Card>

                <Card size="small" title={<div style={{fontSize: "1.2em"}}>Observations</div>} style={{borderWidth: "2px", marginTop:"10px"}} type='inner'>
                {/* <Tableau
                    vizUrl="https://public.tableau.com/views/Individualcharts-diseaseEth1/Dashboard1?:language=en-US&publish=yes&:display_count=n&:origin=viz_share_link"
                    height={350}
                    // width={350}
                    toolbar="bottom"
                    hideTabs="true"
                    hideToolbar="true"
                /> */}
                <div>
                    <p>Participants below 18 perform the most vigorous activities.</p>
                    <p>Adults of age 45~60 perform the most activities of moderate intense , which is then followed 
                    by elderlies of age above 60. The main type of activity is work.</p>
                </div>
                </Card>
            </Col>
        </Row>
    </div>
  )
}
