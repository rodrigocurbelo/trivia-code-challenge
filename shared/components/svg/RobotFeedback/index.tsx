import React, { useMemo, useEffect } from 'react'
import { Animated } from 'react-native'
import Svg, { G, Path } from 'react-native-svg'

import theme from '../../../theme'
import RobotWrong, { WrongTextPathDeclaration } from '../RobotWrong'
import RobotGreat, { greatTextPathDeclaration } from '../RobotGreat'
import RobotMeh, { mehTextPathDeclaration } from '../RobotMeh'
import { AnimatedGroup, AnimatedPath } from '../../ui-core'
import { FacialExpression } from '../../../enums/facialExpression'
import { animateTiming, getTranslateXStyles } from '../../../helpers/animations'

// We handle the speech bubble text this way so the robots can be just the
// facial expression. This, makes the facial expression fully agnostic to
// properties like hideSpeechBubble or speechBubbleOpacity
const textPathDefinitions = {
  [FacialExpression.Meh]: mehTextPathDeclaration,
  [FacialExpression.Wrong]: WrongTextPathDeclaration,
  [FacialExpression.Great]: greatTextPathDeclaration,
}

const faces = {
  [FacialExpression.Meh]: RobotMeh,
  [FacialExpression.Wrong]: RobotWrong,
  [FacialExpression.Great]: RobotGreat,
}

interface Props {
  // If animate = true, both the Robot's head and facial expression will be
  // animated according to facialExpressionType
  animate?: boolean
  // It will remove the speech bubble, without animation.
  // To animate, look at speechBubbleOpacity
  hideSpeechBubble?: boolean
  facialExpressionType: FacialExpression
  speechBubbleOpacity?: number | Animated.AnimatedInterpolation
}

export default function RobotFeedback({
  animate,
  hideSpeechBubble = false,
  speechBubbleOpacity,
  facialExpressionType,
}: Props) {
  const headShakeAnimatedValue = useMemo(() => new Animated.Value(0), [])

  const Face: typeof RobotGreat | typeof RobotWrong | typeof RobotMeh =
    faces[facialExpressionType]

  useEffect(() => {
    if (animate) {
      if (facialExpressionType === FacialExpression.Wrong) {
        const triggerHeadShake = (toValue: number) => {
          animateTiming(headShakeAnimatedValue, toValue, 400, 0, true).start(
            () => {
              triggerHeadShake(toValue === 1 ? 0 : 1)
            }
          )
        }

        triggerHeadShake(1)
      }
    }
  }, [animate, facialExpressionType])

  return (
    <Svg
      fill="none"
      width={theme.robot.sizes.feedback.width}
      height={theme.robot.sizes.feedback.height}
      viewBox="0 0 240 219"
    >
      <G>
        {/* Speech bubble */}
        {!hideSpeechBubble && (
          <AnimatedGroup style={{ opacity: speechBubbleOpacity }}>
            {/* Speech bubble background */}
            <Path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M141.5 12a5.5 5.5 0 00-5.5 5.5v54a5.5 5.5 0 005.5 5.5h20v17l24-17h35a5.5 5.5 0 005.5-5.5v-54a5.5 5.5 0 00-5.5-5.5h-79z"
              fill={theme.robot.speechBubblesBackgroundColor}
            />

            {/* Speech bubble text */}
            <Path
              d={textPathDefinitions[facialExpressionType]}
              fill={theme.robot.speechBubblesTextColor}
            />
          </AnimatedGroup>
        )}

        <AnimatedGroup
          style={getTranslateXStyles(headShakeAnimatedValue, [-1, 2])}
        >
          {/* Antenna's wire */}
          <Path
            d="M112.12 96.499l6.531-7.5-10.549-8 4.018-10"
            stroke={theme.robot.headShadowColor}
            strokeWidth={6}
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Antenna's ball */}
          <Path
            d="M122.941 63.384c0-5.735-4.671-10.384-10.434-10.384-5.762 0-10.433 4.649-10.433 10.384 0 5.734 4.671 10.384 10.433 10.384 5.763 0 10.434-4.65 10.434-10.384z"
            fill={theme.robot.headColor}
          />
        </AnimatedGroup>

        {/* Neck */}
        <AnimatedPath
          d="M132.559 168.551c-2.025-5.456-9.705-8.676-17.155-7.193-7.45 1.482-11.848 7.107-9.824 12.562l10.215 27.521c2.025 5.455 2.705 7.019 11.898 7.019h13.183c4.803 0 6.277-3.089 1.897-12.388l-10.214-27.521z"
          fill={theme.robot.neckAndEarsColor}
          style={getTranslateXStyles(headShakeAnimatedValue, [-5, 1])}
        />

        {/* Head side shape */}
        <AnimatedPath
          d="M121.069 194.534c22.995 0 41.81-18.726 41.81-41.613v-22.462c0-22.887-18.815-41.614-41.81-41.614h-4.019c-22.997 0-41.812 18.727-41.812 41.614v22.462c0 22.887 18.815 41.613 41.812 41.613h4.019z"
          fill={theme.robot.headShadowColor}
          style={getTranslateXStyles(headShakeAnimatedValue, [1, 0])}
        />

        {/* Right ear */}
        <AnimatedPath
          fillRule="evenodd"
          clipRule="evenodd"
          d="M80.112 150.305H66.698c-5.334 0-9.698-4.344-9.698-9.653s4.364-9.654 9.698-9.654h13.414c5.335 0 9.7 4.345 9.7 9.654s-4.365 9.653-9.7 9.653z"
          fill={theme.robot.neckAndEarsColor}
          style={getTranslateXStyles(headShakeAnimatedValue, [0, 4])}
        />

        {/* Head shape */}
        <AnimatedPath
          d="M119.08 194.996c22.143 0 40.261-18.781 40.261-41.735v-22.527c0-22.954-18.118-41.735-40.261-41.735h-3.87c-22.145 0-40.263 18.781-40.263 41.735v22.527c0 22.954 18.118 41.735 40.263 41.735h3.87z"
          fill={theme.robot.headColor}
          style={getTranslateXStyles(headShakeAnimatedValue, [0, 4])}
        />

        {/* Left ear */}
        <AnimatedPath
          fillRule="evenodd"
          clipRule="evenodd"
          d="M172.75 148.239h-13.014v-19.307h13.014c5.335 0 9.699 4.345 9.699 9.654 0 5.31-4.364 9.653-9.699 9.653z"
          fill={theme.robot.neckAndEarsColor}
          style={getTranslateXStyles(headShakeAnimatedValue, [0, 4])}
        />

        <AnimatedGroup
          style={getTranslateXStyles(headShakeAnimatedValue, [-2, 10])}
        >
          <Face animate={animate} />
        </AnimatedGroup>
      </G>
    </Svg>
  )
}
