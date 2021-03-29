import React, { useState, useRef } from "react"
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap"
import { useRootContext } from "../store/rootContext"
const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  // const { scrollToRef, toggleNavigationOverflow } = useRootContext()

  const toggle = () => setIsOpen(!isOpen)
  return (
    <>
      <Navbar expand="md">
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink>O firmie</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Oferta
              </DropdownToggle>
              <DropdownMenu center>
                <DropdownItem href="../oferta/mitsubishi">
                  Mitsubishi
                </DropdownItem>
                <DropdownItem href="../oferta/gree">Gree</DropdownItem>
                <DropdownItem href="../oferta/haier">Haier</DropdownItem>
                <DropdownItem href="../oferta/lg">LG</DropdownItem>
                <DropdownItem href="../oferta/serva">ServA</DropdownItem>
                <DropdownItem href="../oferta/kaisai">Kaisai</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem>
              <NavLink href="../kontakt">Kontakt</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </>
  )
}

export default Navigation
