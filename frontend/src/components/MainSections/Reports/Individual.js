import React from 'react'
import { Row, Card, Col } from 'antd';
import Tableau from '../../Tableau/Tableau';
import QueueAnim from 'rc-queue-anim';

export default function Individual() {

  return (
    <div>
      <QueueAnim 
          delay={300} 
          duration={600} 
          type='left'
          className="queue-simple"> 
          <h1 key='title' style={{textAlign: "center", fontSize: "25px"}}>Individual Health Reports</h1>
          <hr key='line'></hr>
          <br></br>
      </QueueAnim>
      <QueueAnim 
        delay={600} 
        duration={600} 
        type='right'
        className="queue-simple"> 
        <Row key="chart1">
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
                vizUrl="https://public.tableau.com/views/Individualcharts-diseasechinese17522_16529744913220/Dashboard3?:language=en-US&publish=yes&:display_count=n&:origin=viz_share_link"
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
        <br></br>
        <Row key='chart4'>
          <Col flex={"auto"} style={{margin: "0 5px"}}>
            <Card size="small" title={<div style={{fontSize: "1.2em"}}>Top 5 diseases among all participants (Education & Ethnicity)</div>} style={{borderWidth: "2px"}} type='inner'>
            <Tableau
                vizUrl="https://public.tableau.com/views/Individualcharts-diseaseedueth18522/Dashboard6?:language=en-US&publish=yes&:display_count=n&:origin=viz_share_link"
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
                <p>Hypertension and a combination of hypertension and diabetes are most common in those who receive none or lesser education.</p>
                <p>For asthma, diabetes and vision problem, there are slightly more participants who receive more education having those diseases, as compared
                  to those with none or lesser education.
                </p>
              </div>
            </Card>
          </Col>
        </Row>  
        <br></br>
        <Row key='chart5'>
          <Col flex={"auto"} style={{margin: "0 5px"}}>
            <Card size="small" title={<div style={{fontSize: "1.2em"}}>Top 5 diseases among all participants (Income & Ethnicity)</div>} style={{borderWidth: "2px"}} type='inner'>
              <Tableau
                  vizUrl="https://public.tableau.com/views/Individualcharts-diseaseincomeeth18522/Dashboard7?:language=en-US&publish=yes&:display_count=n&:origin=viz_share_link"
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
                <p>From an income perspective (excluding N/A values), we can observe that those with lower income (below RM1500 to RM3000) have poorer health condition and suffer more 
                  from diseases, with the majority being those with income lesser than RM1500.</p>
                <p>One reason for this may be due to the lack of funds for accessing healthcare. An unhealthy lifestlye, e.g. imbalance of diet, may also affect
                  the development of the diseases.</p>
              </div>
            </Card>
          </Col>
        </Row>  
      </QueueAnim>
    </div>
  )
}
