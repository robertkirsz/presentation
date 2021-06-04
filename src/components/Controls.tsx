import styled from 'styled-components'

type Props = {
  currentSlideIndex: number
  numberOfSlides: number
  onChange: (index: number) => void
}

export default function Controls({ currentSlideIndex, numberOfSlides, onChange }: Props) {
  const goPrev = () => {
    if (currentSlideIndex !== 0) onChange(currentSlideIndex - 1)
  }

  const goNext = () => {
    if (currentSlideIndex !== numberOfSlides - 1) onChange(currentSlideIndex + 1)
  }

  return (
    <Wrapper>
      <button onClick={goPrev}>Prev</button>
      <button onClick={goNext}>Next</button>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  position: fixed;
  right: 4px;
  bottom: 0;
  z-index: 10;

  > button {
    margin: 8px 4px;
  }
`
