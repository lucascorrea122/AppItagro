import { StyleSheet, Platform} from "react-native";
const platform = Platform.OS; 


export default StyleSheet.create({ 
   MainContainer:{
       flex:1,
       alignItems:'center'
   },
   ItensCont:{
       marginTop:30,
       backgroundColor:"#f1f1f1",
       marginHorizontal:20,
       borderRadius:15,
       
   },
   ItensContent:{
       flexDirection:'row',
       alignItems:'center',
       paddingHorizontal: 30,
       paddingVertical:10,
   },
   ImagemContato:{
       width:50,
       height: 50,
   },
   TextContent:{
       marginLeft: 15
   }
   


});