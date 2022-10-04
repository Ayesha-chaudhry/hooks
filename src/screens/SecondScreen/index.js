import { useContext } from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import { FirstContext } from "../../store/context/FirstContext";

const SecondScreen = () => {
    const {state, addValue} = useContext(FirstContext)
    
    const onAddPressed = () => {
        addValue(5)
    }
    return(
        <View style={styles.container}>
            <Text>{state.value}</Text>
            <Button
                title='Increment'
                onPress={() => onAddPressed()}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})
export default SecondScreen;