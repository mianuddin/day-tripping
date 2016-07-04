import Colors from 'material-ui/lib/styles/colors';
import ColorManipulator from 'material-ui/lib/utils/color-manipulator';
import Spacing from 'material-ui/lib/styles/spacing';
import zIndex from 'material-ui/lib/styles/zIndex';

export default {
  spacing: Spacing,
  zIndex,
  fontFamily: 'Open Sans, sans-serif',
  palette: {
    primary1Color: '#F06161',
    primary2Color: '#EB786B',
    primary3Color: Colors.lightBlack,
    accent1Color: '#3A7BA3',
    accent2Color: '#398ABD',
    accent3Color: Colors.grey500,
    textColor: Colors.darkBlack,
    alternateTextColor: Colors.white,
    canvasColor: Colors.white,
    borderColor: Colors.grey300,
    disabledColor: ColorManipulator.fade(Colors.darkBlack, 0.3),
    pickerHeaderColor: '#F06161',
  },
};
