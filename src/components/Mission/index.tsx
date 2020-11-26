import React from 'react';
import { useLaunchListQuery } from '../../generated/graphql';
import MissionList from './MissionList';

export interface OwnProps {
    handleIdChange: (newId: number) => void;
  }
const MissionContainer : React.FC<OwnProps>  = ({handleIdChange}) => {
    const { data, loading, error } = useLaunchListQuery();
    if(loading)
        return <div>Loading</div>

    if(error || !data)
        return <div>Error</div>

        console.log(data);
return (<MissionList data={data} handleIdChange={handleIdChange} />)
}

export default MissionContainer