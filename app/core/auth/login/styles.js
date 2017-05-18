import { Dimensions, StyleSheet } from 'react-native';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  backgroundContainer: {
    backgroundColor: 'red',
    height: deviceHeight,
    width: deviceWidth,
  }
});

export default styles;