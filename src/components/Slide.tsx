import styled, { css } from 'styled-components'
import type { ReactNode, CSSProperties } from 'react'

type Props = {
  isActive?: boolean
  isNext?: boolean
  isPast?: boolean
  enter?: 'top' | 'right' | 'bottom' | 'left'
  exit?: 'top' | 'right' | 'bottom' | 'left'
  isPreviewOn?: boolean
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
  isPreviewOn = false,
  style,
  children,
}: Props) {
  return (
    <Wrapper
      position={isPast ? getPosition(exit) : isNext ? getPosition(enter) : '0, 0'}
      isActive={isActive}
      isPreviewOn={isPreviewOn}
      style={style}
    >
      {isActive ? 'Active' : 'Non active'}
      <br />
      {children}
    </Wrapper>
  )
}

const Wrapper = styled.div<{ position: string; isActive: boolean; isPreviewOn: boolean }>`
  ${props =>
    !props.isPreviewOn &&
    css`
      position: absolute;
      opacity: ${Number(props.isActive)};
      transform: translate(${props.position});
      height: 100%;
      top: 0;
      left: 0;
      transition: opacity 0.6s, transform 0.4s;
    `}

  width: 100%;
`
