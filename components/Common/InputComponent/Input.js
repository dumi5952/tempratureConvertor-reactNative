import { View, Text, TextInput } from "react-native";
import styles from "./Input.styles";

const Input = ({
  label,
  value,
  onChangeText,
  placeholder,
  keyboardType = "default",
  style = {},
  prefix,
  suffix,
  ...props
}) => {
  return (
    <View style={[styles.container, style]}>
      {label && <Text style={styles.label}>{label}</Text>}
      {prefix && <Text style={styles.prefix}>{prefix}</Text>}
      <TextInput
        style={[
          styles.input,
          prefix ? { paddingLeft: 45 }: { paddingLeft: 15 },
          suffix ? { paddingRight: 45 } : { paddingRight: 15 },
        ]}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        keyboardType={keyboardType}
        {...props}
      />
      {suffix && <Text style={styles.suffix}>{suffix}</Text>}
    </View>
  );
};

export default Input;
