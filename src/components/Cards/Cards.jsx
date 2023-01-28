import React from "react"
import { Icon, Button } from "semantic-ui-react"
import "./Cards.css"
const Cards = ({ list, setList, setCarts }) => {
  const renderFruits = () => {
    let renderedFruits = list.map((value, index) => {
      return (
        <div key={index} className="card-container">
          <div className="image-container">
            <div className="icon-container">
              <Icon
                name={value.isLiked ? "heart" : "heart outline"}
                color={value.isLiked ? "red" : "grey"}
                onClick={() => {
                  setLike(index)
                }}
              ></Icon>
            </div>
            <img src={value.image} alt={"image-of-" + value.name}></img>
          </div>
          <div className="detail-container">
            <div>{value.name}</div>
            <div>₹ {value.price}</div>
          </div>
          <div className="button-container">
            <Button
              size="tiny"
              color={value.quantity === 0 ? "" : "green"}
              onClick={() => {
                if (value.quantity === 0) addItemToCart(index)
              }}
            >
              {value.quantity === 0 ? "Add to cart" : "Added"}
            </Button>
          </div>
        </div>
      )
    })
    return renderedFruits
  }
  const setLike = likedItemIndex => {
    let updatedValue = list.map((value, index) =>
      likedItemIndex === index ? { ...value, isLiked: !value.isLiked } : { ...value }
    )
    setList(updatedValue)
  }
  const addItemToCart = itemIndex => {
    let updatedValue = list.map((value, index) =>
      itemIndex === index ? { ...value, quantity: value.quantity + 1 } : { ...value }
    )
    setList(updatedValue)
    setCarts(prevCart => [...prevCart, itemIndex])
  }
  return <div className="cards-container">{renderFruits()}</div>
}
export default Cards
