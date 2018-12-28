import React from "react";
import { Image, Text, StyleSheet, View } from "@react-pdf/renderer";


function Diploma(props) {

  const styles = StyleSheet.create({
    date: {
      position: "absolute",
      textAlign: "center",
      top: `${props.date.pos.x}%`,
      left: `${props.date.pos.y}%`,
      right: `100%`,
      fontSize: props.date.size !== 0 ? props.date.size : 1
    },
    course: {
      position: "absolute",
      textAlign: "center",
      top: `${props.course.pos.x}%`,
      left: `${props.course.pos.y}%`,
      right: `100%`,
      fontSize: props.course.size !== 0 ? props.course.size : 1
    },
    name: {
      position: "absolute",
      textAlign: "center",
      top: `${props.name.pos.x}%`,
      left: `${props.name.pos.y}%`,
      right: `100%`,
      fontSize: props.name.size !== 0 ? props.name.size : 1
    }
  });

  return (
    <View>
      <Image src={props.background} />
      <Text style={styles.date} break>
        {props.date.value}
      </Text>
      <Text style={styles.course} break>
        {props.course.value}
      </Text>
      <Text style={styles.name} break>
        {props.name.value}
      </Text>
    </View>
  );
}

export default Diploma