import { StyleSheet, Platform} from "react-native";
const platform = Platform.OS; 


export default StyleSheet.create({ 
    MainContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        backgroundColor: '#ecf0f1',
        
    },
    paragraph: {
        margin: 2,
        fontSize: 15,
        color: '#34495e',
        
      },
      
    



});