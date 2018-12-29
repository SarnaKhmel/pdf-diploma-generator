import React, { Component } from "react";
import { Document, Page, Font } from "@react-pdf/renderer";
import Diploma from "./diploma";

class MainDocument extends Component {
  componentDidUpdate(prevProps) {
    console.log(prevProps.date.weight, this.props.date.weight)
    console.log(prevProps.date.fontFamily, this.props.date.fontFamily)
    if (prevProps.date.fontFamily !== this.props.date.fontFamily 
      || prevProps.date.weight !== this.props.date.weight) {
      Font.register(this.props.date.fontFamily.files[this.props.date.weight ? this.props.date.weight : "regular"], {
        family: this.props.date.fontFamily.value
      });
    }
    if (prevProps.course.fontFamily !== this.props.course.fontFamily 
      || prevProps.course.weight !== this.props.course.weight) {
      Font.register(this.props.course.fontFamily.files[this.props.course.weight ? this.props.course.weight : "regular"], {
        family: this.props.course.fontFamily.value
      });
    }
    if (prevProps.name.fontFamily !== this.props.name.fontFamily 
      || prevProps.name.weight !== this.props.name.weight) {
      Font.register(this.props.name.fontFamily.files[this.props.name.weight ? this.props.name.weight : "regular"], {
        family: this.props.name.fontFamily.value
      });
    }
  }

  render () {
    return (
      <Document onRender={this.props.handlePDFGeneration}>
        {this.props.nameList.names.length > 0 ? (
          <Page size="A4" orientation="landscape">
            {this.props.nameList.names.map((name, id) => 
              <Diploma key={id} {...this.props} name={{ ...this.props.name, value: name }} />
            )}
          </Page>
        ) : (
          <Page size="A4" orientation="landscape">
            <Diploma {...this.props} />
          </Page>
        )}
      </Document>
    );
  }
}

export default MainDocument;
