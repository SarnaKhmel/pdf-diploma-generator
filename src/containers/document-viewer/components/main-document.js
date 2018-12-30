import React from "react";
import { Document, Page } from "@react-pdf/renderer";
import Diploma from "./diploma";

function MainDocument(props) {
  return (
    <Document onRender={props.handlePDFGeneration}>
      {props.nameList.names.length > 0 ? (
        <Page size="A4" orientation="landscape">
          {props.nameList.names.map((name, id) => (
            <Diploma
              key={id}
              {...props}
              name={{ ...props.name, value: name }}
            />
          ))}
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
