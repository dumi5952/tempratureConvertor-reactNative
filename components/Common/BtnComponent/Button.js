import { TouchableOpacity } from "react-native";
import styles from "./Button.styles";

const Button = ({ onPress, style, children, ...props }) => {
  return (
    <TouchableOpacity style={[styles.btn, style]} onPress={onPress} {...props}>
      {children}
    </TouchableOpacity>
  );
};

export default Button;
