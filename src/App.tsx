import { Button, ButtonGroup, Grid, GridItem, Show } from "@chakra-ui/react"
import NavBar from "./components/NavBar"
import A11yPanel from "./components/A11yPanel"
import './index.css'

function App() {
  return (
    <Grid
      minHeight={"100dvh"}
      templateAreas={{
        base: `"nav" "main" "footer"`,
        lg: `"nav main aside" "footer main aside"`,
      }}
      templateRows={{
        base: "0fr 1fr 0fr",
        lg: "1fr 0fr"
      }}
      templateColumns={{
        base: "1fr",
        lg: "8rem 1fr 8rem"
      }}
      >
    <Show above="lg">
      <GridItem area="nav">
        <NavBar orientation="column"/>
      </GridItem>
    </Show>
    <Show below="lg">
      <GridItem area="nav">
        <NavBar orientation="row" />
      </GridItem>
    </Show>
    
    <GridItem padding="1rem" area="main" borderLeft={"1px solid grey"} borderRight={"1px solid grey"}>Main</GridItem>
    <Show above="lg">
      <GridItem padding="1rem" area="aside">
        <A11yPanel />
      </GridItem>
    </Show>
    <GridItem padding="1rem" area="footer" bg="rgba(127, 127, 127, 0.5)">Footer</GridItem>
  </Grid>
  )
}

export default App
