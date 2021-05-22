import React from "react";
import { StyleSheet, View } from "react-native";
import { Picker } from "@react-native-community/picker";

export default function UnitsPicker({ unitSystem, setUnitSystem }) {
  return (
    <View style={styles.tempPicker}>
      <Picker
        selectedValue={unitSystem}
        onValueChange={(item) => setUnitSystem(item)}
        mode="dropdown"
        itemStyle={{ fontSize: 15 }}
      >
        <Picker.Item label="C°" value="metric" />
        <Picker.Item label="F°" value="imperial" />
      </Picker>
    </View>
  );
}

const styles = StyleSheet.create({
  tempPicker: {
    width: "50%",
    position: "absolute",
    top: 30,
    left: 10,
  },
});
