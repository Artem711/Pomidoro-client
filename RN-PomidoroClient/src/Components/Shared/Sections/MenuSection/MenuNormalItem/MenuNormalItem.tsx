// PLUGINS IMPORTS //
import React from "react"
import { Image, StyleSheet } from "react-native"
import Text from "~/Components/Shared/Components/Text/Text"

import { RectButton } from "react-native-gesture-handler"

// COMPONENTS IMPORTS //

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  navigation: any
  id: number

  imageURL: string
  title: string
}

const MenuNormalItem: React.FC<PropsType> = (props) => {
  return (
    <RectButton
      style={styles.image_wrap}
      onPress={() =>
        props.navigation.navigate("ProductTypeCatalog", {
          productId: props.title,
        })
      }
    >
      <Image source={{ uri: props.imageURL }} style={styles.image} />
      <Text style={styles.text} weight="bold">
        {props.title}
      </Text>
    </RectButton>
  )
}

//   STYLES   //
const styles = StyleSheet.create({
  content_wrap: {
    marginTop: 14,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "space-evenly",
    marginLeft: -18.5,
  },

  image_wrap: {
    flexDirection: "column",
    alignItems: "center",
    paddingHorizontal: 18.5,
    paddingVertical: 17.115,
  },

  text: {
    marginTop: 5,
    marginRight: 3,
    width: 90,

    color: "#1A1824",
    fontSize: 15,
    textAlign: "center",
  },

  image: {
    height: 80,
    width: 80,
    resizeMode: "center",
  },
})

export default MenuNormalItem
