import { useState } from 'react'
import Hero from './components/Hero.jsx'
import Scene3D from './components/Scene3D.jsx'
import Story from './components/Story.jsx'
import EventDetails from './components/EventDetails.jsx'
import Countdown from './components/Countdown.jsx'
import Gallery from './components/Gallery.jsx'
import Rsvp from './components/Rsvp.jsx'
import Footer from './components/Footer.jsx'
import EnvelopeIntro from './components/EnvelopeIntro.jsx'

export default function App() {
  const [opened, setOpened] = useState(false)

  return (
    <>
      <Scene3D />
      <EnvelopeIntro onOpen={() => setOpened(true)} />
      <main className="page">
        <Hero opened={opened} />
        <Story />
        <EventDetails />
        <Countdown />
        <Gallery />
        <Rsvp />
        <Footer />
      </main>
    </>
  )
}