import { StatusBar } from "expo-status-bar";
import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default class App extends React.Component {
  state = {
    data: { activity: "loading..." },
  };

  getJsonData = () => {
    try {
      fetch("https://www.boredapi.com/api/activity/", { method: "Get" })
        .then((response) => response.json())
        .then((responsJson) => {
          console.log(responsJson);
          this.setState({
            data: responsJson,
          });
        })
        .catch((error) => console.log(error));
    } catch (error) {
      alert(error);
    }
  };

  componentDidMount = () => {
    this.getJsonData();
  };

  render() {
    return (
      <View style={styles.container}>
        <View
          style={{
            position: "absolute",
            top: 120,
          }}
        >
          <Text
            style={{
              margin: 10,
              fontSize: 16,
              fontWeight: "bold",
            }}
          >
            Suggestion:
          </Text>
        </View>
        <View>
          <Text selectable={true} style={{ margin: 10, fontSize: 22 }}>
            {this.state.data["activity"]}
          </Text>
          <Text selectable={true} style={{ margin: 10, fontSize: 16 }}>
            {"People : " + this.state.data["participants"]}
          </Text>
          <Text selectable={true} style={{ margin: 10, fontSize: 14 }}>
            {"Price : " + this.state.data["price"]}
          </Text>
          <Text selectable={true} style={{ margin: 10, fontSize: 14 }}>
            {"Type : " + this.state.data["type"]}
          </Text>
          <Text selectable={true} style={{ margin: 10, fontSize: 14 }}>
            {"Accessibility : " + this.state.data["accessibility"]}
          </Text>
          <StatusBar style="auto" />
        </View>
        <View style={{ position: "absolute", width: "50%", bottom: 20 }}>
          <Button title="Press Me" onPress={this.getJsonData} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
