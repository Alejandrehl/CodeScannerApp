import React from "react";
import { StyleSheet, Button, View } from "react-native";

const App = () => {
  const openCamera = () => console.log("Abrir Cámara");

  return (
    <View style={styles.container}>
      <Button
        onPress={() => openCamera()}
        title="Leer código de Barra"
        color="#841584"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default App;
