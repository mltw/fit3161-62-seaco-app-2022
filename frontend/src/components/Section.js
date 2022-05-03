import React from 'react'
import { connect } from 'react-redux';
import { useParams } from "react-router-dom";
import ContactCard from './ContactCard';
import Dashboard from './Dashboard';
import QuesAns from './QuesAns';

function Section() {

    const { section } = useParams();
    
    switch (section) {
        case 'dashboard':
            return <Dashboard />
        case 'qna':
            return <QuesAns />
        case 'c1':
        case 'c2':
            return <ContactCard />
    
        default:
            return <div>Other Sections</div>;
    }

}

export default connect(state => ({
    // props
    // username: state.userValidation.username,
}), {
    // actions
    // signOutUser
})(Section);
