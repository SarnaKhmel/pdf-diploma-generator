import React, { Component } from "react";
import DocumentViewer from "./components/document-viewer";
import "./App.css";
import DataForm from "./components/data-form";
import { Grid } from "@material-ui/core";
import Layout from "./components/templates/layout";

class App extends Component {
  state = {
    imageURL: "",
    date: "",
    dateSize: 16,
    datePos: {
      x: 0,
      y: 50,
    },
    course: "",
    courseSize: 16,
    coursePos: {
      x: 10,
      y: 50,
    },
    name: "[Name Placeholder]",
    nameSize: 16,
    namePos: {
      x: 20,
      y: 50,
    },
    PDFBlob: "",
    names: [],
    nameToAdd: "",
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
    if (event.target.value > 0 && event.target.value <= 100) {
      newState[event.target.id][axis] = event.target.value;
    }
    this.setState(newState);
  }

  handlePDFGeneration = (PDFBlob) => {
    console.log(PDFBlob.blob)
    this.setState({
      PDFBlob: URL.createObjectURL(PDFBlob.blob),
    })
  }

  handleAddName = (event) => {
    event && event.preventDefault()
    if(this.state.nameToAdd !== "") {
      let newState = this.state;
      newState.names.push(this.state.nameToAdd)
      newState.nameToAdd = ""
      this.setState(newState)
    }
  }

  handleDeleteName = (id) => {
    let newState = this.state;
    newState.names.splice(id, 1)
    console.log(newState.names)
    this.setState(newState)
  }

  render() {
    return (
      <Layout>
        <Grid container spacing={16}>
          <DataForm
            imageURL={this.state.imageURL}
            chargeFile={this.chargeFile}
            handleInputChange={this.handleInputChange}
            coursePos={this.state.coursePos}
            datePos={this.state.datePos}
            namePos={this.state.namePos}
            dateSize={this.state.dateSize}
            courseSize={this.state.courseSize}
            nameSize={this.state.nameSize}
            handlePosChange={this.handlePosChange}
            PDFBlob={this.state.PDFBlob}
            names={this.state.names}
            handleAddName={this.handleAddName}
            nameToAdd={this.state.nameToAdd}
            handleDeleteName={this.handleDeleteName}
          />
          <DocumentViewer
            background={this.state.imageURL}
            names={this.state.names}
            date={this.state.date}
            course={this.state.course}
            name={this.state.name}
            coursePos={this.state.coursePos}
            datePos={this.state.datePos}
            namePos={this.state.namePos}
            handlePDFGeneration={this.handlePDFGeneration}
            dateSize={this.state.dateSize}
            courseSize={this.state.courseSize}
            nameSize={this.state.nameSize}
            handleAddBlobToDownload={this.handleAddBlobToDownload}
          />
        </Grid>
      </Layout>
    );
  }
}

export default App;
