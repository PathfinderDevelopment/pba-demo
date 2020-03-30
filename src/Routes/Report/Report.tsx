import React from 'react';
import {Button, Typography} from 'antd';
import {useHistory} from 'react-router-dom';
import {LineChart, Line, CartesianGrid, XAxis, YAxis, ResponsiveContainer} from 'recharts';

export const Report:React.FC = () => {
  const history = useHistory();
  const shareData = ():void => {
    history.push('/sharedata');
    // TODO: Track data sharing event.
  };

  const data = [{time: '10am', d: 120}, {time: '11am', d: 180}, {time: '12pm', d: 120}, {time: '1pm', d: 80}];

  return (
    <div style={{width: '100%', height: '400px'}}>
      <Typography.Title level={2}>Trend</Typography.Title>
      <ResponsiveContainer>
        <LineChart data={data}>
          <Line type='monotone' dataKey='d'/>
          <CartesianGrid stroke='#ccc' vertical={false}/>
          <XAxis dataKey='time'/>
          <YAxis domain={[0, 400]} />
        </LineChart>
      </ResponsiveContainer>

      <Button type='primary' onClick={shareData}>Share Data</Button>
    </div>
  );
};
