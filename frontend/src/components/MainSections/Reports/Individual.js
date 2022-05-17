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
      <br></br>
      <Row key='chart2'>
            <Col flex={"auto"} style={{margin: "0 5px"}}>
                <Card size="small" title={<div style={{fontSize: "1.2em"}}>Top 5 diseases among all participants (Age & Ethnicity)</div>} style={{borderWidth: "2px"}} type='inner'>
                <Tableau
                    vizUrl="https://public.tableau.com/views/Individualcharts-diseaseageeth17522/Dashboard4?:language=en-US&:display_count=n&:origin=viz_share_link"
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
                    <p>Hypertension is the most common disease, which is then followed by a combination of both hypertension and diabetes. 
                      Both of these occur most among participants aged 60 and above, and is followed by adults aged 45 to 60.</p>
                    <p>Asthma is suffered most by those below 18. Meanwhile, diabetes and vision problems consist mostly of people aged 45 to 60.</p>
                </div>
                </Card>
            </Col>
        </Row>  
        <br></br>
      <Row key='chart3'>
            <Col flex={"auto"} style={{margin: "0 5px"}}>
                <Card size="small" title={<div style={{fontSize: "1.2em"}}>Top 5 diseases among all participants (Gender & Ethnicity)</div>} style={{borderWidth: "2px"}} type='inner'>
                <Tableau
                    vizUrl="https://public.tableau.com/views/Individualcharts-diseasegendereth17522/Dashboard5?:language=en-US&:display_count=n&:origin=viz_share_link"
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
                  <p>The top 5 diseases consist moslty of female participants, while vision problem and diabetes occur more equally in both male and female participants.</p>    
                </div>
                </Card>
            </Col>
        </Row>  
    </div>
  )
}
