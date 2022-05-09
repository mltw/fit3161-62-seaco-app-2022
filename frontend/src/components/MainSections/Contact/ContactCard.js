import React, {useRef} from 'react'
import { useParams } from 'react-router-dom';
import { Row, Col, Divider } from 'antd';
import c1 from "./c1.png"
import c2 from "./c2.jpg"
import QueueAnim from 'rc-queue-anim';


export default function ContactCard() {
    const { subSection } = useParams();

    const img = useRef(null)
    const about = useRef(null)
    const email = useRef(null)
    const source = useRef(null)

    if (subSection === 'c1'){
        source.current = 'https://www.monash.edu.my/seaco/about-us/seaco-staff#Mohd_Roshidi_Ismail_Statistician'
        img.current = c1
        about.current = "Roshidi is a Statistician at SEACO. His PhD research in ‘Measuring Cancer Awareness’ in Malaysia and his skills to analyse, interpret data and draw conclusions, attracted SEACO’s attention. He also has a Master’s in Medical Science in Public Health (MMedSc) from University Malaya, and a Bachelor’s in Medical Science (BMedSc) from the University of Aberdeen, United Kingdom. He is experienced in lecturing, tutoring and facilitating biostatistics and epidemiology courses at postgraduate and undergraduate levels."
        email.current = ""
    }
    else if (subSection === 'c2'){
        source.current = 'https://www.monash.edu.my/seaco/about-us/seaco-staff#Norliza_Mat_IT_Executive_Database'
        img.current = c2
        about.current = "Norliza is an IT Executive at SEACO. She graduated from University Tun Hussein Onn with a Bachelor’s in Information Technology, majoring in Information Systems. She previously joined Xybase MSC as a Software Engineer in 2012. She has been with SEACO since November 2015."
        email.current = ""
    }

    return (
        // <Row justify="space-around" align="middle">
        <Row className='contact-card-text'>
            <Col flex="180px">
                <QueueAnim 
                    type={'left'}
                    duration={600} 
                    className="queue-simple"> 
                    <div key="pic" style={{textAlign: "center"}}>
                        <img src={img.current} alt="pic" style={{width:"100%", objectFit:"contain"}}/>
                        <a href={source.current}>Data Source</a>
                    </div>
                </QueueAnim>
            </Col>

            <Col flex="auto">
                <QueueAnim 
                    duration={600} 
                    className="queue-simple"> 
                    <div key="text" style={{paddingLeft: "24px"}}>
                        <Divider orientation='left'>About</Divider>
                        {about.current}
                        <Divider orientation='left'>Contact</Divider>
                        Email: {email.current}
                    </div>
                </QueueAnim>
            </Col>
        </Row>
    )
}
