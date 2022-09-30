import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Grid } from '@mui/material';
import Link from 'next/link';


export default function ActionAreaCard({data}) {
    
  return (
    <Link href="/blogs/[id]" as={`/blogs/${data.id}`} >
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"  
          width="500"
          image={data.image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" >
            {data.owner.firstName}  
          </Typography>
          <Typography variant="body2" color="text.secondary">
          {data.text}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Link>
  );
}
