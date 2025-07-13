"use client"
import React from 'react'
import Searchbar from '../components/searchbar'
import Navbar from '../components/navbar'
import Details from './details'
import { useParams } from 'next/navigation'

export default function Homedetails() {
  const {id} = useParams()
    // console.log(id)
  return (
    <main>
        <Navbar />
        <Searchbar title={"Apartment"} search={false}/>
        <Details />
    </main>
  )
}