import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

import styles from './styles'
import { NavigationProps } from '../../../../shared/types/navigation'
import { mapDispatchToProps, mapStateToProps } from '../..'
import { Routes } from '../../../../shared/constants/routes'

interface OwnProps extends NavigationProps {}

type Props = OwnProps &
  ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>

export default function Home({
  setToOne,
  navigation,
  setToTwoAsync,
  count: { count },
}: Props) {
  return (
    <View style={{ paddingTop: 30 }}>
      <Text style={styles.text}>{count}</Text>

      <TouchableOpacity onPress={() => setToOne()}>
        <Text>Set to 1</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => setToTwoAsync()}>
        <Text>Set to 2 using Thunk</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate(Routes.Details)}>
        <Text>Go to Details</Text>
      </TouchableOpacity>
    </View>
  )
}
