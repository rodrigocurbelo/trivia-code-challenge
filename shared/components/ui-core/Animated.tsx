import React, { ReactNode } from 'react'
import { G, Path, Ellipse, PathProps, EllipseProps } from 'react-native-svg'
import { Animated, StyleProp } from 'react-native'

interface Props extends PathProps, EllipseProps {
  style?: StyleProp<any>
  children?: ReactNode
}

// The whole point of this HOC is to make sure that we can use transform and
// other properties to animate svg elements, hence the StyleProp<any>.
const createAnimated = (component: React.ComponentClass) => {
  const Comp = Animated.createAnimatedComponent(component)

  return (props: Props) => <Comp {...props} />
}

export const AnimatedPath = createAnimated(Path)
export const AnimatedGroup = createAnimated(G)
export const AnimatedEllipse = createAnimated(Ellipse)
