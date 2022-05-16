import React from 'react'
import { Row, Card, Col } from 'antd';
import Tableau from '../../Tableau/Tableau';

export default function Individual() {

  return (
    <div>
      <h1 style={{textAlign: "center", fontSize: "25px"}}>Individual Health Reports</h1>
      <hr></hr>
      <br></br>
      <Row >
        <Col flex={"auto"} style={{margin: "0 5px"}}>
            <Card size="small" title={<div style={{fontSize: "1.2em"}}>Top 5 diseases among Malay participants</div>} style={{borderWidth: "2px"}} type='inner'>
            <Tableau
                vizUrl="https://public.tableau.com/views/Individualcharts-diseasemalay17522/Dashboard1?:language=en-US&publish=yes&:display_count=n&:origin=viz_share_link"
                height={450}
                // width={350}
                toolbar="bottom"
                hideTabs="true"
                hideToolbar="true"
            />
            </Card>
        </Col>
        <Col flex={"auto"} style={{margin: "0 5px"}}>
            <Card size="small" title={<div style={{fontSize: "1.2em"}}>Top 5 diseases among Indian participants</div>} style={{borderWidth: "2px"}} type='inner'>
            <Tableau
                vizUrl="https://public.tableau.com/views/Individualcharts-diseaseindian17522/Dashboard2?:language=en-US&publish=yes&:display_count=n&:origin=viz_share_link"
                height={450}
                // width={350}
                toolbar="bottom"
                hideTabs="true"
                hideToolbar="true"
            />
            </Card>
        </Col>
        <Col flex={"auto"} style={{margin: "0 5px"}}>
            <Card size="small" title={<div style={{fontSize: "1.2em"}}>Top 5 diseases among Chinese participants</div>} style={{borderWidth: "2px"}} type='inner'>
            <Tableau
                vizUrl="https://public.tableau.com/views/Individualcharts-diseasechinese17522/Dashboard3?:language=en-US&publish=yes&:display_count=n&:origin=viz_share_link"
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
  )
}
