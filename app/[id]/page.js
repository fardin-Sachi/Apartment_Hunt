import React from 'react'
import Searchbar from '../components/searchbar'
import Navbar from '../components/navbar'
import Details from './details'

export default function Homedetails() {
  return (
    <main>
        <Navbar />
        <Searchbar title={"Apartment"} search={false}/>
        <Details />
    </main>
  )
}