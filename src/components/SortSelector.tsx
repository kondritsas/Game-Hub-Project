import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'
import useGameQueryStore from '../store'


const SortSelector = () => {

  const sortOrders = [
    {value:'' , label:'Relevance'},
    {value:'-added' , label:'Date added'},
    {value:'name' , label:'Name'},
    {value:'-released' , label:'Release date'},
    {value:'-metacritic' , label:'Popularity'},
    {value:'-rating' , label:'Average rating'}]

  const selectedOrder = useGameQueryStore((s)=> s.gameQuery.sortOrder)
  const setSelectedOrder = useGameQueryStore((s)=> s.setSortOrder)
  const currentSortOrder = sortOrders.find((order) => order.value === selectedOrder)

  return (
    <Menu>
        <MenuButton bg="gray.800" _hover={{ bg: "gray.800" }} as={Button} rightIcon={<BsChevronDown />} >Order by: {currentSortOrder ? currentSortOrder.label : 'Relevance'}</MenuButton>
        <MenuList>
            {sortOrders.map((order)=><MenuItem onClick={()=>setSelectedOrder(order.value)} key={order.value} value={order.value}>{order.label}</MenuItem>)}
        </MenuList>
    </Menu>
  )
}

export default SortSelector
