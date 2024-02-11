import { Card, CardContent, Typography } from '@mui/material'
import React from 'react'

const DashboardAnalyticsCard:React.FC<{
  title:string,
  text:number
}> = ({title, text}) => {
  return (
    <Card  variant="outlined" sx={{ margin:4, display:'flex' }}>
      <CardContent>
      <Typography variant="subtitle1" component="p">
        {title}
      </Typography>
        <Typography sx={{fontSize:48, textAlign:'center' }}>{text}</Typography>
      </CardContent>
    </Card>
  )
}

export default DashboardAnalyticsCard