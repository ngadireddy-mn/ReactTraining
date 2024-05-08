import { Button, Input, Menu } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { SearchOutlined, ShoppingCartOutlined } from '@ant-design/icons';
function NavBar() {
  var searchText;
  var navigate = useNavigate();
  function search() {
    var url = "/search?q=" + searchText
    navigate(url);
  }
  function handleSearchText(e) {
    searchText = e.target.value;
  }
  const items = [{ label: <Link to="/Home">Cake Gallery</Link> },
   {
    label: <Link to="/Login"><Button type="primary" >
      Login
    </Button></Link>
  }, 
  {
    label: (<><Input placeholder='Search' onChange={handleSearchText}></Input>
      <Button onClick={search}><SearchOutlined></SearchOutlined></Button></>)
  },
  { label: (<Link to='/checkout'><Button type="primary" style={{marginLeft:40}}>Checkout</Button></Link>) },
  { label: (<Link to='/cart'><Button type="primary"><ShoppingCartOutlined />Cart</Button></Link>) }
]


  return (

    <Menu mode='horizontal' items={items}></Menu>
  )
}

export default NavBar