import React, { Component } from "react";
import {
  Image,
  Text,
  StyleSheet,
  Font,
  Page
} from "@react-pdf/renderer";

class Diploma extends Component {
  componentDidUpdate(prevProps) {
    if (prevProps.date.fontFamily !== this.props.date.fontFamily 
      || prevProps.date.weight !== this.props.date.weight) {
      Font.register(this.props.date.fontFamily.files[this.props.date.weight ? this.props.date.weight : "regular"].replace('http:', 'https:'), {
        family: this.props.date.fontFamily.value + this.props.date.weight
      });
    }
    if (prevProps.course.fontFamily !== this.props.course.fontFamily 
      || prevProps.course.weight !== this.props.course.weight) {
      Font.register(this.props.course.fontFamily.files[this.props.course.weight ? this.props.course.weight : "regular"].replace('http:', 'https:'), {
        family: this.props.course.fontFamily.value + this.props.course.weight
      });
    }
    if (prevProps.name.fontFamily !== this.props.name.fontFamily 
      || prevProps.name.weight !== this.props.name.weight) {
      Font.register(this.props.name.fontFamily.files[this.props.name.weight ? this.props.name.weight : "regular"].replace('http:', 'https:'), {
        family: this.props.name.fontFamily.value + this.props.name.weight
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
          ? this.props.date.fontFamily.value + this.props.date.weight
          : null,
        fontSize: this.props.date.size !== 0 ? this.props.date.size : 1,
        color: this.props.date.color
      },
      course: {
        position: "absolute",
        textAlign: "center",
        top: `${this.props.course.pos.x}%`,
        left: `${this.props.course.pos.y}%`,
        right: `100%`,
        fontFamily: this.props.course.fontFamily
          ? this.props.course.fontFamily.value + this.props.course.weight
          : null,
        fontSize: this.props.course.size !== 0 ? this.props.course.size : 1,
        color: this.props.course.color
      },
      name: {
        position: "absolute",
        textAlign: "center",
        top: `${this.props.name.pos.x}%`,
        left: `${this.props.name.pos.y}%`,
        right: `100%`,
        fontFamily: this.props.name.fontFamily
          ? this.props.name.fontFamily.value + this.props.name.weight
          : null,
        fontSize: this.props.name.size !== 0 ? this.props.name.size : 1,
        color: this.props.name.color
      },
      background: {
        position: "absolute",
        display: "block",
        left: 0,
        height: this.props.background.height + '%',
        width: this.props.background.width + '%',
      }
    });

    return (
      <Page size="A4" orientation="landscape">
        <Image style={styles.background} src={this.props.background.url} />
        <Text style={styles.date} break>
          {this.props.date.value}
        </Text>
        <Text style={styles.course} break>
          {this.props.course.value}
        </Text>
        <Text style={styles.name} break>
          {this.props.name.value}
        </Text>
      </Page>
    );
  }
}

export default Diploma;
