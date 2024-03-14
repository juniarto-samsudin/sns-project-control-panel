import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { Button, Grid, GridColumn, GridRow } from 'semantic-ui-react';
 
const inter = Inter({ subsets: ["latin"] });

const onClear = () => {
    console.log("Clearing the database");
    
    /* fetch("/api/hello")
      .then((response) => response.json())
      .then((data) => console.log(data)); */
    
    fetch("/3001/api/clearDb")
      .then((response) => response.json())
      .then((data) => console.log(data));

};

const onSimulate =() =>{
    console.log("Simulating the database");
    fetch("/3001/api/simulateDb")
      .then((response) => response.json())
      .then((data) => console.log(data));
}

export default function Home() {
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "20vh", minHeight:"20vh" }}>
        <Grid columns={2} divided>
          <GridRow>
            <GridColumn>
              <Button primary onClick={onSimulate}>Simulate</Button>
            </GridColumn>
            <GridColumn>
              <Button primary onClick={onClear}>Clear</Button>
            </GridColumn>
          </GridRow>         
        </Grid>
    </div>
  );
}
