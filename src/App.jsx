import { useReducer } from "react"

import Button from "./ui/Button"
import Container from "./ui/Container"
import Row from "./ui/Row"
import List from "./ui/List"
import Item from "./ui/Item"

const initialState = {
  start: false
}

const action = function(state, action){
  console.log(state, action);
  // switch(action.type){
  //   case 'start':
  //     state = {
  //       ...state,
  //       start: !state.start,
  //     }
  //   break;
  //   default: throw new Error('There is a problem.')
  // }
}


const App = function(){
  // const [start, setStart] = useState(false)
  const [state, dispatch] = useReducer(action, initialState)


  return(
    <>
    <Container>
    <Row>
      {/* <Button onClick={()=>dispatch(start, {type:'start'})}>{start ? 'End':'Start'}</Button> */}
      <Button onClick={()=>dispatch()}>start</Button>
    { 1 === 1 ?
    <>
     <List>
      <Item><Button>+</Button></Item>
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

      :''}
    </Row>
    </Container>
    </>
  )
}

export default App
