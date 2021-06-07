import styled from 'styled-components'

type Props = {
  isPreviewOn: boolean
  currentSlideIndex: number
  numberOfSlides: number
  onPreviewChange: () => void
  onSlideChange: (index: number) => void
}

export default function Controls({
  isPreviewOn,
  currentSlideIndex,
  numberOfSlides,
  onPreviewChange,
  onSlideChange,
}: Props) {
  const goPrev = () => {
    if (currentSlideIndex !== 0) onSlideChange(currentSlideIndex - 1)
  }

  const goNext = () => {
    if (currentSlideIndex !== numberOfSlides - 1) onSlideChange(currentSlideIndex + 1)
  }

  return (
    <Wrapper>
      <button onClick={goPrev}>Prev</button>
      <button onClick={goNext}>Next</button>
      <button onClick={onPreviewChange}>Preview {isPreviewOn ? 'off' : 'on'}</button>
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
