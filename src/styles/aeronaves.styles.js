import { StyleSheet, Platform} from "react-native";
const platform = Platform.OS; 


export default StyleSheet.create({ 
    MainContainer: {
        flex: 1,
        
        alignItems: 'center',
        
    },
    aeronavesContainer:{
       
        
    },
    aeronavesButton:{
        width: '33.3%', height: 50, backgroundColor: 'skyblue', justifyContent:'center', alignItems:'center' 
    },
     slider: { backgroundColor: '#000', height: 350 },
    content1: {
      width: '100%',
      height: 50,
      marginBottom: 10,
      backgroundColor: '#000',
      justifyContent: 'center',
      alignItems: 'center',
    },
    content2: {
      width: '100%',
      height: 100,
      marginTop: 10,
      backgroundColor: '#000',
      justifyContent: 'center',
      alignItems: 'center',
    },
    contentText: { color: '#fff' },
    buttons: {
      zIndex: 1,
      height: 15,
      marginTop: -25,
      marginBottom: 10,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
    },
    button: {
      margin: 3,
      width: 15,
      height: 15,
      opacity: 0.9,
      alignItems: 'center',
      justifyContent: 'center',
    },
    buttonSelected: {
      opacity: 1,
      color: 'red',
    },
    customSlide: {
      backgroundColor: 'green',
      alignItems: 'center',
      justifyContent: 'center',
    },
    customImage: {
      width: 100,
      height: 100,
    },
    textTitleCollapse:{
        fontSize:20,
        fontWeight:'bold',
    },
    textDefinicao:{
        fontWeight:'bold',
        fontSize: 15,
    },
    textItem:{

    },
    textItem2:{
        fontSize:8
    },
    viewItem:{
        flexDirection: 'row',
    }


});