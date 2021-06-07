import { Children, isValidElement, cloneElement } from 'react'
import styled from 'styled-components'
import type { ReactNode } from 'react'

type Props = {
  isPreviewOn: boolean
  currentSlideIndex: number
  children: ReactNode
}

export default function Slides({ isPreviewOn, currentSlideIndex, children }: Props) {
  return (
    <Wrapper>
      {Children.map(children, (child, index) =>
        !isValidElement(child)
          ? child
          : cloneElement(child, {
              isPreviewOn: isPreviewOn,
              isActive: index === currentSlideIndex,
              isNext: index > currentSlideIndex,
              isPast: index < currentSlideIndex,
            })
      )}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
`
