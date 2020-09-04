import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

import { mapDispatchToProps, mapStateToProps } from '../..'

interface OwnProps {}

type Props = OwnProps &
  ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>

export default function Home({
  setToOne,
  setToTwoAsync,
  count: { count },
}: Props) {
  return (
    <View style={{ paddingTop: 30 }}>
      <Text>{count}</Text>

      <TouchableOpacity onPress={() => setToOne()}>
        <Text>Set to 1</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => setToTwoAsync()}>
        <Text>Set to 2 using Thunk</Text>
      </TouchableOpacity>
    </View>
  )
}
