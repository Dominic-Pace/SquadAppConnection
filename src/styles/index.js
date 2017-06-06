import { Dimensions } from 'react-native';

//Device Dimensions
export const deviceWidth = Dimensions.get('window').width;
export const deviceHeight = Dimensions.get('window').height;

//Color Variables
export const bgBlue = '#222f33';
export const squadBlue = '#3ba3cc';
export const squadGreen = '#84be44';
export const squadInvalid = '#CC663D';
export const squadWhite = '#F4F4F4';
export const squadGray = "#C1C1C1";
export const defaultTypography = 'Avenir';

//Common Styles
export const centerAlignAndJusitify = {
  alignItems: 'center',
  justifyContent: 'center'
};

export const defaultFont = {
  fontFamily: defaultTypography
};

export const whiteText = {
  fontFamily: defaultTypography,
  color: squadWhite
};

export const h2 = {
  fontFamily: defaultTypography,
  fontSize: 20
};