import { useContext } from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { FirstContext } from "../../store/context/FirstContext";

const FirstScreen = (props) => {
    const {state, addValue, subValue} = useContext(FirstContext)
    console.log(state)

    const onAddPressed = () => {
      addValue()
      console.log(state)
    }
    const onSubPressed = () => {
      subValue()
      console.log(state)
    }
    return(
        <View style={styles.container}>
             <Text>ApiContext and useReducer</Text>
             <Text>{state.value}</Text> 
             <View style={{margin: 5, marginTop: 10}}>
              <Button
                  title="Increment"
                  onPress={() => onAddPressed()}
              />
             </View>

             <View  style={{margin: 5, marginTop: 10}}>
              <Button
                  title="Decrement"
                  onPress={() => onSubPressed()}
              />               
             </View>
             <View   style={{margin: 5, marginTop: 10}}>
              <Button
                  title="Move on other Screen"
                  onPress={() => props.navigation.navigate('SecondScreen')}
              />               
             </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
export default FirstScreen;  