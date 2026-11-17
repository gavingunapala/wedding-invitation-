import { useCallback, useRef, useState } from 'react'
import Hero from './components/Hero.jsx'
import Story from './components/Story.jsx'
import EventDetails from './components/EventDetails.jsx'
import Countdown from './components/Countdown.jsx'
import Gallery from './components/Gallery.jsx'
import Rsvp from './components/Rsvp.jsx'
import Footer from './components/Footer.jsx'
import EnvelopeIntro from './components/EnvelopeIntro.jsx'

export default function App() {
  const [opened, setOpened] = useState(false)
  const main = useRef(null)
  const openInvitation = useCallback(() => {
    setOpened(true)
    window.scrollTo(0, 0)
    requestAnimationFrame(() => main.current?.focus({ preventScroll: true }))
  }, [])

  return (
    <>
      {!opened && <EnvelopeIntro onOpen={openInvitation} />}
      <main className="page" ref={main} tabIndex={-1} inert={!opened ? '' : undefined} aria-hidden={!opened ? true : undefined}>
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
