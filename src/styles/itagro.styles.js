import { StyleSheet, Platform} from "react-native";
const platform = Platform.OS; 


export default StyleSheet.create({ 
    MainContainer: {
        flex: 1,
        paddingTop: 20,
        alignItems: 'center',
        
    },
    TextItagro:{
        
        fontFamily: 'lucida grande',
       
    },
    ContainerItagro:{
        alignItems: 'center',
        padding: 20,
    }



});