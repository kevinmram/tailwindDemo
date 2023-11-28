"use client"
import React, { useState } from "react"

// Components
import Button from './components/button'
import Card from './components/card'
import Modal from './components/modal'
import Navbar from './components/navbar'



export default function Home() {
  // Constants
  const cardData = [
    { title: 'Card 1', content: 'This is the first card.' },
    { title: 'Card 2', content: 'This is the second card.' },
    { title: 'Card 3', content: 'This is the third card.' },
  ];
  const [open, setOpen] = useState(true)

  // Functions
  function onClose() {
    setOpen(!open)
  }

  return (
    <>
      <Navbar />
      
      <br></br>

      <button className="flex flex-row bg-black text-[#FFDCDC] px-2 py-4 rounded-lg font-semibold hover:bg-[#FFDCDC] hover:text-[#A52424] border-2">
        <div>JOIN US</div>
      </button>

      {cardData.map((card, index) => (
        <Card key={index} title={card.title} content={card.content} />
      ))}

      <Modal title= "" isOpen={open} onClose={onClose}/>
    </>

  )
}
