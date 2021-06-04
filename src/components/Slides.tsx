import { Children, isValidElement, cloneElement } from 'react'
import styled from 'styled-components'
import type { ReactNode } from 'react'

type Props = {
  currentSlideIndex: number
  children: ReactNode
}

export default function Slides({ currentSlideIndex, children }: Props) {
  return (
    <Wrapper>
      {Children.map(children, (child, index) =>
        !isValidElement(child)
          ? child
          : cloneElement(child, {
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
  overflow: hidden;
`
