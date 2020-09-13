import React, { useMemo, useEffect } from 'react'
import { G, Path, Ellipse } from 'react-native-svg'

import theme from '../../../theme'
import { Animated } from 'react-native'
import { ROBOT_MENU_TIMING } from '../../../constants/robotMenuAnimations'
import { getEyesAnimation, animateTiming } from '../../../helpers/animations'
import { AnimatedGroup, AnimatedEllipse, AnimatedPath } from '../../ui-core'

interface Props {
  animate?: boolean
}

export const greatTextPathDeclaration =
  'M168.29 49.339c-.463.603-1.104 1.06-1.925 1.371-.82.31-1.752.466-2.795.466-1.072 0-2.021-.243-2.847-.73-.827-.486-1.465-1.18-1.916-2.083-.446-.908-.677-1.965-.695-3.173v-1.002c0-1.933.463-3.442 1.389-4.526.926-1.09 2.218-1.635 3.876-1.635 1.424 0 2.555.352 3.393 1.055.837.703 1.341 1.717 1.511 3.041h-2.179c-.247-1.541-1.14-2.311-2.681-2.311-.996 0-1.755.36-2.276 1.08-.516.715-.783 1.767-.8 3.156v.984c0 1.383.29 2.458.87 3.226.586.761 1.397 1.142 2.434 1.142 1.137 0 1.946-.257 2.426-.773v-2.505h-2.637v-1.687h4.852v4.904zm7.216-5.898a5.277 5.277 0 00-.87-.07c-.979 0-1.638.375-1.978 1.125V51h-2.136v-9.51h2.04l.052 1.064c.516-.827 1.231-1.24 2.145-1.24.304 0 .556.041.756.123l-.009 2.004zm5.361 7.735c-1.353 0-2.452-.425-3.296-1.275-.838-.855-1.257-1.992-1.257-3.41v-.264c0-.949.182-1.795.545-2.54.37-.75.885-1.332 1.547-1.748a4.08 4.08 0 012.215-.624c1.295 0 2.294.413 2.997 1.239.709.826 1.064 1.995 1.064 3.506v.862h-6.214c.064.785.325 1.406.782 1.863.463.457 1.043.686 1.74.686.979 0 1.776-.396 2.391-1.187l1.151 1.099a3.869 3.869 0 01-1.529 1.327c-.633.31-1.345.466-2.136.466zm-.255-8.148c-.586 0-1.06.205-1.424.616-.357.41-.585.981-.685 1.713h4.069V45.2c-.047-.715-.237-1.254-.571-1.617-.334-.37-.797-.554-1.389-.554zM192.029 51c-.093-.182-.175-.477-.246-.888-.679.71-1.512 1.064-2.496 1.064-.955 0-1.734-.273-2.338-.818-.603-.544-.905-1.218-.905-2.021 0-1.014.375-1.79 1.125-2.33.756-.544 1.834-.817 3.234-.817h1.31v-.624c0-.492-.138-.884-.413-1.177-.276-.3-.695-.449-1.257-.449-.486 0-.885.123-1.195.37-.311.24-.466.547-.466.922h-2.136c0-.521.173-1.007.519-1.459.345-.457.814-.814 1.406-1.072.598-.258 1.263-.386 1.995-.386 1.113 0 2.001.28 2.663.843.662.557 1.002 1.342 1.02 2.356v4.289c0 .855.12 1.538.36 2.048V51h-2.18zm-2.346-1.538c.421 0 .817-.103 1.186-.308.375-.205.656-.48.844-.826v-1.793h-1.151c-.791 0-1.386.138-1.785.413-.398.276-.597.665-.597 1.17 0 .41.134.737.404.984.275.24.642.36 1.099.36zm9.079-10.283v2.311h1.678v1.582h-1.678v5.309c0 .363.07.627.211.79.146.16.404.238.773.238.246 0 .495-.03.747-.088v1.653a5.256 5.256 0 01-1.406.202c-1.641 0-2.461-.906-2.461-2.716v-5.388h-1.564V41.49h1.564V39.18h2.136zm5.581 8.05h-1.837l-.202-9.026h2.25l-.211 9.026zm-2.101 2.76c0-.334.109-.61.325-.826.217-.223.513-.334.888-.334s.671.111.888.334c.217.217.325.492.325.826 0 .323-.106.592-.316.809-.211.217-.51.325-.897.325s-.685-.108-.896-.325a1.114 1.114 0 01-.317-.809z'

