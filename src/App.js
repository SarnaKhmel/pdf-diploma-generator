import React, { Component } from "react";
import DocumentViewer from "./containers/document-viewer/document-viewer";
import "./App.css";
import DataForm from "./containers/data-form/data-form";
import { Grid } from "@material-ui/core";
import Layout from "./components/templates/layout";
import { FONTS_API_KEY } from "./config/index";

class App extends Component {
  state = {
    background: {
      url: "",
      height: 100,
      width: 100,
    },
    date: {
      value: "",
      size: 16,
      pos: {
        x: 0,
        y: 50
      },
      fontCategory: null,
      fontFamily: null,
      weight: "",
      color: "#000000"
    },
    course: {
      value: "",
      size: 16,
      pos: {
        x: 10,
        y: 50
      },
      fontCategory: null,
      fontFamily: null,
      weight: "",
      color: "#000000"
    },
    name: {
      value: "",
      size: 16,
      pos: {
        x: 20,
        y: 50
      },
      fontCategory: null,
      fontFamily: null,
      weight: "",
      color: "#000000"
    },
    nameList: {
      nameToAdd: "",
      names: []
    },
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
    ]
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
      files: font.files,
      variants: font.variants,
    }));
    fonts.length = 100;
    fonts.forEach(font => {
      let found = false;
      for(let i = 0; i < font.variants.length; i++) {
        if(font.variants[i] === "regular"){
          found = true;
        }
      }
      if (!found) {
        font.files.regular = font.files[font.variants[0]]
        delete font.files[font.variants[0]]
        font.variants[0] = "regular"
      }
    })
    this.setState({ fonts });
  }

  handleChargeFile = event => {
    this.setState({
      background: {
        ...this.state.background,
        url: URL.createObjectURL(event.target.files[0])
      }
    });
  };

  handleInputChange = event => {
    this.setState({
      [event.target.id]: {
        ...this.state[event.target.id],
        [event.target.name]: event.target.value
      }
    });
  };

  handleAutoCompleteChange = (id, name) => value => {
    this.setState({
      [id]: {
        ...this.state[id],
        [name]: value,
        weight: ""
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
          nameToAdd: ""
        }
      });
    }
  };

  handleDeleteName = id => {
    let newState = this.state;
    newState.nameList.names.splice(id, 1);
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
            background={this.state.background}
            PDFBlob={this.state.PDFBlob}
            backgroundWidth={this.state.imageWidth}
            backgroundHeight={this.state.imageHeight}
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
            background={this.state.background}
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
