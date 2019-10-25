import { StyleSheet, Platform} from "react-native";
const platform = Platform.OS; 


export default StyleSheet.create({ 
    MainContainer: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#ecf0f1',
     
    },
    containerBox:{
        marginTop:10,
        alignItems:'stretch',
        flex:1,
        flexDirection: 'row'
    }
   


});