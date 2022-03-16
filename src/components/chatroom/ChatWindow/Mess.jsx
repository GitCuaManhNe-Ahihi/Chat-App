import { Avatar, Typography } from 'antd'
import React from 'react'
import styled from 'styled-components'
import { formatRelative } from 'date-fns/esm';
const WrapperStyle = styled.div`
    align-self: flex-start;
    margin: 10px;
   .header{
         display: flex;
         width: 300px;
         height: 20px;
         align-items: center;
         margin-bottom: 10px;

    .author{
        margin-left: 12px;
        font-weight: bold;
        margin-left: 10px;
        display: inline-block;
    }
    .date{
        margin-left: 20px;
        font-size: 12px;
        color: #a7a7a7a7;
    }
   }
    .content{
        margin-left: 20px;
        max-width:500px;
        background-color: #a7a7a7a7;
        text-align: left;
        padding: 5px;
        border-radius: 5px;
    
       
    }
`

function formatDate(seconds) {
    let formattedDate = '';
  
    if (seconds) {
      formattedDate = formatRelative(new Date(seconds * 1000), new Date());
  
      formattedDate =
        formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);
    }
  
    return formattedDate;
  }
export default function Mess(props) {
  return (
      <WrapperStyle>
    <div>
        <div className='header'>
            <div>
                <Avatar src={props.photoURL}>{props.photoURL?'':props.displayName.charAt(0).toUpperCase()}</Avatar>
                <Typography.Text className='author'>{props.displayName}</Typography.Text>
            </div>
           <Typography.Text className='date'> {formatDate(props.createdAt?.seconds)}</Typography.Text>
        </div>
        <div className='content'>
            <Typography.Text>{props.content}</Typography.Text>
        </div>
    </div>
    </WrapperStyle>
  )
}
