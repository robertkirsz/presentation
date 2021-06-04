import { useState } from 'react'
import Slide from 'components/Slide'
import Slides from 'components/Slides'
import Controls from 'components/Controls'

const weightLossSlides = [
  <Slide key={0} enter="bottom" exit="top" style={{ background: 'papayawhip' }}>
    Hello 1
  </Slide>,
  <Slide key={1} style={{ background: 'tomato' }}>
    Welcome 2
  </Slide>,
  <Slide key={2} style={{ background: 'powderblue' }}>
    Hi 3
  </Slide>,
]

export default function App() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0)

  const changeSLide = (index: number) => {
    setCurrentSlideIndex(index)
  }

  return (
    <>
      <Slides currentSlideIndex={currentSlideIndex}>{weightLossSlides}</Slides>
      <Controls
        currentSlideIndex={currentSlideIndex}
        numberOfSlides={weightLossSlides.length}
        onChange={changeSLide}
      />
    </>
  )
}
