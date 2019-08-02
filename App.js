import React, { useRef } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Button } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import * as Permissions from "expo-permissions";
import Toast from "react-native-easy-toast";

const App = () => {
  const toast = useRef(null);

  const openCamera = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    if (status === "denied") {
      toast.current.show("Es necesario aceptar los permisos cámara");
    } else {
      toast.current.show("Permisos aceptados");
    }
  };

  return (
    <View style={styles.viewBody}>
      <Text>Bar Code Info App</Text>
      <Button
        onPress={() => openCamera()}
        icon={
          <Icon
            name="camera"
            size={15}
            color="white"
            style={styles.cameraIcon}
          />
        }
        title="Leer código de barra"
      />
      <Toast
        ref={toast}
        position="bottom"
        positionValue={250}
        fadeInDuration={750}
        fadeOutDuration={1000}
        opacity={0.8}
        textStyle={{ color: "#fff" }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  viewBody: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  cameraIcon: {
    margin: 10
  }
});

export default App;
