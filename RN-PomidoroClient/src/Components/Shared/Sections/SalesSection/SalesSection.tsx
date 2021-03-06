// PLUGINS IMPORTS //
import React from "react"
import { View, ScrollView, StyleSheet } from "react-native"
import Text from "~/Components/Shared/Components/Text/Text"

// COMPONENTS IMPORTS //
import SaleItem from "./SaleItem/SaleItem"

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  navigation: any

  SalesList: Array<{
    title: string
    image: string
    description: string
    type: string
  }>
  titleText?: string
  titleStyle?: any
  scroll_horizontal?: boolean

  imageStyle: any
}

const SalesSection: React.FC<PropsType> = (props) => {
  return (
    <View style={styles.container}>
      <Text style={{ ...styles.title, ...props.titleStyle }} weight="bold">
        {props.titleText}
      </Text>
      <View style={styles.scroll_wrap}>
        <ScrollView
          horizontal={props.scroll_horizontal}
          style={styles.scroll_container}
          showsHorizontalScrollIndicator={false}
        >
          {props.SalesList?.map(
            (sale: {
              title: string
              image: string
              description: string
              type: string
            }) => {
              return (
                <SaleItem
                  navigation={props.navigation}
                  imageURL={sale.image}
                  saleTitle={sale.title}
                  saleType={sale.type}
                  saleDescription={sale.description}
                  imageStyle={props.imageStyle}
                />
              )
            }
          )}
        </ScrollView>
      </View>
    </View>
  )
}

//   STYLES   //
const styles = StyleSheet.create({
  container: {
    marginTop: 12,
    marginLeft: 20,
  },

  title: {
    color: "#1A1824",
    letterSpacing: 0.3,
  },

  scroll_wrap: {
    alignItems: "center",
  },

  scroll_container: {
    marginTop: 20,
  },

  image: {
    backgroundColor: "#000",
    opacity: 0.8,
    borderRadius: 15,
  },

  image_text_wrap: {
    position: "absolute",
    bottom: 10,
    marginHorizontal: 16,
  },

  image_subtitle: {
    color: "rgba(255, 255, 255, 0.6);",
    marginVertical: 12,
  },

  image_title: {
    color: "white",
    fontSize: 24,

    letterSpacing: 0.3,
  },

  image_action_wrap: {
    flexDirection: "row",
    marginVertical: 10,
  },

  image_action: {
    color: "white",
    letterSpacing: 0.3,
    fontSize: 16,
  },
})

export default SalesSection
