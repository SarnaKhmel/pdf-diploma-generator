import React from "react";
import { Grid } from "@material-ui/core";
import MainDocument from "./main-document";
import { StyleSheet, PDFViewer } from "@react-pdf/renderer";

function DocumentViewer(props) {
  const styles = StyleSheet.create({
    container: {
      display: "flex",
      justifyContent: "center"
    },
    viewer: {
      width: "100%",
      height: 700
    },
  });

  return (
    <Grid item xs={12} md={8}>
      <div style={styles.container}>
        <PDFViewer style={styles.viewer}>
          <MainDocument {...props} />
        </PDFViewer>
      </div>
    </Grid>
  );
}

export default DocumentViewer;
