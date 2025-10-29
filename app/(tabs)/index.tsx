import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Platform,
  Image
} from "react-native";
import { Octicons, MaterialCommunityIcons, Fontisto } from "@expo/vector-icons";
import React from "react";
import { router } from "expo-router";


export default function Index() {
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

      {/* navber'bottom bar' */}
        <View style={styles.navbar}>
          <TouchableOpacity style={styles.tab}>
            <Octicons
              name="home-fill"
              size={17}
              color="black"
              style={styles.icon}
            />
            <Text style={styles.text}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.tab}
            onPress={() => router.push("/wishlist")}
          >
            <MaterialCommunityIcons
              name="cards-heart-outline"
              size={17}
              color="gray"
              style={styles.icon}
            />
            <Text style={[styles.text, styles.notselected]}>Wishlist</Text>
          </TouchableOpacity>
          <View style={styles.tab}>
            <Fontisto name="bell" size={17} color="gray" style={styles.icon} />
            <Text style={[styles.text, styles.notselected]}>Notification</Text>
          </View>
          <TouchableOpacity
            style={styles.tab}
            onPress={() => router.push("/membership")}
          >
            <Octicons
              name="person"
              size={17}
              color="gray"
              style={styles.icon}
            />
            <Text style={[styles.text, styles.notselected]}>Membership</Text>
          </TouchableOpacity>
          <View style={styles.tab}>
            <Octicons
              name="three-bars"
              size={17}
              color="gray"
              style={styles.icon}
            />
            <Text style={[styles.text, styles.notselected]}>Menu</Text>
          </View>
        </View>
      </View>
  )
}

const styles = StyleSheet.create({
  navbar: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    borderTopColor: "#e4e4e4ff",
    borderTopWidth: 4,
    bottom: Platform.OS === "android" ? -630 : Platform.OS === "web" ? -500 : 0,
  },
  tab: {
    paddingTop: 8,
    alignItems: "center",
  },
  icon: {
    paddingBottom: 5,
    paddingTop: 2,
  },
  text: {
    fontSize: 10,
  },
  notselected: {
    color: "gray",
  },

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
