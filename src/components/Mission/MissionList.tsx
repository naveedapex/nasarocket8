import React from 'react';
import { LaunchListQuery } from '../../generated/graphql';

export interface OwnProps {
    handleIdChange: (newId: number) => void;
  }
interface Props extends OwnProps{
    data : LaunchListQuery;
   
}

const className = 'LaunchList';

const MissionList: React.FC<Props> = ({data, handleIdChange}) => {
    console.log("data", data);
return <div className={className}>
  <h3>Launches</h3>
    <ul className={`${className}__list`}>
        {data.launches?.map((item, i)=>(
            <li key={i} className={`${className}__item`} onClick={() => handleIdChange(item?.flight_number!)}>{item?.mission_name}</li>
        ))}
    </ul>
</div>
}

export default MissionList