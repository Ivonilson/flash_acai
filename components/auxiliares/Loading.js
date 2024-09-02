import React, { useState } from "react";
import { View, ActivityIndicator } from 'react-native';


const Loading = (props) => {
    return (
        props.valor ?
            <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center' }}>
                <ActivityIndicator size="large" color="#000fff"></ActivityIndicator>
            </View> : ''
    )
}

export default Loading;