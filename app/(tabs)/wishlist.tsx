import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Platform,
  Image,
} from "react-native";
import {
  Octicons,
  MaterialCommunityIcons,
  Fontisto,
  Feather,
  FontAwesome6,
  Ionicons,
} from "@expo/vector-icons";
import React, { useState } from "react";
import { router } from "expo-router";

const Wishlist = () => {
  const [pageSelected, setPageSelected] = useState(false);
  return (
    <View style={styles.container}>
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
      <View style={styles.heading}>
        <Text style={styles.headingText}>Wishlist</Text>
        <View style={styles.searchAndCart}>
          <FontAwesome6
            name="magnifying-glass"
            size={17}
            color="black"
            style={styles.headingTouchableOpacity}
          />
          <Feather
            name="shopping-cart"
            size={17}
            color="black"
            style={styles.headingTouchableOpacity}
          />
        </View>
      </View>
      <View style={styles.tabBar}>
        <TouchableOpacity
          onPress={() => setPageSelected(false)}
          style={
            pageSelected === false && {
              borderBottomColor: "rgba(0, 0, 0, 1)",
              borderBottomWidth: 1,
            }
          }
        >
          <Text
            style={[
              styles.tabBarText,
              pageSelected === true && { color: "rgba(100, 100, 101, 1)" },
            ]}
          >
            Products
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setPageSelected(true)}
          style={
            pageSelected === true && {
              borderBottomColor: "rgba(0, 0, 0, 1)",
              borderBottomWidth: 1,
            }
          }
        >
          <Text
            style={[
              styles.tabBarText,
              pageSelected === false && { color: "rgba(100, 100, 101, 1)" },
            ]}
          >
            Styling
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.selectStore}>
        <View style={styles.selectStoreTextAndIcon}>
          <Ionicons name="storefront-outline" size={17} color="black" />
          <Text style={styles.selectStoreText}>
            Select a store to search store stock
          </Text>
        </View>
        <Text style={styles.selectStoreButton}>Select store</Text>
      </View>
      <View style={styles.productAndWishlistedIcon}>
        <View style={styles.product}>
          <Image
            source={{
              uri: "https://images.pexels.com/photos/6764007/pexels-photo-6764007.jpeg?_gl=1*lffkdt*_ga*MTM4NDg5MDIxMC4xNzU4ODM5NjY3*_ga_8JE65Q40S6*czE3NjE2ODI5MjEkbzQkZzEkdDE3NjE2ODM3MDAkajU5JGwwJGgw",
            }}
            style={styles.productImage}
          />
          <View style={styles.productNameAndDescription}>
            <Text>ZIP JACKET</Text>
            <Text style={styles.description}>Product ID: 000001</Text>
            <Text style={styles.description}>Colour: Blue</Text>
            <Text style={styles.description}>Size: UNISEX M</Text>
            <Text style={styles.price}>CA $ 50.00</Text>
          </View>
        </View>
        <MaterialCommunityIcons
          name="cards-heart"
          size={18}
          color="red"
          style={styles.onWishlistIcon}
        />
      </View>
      <TouchableOpacity style={styles.addToCartTouchableOpacity}>
        <Text style={styles.addToCartText}>ADD TO CART</Text>
      </TouchableOpacity>
      <View style={styles.navbar}>
        <TouchableOpacity
          style={styles.navbarTouchableOpacity}
          onPress={() => router.back()}
        >
          <Octicons
            name="home"
            size={17}
            color="gray"
            style={styles.navbarIcon}
          />
          <Text style={[styles.navbarText, styles.notselected]}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navbarTouchableOpacity}>
          <MaterialCommunityIcons
            name="cards-heart"
            size={17}
            color="black"
            style={styles.navbarIcon}
          />
          <Text style={styles.navbarText}>Wishlist</Text>
        </TouchableOpacity>
        <View style={styles.navbarTouchableOpacity}>
          <Fontisto
            name="bell"
            size={17}
            color="gray"
            style={styles.navbarIcon}
          />
          <Text style={[styles.navbarText, styles.notselected]}>
            Notification
          </Text>
        </View>
        <TouchableOpacity
          style={styles.navbarTouchableOpacity}
          onPress={() => router.push("/membership")}
        >
          <Octicons
            name="person"
            size={17}
            color="gray"
            style={styles.navbarIcon}
          />
          <Text style={[styles.navbarText, styles.notselected]}>
            Membership
          </Text>
        </TouchableOpacity>
        <View style={styles.navbarTouchableOpacity}>
          <Octicons
            name="three-bars"
            size={17}
            color="gray"
            style={styles.navbarIcon}
          />
          <Text style={[styles.navbarText, styles.notselected]}>Menu</Text>
        </View>
      </View>

      
      </View>
  );
};

export default Wishlist;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  heading: {
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    padding: 20,
  },
  headingText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  searchAndCart: {
    flexDirection: "row",
  },
  headingTouchableOpacity: {
    padding: 15,
  },
  tabBar: {
    flexDirection: "row",
    borderBottomWidth: 2,
    borderBottomColor: "#dcdcdcff",
  },
  tabBarText: {
    paddingLeft: 71,
    paddingRight: 71,
    paddingBottom: 13,
  },
  selectStore: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },
  selectStoreTextAndIcon: {
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 4,
  },
  selectStoreText: {
    fontSize: 11,
    paddingLeft: 10,
    color: "gray",
  },
  selectStoreButton: {
    color: "#0077ffff",
  },
  productAndWishlistedIcon: {
    flexDirection: "row",
    padding: 15,
    justifyContent: "space-between",
  },
  onWishlistIcon: {
    padding: 10,
    marginRight: 3,
  },
  product: {
    flexDirection: "row",
  },
  productImage: {
    height: 115,
    width: 85,
  },
  productNameAndDescription: {
    paddingLeft: 15,
  },
  description: {
    fontSize: 13,
    paddingTop: 3,
  },
  price: {
    paddingTop: 3,
    fontWeight: "bold",
    fontSize: 17,
  },
  addToCartTouchableOpacity: {
    marginLeft: "53%",
    backgroundColor: "#000",
    padding: 10,
    borderRadius: 25,
    marginRight: "5%",
  },
  addToCartText: {
    color: "white",
    alignSelf: "center",
  },
  navbar: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    borderTopColor: "#e4e4e4ff",
    borderTopWidth: 4,
    bottom: Platform.OS === "android" ? -500 : Platform.OS === "web" ? -500 : 0,
  },
  navbarTouchableOpacity: {
    paddingTop: 8,
    alignItems: "center",
  },
  navbarIcon: {
    paddingBottom: 5,
    paddingTop: 2,
  },
  navbarText: {
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
    fontSize:16,
    
    
  },

  topBarButton: {
    marginTop:45
  }
})
