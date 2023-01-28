import Cookies from "js-cookie"
import React, { useState } from "react"
import { Icon, Label, Menu } from "semantic-ui-react"
import "./NavBar.css"
const NavBar = ({ carts, fruitObjects }) => {
  return (
    <Menu attached="top" fluid>
      <Menu.Menu position="right">
        <Menu.Item>
          <Icon name="shopping cart"></Icon>
          <Label>{carts ? carts.length : 0}</Label>
        </Menu.Item>
        <Menu.Item
          onClick={() => {
            Cookies.set("isAuthenticated", false, { expire: 7 })
          }}
        >
          <Icon name="sign-out"></Icon>
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  )
}
export default NavBar
