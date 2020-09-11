import React, { ReactNode } from 'react'
import { G, Path, Ellipse, PathProps, EllipseProps } from 'react-native-svg'
import { Animated, StyleProp } from 'react-native'

interface Props extends PathProps, EllipseProps {
  style?: StyleProp<any>
  children?: ReactNode
}

const createAnimated = (component: React.ComponentClass) => {
  const Comp = Animated.createAnimatedComponent(component)

  return (props: Props) => <Comp {...props} />
}

export const AnimatedPath = createAnimated(Path)
export const AnimatedGroup = createAnimated(G)
export const AnimatedEllipse = createAnimated(Ellipse)
