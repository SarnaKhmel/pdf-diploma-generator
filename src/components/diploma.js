import React from "react";
import { Image, Text, StyleSheet, View } from "@react-pdf/renderer";


function Diploma(props) {

  const styles = StyleSheet.create({
    date: {
      position: "absolute",
      textAlign: "center",
      top: `${props.datePos.x}%`,
      left: `${props.datePos.y}%`,
      right: `100%`,
      fontSize: props.dateSize
    },
    course: {
      position: "absolute",
      textAlign: "center",
      top: `${props.coursePos.x}%`,
      left: `${props.coursePos.y}%`,
      right: `100%`,
      fontSize: props.courseSize
    },
    name: {
      position: "absolute",
      textAlign: "center",
      top: `${props.namePos.x}%`,
      left: `${props.namePos.y}%`,
      right: `100%`,
      fontSize: props.nameSize
    }
  });

  return (
    <View>
      <Image src={props.background} />
      <Text style={styles.date} break>
        {props.date}
      </Text>
      <Text style={styles.course} break>
        {props.course}
      </Text>
      <Text style={styles.name} break>
        {props.name}
      </Text>
    </View>
  );
}

export default Diploma