import { useState } from "react";
import "./App.css";
import Dialog from "@mui/material/Dialog";

function App() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="App">
      <Dialog open={isOpen} fullScreen></Dialog>
    </div>
  );
}

export default App;
