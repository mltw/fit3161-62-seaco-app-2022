import React from 'react'
import { Row, Statistic, Card, Col } from 'antd';
import { StyledCard } from '../../Styled';
import { useParams } from "react-router-dom";
import Individual from './Individual';
import Household from './Household';
import Physical from './Physical';

export default function Report() {

  const { subSection } = useParams();

  switch (subSection) {
    case 'individual':
      return <Individual />;
    case 'household':
      return <Household />;
    case 'physical':
      return <Physical />;
    default:
        return <div>Other Sections in qna</div>;;
  }

}