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
        width:'100%'
    },
    CardButton:{
        resizeMode: 'contain',
         marginTop: 20, 
         alignItems: 'center', 
         height: 90,
    },
    ImageButton:{
        borderRadius:10,
        width:'100%',
        height:'100%'
    },
    TextCardButton:{
        fontSize:25,
        color:'white',
        fontWeight:'bold',
    }



});