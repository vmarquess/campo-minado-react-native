import React from 'react';
import {StyleSheet, View} from 'react-native';
import Field from './Field';

export default props => {
    const rows = props.board.map((row, r) => {
      const columns = row.map((field, c) => {
        // constante columns vai receber um array de Fields (JSX)
        return <Field {...field} key={c} onOpen={() => props.onOpenField(r,c)}
        onSelect={e => props.onSelectField(r,c)}/>;
      });
      // constante rows vai receber um array de Views (JSX) com columns dentro
      return (
        <View key={r} style={{flexDirection: 'row'}}>
          {columns}
        </View>
      );
    })

    return <View style={styles.container}>{rows}</View>
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#EEE'
    }

})
