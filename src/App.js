import React, { Component } from "react";
import DocumentViewer from "./containers/document-viewer/document-viewer";
import "./App.css";
import DataForm from "./containers/data-form/data-form";
import { Grid } from "@material-ui/core";
import Layout from "./components/templates/layout";
import { FONTS_API_KEY } from "./config/index";

class App extends Component {
  state = {
    imageURL: "",
    date: {
      value: "",
      size: 16,
      pos: {
        x: 0,
        y: 50,
      },
      fontCategory: null,
      fontFamily: null
    },
    course: {
      value: "",
      size: 16,
      pos: {
        x: 10,
        y: 50,
      },
      fontCategory: null,
      fontFamily: null
    },
    name:{
      value: "",
      size: 16,
      pos: {
        x: 10,
        y: 50,
      },
      fontCategory: null,
      fontFamily: null
    },
    nameList: {
      nameToAdd: "",
      names: [],
    } ,
    PDFBlob: "",
    fonts: [],
    categories: [
      {
        value: "sans-serif",
        label: "Sans-serif"
      },
      {
        value: "serif",
        label: "Serif"
      },
      {
        value: "display",
        label: "Display"
      },
      {
        value: "handwriting",
        label: "Handwriting"
      },
      {
        value: "monospace",
        label: "Monospace"
      }
    ],
  };

  async componentDidMount() {
    let fonts = await fetch(
      `https://www.googleapis.com/webfonts/v1/webfonts?key=${FONTS_API_KEY}&sort=popularity`
    );
    fonts = await fonts.json();
    fonts = fonts.items.map(font => ({
      value: font.family,
      label: font.family,
      category: font.category,
      files: font.files
    }));
    fonts.length = 100
    this.setState({ fonts });
  }

  handleChargeFile = event => {
    this.setState({
      imageURL: URL.createObjectURL(event.target.files[0])
    });
  };

  handleInputChange = event => {
    let newState = this.state;
    newState[event.target.id][event.target.name] = event.target.value;
    this.setState(newState);
  };

  handleAutoCompleteChange = (id, name) => value => {
    console.log(name, id)
    this.setState({
      [id]: {
        ...this.state[id],
        [name]: value
      }
    });
  };

  handlePosChange = (event, axis) => {
    let newState = this.state;
    if (event.target.value > 0 && event.target.value <= 100) {
      newState[event.target.id][event.target.name][axis] = event.target.value;
    }
    this.setState(newState);
  };

  handlePDFGeneration = PDFBlob => {
    console.log(PDFBlob.blob);
    this.setState({
      PDFBlob: URL.createObjectURL(PDFBlob.blob)
    });
  };

  handleAddName = event => {
    event && event.preventDefault();
    if (this.state.nameList.nameToAdd !== "") {
      this.setState({
        nameList: {
          names: [...this.state.nameList.names, this.state.nameList.nameToAdd],
          nameToAdd: "",
        }
      });
    }
  };

  handleDeleteName = id => {
    let newState = this.state;
    newState.names.splice(id, 1);
    console.log(newState.names);
    this.setState(newState);
  };

  render() {
    return (
      <Layout>
        <Grid container spacing={16}>
          <DataForm
            // State
            date={this.state.date}
            course={this.state.course}
            name={this.state.name}
            nameList={this.state.nameList}
            imageURL={this.state.imageURL}
            PDFBlob={this.state.PDFBlob}

            // Handlers
            handleChargeFile={this.handleChargeFile}
            handleInputChange={this.handleInputChange}
            handleAddName={this.handleAddName}
            handlePosChange={this.handlePosChange}
            handleDeleteName={this.handleDeleteName}
            handleAutoCompleteChange={this.handleAutoCompleteChange}

            // Fonts
            fonts={this.state.fonts}
            categories={this.state.categories}
          />
          <DocumentViewer
            // State
            date={this.state.date}
            course={this.state.course}
            name={this.state.name}
            nameList={this.state.nameList}
            background={this.state.imageURL}
            
            // Handlers
            handlePDFGeneration={this.handlePDFGeneration}
            handleAddBlobToDownload={this.handleAddBlobToDownload}
          />
        </Grid>
      </Layout>
    );
  }
}

export default App;
