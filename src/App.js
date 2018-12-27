import React, { Component } from "react";
import DiplomaViewer from "./components/diploma-viewer";
import "./App.css";
import DataForm from "./components/data-form";
import { Grid } from "@material-ui/core";
import Layout from "./components/templates/layout";

class App extends Component {
  state = {
    imageURL: "",
    date: "",
    datePos: {
      x: 0,
      y: 0,
    },
    course: "",
    coursePos: {
      x: 0,
      y: 0,
    },
    name: "",
    namePos: {
      x: 0,
      y: 0,
    },
    PDFBlob: "",
  };

  chargeFile = event => {
    this.setState({
      imageURL: URL.createObjectURL(event.target.files[0])
    });
  };

  handleInputChange = event => {
    let newState = this.state;
    newState[event.target.id] = event.target.value;
    this.setState(newState);
  };

  handlePosChange = (event, axis) => {
    let newState = this.state;
    if (event.target.value > 0)
      newState[event.target.id][axis] = event.target.value;
    this.setState(newState);
  }

  handlePDFGeneration = (PDFBlob) => {
    console.log(PDFBlob)
    this.setState({
      PDFBlob: URL.createObjectURL(PDFBlob.blob),
    })
  }

  render() {
    return (
      <Layout>
        <Grid container spacing={32}>
          <DataForm
            imageURL={this.state.imageURL}
            chargeFile={this.chargeFile}
            handleInputChange={this.handleInputChange}
            coursePos={this.state.coursePos}
            datePos={this.state.datePos}
            namePos={this.state.namePos}
            handlePosChange={this.handlePosChange}
            PDFBlob={this.state.PDFBlob}
          />
          <DiplomaViewer
            background={this.state.imageURL}
            date={this.state.date}
            course={this.state.course}
            name={this.state.name}
            coursePos={this.state.coursePos}
            datePos={this.state.datePos}
            namePos={this.state.namePos}
            handlePDFGeneration={this.handlePDFGeneration}
          />
        </Grid>
      </Layout>
    );
  }
}

export default App;
