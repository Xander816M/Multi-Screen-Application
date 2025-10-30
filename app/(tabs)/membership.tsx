import {
  Ionicons,
  MaterialIcons,
  FontAwesome6,
  Octicons,
  MaterialCommunityIcons,
  Fontisto,
} from "@expo/vector-icons";
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Platform,
} from "react-native";
import { router } from "expo-router";

export default function Membership() {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Membership</Text>
        <View style={styles.headerIcons}>
          <FontAwesome6 name="magnifying-glass" size={22} color="#000" />
          <Ionicons
            name="cart-outline"
            size={22}
            color="#000"
            style={{ marginLeft: 16 }}
          />
        </View>
      </View>

      {/* Membership Card */}
      <View style={styles.card}>
        <Image
          source={require("../../assets/images/barcode.png")}
          style={styles.barcode}
        />
        <Text style={styles.memberId}>7170 6259 70873</Text>
      </View>

      {/* Menu Items */}
      <View style={styles.menuContainer}>
        <View style={styles.menuRow}>
          <MenuItem icon="receipt" label="Purchase History" />
          <MenuItem icon="local-offer" label="Coupons" />
        </View>
        <View style={styles.menuRow}>
          <MenuItem icon="person" label="Profile" />
          <MenuItem icon="settings" label="Settings" />
        </View>
        <View style={styles.menuRow}>
          <MenuItem icon="shopping-cart" label="Online shopping survey" />
        </View>
      </View>

      {/* Store Information */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Store information</Text>
        <View style={styles.menuRow}>
          <MenuItem icon="store" label="Store locator" />
          <MenuItem icon="assignment" label="Store service survey" />
        </View>
      </View>

      {/* Recently Viewed */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Recently Viewed</Text>
      </View>

      {/* navber'bottom bar' */}
      <View style={styles.navbar}>
        <TouchableOpacity
          style={styles.navbarTouchableOpacity}
          onPress={() => router.push("/(tabs)")}
        >
          <Octicons
            name="home"
            size={20}
            color="gray"
            style={styles.navbarIcon}
          />
          <Text style={[styles.navbarText, styles.notselected]}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navbarTouchableOpacity}
          onPress={() => router.push("/wishlist")}
        >
          <MaterialCommunityIcons
            name="cards-heart-outline"
            size={20}
            color="gray"
            style={styles.navbarIcon}
          />
          <Text style={styles.navbarText}>Wishlist</Text>
        </TouchableOpacity>
        <View style={styles.navbarTouchableOpacity}>
          <Fontisto
            name="bell"
            size={20}
            color="gray"
            style={styles.navbarIcon}
          />
          <Text style={[styles.navbarText, styles.notselected]}>
            Notification
          </Text>
        </View>
        <TouchableOpacity style={styles.navbarTouchableOpacity}>
          <Octicons
            name="person-fill"
            size={20}
            color="black"
            style={styles.navbarIcon}
          />
          <Text style={[styles.navbarText, styles.notselected]}>
            Membership
          </Text>
        </TouchableOpacity>
        <View style={styles.navbarTouchableOpacity}>
          <Octicons
            name="three-bars"
            size={20}
            color="gray"
            style={styles.navbarIcon}
          />
          <Text style={[styles.navbarText, styles.notselected]}>Menu</Text>
        </View>
      </View>
    </View>
  );
}

// Reusable Menu Item component
const MenuItem = ({ icon, label }) => (
  <TouchableOpacity style={styles.menuItem}>
    <MaterialIcons name={icon} size={26} color="#444" />
    <Text style={styles.menuLabel}>{label}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingBottom: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 40,
    paddingVertical: 72,
    backgroundColor: "#fff",
    borderBottomWidth: 0.2,
    borderBottomColor: "#ccc",
  },
  headerText: {
    fontSize: 20,
    fontWeight: "700",
  },
  headerIcons: {
    flexDirection: "row",
  },
  card: {
    backgroundColor: "#fff",
    margin: 16,
    borderRadius: 12,
    alignItems: "center",
    paddingVertical: 20,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  barcode: {
    width: 200,
    height: 50,
    resizeMode: "contain",
  },
  memberId: {
    marginTop: 8,
    fontSize: 16,
    letterSpacing: 1,
    color: "#333",
  },
  menuContainer: {
    marginHorizontal: 16,
  },
  menuRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 12,
  },
  menuItem: {
    alignItems: "center",
    width: "45%",
  },
  menuLabel: {
    fontSize: 14,
    marginTop: 6,
    textAlign: "center",
    color: "#444",
  },
  section: {
    marginTop: 8,
    marginHorizontal: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 8,
  },
  navbar: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    borderTopColor: "#e4e4e4ff",
    borderTopWidth: 4,
    bottom: Platform.OS === "android" ? -212 : Platform.OS === "web" ? -500 : 0,
    backgroundColor: "#fff",
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
    fontSize: 12,
  },
  notselected: {
    color: "gray",
  },
});
