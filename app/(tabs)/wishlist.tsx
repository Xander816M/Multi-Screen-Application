import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'

const Wishlist = () => {
  return (

    <View>

      {/* Top Bar */}
      <View style={styles.topBar}>
        
        <Text style={styles.topBarContent}>Online + App-only Deals Until 10/30 | SHOP NOW</Text>

          <TouchableOpacity>
          <Image 
            style={styles.topBarButton}
            source={require("../../assets/images/right-arrow.png")}
          />
        </TouchableOpacity>
          
      </View>
      
    </View>
  )
}

export default Wishlist

const styles = StyleSheet.create({

  topBar: {
    borderWidth:1,
    height: 85,
    backgroundColor:"#000",
    alignItems:"center",
    justifyContent:"space-between",
    flexDirection: "row",
    paddingRight:10,
    paddingLeft:10
  },

  topBarContent: {
    color:"#fff",
    marginTop:50,
    fontSize:17,
    
    
  },

  topBarButton: {
    marginTop:45
  }
})