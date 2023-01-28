import "./App.css"
import Cards from "./components/Cards/Cards"
import NavBar from "./components/NavBar/NavBar"
import "semantic-ui-css/semantic.min.css"
import React, { useReducer, useState } from "react"
const initialState = {
  fruitObjects: [
    {
      name: "Apple",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Red_Apple.jpg/265px-Red_Apples.jpg",
      price: 35,
      isLiked: false,
      quantity: 0,
    },
    {
      name: "Banana",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Bananas_white_background_DS.jpg/320px-Bananas_white_background_DS.jpg",
      price: 12,
      isLiked: false,
      quantity: 0,
    },
    {
      name: "Grapes",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Table_grapes_on_white.jpg/320px-Table_grapes_on_white.jpg",
      weight: 0.1,
      price: 45,
      isLiked: false,
      quantity: 0,
    },
    {
      name: "Pineapple",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Pineapple_and_cross_section.jpg/286px-Pineapple_and_cross_section.jpg",
      price: 200,
      isLiked: false,
      quantity: 0,
    },
    {
      name: "Apple",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Red_Apple.jpg/265px-Red_Apples.jpg",
      price: 35,
      isLiked: true,
      quantity: 0,
    },
    {
      name: "Banana",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Bananas_white_background_DS.jpg/320px-Bananas_white_background_DS.jpg",
      price: 12,
      isLiked: false,
      quantity: 0,
    },
    {
      name: "Grapes",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Table_grapes_on_white.jpg/320px-Table_grapes_on_white.jpg",
      weight: 0.1,
      price: 45,
      isLiked: false,
      quantity: 0,
    },
    {
      name: "Pineapple",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Pineapple_and_cross_section.jpg/286px-Pineapple_and_cross_section.jpg",
      price: 200,
      isLiked: false,
      quantity: 0,
    },
    {
      name: "Apple",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Red_Apple.jpg/265px-Red_Apples.jpg",
      price: 35,
      isLiked: false,
      quantity: 0,
    },
    {
      name: "Banana",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Bananas_white_background_DS.jpg/320px-Bananas_white_background_DS.jpg",
      price: 12,
      isLiked: false,
      quantity: 0,
    },
    {
      name: "Grapes",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Table_grapes_on_white.jpg/320px-Table_grapes_on_white.jpg",
      weight: 0.1,
      price: 45,
      isLiked: false,
      quantity: 0,
    },
    {
      name: "Pineapple",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Pineapple_and_cross_section.jpg/286px-Pineapple_and_cross_section.jpg",
      price: 200,
      isLiked: false,
      quantity: 0,
    },
  ],
  carts: [],
}
const reducer = (state, actions) => {
  switch (actions.type) {
    case "SET_LIST": {
      return {
        ...state,
        fruitObjects: actions.value,
      }
    }
    case "SET_CART": {
      return {
        ...state,
        carts: actions.value,
      }
    }
    case "SET_VALUE": {
      return {
        ...state,
        [actions.key]: actions.value,
      }
    }
    default:
      break
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <div className="app-container">
      <NavBar carts={state.carts}></NavBar>
      <Cards
        list={state.fruitObjects}
        setList={list => {
          // dispatch({ type: "SET_LIST", value: list })
          dispatch({ type: "SET_VALUE", value: list, key: "fruitObjects" })
        }}
        setCarts={cart => {
          // dispatch({ type: "SET_CART", value: cart })
          dispatch({ type: "SET_VALUE", value: cart, key: "carts" })
        }}
      ></Cards>
    </div>
  )
}

export default App
