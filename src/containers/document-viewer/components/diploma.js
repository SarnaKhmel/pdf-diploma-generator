import React, { Component } from "react";
import {
  Image,
  Text,
  StyleSheet,
  View,
  Font
} from "@react-pdf/renderer";

class Diploma extends Component {
  componentDidUpdate(prevProps) {
    if (prevProps.date.fontFamily !== this.props.date.fontFamily) {
      Font.register(this.props.date.fontFamily.files.regular, {
        family: this.props.date.fontFamily.value
      });
    }
    if (prevProps.course.fontFamily !== this.props.course.fontFamily) {
      Font.register(this.props.course.fontFamily.files.regular, {
        family: this.props.course.fontFamily.value
      });
    }
    if (prevProps.name.fontFamily !== this.props.name.fontFamily) {
      Font.register(this.props.name.fontFamily.files.regular, {
        family: this.props.name.fontFamily.value
      });
    }
  }

  render() {
    const styles = StyleSheet.create({
      date: {
        position: "absolute",
        textAlign: "center",
        top: `${this.props.date.pos.x}%`,
        left: `${this.props.date.pos.y}%`,
        right: `100%`,
        fontFamily: this.props.date.fontFamily
          ? this.props.date.fontFamily.value
          : null,
        fontSize: this.props.date.size !== 0 ? this.props.date.size : 1
      },
      course: {
        position: "absolute",
        textAlign: "center",
        top: `${this.props.course.pos.x}%`,
        left: `${this.props.course.pos.y}%`,
        right: `100%`,
        fontFamily: this.props.course.fontFamily
          ? this.props.course.fontFamily.value
          : null,
        fontSize: this.props.course.size !== 0 ? this.props.course.size : 1
      },
      name: {
        position: "absolute",
        textAlign: "center",
        top: `${this.props.name.pos.x}%`,
        left: `${this.props.name.pos.y}%`,
        right: `100%`,
        fontFamily: this.props.name.fontFamily
          ? this.props.name.fontFamily.value
          : null,
        fontSize: this.props.name.size !== 0 ? this.props.name.size : 1
      }
    });

    return (
      <View>
        <Image src={this.props.background} />
        <Text style={styles.date} break>
          {this.props.date.value}
        </Text>
        <Text style={styles.course} break>
          {this.props.course.value}
        </Text>
        <Text style={styles.name} break>
          {this.props.name.value}
        </Text>
      </View>
    );
  }
}

export default Diploma;
