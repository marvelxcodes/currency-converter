import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import {
  StyleSheet,
  Image,
  Platform,
  View,
  Text,
  Button,
  TextInput,
} from "react-native";
import currencyCodes from "@/constants/currencyCodes";
import { Dropdown } from "react-native-element-dropdown";

export default function ConvertScreen() {
  return (
    <ThemedView style={styles.container}>
      <TextInput placeholder="Amount"></TextInput>
      <Dropdown
        data={Reflect.ownKeys(currencyCodes).map((code) => ({
          name: currencyCodes[String(code)],
          code,
        }))}
        labelField={"name"}
        valueField={"code"}
        onChange={(value) => console.log(value)}
      ></Dropdown>

      <Button title="Convert"></Button>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 16,
    padding: 16,
    borderRadius: 16,
  },
});
