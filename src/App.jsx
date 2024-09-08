import { useState } from "react"

import Button from "./ui/Button"
import Container from "./ui/Container"
import Row from "./ui/Row"
import List from "./ui/List"
import Item from "./ui/Item"

const App = function(){
  const [start, setStart] = useState(false)

  return(
    <>
    <Container>
    <Row>
      <Button onClick={()=>setStart(!start)}>{start ? 'End':'Start'}</Button>
    { start &&
    <>
     <List>
        <Item>To Do</Item>
        <Item>test</Item>
        <Item>test</Item>
        <Item>test</Item>
        <Item>test</Item>
      </List>

      <List>
        <Item>Doing</Item>
        <Item>test</Item>
        <Item>test</Item>
        <Item>test</Item>
        <Item>test</Item>
      </List>

      <List>
        <Item>Done</Item>
        <Item>test</Item>
        <Item>test</Item>
        <Item>test</Item>
        <Item>test</Item>
      </List>
    </>

      }
    </Row>
    </Container>
    </>
  )
}

export default App
