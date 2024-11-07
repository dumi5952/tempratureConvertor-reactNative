import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  prefix: {
    position: "absolute",
    alignSelf: "flex-start",
    paddingLeft: 15,
    fontSize: 20,
    color: "#333",
    zIndex: 1,
  },
  suffix: {
    position: "absolute",
    alignSelf: "flex-end",
    paddingRight: 15,
    fontSize: 20,
    color: "#333",
  },
  container: {
    alignSelf: "stretch",
    justifyContent: "center",
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
    color: "#333",
  },
  input: {
    backgroundColor: "white",
    height: 50,
    borderRadius: 20,
    borderColor: "black",
    borderWidth: 1,
  },
});

export default styles;
