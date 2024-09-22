import { Button, ButtonGroup, Grid, GridItem, Show } from "@chakra-ui/react"

function App() {
  return <Grid templateAreas={{
    base: `"nav" "main" "footer"`,
    lg: `"nav nav" "aside main" "footer footer"`,
  }}>
    <GridItem area="nav" bg="red">Nav</GridItem>
    <Show above="lg">
      <GridItem area="aside" bg="blue">Aside</GridItem>
    </Show>
    <GridItem area="main" bg="yellow">Main</GridItem>
    <GridItem area="footer" bg="green">Footer</GridItem>
  </Grid>
}

export default App
