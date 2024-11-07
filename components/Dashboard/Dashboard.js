import { Text, View } from "react-native";
import styles from "./Dashboard.styles";
import { useMemo, useState } from "react";
import { temperatureUnits } from "../../constants/DashboardConstants";
import {
  celsiusToFahrenheit,
  fahrenheitToCelsius,
  switchUnit,
} from "../../util/temperatureUtil";
import Input from "../Common/InputComponent/Input";
import Button from "../Common/BtnComponent/Button";
import useDebounce from "../../customHooks/useDebounce";

const Dashboard = ({ isCold }) => {
  const [currentUnit, setCurrentUnit] = useState(temperatureUnits.celsius);
  const [insertValue, setInsertValue] = useState("");
  const otherUnit = switchUnit(currentUnit);
  const useTermsDebounce = useDebounce(insertValue);

  const convertedValue = useMemo(() => {
    if (!useTermsDebounce || isNaN(parseFloat(useTermsDebounce))) {
      isCold(true);
      return "0.00";
    }
    let temperature;
    const enteredValue = parseFloat(useTermsDebounce);
    if (currentUnit === temperatureUnits.celsius) {
      temperature = celsiusToFahrenheit(enteredValue).toFixed(2);
      isCold(enteredValue <= 0);
    } else {
      temperature = fahrenheitToCelsius(enteredValue).toFixed(2);
      isCold(enteredValue <= 32);
    }
    return temperature;
  }, [useTermsDebounce]);

  const changeUnitHandler = () => {
    setCurrentUnit(otherUnit);
    setInsertValue("");
  };

  return (
    <View style={styles.container}>
      <View>
        <Text
          style={styles.conversionText}
        >{`${convertedValue} ${otherUnit}`}</Text>
      </View>
      <View style={styles.inputField}>
        <Input
          keyboardType="numeric"
          suffix={currentUnit}
          onChangeText={(text) => {
            setInsertValue(text);
          }}
          placeholder={"Enter value to convert temperature"}
          value={insertValue}
        />
      </View>
      <View>
        <Button style={styles.btnStyle} onPress={changeUnitHandler}>
          <Text style={styles.btnText}>{`Convert Unit to ${otherUnit}`}</Text>
        </Button>
      </View>
    </View>
  );
};

export default Dashboard;
