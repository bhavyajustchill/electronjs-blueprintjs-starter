import React from "react";
import { Button } from "@blueprintjs/core";
import Bhavya from "./components/Bhavya.jsx";

export default function App() {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        <Button
          text="Default Button"
          onClick={() => console.log("Default clicked")}
        />
        <Button
          intent="primary"
          text="Primary Button"
          onClick={() => console.log("Primary clicked")}
        />
        <Button
          intent="success"
          text="Success Button"
          onClick={() => console.log("Success clicked")}
        />
        <Button
          intent="warning"
          text="Warning Button"
          onClick={() => console.log("Warning clicked")}
        />
        <Button
          intent="danger"
          text="Danger Button"
          onClick={() => console.log("Danger clicked")}
        />
      </div>

      <Bhavya />
    </>
  );
}
