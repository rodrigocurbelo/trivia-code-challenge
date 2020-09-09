import React from 'react'
import classNames from 'classnames'
import { View } from 'react-native'

import styles from './styles'
import Title from '../Title'
import Label from '../Label'

interface Props {
  title: string
  label: string
  spacingOnTop?: boolean
}

export default function LabelAndTitleHeader({
  title,
  label,
  spacingOnTop,
}: Props) {
  return (
    <View style={[styles.container, spacingOnTop && styles.spacingOnTop]}>
      <Label>{label}</Label>
      <Title>{title}</Title>
    </View>
  )
}