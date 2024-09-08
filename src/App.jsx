import { useReducer, useState } from "react"
import { PlusSignIcon } from "hugeicons-react"

import Button from "./ui/Button"
import Container from "./ui/Container"
import Row from "./ui/Row"
import List from "./ui/List"
import Item from "./ui/Item"
import Input from "./ui/Input"

const initialState = {
  showList: false,
  items: []
}

const reducer = function(state, action){
  switch(action.type){
    case 'toDo/toggleList':
      return {
        showList: !state.showList
      }

    case 'toDo/add':
      console.log(action.payload)
      return {
        ...state,
        items: state.items = action.payload
      }
    default: throw new Error('There is a problem.')
  }
}


const App = function(){
  const [{showList, items}, dispatch] = useReducer(reducer, initialState);
  const [action, setAction] = useState('');

  const handleAdd = function(){
  }

  return(
    <>
    <Container>
    <Row>
      <Button onClick={()=>dispatch({type:'toDo/toggleList'})}>{showList ? 'Hide list':'Show list'}</Button>
    { showList ?
    <>
     <List>
      <Item><Button onClick={handleAdd}><PlusSignIcon size={20} color="grey" /></Button></Item>
        <Item>To Do</Item>
        <Input value={action} onChange={(e=>setAction(e.target.value))} />
        {items?.length && items.map((item, i) => <Item key={i}>item</Item>)}
      </List>
      <List>
        <Item>Doing</Item>
      </List>

      <List>
        <Item>Done</Item>
      </List>
    </>

      :''}
    </Row>
    </Container>
    </>
  );
}

export default App
