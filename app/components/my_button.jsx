import { TouchableOpacity, Image, Text, StyleSheet } from 'react-native';

export const MyButton = (props) =>{
    return(
        <TouchableOpacity style={[styles.container, props.style]} >
            <Image
            style={styles.iconStyle}
            source={props.imgUrl}
            />
            <Text>{props.text}</Text>
        </TouchableOpacity>
    )
}

    const styles = StyleSheet.create ({
        container: {
            padding:10,
            borderColor: '#ele',
            backgroundColor: '#d8e2f2',
            borderRadius:5,
            borderWidth:0.5,
            flex: 1,
            flexDirection:'row',
            justifyContent: 'center'
        }
    })
