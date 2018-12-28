import React from "react";
import { Document, Page } from "@react-pdf/renderer";
import Diploma from "./diploma";

function MainDocument(props) {
  let Dip = [];

  for (let i = 0; i < props.names.length; i++) {
    Dip.push(<Diploma key={i} {...props} name={props.names[i]} />);
  }

  return (
    <Document onRender={props.handlePDFGeneration}>
      {props.names.length > 0 ? (
        <Page size="A4" orientation="landscape">
          {Dip}
        </Page>
      ) : (
        <Page size="A4" orientation="landscape">
          <Diploma {...props} />
        </Page>
      )}
    </Document>
  );
}

export default MainDocument;
