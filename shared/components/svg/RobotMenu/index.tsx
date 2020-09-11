import React from 'react'
import Svg, { G, Path, Defs } from 'react-native-svg'
import { Dimensions } from 'react-native'
import RobotMenuFace from './components/RobotMenuFace'
import RobotMenuBubbles from './components/RobotMenuBubbles'
import theme from '../../../theme'

const windowWidth = Dimensions.get('window').width

export default function RobotMenuSvg() {
  return (
    <Svg
      style={{ height: windowWidth - 100, width: windowWidth }}
      viewBox="0 0 329 334"
      fill="none"
    >
      <G>
        {/* Antenna */}
        <G>
          {/* Antenna's wire */}
          <Path
            d="M153.136 117.332l7.387-8.512-11.932-9.08 4.545-11.349"
            stroke={theme.robot.headShadowColor}
            strokeWidth={6}
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Antenna's ball */}
          <Path
            d="M165.375 79.747c0-6.509-5.283-11.785-11.801-11.785-6.517 0-11.801 5.276-11.801 11.785 0 6.51 5.284 11.787 11.801 11.787 6.518 0 11.801-5.278 11.801-11.787z"
            fill={theme.robot.headColor}
          />
        </G>

        {/* Right ear */}
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M116.933 178.402h-15.172c-6.033 0-10.969-4.931-10.969-10.957 0-6.026 4.936-10.957 10.969-10.957h15.172c6.034 0 10.97 4.931 10.97 10.957 0 6.026-4.936 10.957-10.97 10.957z"
          fill={theme.robot.neckAndEarsColor}
        />

        {/* Neck */}
        <Path
          d="M176.253 199.11c-2.29-6.192-10.977-9.847-19.403-8.164-8.427 1.683-13.401 8.066-11.111 14.258l11.553 31.236c2.29 6.192 3.06 7.966 13.458 7.966h14.911c5.431 0 7.099-3.505 2.145-14.06l-11.553-31.236z"
          fill={theme.robot.neckAndEarsColor}
        />

        {/* Head */}
        <G>
          {/* Head side shape */}
          <Path
            d="M163.257 228.601c26.009 0 47.29-21.254 47.29-47.231v-25.493c0-25.977-21.281-47.231-47.29-47.231h-4.545c-26.011 0-47.291 21.254-47.291 47.231v25.493c0 25.977 21.28 47.231 47.291 47.231h4.545z"
            fill={theme.robot.headShadowColor}
          />

          {/* Head shape */}
          <Path
            d="M161.007 229.125c25.046 0 45.538-21.317 45.538-47.369v-25.567c0-26.053-20.492-47.369-45.538-47.369h-4.377c-25.047 0-45.539 21.316-45.539 47.369v25.567c0 26.052 20.492 47.369 45.539 47.369h4.377z"
            fill={theme.robot.headColor}
          />
        </G>

        {/* Left ear */}
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M221.711 176.057h-14.719v-21.914h14.719c6.035 0 10.971 4.932 10.971 10.957 0 6.027-4.936 10.957-10.971 10.957z"
          fill={theme.robot.neckAndEarsColor}
        />

        <RobotMenuFace />

        <RobotMenuBubbles />
      </G>
      <Defs></Defs>
    </Svg>
  )
}
