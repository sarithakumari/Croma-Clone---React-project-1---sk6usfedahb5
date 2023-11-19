import React from 'react'
import CardMedia from '@mui/material/CardMedia';
import Card from '@mui/material/Card';
import { Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';


function HomeBannerCard({ imagePath, title, imageURL }) {
  return (
    <Card >
        <Link component={RouterLink} to={imagePath} >
            <CardMedia component='img' src={imageURL} alt={title} />
        </Link>
    </Card>
  )
}

export default HomeBannerCard