import { deviceWidth, bgBlue, bgWhite } from '../../../styles'

const eightyPercentWidth = (deviceWidth * 0.8);

export default {
  transparentButton: {
    width: eightyPercentWidth,
    alignItems: 'center',
    borderColor: bgWhite,
    borderRadius: 40,
  },
  whiteText: {
    fontFamily: 'Avenir',
    color: bgWhite,
  },
  whiteButton: {
    width: eightyPercentWidth,
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 40,
    borderColor: 'rgba(255, 255, 255, 0.8)',
  },
  transparentText: {
    fontFamily: 'Avenir',
    color: bgBlue,
  }
}