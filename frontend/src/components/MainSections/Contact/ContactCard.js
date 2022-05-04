import React, {useRef} from 'react'
import { useParams } from 'react-router-dom';
import { Row, Col, Divider } from 'antd';
import c1 from "./c1.png"
import c2 from "./c2.jpg"


export default function ContactCard() {
    const { section } = useParams();

    const img = useRef(null)
    const about = useRef(null)
    const email = useRef(null)
    const source = useRef(null)

    if (section === 'c1'){
        source.current = 'https://www.monash.edu.my/seaco/about-us/seaco-staff#Mohd_Roshidi_Ismail_Statistician'
        img.current = c1
        about.current = "Roshidi is a Statistician at SEACO. His PhD research in ‘Measuring Cancer Awareness’ in Malaysia and his skills to analyse, interpret data and draw conclusions, attracted SEACO’s attention. He also has a Master’s in Medical Science in Public Health (MMedSc) from University Malaya, and a Bachelor’s in Medical Science (BMedSc) from the University of Aberdeen, United Kingdom. He is experienced in lecturing, tutoring and facilitating biostatistics and epidemiology courses at postgraduate and undergraduate levels."
        email.current = ""
    }
    else if (section === 'c2'){
        source.current = 'https://www.monash.edu.my/seaco/about-us/seaco-staff#Norliza_Mat_IT_Executive_Database'
        img.current = c2
        about.current = "Norliza is an IT Executive at SEACO. She graduated from University Tun Hussein Onn with a Bachelor’s in Information Technology, majoring in Information Systems. She previously joined Xybase MSC as a Software Engineer in 2012. She has been with SEACO since November 2015."
        email.current = ""
    }

    return (
        // <Row justify="space-around" align="middle">
        <Row className='contact-card-text'>
            <Col flex="180px">
                <div style={{textAlign: "center"}}>
                    <img src={img.current} alt="pic" style={{width:"100%", objectFit:"contain"}}/>
                    <a href={source.current}>Data Source</a>
                </div>
            </Col>
            <Col flex="auto">
                <div style={{paddingLeft: "24px"}}>
                <Divider orientation='left'>About</Divider>
                {about.current}
                <Divider orientation='left'>Contact</Divider>
                Email: {email.current}
                </div>
                
            </Col>
        </Row>
    )
}
