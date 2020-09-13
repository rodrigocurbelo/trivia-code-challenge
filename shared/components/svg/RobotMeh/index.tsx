import React, { useMemo, useEffect } from 'react'
import { G, Ellipse } from 'react-native-svg'

import theme from '../../../theme'
import { Animated } from 'react-native'
import { AnimatedEllipse, AnimatedPath, AnimatedGroup } from '../../ui-core'
import {
  animateTiming,
  getMehPupilsTransform,
} from '../../../helpers/animations'
import {
  getEyesAnimation,
  getSimpleInterpolation,
} from '../../../helpers/animations'

interface Props {
  animate?: boolean
}

export const mehTextPathDeclaration =
  'M161.421 38.203l3.691 9.809 3.683-9.809h2.874V51h-2.215v-4.219l.22-5.642-3.78 9.861h-1.591l-3.77-9.852.22 5.633V51h-2.215V38.203h2.883zm16.866 12.973c-1.354 0-2.452-.425-3.296-1.275-.838-.855-1.257-1.992-1.257-3.41v-.264c0-.949.182-1.795.545-2.54.369-.75.885-1.332 1.547-1.748a4.077 4.077 0 012.215-.624c1.295 0 2.294.413 2.997 1.239.709.826 1.063 1.995 1.063 3.506v.862h-6.214c.065.785.326 1.406.783 1.863.463.457 1.043.686 1.74.686.978 0 1.775-.396 2.391-1.187l1.151 1.099a3.875 3.875 0 01-1.529 1.327c-.633.31-1.345.466-2.136.466zm-.255-8.148c-.586 0-1.061.205-1.424.616-.357.41-.586.981-.685 1.713h4.069V45.2c-.047-.715-.237-1.254-.571-1.617-.334-.37-.797-.554-1.389-.554zm7.84-.5c.697-.81 1.579-1.213 2.645-1.213 2.028 0 3.056 1.157 3.085 3.471V51h-2.135v-6.135c0-.656-.144-1.119-.431-1.388-.281-.276-.697-.413-1.248-.413-.856 0-1.494.38-1.916 1.142V51h-2.136V37.5h2.136v5.027zm9.228 6.222c.399 0 .706.114.923.343.217.222.325.504.325.843 0 .334-.108.613-.325.836-.217.216-.524.325-.923.325-.381 0-.682-.109-.905-.325-.223-.217-.334-.496-.334-.835 0-.34.108-.622.325-.844.217-.229.522-.343.914-.343zm5.028 0c.398 0 .706.114.923.343.216.222.325.504.325.843 0 .334-.109.613-.325.836-.217.216-.525.325-.923.325-.381 0-.683-.109-.906-.325a1.117 1.117 0 01-.334-.835c0-.34.109-.622.326-.844.216-.229.521-.343.914-.343zm5.027 0c.398 0 .706.114.923.343.217.222.325.504.325.843 0 .334-.108.613-.325.836-.217.216-.525.325-.923.325-.381 0-.683-.109-.905-.325-.223-.217-.334-.496-.334-.835 0-.34.108-.622.325-.844.217-.229.521-.343.914-.343z'

export default function RobotMeh({}: Props) {
  const [sighAnimatedValue, pupilsAnimatedValue] = useMemo(
    () => [new Animated.Value(0), new Animated.Value(0)],
    []
  )

  useEffect(() => {
    const triggerExpression = () => {
      Animated.parallel([
        animateTiming(sighAnimatedValue, 1, 1000, 500, true),
        animateTiming(pupilsAnimatedValue, 0.75, 1000, 500, true),
      ]).start(() => {
        Animated.parallel([
          animateTiming(sighAnimatedValue, 0, 500, 700, true),
          animateTiming(pupilsAnimatedValue, 1, 500, 700, true),
        ]).start(() => {
          pupilsAnimatedValue.setValue(0)
          triggerExpression()
        })
      })
    }

    triggerExpression()
  }, [])

  const pupilsTransform = useMemo(
    () => getMehPupilsTransform(pupilsAnimatedValue),
    []
  )

  return (
    <G>
      {/* Right eye */}
      <AnimatedGroup style={getEyesAnimation(sighAnimatedValue, [0, -2])}>
        <Ellipse
          cx={97.0423}
          cy={139.497}
          rx={10.0469}
          ry={9.99969}
          fill={theme.robot.facialFeaturesColor}
        />

        {/* Right pupil */}
        <AnimatedEllipse
          cx={97.0422}
          cy={143.497}
          rx={4.01878}
          ry={3.99988}
          fill={theme.robot.headColor}
          style={{
            transform: pupilsTransform,
          }}
        />

        {/* Left eye */}
        <Ellipse
          cx={129.192}
          cy={139.497}
          rx={10.0469}
          ry={9.99969}
          fill={theme.robot.facialFeaturesColor}
        />

        {/* Left pupil */}
        <AnimatedEllipse
          cx={129.193}
          cy={143.497}
          rx={4.01878}
          ry={3.99988}
          fill={theme.robot.headColor}
          style={{
            transform: pupilsTransform,
          }}
        />
      </AnimatedGroup>

      {/* Right eyebrow */}
      <AnimatedPath
        d="M88.9968 120.5L107.497 120"
        stroke={theme.robot.facialFeaturesColor}
        strokeWidth={5}
        style={getEyesAnimation(sighAnimatedValue, [0, -6])}
      />

      {/* Left eyebrow */}
      <AnimatedPath
        d="M118.997 120.5H119.997L137.497 120"
        stroke={theme.robot.facialFeaturesColor}
        strokeWidth={5}
        style={getEyesAnimation(sighAnimatedValue, [0, -6])}
      />

      {/* Mouth */}
      <AnimatedPath
        d="M127.997 167V167C120.748 165.352 113.23 165.276 105.948 166.775L99.9968 168"
        stroke={theme.robot.facialFeaturesColor}
        strokeWidth={5}
        style={{
          transform: [
            {
              translateY: getSimpleInterpolation(sighAnimatedValue, [0, -2]),
              rotate: sighAnimatedValue.interpolate({
                inputRange: [0, 1],
                outputRange: [0, -0.02],
              }),
            },
          ],
        }}
      />
    </G>
  )
}
