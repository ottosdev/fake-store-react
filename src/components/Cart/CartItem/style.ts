import React from "react";

export const container: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
};

export const addAndRemoveItems: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: 200,
  paddingTop: 16
};

export const imageStyle: React.CSSProperties = {
  width: 280,
  height: 280
};

export const describe: React.CSSProperties = {
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "space-between",
  paddingTop: 8,
};
