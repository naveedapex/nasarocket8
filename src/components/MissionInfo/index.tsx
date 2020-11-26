import React from 'react';
import { useLaunchMissionInfoQuery } from './../../generated/graphql';
import LaunchProfile  from '../MissionInfoProfile';

interface OwnProps {
  id: number;
}
const LaunchProfileContainer  = ({ id }: OwnProps) => {
    const { data, error, loading } = useLaunchMissionInfoQuery({variables:{id:String(id)}}); 

    if (loading) {
      return <div>Loading...</div>;
    }
  
    if (error) {
      return <div>ERROR</div>;
    }
  
    if (!data) {
      return <div>Select a flight from the panel</div>;
    }
  
    return <LaunchProfile  data={data} />;
}

export default LaunchProfileContainer 