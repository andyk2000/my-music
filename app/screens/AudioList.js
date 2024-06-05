import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React, { Component, useEffect } from 'react';
import { AudioContext } from '../context/AudioProvider';
import { LayoutProvider, RecyclerListView } from 'recyclerlistview'; 

export class AudioList extends Component {
  static contextType = AudioContext;

  layoutProvider = new LayoutProvider((i) => 'audio', (type, dim) => {
    dim.width = Dimensions.get('window').width;
    dim.height = 70;
  })

  rowRenderer = (type, item) => {
    return <Text>{item.filename}</Text>
  }

  render() {
      return <AudioContext.Consumer>
        {({dataProvider}) => {
          return <RecyclerListView dataProvider={dataProvider} layoutProvider={this.layoutProvider} rowRenderer={this.rowRenderer}/>
        }}
      </AudioContext.Consumer>
  }
}


const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default AudioList