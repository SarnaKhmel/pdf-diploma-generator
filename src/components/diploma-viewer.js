import React from "react";
import { Grid } from "@material-ui/core";
import {
  Document,
  Page,
  Image,
  StyleSheet,
  PDFViewer,
  Text
} from "@react-pdf/renderer";

function DiplomaViewer(props) {

  const styles = StyleSheet.create({
    container: {
      display: "flex",
      justifyContent: "center"
    },
    image: {
      height: 100,
      width: 100
    },
    viewer: {
      width: "100%",
      height: 700
    },
    date: {
      position: "absolute",
      textAlign: 'center',
      top: `${props.datePos.x}%`,
      left: `${props.datePos.y}%`,
      right: `100%`,
      fontSize: props.dateSize,
    },
    course: {
      position: "absolute",
      textAlign: 'center',
      top: `${props.coursePos.x}%`,
      left: `${props.coursePos.y}%`,
      right: `100%`,
      fontSize: props.courseSize,
    },
    name: {
      position: "absolute",
      textAlign: 'center',
      top: `${props.namePos.x}%`,
      left: `${props.namePos.y}%`,
      right: `100%`,
      fontSize: props.nameSize,
    },
  });
  
  return (
    <Grid item xs={12} md={8}>
      <div style={styles.container}>
        <PDFViewer style={styles.viewer}>
          <Document onRender={props.handlePDFGeneration}>
            <Page size="A4" orientation="landscape">
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
            </Page>
          </Document>
        </PDFViewer>
      </div>
    </Grid>
  );
}

export default DiplomaViewer;
