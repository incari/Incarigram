import React from 'react'
import { ListOfCategories } from './components/ListOfCategories'
import { GlobalStyle } from './components/styles/GlobalStyles'
import { ListOfPhotoCard } from './components/ListOfPhotoCard'
import { Logo } from './components/Logo'

export const App = () => (
  <>
    <Logo />
    <GlobalStyle />
    <ListOfCategories />
    <ListOfPhotoCard />
  </>
)
