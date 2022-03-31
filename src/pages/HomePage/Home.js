import React from 'react';
import { homeObjOne } from './Data';
import { InfoSec, InfoSection } from '../../components';

const Home = () => {
  return (
      <>
        <InfoSection {...homeObjOne}/>
      </>
  );
};

export default Home;