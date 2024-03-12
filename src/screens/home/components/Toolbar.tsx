import { Image, Text, View } from "react-native";
import React from "react";
import { IMAGES } from "../../../constant/constant";
import { style } from "../Style";



export default function Toolbar() {
    return (
        <View style={style.toolBar}>
            <View>
                <Text style={style.tbTitle}>Hello ByProgrammers</Text>
                <Text style={style.tbSubTitle}>What you want to cook today?</Text>
            </View >
            <Image source={IMAGES.avatar} style={style.avatar}/>
        </View>
    )
}