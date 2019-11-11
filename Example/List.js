import React from 'react'
import { StyleSheet, Text, Button, View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import BottomSheet from 'reanimated-bottom-sheet'

export default class Example extends React.Component {
  renderInner = () => {
    const renderRow = ({ item }) => (
      <View
        style={{ height: 40, backgroundColor: `#${item.title % 10}88424` }}
      >
        <Text>computed {item.title + 1} </Text>
      </View>
    )

    const data = [...Array(20)].map((e, i) => ({ title: i, key: `${i}` }))
    return <FlatList style={styles.list} data={data} renderItem={renderRow} />
  }

  bs = React.createRef()

  render() {
    return (
      <View style={styles.container}>
        <BottomSheet
          ref={this.bs}
          snapPoints={[150, 300, '50%', 450]}
          renderContent={this.renderInner}
          initialSnap={0}
          enabledInnerScrolling={true}
        />
        <Button onPress={() => this.bs.current.snapTo(0)} title="0" />
        <Button onPress={() => this.bs.current.snapTo(1)} title="1" />
        <Button
          onPress={() => this.bs.current.snapTo(2)}
          style={{
            zIndex: 0,
          }}
          title="2"
        />
        <Button onPress={() => this.bs.current.snapTo(3)} title="3" />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  list: {
    //maxHeight: "100%",
    height: "100%",
  },
})
