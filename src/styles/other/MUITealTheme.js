import Colors from 'material-ui/styles/colors';
import ColorManipulator from 'material-ui/utils/color-manipulator';
import Spacing from 'material-ui/styles/spacing';
import zIndex from 'material-ui/styles/zIndex';

export default {
  spacing: Spacing,
  zIndex,
  fontFamily: 'Roboto, sans-serif',
  palette: {
    primary1Color: Colors.deepPurple500,
    primary2Color: Colors.deepPurple700,
    primary3Color: Colors.lightBlack,
    accent1Color: Colors.tealA700,
    accent2Color: Colors.grey100,
    accent3Color: Colors.grey500,
    textColor: Colors.darkBlack,
    alternateTextColor: Colors.white,
    canvasColor: Colors.white,
    borderColor: Colors.grey300,
    disabledColor: ColorManipulator.fade(Colors.darkBlack, 0.3),
    pickerHeaderColor: Colors.deepPurple500,
  },
};
