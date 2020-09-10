import React from 'react'
import { View } from 'react-native'

import styles from './styles'
import LabelAndTitleHeader, {
  Props as LabelAndTitleHeaderProps,
} from '../../../../shared/components/ui-core/texts/LabelAndTitleHeader'

interface Props extends LabelAndTitleHeaderProps {}

export default function MultipleOptionHeader({ ...props }: Props) {
  return (
    <View style={styles.container}>
      <LabelAndTitleHeader spacingOnTop {...props}></LabelAndTitleHeader>
    </View>
  )
}
