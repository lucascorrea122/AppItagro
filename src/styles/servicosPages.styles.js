import { StyleSheet, Platform} from "react-native";
const platform = Platform.OS; 


export default StyleSheet.create({ 
    MainContainer: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#ecf0f1'
        
    },
    containerBox:{
        marginTop:10,
        alignItems:'center',
        flex:1,
        padding: 20
        
    },
    image:{
        width:300,
        height:200,
        borderRadius:10,
    },
    title:{
        marginBottom: 4,
        fontWeight: 'bold',
        fontSize: 16,
    },
    texto:{
        padding:10,
        alignItems: 'center',
        fontSize: 15
    }


   


});