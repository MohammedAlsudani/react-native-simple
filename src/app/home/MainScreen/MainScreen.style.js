import { StyleSheet } from "react-native";
import { COLORS, icons, images, SIZES ,FONT } from '../../theme'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.primary, 
  },
  title: {
    fontSize: SIZES.large, 
    fontFamily: FONT.bold,
    color: COLORS.white, 
  },
  image: {
    width: 200,
    height: 200,
    marginVertical: 20,
  },
  description: {
    fontSize: SIZES.medium, 
    color: COLORS.gray,
    fontFamily: FONT.regular,
    padding: 10,
    textAlign: 'center', 
    textAlignVertical: 'center'
  },
   button: {
    backgroundColor: COLORS.tertiary , 
    
    fontSize: 18, 
    padding: 10, 
    borderRadius: 5,
    fontFamily: FONT.regular,
  },
});

export default styles;