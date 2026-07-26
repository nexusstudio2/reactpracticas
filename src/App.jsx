import { useState, useEffect } from "react";
import { Button, Card, Typography } from "@mui/material";

function App() {
  const [contador, setContador] = useState(0);

  useEffect(() => {
    console.log("El contador cambió a:", contador);
  }, [contador]);

  const incrementar = () => {
    setContador(contador + 1);
  };

  const disminuir = () => {
    setContador(contador - 1);
  };

  return (
    <Card
      style={{
        padding: "20px",
        textAlign: "center",
        width: "300px",
        margin: "50px auto",
      }}
    >
      <Typography variant="h4">{contador}</Typography>
      <Button variant="contained" onClick={incrementar}>
        Incrementar
      </Button>
      <Button variant="contained" onClick={disminuir} style={{ marginLeft: "10px" }}>
        Disminuir
      </Button>
    </Card>
  );
}

export default App;