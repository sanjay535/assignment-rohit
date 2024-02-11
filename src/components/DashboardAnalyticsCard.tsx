import { Card, CardContent, Typography,colors } from '@mui/material'
import React from 'react'
export const handleColor=(color:string)=>{
  switch (color) {
    case 'info':
      return colors.lightBlue[300]
    case 'primary':
        return colors.red[300]
    case 'secondary':
      return colors.brown[300] 
    case 'red':
      return colors.green[300]   
    default:
      return '';
  }
}

const DashboardAnalyticsCard:React.FC<{
  title:string,
  text:string,
  color:string
}> = ({color,title, text}) => {
  return (
    <Card data-testid={title} style={{color:handleColor(color)}}  variant="outlined" sx={{ margin:4, display:'flex' }}>
      <CardContent>
      <Typography data-testid="title" variant="subtitle1" component="p">
        {title}
      </Typography>
        <Typography data-testid="text" sx={{fontSize:48, textAlign:'center' }}>{text}</Typography>
      </CardContent>
    </Card>
  )
}

export default DashboardAnalyticsCard