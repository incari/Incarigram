import React from 'react'
import { Image, Link, Grid } from './styles'

export const ListOfFavs = ({ favs = [] }) => {
  return <Grid>
    {
      favs.map(fav =>
        <Link key={fav.id} to={`/detail/${fav.id}`}>
          <Image key={fav.id} src={fav.src} />
        </Link>)
    }
         </Grid>
}
