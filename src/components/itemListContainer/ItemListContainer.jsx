import {
    Box,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
} from '@chakra-ui/react'
import { FaChevronDown } from "react-icons/fa";
import React from 'react'

const ItemListContainer = () => {
    return (
        <Box>
            <Menu>
                <MenuButton as={Button} rightIcon={<FaChevronDown />}>
                    Productos
                </MenuButton>
                <MenuList>
                    <MenuItem>Remeras</MenuItem>
                    <MenuItem>Hoodies</MenuItem>
                    <MenuItem>Pantalones</MenuItem>
                </MenuList>
            </Menu>
        </Box>
    )
}

export default ItemListContainer