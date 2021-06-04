import styled from 'styled-components'
import type { ReactNode, CSSProperties } from 'react'

type Props = {
  isActive?: boolean
  isNext?: boolean
  isPast?: boolean
  enter?: 'top' | 'right' | 'bottom' | 'left'
  exit?: 'top' | 'right' | 'bottom' | 'left'
  style?: CSSProperties
  children: ReactNode
}

const getPosition = (value: Props['enter'] | Props['exit']) => {
  if (value === 'top') return '0, -100%'
  if (value === 'bottom') return '0, 100%'
  if (value === 'left') return '-100%, 0'
  if (value === 'right') return '100%, 0'
  return '0, 0'
}

export default function Slide({
  isActive = false,
  isNext,
  isPast,
  enter = 'bottom',
  exit = 'top',
  style,
  children,
}: Props) {
  return (
    <Wrapper
      position={isPast ? getPosition(exit) : isNext ? getPosition(enter) : '0, 0'}
      isActive={isActive}
      style={style}
    >
      {children}
    </Wrapper>
  )
}

const Wrapper = styled.div<{ position: string; isActive: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  opacity: ${props => Number(props.isActive)};
  transform: translate(${props => props.position});
  transition: opacity 0.6s, transform 0.4s;
`
