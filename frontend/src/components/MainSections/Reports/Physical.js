import React from 'react'
import { Row, Card, Col } from 'antd';
import Tableau from '../../Tableau/Tableau';
import QueueAnim from 'rc-queue-anim';

export default function Physical() {

  return (
    <div>
        <QueueAnim 
            delay={300} 
            duration={600} 
            type='left'
            className="queue-simple"> 
            <h1 key='title' style={{textAlign: "center", fontSize: "25px"}}>Physical Reports</h1>
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
                <Card size="small" title={<div style={{fontSize: "1.2em"}}>Intensity / Age Group / Type of Activities</div>} style={{borderWidth: "2px"}} type='inner'>
                <Tableau
                    vizUrl="https://public.tableau.com/views/Physicalcharts-ageintensity16522/Dashboard1?:language=en-US&publish=yes&:display_count=n&:origin=viz_share_link"
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
                    <p>The activities of participants aged 19 and above mainly consists of work.</p>
                    <p>Activities of both moderate and vigorous intensity are most performed by participants aged between 45 and 60. 
                    This is then followed by those above 60, and subsequently those aged 30 to 45. </p>
                </div>
                </Card>
                <br></br>
            </Col>
        </Row>
        <Row key='chart2'>
            <Col flex={"auto"} style={{margin: "0 5px"}}>
                <Card size="small" title={<div style={{fontSize: "1.2em"}}>Marital Status / Type of Activities</div>} style={{borderWidth: "2px"}} type='inner'>
                <Tableau
                    vizUrl="https://public.tableau.com/views/Physicalcharts-maritalactivity16522/Dashboard2?:language=en-US&publish=yes&:display_count=n&:origin=viz_share_link"
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
                        Total participants who are married & living together: <b>6360</b>
                    </p>
                    <p>
                        Total participants who are single / married but not living together: <b>3064</b>
                    </p>
                </div>
                </Card>
                <br></br>
                <Card size="small" title={<div style={{fontSize: "1.2em"}}>Observations</div>} style={{borderWidth: "2px"}} type='inner'>
                <div>
                    <p>We can see that despite marital status, most activities performed are still work-related.</p>
                    <p>However, people who are married and living together tend to spend lesser time on sports, fitness and 
                        recreational activites (only <b>5.25%</b> of all married participants), as compared to those who are single 
                        or not living together with their spouses (<b>12.53%</b>). </p>
                </div>
                </Card>
                <br></br>
            </Col>
        </Row>
        <Row key='chart3'>
            <Col flex={"auto"} style={{margin: "0 5px"}}>
                <Card size="small" title={<div style={{fontSize: "1.2em"}}>Education Level / Recreational Activities</div>} style={{borderWidth: "2px"}} type='inner'>
                <Tableau
                    vizUrl="https://public.tableau.com/views/Physicalcharts-edufitness16522/Dashboard3?:language=en-US&publish=yes&:display_count=n&:origin=viz_share_link"
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
                    <p>In general, participants who receive more education would perform more sports, fitness or recreational activities, 
                        but another factor is the number of participants from such a category (1612 ppl), which is more than those who receive lesser/no education (462 ppl). </p>
                    <p>However, participants aged 60 and above who receive lesser/no education tend to do more fitness and recreational activities.</p>
                </div>
                </Card>
                <br></br>
            </Col>
        </Row>
        </QueueAnim>
    </div>
  )
}
