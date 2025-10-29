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
import { useState } from "react";

export default function Index() {

  const [pageSelected, setPageSelected] = useState(2);
  
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

      {/* Limited Offer Bar */}
      <View style={styles.limitedOfferBar}>
        <TouchableOpacity>
          <Image
            source={require("../../assets/images/left-arrow.png")}
          />
        </TouchableOpacity>

        <Text style={styles.limitedOfferText}>Limited-Time Offers</Text>

        <TouchableOpacity>
          <Image
            source={require("../../assets/images/search.png")}
          />
        </TouchableOpacity>

        <TouchableOpacity>
          <Image
            source={require("../../assets/images/shopping-cart.png")}
          />
        </TouchableOpacity>
      </View>

      {/* Navigation Bar */}

      <View style={styles.navigationBar}>
        <TouchableOpacity
            onPress={() => setPageSelected(1)}
            style={
              pageSelected === 1 && {
                borderBottomColor: "#000",
                borderBottomWidth: 3,
                borderBottomLeftRadius: 2,
                borderBottomRightRadius: 2,
                borderTopLeftRadius: 3,
              }
            }
          >
            <Text
              style={[
                styles.tab,
                pageSelected === 1 && { color: "#000" },
              ]}
            >
              WOMEN
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => setPageSelected(2)}
            style={
              pageSelected === 2 && {
                borderBottomColor: "#000",
                borderBottomWidth: 3,
                borderBottomLeftRadius: 2,
                borderBottomRightRadius: 2,
                borderTopLeftRadius: 3,
              }
            }
          >
            <Text
              style={[
                styles.tab,
                pageSelected === 2 && { color: "#000" },
              ]}
            >
              MEN
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => setPageSelected(3)}
            style={
              pageSelected === 3 && {
                borderBottomColor: "#000",
                borderBottomWidth: 3,
                borderBottomLeftRadius: 2,
                borderBottomRightRadius: 2,
                borderTopLeftRadius: 3,
              }
            }
          >
            <Text
              style={[
                styles.tab,
                pageSelected === 3 && { color: "#000" },
              ]}
            >
              KIDS
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => setPageSelected(4)}
            style={
              pageSelected === 4 && {
                borderBottomColor: "#000",
                borderBottomWidth: 3,
                borderBottomLeftRadius: 2,
                borderBottomRightRadius: 2,
                borderTopLeftRadius: 3,
              }
            }
          >
            <Text
              style={[
                styles.tab,
                pageSelected === 4 && { color: "#000" },
              ]}
            >
              BABY
            </Text>
          </TouchableOpacity>

      </View>
      
      {/* Select Store Bar */}
      <View style={styles.selectStoreBar}>
        
        <TouchableOpacity>
          <Image
            source={require("../../assets/images/store.png")}
          />
        </TouchableOpacity>
        
        <Text style={{
          fontSize:16,
          paddingTop:2.7,
          paddingRight:30
        }}>
          Select a store to search store stock
        </Text>

        <Text style={{
          fontSize:16,
          paddingTop:2.7,
          color: "rgba(25,103,174,1)"
        }}>
          Select store
        </Text>

      </View>
      
      {/* Filter Section */}
      <View style={styles.filterSection}>

        <TouchableOpacity style={{
          paddingTop:6
        }}>
          <Image
            source={require("../../assets/images/filter.png")}
          />
        </TouchableOpacity>
        
        {/* In-Stock */}
        <View style={styles.filterCategory}>
        
          <Text style={{
            paddingRight:7,
          }}>
            In-stock: online only
          </Text>

          <TouchableOpacity style={{
              paddingTop:2.5
            }}>
          <Image
            source={require("../../assets/images/down-arrow.png")}
            
          />
        </TouchableOpacity>

        </View>
        
        {/* Category */}
        <View style={styles.filterCategory}>
        
          <Text style={{
            paddingRight:7,
          }}>
            Category
          </Text>

          <TouchableOpacity style={{
              paddingTop:2.5
            }}>
          <Image
            source={require("../../assets/images/down-arrow.png")}
          />
        </TouchableOpacity>

        </View>

        {/* Size */}
        <View style={styles.filterCategory}>

          <Text style={{
            paddingRight:7,
          }}>
            Size
          </Text>

          <TouchableOpacity style={{
              paddingTop:2.5
            }}>
          <Image
            source={require("../../assets/images/down-arrow.png")}
          />
        </TouchableOpacity>

        </View>
        
      </View>
      

      {/* Sort Bar */}
      <View style={styles.sortBar}>
        <Text style={{
          paddingRight:250,
          paddingTop:3,
          fontSize:16
        }}>5 item(s)</Text>
        
        <TouchableOpacity>
          <Image
            source={require("../../assets/images/sort.png")}
          />
        </TouchableOpacity>

        <Text style={{
          paddingTop:3,
          fontSize:16
        }}>Sort by</Text>
      </View>
      
      <View style={styles.productRow}>
        {/* Puff Jacket */}
        <View style={styles.productContainer}>

          <Image
              style={styles.productImage} 
              source={require("../../assets/images/puff-tech.png")}
            />

          {/* Color Selections */}
          <View style={styles.colorSelections}>

            <View style={styles.colorSelectionsContainer}>
              <View style={[styles.circle, { backgroundColor: '#7a6652' }]} />
              <View style={[styles.circle, { backgroundColor: '#55565a' }]} />
              <View style={[styles.circle, { backgroundColor: '#2f2f31' }]} />
              <View style={[styles.circle, { backgroundColor: '#c4bbb1' }]} />
            </View>

            
            <Text style={{
              fontSize:25,
              fontWeight:"300",
              paddingRight:10,
              paddingLeft:10
            }}>
              + 
              </Text>

            <TouchableOpacity>
              <Image
                source={require("../../assets/images/heart.png")}
                />
            </TouchableOpacity>
          </View>
          

          {/* Product Description */}
          <View style= {styles.productDesc}>
            <Text style={styles.productSizeText}>UNISEX, XS~XXL</Text>
            <Text>PUFFTECH VEST</Text>

            <Text style={styles.priceText}>CA $59.90 </Text>
            <Text style={{
              color:"rgba(255,0,0,1)",
              fontSize:15
            }}>Online + App-Only Offer Until 10/30</Text>
          </View>

        </View>
        

        {/* T-Shirt */}
        <View style={styles.productContainer}>

          <Image
              style={styles.productImage} 
              source={require("../../assets/images/t-shirt.png")}
            />

          {/* Color Selections */}
          <View style={styles.colorSelections}>

            <View style={styles.colorSelectionsContainer}>
              <View style={[styles.circle, { backgroundColor: '#2C3247' }]} />
              <View style={[styles.circle, { backgroundColor: '#F5F5F5' }]} />
              <View style={[styles.circle, { backgroundColor: '#818A96' }]} />
              <View style={[styles.circle, { backgroundColor: '#2A2A2A' }]} />
            </View>

            
            <Text style={{
              fontSize:25,
              fontWeight:"300",
              paddingRight:10,
              paddingLeft:10
            }}>
              + 
              </Text>

            <TouchableOpacity>
              <Image
                source={require("../../assets/images/heart.png")}
                />
            </TouchableOpacity>
          </View>
          

          {/* Product Description */}
          <View style= {styles.productDesc}>
            <Text style={styles.productSizeText}>Men, XS~XL</Text>
            <Text>AIRism COTTON CREW NECK T-SHIRT</Text>

            <Text style={styles.priceText}>CA $14.90 </Text>
            <Text style={{
              color:"rgba(255,0,0,1)",
              fontSize:15
            }}>Online + App-Only Offer Until 10/30</Text>
          </View>

        </View>
      </View>

    </View>
  );
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

  container: {
    backgroundColor:"#fff"
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
    paddingBottom:5
    
    
  },

  topBarButton: {
    marginTop:45
  },

  limitedOfferBar: {
    alignItems:"center",
    justifyContent:"space-between",
    flexDirection: "row",
    paddingRight:10,
    paddingLeft:10,
    marginTop:0,
    height:70
  },

  limitedOfferText: {
    fontSize:24,
    paddingRight:55,
    paddingBottom:5
    
  },

  navigationBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop:20,
    
  },

  tab: {
    fontSize:22,
    color:"rgba( 0, 0, 0, 0.65)",
    paddingBottom:18
  },

  selectStoreBar: {
    flexDirection:"row",
    justifyContent:"space-around",
    marginTop:15,
  },

  filterSection: {
    flexDirection:"row",
    justifyContent:"space-around",
    marginTop: 30

  },

    filterCategory: {
      justifyContent:"space-between",
      flexDirection:"row",
      borderWidth:2,
      borderRadius:20,
      paddingLeft:12,
      paddingRight:8,
      paddingTop:7,
      paddingBottom:8,
      borderColor: "rgba(0, 0, 0, 0.2)"
  },

  sortBar: {
    flexDirection:"row",
    justifyContent:"space-between",
    paddingLeft:20,
    paddingRight:20,
    marginTop:10,
    marginBottom:10
  },

  productContainer: {
    width:"50%",
    flex:0.5

  },

  colorSelections: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 19,
    paddingBottom:10,
    paddingTop:8
  },

  colorSelectionsContainer: {
    flexDirection:"row",
    justifyContent: "space-between"
  },

  circle: {
    width: 25,
    height: 25,
    borderRadius: 12.5,
    borderWidth: 2,
    borderColor: '#999',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
    marginRight:7.5
  },

  productImage: {
    width:"100%",
    aspectRatio:"auto"
  },

  priceText: {
    color:"rgba(255,0,0,1)",
    fontWeight:"bold",
    fontSize:25,
    marginTop:5,
    marginBottom:0
  },

  productSizeText: {
    fontWeight:"bold",
    color: "rgba(0,0,0,0.5)",
    marginBottom: 5,
    fontSize:15,

  },

  productDesc: {
    paddingLeft:18.5
  },

  productRow: {
    flexDirection:"row"
  }
})
