import { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { FaGem, FaHeart } from 'react-icons/fa';
import { Menu, MenuItem, ProSidebar, SidebarHeader, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import { Link } from 'react-router-dom';

const SideNavigation = () => {
  const [collapsed, setCollapsed] = useState(true);

  const styles = {
    sideBarHeight: {
      height: '100vh',
    },
    menuIcon: {
      float: 'right',
      margin: '10px',
    },
  };
  const onClickMenuIcon = () => {
    setCollapsed(!collapsed);
  };
  return (
    <ProSidebar style={styles.sideBarHeight} collapsed={collapsed}>
      <SidebarHeader>
        <div style={styles.menuIcon} onClick={onClickMenuIcon}>
          <AiOutlineMenu />
        </div>
      </SidebarHeader>

      <Menu iconShape='square'>
      <MenuItem icon={<FaGem />}>
          {' '}
          <Link to='/compA'>Use Context </Link>
        </MenuItem>
        <MenuItem icon={<FaGem />}>
          {' '}
          <Link to='/centreslist'>Vaccination Centre</Link>
        </MenuItem>

        <MenuItem icon={<FaGem />}>
          {' '}
          <Link to='/stripe'>Stripe Payment</Link>
        </MenuItem>
      
        <SubMenu title='Redux' icon={<FaHeart />}>
          <MenuItem>
            <Link to='/login'>Login</Link>
          </MenuItem>
          <MenuItem>
            <Link to='/signup'>SignUp</Link>
          </MenuItem>
          <MenuItem>
            <Link to='/userslist'>Users List</Link>
          </MenuItem>
          <MenuItem>
            <Link to='/otheruserslist'>Other Users</Link>
          </MenuItem>
        </SubMenu>
        <SubMenu title='Forms' icon={<FaHeart />}>
          <MenuItem>
            <Link to='/formikform'>Formik Form</Link>
          </MenuItem>
          <MenuItem>
            <Link to='/form'>Form</Link>
          </MenuItem>
          <MenuItem>
            <Link to='/basic'>Simple Form</Link>
          </MenuItem>
          <MenuItem icon={<FaGem />}>
          <Link to='/email'>Email Form</Link>
        </MenuItem>
        </SubMenu>
        <SubMenu title='Table & Grids' icon={<FaHeart />}>
          <MenuItem>
            <Link to='/reactstraptable'>Reactstrap Table</Link>
          </MenuItem>
          <MenuItem>
            <Link to='/reactaggrid'>React Ag Grid</Link>
          </MenuItem>
          <MenuItem>
            <Link to='/reactdatacomponentgrid'>React Data Component Grid</Link>
          </MenuItem>
        </SubMenu>
        <SubMenu title='AutoComplete' icon={<FaHeart />}>
          <MenuItem>
            <Link to='/typeahead'>Typeahead</Link>
          </MenuItem>
          <MenuItem>
            <Link to='/asynctypeahead'>Async Typeahead</Link>
          </MenuItem>
        </SubMenu>
        <SubMenu title='Router' icon={<FaHeart />}>
          <MenuItem>
            <Link to='/routerA/22/react'>Router A</Link>
          </MenuItem>
        </SubMenu>
        <SubMenu title='Other' icon={<FaHeart />}>
        <MenuItem icon={<FaGem />}>
            {' '}
            <Link to='/order'>Order Page</Link>
          </MenuItem>
          <MenuItem icon={<FaGem />}>
            {' '}
            <Link to='/'>Stepper Component</Link>
          </MenuItem>
          <MenuItem icon={<FaGem />}>
            {' '}
            <Link to='/errorboundarytest'>Error Boundary Test</Link>
          </MenuItem>
          <MenuItem icon={<FaGem />}>
            {' '}
            <Link to='/lazyload'>Lazy load Component</Link>
          </MenuItem>
          <MenuItem icon={<FaGem />}>
            {' '}
            <Link to='/qr'>QR Code Examples</Link>
          </MenuItem>
          <MenuItem icon={<FaGem />}>
            {' '}
            <Link to='/model'>Model Example</Link>
          </MenuItem>
        </SubMenu>
      </Menu>
    </ProSidebar>
  );
};

export default SideNavigation;
