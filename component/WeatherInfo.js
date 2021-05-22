import React from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import { colors } from "../utils/index";

const { PRIMARY_COLOR, SECONDARY_COLOR } = colors;

export default function WeatherInfo({ currWeather }) {
  const {
    main: { temp },
    weather: [details],
    name,
  } = currWeather;
  const { icon, main, description } = details;

  const iconURL = `http://openweathermap.org/img/wn/${icon}@2x.png`;
  return (
    <View style={styles.weatherInfo}>
      <ImageBackground
        source={require("../assets/background.jpg")}
        style={{
          height: 300,
          width: 400,
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
        }}
      >
        <Text>{name}</Text>
        <Image style={styles.weatherIcon} source={{ uri: iconURL }} />
        <Text style={styles.textPrimary}>{temp}°</Text>
        <Text style={styles.weatherDescription}>{description}</Text>
        <Text style={styles.textSecondary}>{main}</Text>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  weatherInfo: {
    alignItems: "center",
  },
  weatherDescription: {
    textTransform: "capitalize",
  },
  weatherIcon: {
    width: 100,
    height: 100,
  },
  textPrimary: {
    fontSize: 40,
    color: PRIMARY_COLOR,
  },
  textSecondary: {
    fontSize: 20,
    color: SECONDARY_COLOR,
    fontWeight: "500",
    marginTop: 10,
  },
});
