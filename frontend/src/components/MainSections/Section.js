import React from 'react'
import { connect } from 'react-redux';
import { useParams } from "react-router-dom";
import Contact from './Contact/Contact';
import Dashboard from './Dashboard';
import Report from './Reports/Report';
import { Result } from 'antd';

function Section() {

    const { section } = useParams();
    
    switch (section) {
        case 'dashboard':
            return <Dashboard />
        case 'reports':
            return <Report />
        case 'contacts':
            return <Contact />

        default:
            return <Result
                        status="404"
                        title="404"
                        subTitle="Sorry, the page you visited does not exist."
                    />
    }

}

export default connect(state => ({
    // props
}), {
    // actions
})(Section);
