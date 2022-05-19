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
                <br></br>
            </Col>
            <Col flex={"300px"} style={{margin: "0 5px"}}>
                <Card size="small" title={<div style={{fontSize: "1.2em"}}>Observations</div>} style={{borderWidth: "2px"}} type='inner'>
                <div>
                    <p>The chart shows the 5 most common diseases among all households, with hypertension being the most common one, appearing in 1764 households.</p>
                </div>
                </Card>
                <br></br>
            </Col>
        </Row>
        <Row key='chart2'>
            <Col flex={"auto"} style={{margin: "0 5px"}}>
                <Card size="small" title={<div style={{fontSize: "1.2em"}}>% of disease occurrences in a household</div>} style={{borderWidth: "2px"}} type='inner'>
                <Tableau
                    vizUrl="https://public.tableau.com/views/Householdcharts-diseasepercentage18522/Dashboard3?:language=en-US&publish=yes&:display_count=n&:origin=viz_share_link"
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
              <Card size="small" title={<div style={{fontSize: "1.2em"}}>Remarks</div>} style={{borderWidth: "2px"}} type='inner'>
                <div>
                    <p>
                      'Percentage' represents the percentage of individuals in the household that acquire a particular disease.
                    </p>
                </div>
              </Card>
              <br></br>
              <Card size="small" title={<div style={{fontSize: "1.2em"}}>Observations</div>} style={{borderWidth: "2px"}} type='inner'>
                <div>
                    <p>In general, mostly 25% to 50% of individuals living in a same household will contract some particular disease. 
                    This is then followed by above 75% of individuals in a household. </p>
                    <p>This may be due to genetics of family members, or lifestyle habits within a household.</p>
                </div>
              </Card>
              <br></br>
            </Col>
        </Row>
        <Row key='chart3'>
            <Col flex={"auto"} style={{margin: "0 5px"}}>
                <Card size="small" title={<div style={{fontSize: "1.2em"}}>Top 5 diseases by lifestyle</div>} style={{borderWidth: "2px"}} type='inner'>
                <Tableau
                    vizUrl="https://public.tableau.com/views/Householdcharts-diseaselifestyle18522/Dashboard4?:language=en-US&publish=yes&:display_count=n&:origin=viz_share_link"
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
                    <p>People in a household who don't drink, but smoke everyday are more likely to acquire the diseases. </p>
                    <p>Participants who neither drink nor smoke also have a high chance to get those diseases, 
                      but factors may include family genetics, body condition, diet etc.</p>
                </div>
              </Card>
              <br></br>
            </Col>
        </Row>
      </QueueAnim>
    </div>
  )
}