export default function RobotGreat({ animate = false }: Props) {
  const [eyesAnimatedValue, pupilsXYAnimatedValue] = useMemo(
    () => [new Animated.Value(0), new Animated.ValueXY({ x: 0, y: 0 })],
    []
  )

  const {
    eyes,
    pupils: { lookAtButton },
  } = ROBOT_MENU_TIMING

  useEffect(() => {
    if (animate) {
      const triggerEyes = (toValue: number) => {
        // Simply make the eyes/facial features go up and down.
        animateTiming(
          eyesAnimatedValue,
          toValue,
          eyes.bouncing,
          0,
          true
        ).start(() => triggerEyes(toValue === 1 ? 0 : 1))
      }

      const triggerPupils = (lookAtUser: boolean) => {
        animateTiming(
          pupilsXYAnimatedValue,
          // Looks either directly at the user or downwards toward the CTA
          { y: lookAtUser ? -3 : 0, x: 0 },
          lookAtButton.duration,
          // It spends a longer time looking at the CTA than looking at the
          // user, this makes it seem like the robot is "inviting" the user
          // to press the CTA.
          lookAtUser
            ? lookAtButton.lookAtButtonDelay
            : lookAtButton.lookAtUserDelay,
          true
        ).start(() => triggerPupils(!lookAtUser))
      }

      triggerPupils(true)
      triggerEyes(1)
    }
  }, [animate])

  return (
    <G>
      {/* Eyes */}
      <AnimatedGroup style={getEyesAnimation(eyesAnimatedValue, [0, -2])}>
        {/* Left eye */}
        <Ellipse
          cx={96.046}
          cy={139.497}
          rx={10.047}
          ry={10}
          fill={theme.robot.facialFeaturesColor}
        />

        {/* Left eye pupil */}
        <AnimatedEllipse
          cx={96.0454}
          cy={143.5}
          rx={4.01878}
          ry={3.99988}
          fill={theme.robot.headColor}
          style={{
            transform: pupilsXYAnimatedValue.getTranslateTransform(),
          }}
        />

        {/* Right eye */}
        <Ellipse
          cx={128.196}
          cy={139.497}
          rx={10.047}
          ry={10}
          fill={theme.robot.facialFeaturesColor}
        />

        {/* Right eye pupil */}
        <AnimatedEllipse
          cx={128.196}
          cy={143.5}
          rx={4.01878}
          ry={3.99988}
          fill={theme.robot.headColor}
          style={{
            transform: pupilsXYAnimatedValue.getTranslateTransform(),
          }}
        />
      </AnimatedGroup>

      {/* Right eyebrow */}
      <AnimatedPath
        d="M88 120.5V120.5C93.4372 116.573 100.716 116.347 106.386 119.928L106.5 120"
        style={getEyesAnimation(eyesAnimatedValue, [0, -5])}
        stroke={theme.robot.facialFeaturesColor}
        strokeWidth={5}
      />

      {/* Left eyebrow */}
      <AnimatedPath
        d="M118 120.5V120.5C123.437 116.573 130.716 116.347 136.386 119.928L136.5 120"
        style={getEyesAnimation(eyesAnimatedValue, [0, -5])}
        stroke={theme.robot.facialFeaturesColor}
        strokeWidth={5}
      />

      {/* Mouth */}
      <Path
        d="M130 161V161C120.905 167.634 108.673 168.016 99.1813 161.962L99 161.846"
        stroke={theme.robot.facialFeaturesColor}
        strokeWidth={5}
      />
    </G>
  )
}
