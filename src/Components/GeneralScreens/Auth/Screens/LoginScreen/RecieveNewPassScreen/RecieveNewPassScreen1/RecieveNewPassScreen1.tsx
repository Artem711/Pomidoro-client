// PLUGINS IMPORTS //
import React from "react"
import { ScrollView, StyleSheet } from "react-native"
import { TextInput } from "react-native-paper"
import Text from "~/Components/Shared/Components/Text/Text"
import { Formik } from "formik"
import * as yup from "yup"

// COMPONENTS IMPORTS //

// EXTRA IMPORTS //
import Button from "../../../../../../Shared/Components/Button/Button"

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  navigation: any
}

const RecieveNewPassScreen: React.FC<PropsType> = (props) => {
  const ValidationSchema = yup.object({
    phoneNum: yup
      .number()
      .required("Телефон обязателен")
      .typeError("Телефон обязателен и должен только быть числом"),
  })

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Text weight="bold" size={30} style={styles.title}>
        Получить новый пароль
      </Text>
      <Text style={styles.subtitle}>
        Введите номер телефона, введенный вами при регистрации
      </Text>
      <Formik
        validationSchema={ValidationSchema}
        initialValues={{
          phoneNum: null as number | null,
        }}
        onSubmit={(values: any) => {
          props.navigation.navigate("RecieveNewPassScreen2")
        }}
      >
        {(FormikProps) => (
          <>
            <TextInput
              placeholder="Номер телефона"
              placeholderTextColor="rgba(26, 24, 36, 0.5)"
              theme={{ colors: { primary: "#1A1824" } }}
              onChangeText={FormikProps.handleChange("phoneNum")}
              onBlur={() => {
                FormikProps.handleBlur("phoneNum")
              }}
              keyboardType="number-pad"
              value={FormikProps.values.phoneNum as any}
              style={styles.input}
            />
            {FormikProps.touched.phoneNum && FormikProps.errors.phoneNum ? (
              <Text style={styles.error_message}>
                {FormikProps.touched.phoneNum && FormikProps.errors.phoneNum}
              </Text>
            ) : null}

            <Button
              text="Продолжить"
              onPress={FormikProps.handleSubmit}
              buttonStyle={{
                marginTop: 25,
                marginBottom: 20,
                alignSelf: null,
                height: 50,
                width: 315,
                borderRadius: 6,
                backgroundColor: "#96A637",
              }}
              textStyle={{
                color: "white",
                fontSize: 16,
                letterSpacing: 0.3,
              }}
            />
          </>
        )}
      </Formik>
    </ScrollView>
  )
}

//   STYLES   //
const styles = StyleSheet.create({
  container: {
    marginTop: 29,
    marginHorizontal: 30,
    flex: 1,
  },

  title: {
    marginBottom: 28,
    width: 243,
  },

  subtitle: {
    marginBottom: 20,
    width: 291,
    letterSpacing: 0.3,
  },

  input: {
    backgroundColor: "white",
    height: 45,
    width: 315,
    fontSize: 16,
  },

  error_message: {
    color: "red",
    marginTop: 3,
  },
})

export default RecieveNewPassScreen
