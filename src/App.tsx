import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { data, options } from "./data";
import { Button, Grid, TextField } from "@mui/material";
import Menu from "./layouts/Menu";
import styled from "styled-components";

interface FormType {
  value: any;
}

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Card = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 1rem;
  border-radius: 10px 10px 0px 10px;
  box-shadow: 2px 4px 6px rgba(0, 0, 0, 0.05);
`;

export default function App() {
  const [form, setForm] = React.useState<FormType>({
    value: ""
  });

  const onSubmit = () => {
    console.log(form);
  };

  return (
    <Grid container spacing={2}>
      <Menu />

      <Grid item xs={12}>
        <Grid container spacing={4} padding={3}>
          <Grid item xs={12}>
            <Card>
              <TextField
                variant="standard"
                color="secondary"
                value={form.value}
                onChange={(e) =>
                  setForm({
                    value: e.target.value
                  })
                }
              />
              <TextField
                variant="standard"
                color="secondary"
                value={form.value}
                onChange={(e) =>
                  setForm({
                    value: e.target.value
                  })
                }
              />
              <Button color="secondary" variant="outlined" onClick={onSubmit}>
                Salvar
              </Button>
            </Card>
          </Grid>
          <Grid item xs={12}></Grid>
          <Grid item xs={6}>
            <Card>
              <Bar options={options} data={data} />
            </Card>
          </Grid>
          <Grid item xs={6}>
            <Card>
              <Bar options={options} data={data} />
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
