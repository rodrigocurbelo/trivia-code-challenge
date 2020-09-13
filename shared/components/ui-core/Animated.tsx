import React, { ReactNode } from 'react'
import {
  G,
  Path,
  Ellipse,
  PathProps,
  EllipseProps,
  rgbaArray,
} from 'react-native-svg'
import { Animated, StyleProp } from 'react-native'

// SimpleSpread<L, R> is a simplified version of what happens when you
// do an object spread like {...left, ...right} where left is of type L and
// right is of type R.  It is the type R, with any properties on L that
// don't exist in R.  (It doesn't work if a key in L is an optional property in
// R, which is why this is simplified)
type SimpleSpread<L, R> = R & Pick<L, Exclude<keyof L, keyof R>>
type SvgElementsUsed = SimpleSpread<EllipseProps, PathProps>

interface Props {
  fill?: Animated.AnimatedInterpolation | string | rgbaArray
  style?: StyleProp<any>
  children?: ReactNode
}

// The whole point of this HOC is to make sure that we can use transform and
// other properties to animate svg elements, hence the StyleProp<any>.
const createAnimated = (component: React.ComponentClass) => {
  const Comp = Animated.createAnimatedComponent(component)

  return (props: SimpleSpread<SvgElementsUsed, Props>) => <Comp {...props} />
}

export const AnimatedPath = createAnimated(Path)
export const AnimatedGroup = createAnimated(G)
export const AnimatedEllipse = createAnimated(Ellipse)
