import React from 'react'
import { ListOfPhotoCards } from '../container/ListOfPhotoCards'
import { ListOfCategories } from '../components/ListOfCategories'
import { Helmet } from 'react-helmet'
export const Home = ({ id }) => {
  return (
    <>
      <Helmet>
        <title>
          Tu nueva app de fotos
        </title>
        <meta name='description' content='Descubre nuevas imágenes todos los días' />
      </Helmet>
      <ListOfCategories />
      <ListOfPhotoCards categoryId={id} />
    </>)
}
