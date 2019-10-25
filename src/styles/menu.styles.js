import { StyleSheet, Platform} from "react-native";
const platform = Platform.OS; 


export default StyleSheet.create({ 
    container: {
        flex: 1,
      },
      header: {
        backgroundColor: '#4B1958',
        paddingHorizontal: 28,
        paddingBottom: theme.SIZES.BASE,
        paddingTop: theme.SIZES.BASE * 2,
        justifyContent: 'center',
      },
      footer: {
        paddingHorizontal: 28,
        justifyContent: 'flex-end'
      },
      profile: {
        marginBottom: theme.SIZES.BASE / 2,
      },
      avatar: {
        height: 40,
        width: 40,
        borderRadius: 20,
        marginBottom: theme.SIZES.BASE,
      },



});