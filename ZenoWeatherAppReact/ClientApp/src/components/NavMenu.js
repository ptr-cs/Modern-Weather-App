import React, { Component } from 'react';
import { Collapse, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink, Tooltip, UncontrolledTooltip } from 'reactstrap';
import { Link } from 'react-router-dom';
import { faHome, faCog, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MContext } from "./MyProvider";
import './NavMenu.css';
import $ from 'jquery';

export class NavMenu extends Component {
  static displayName = NavMenu.name;


  constructor (props) {
    super(props);

      this.toggleNavbar = this.toggleNavbar.bind(this);
      this.testFunc = this.testFunc.bind(this);

    this.state = {
        collapsed: true,
    };
  }

  toggleNavbar () {
        this.setState({
          collapsed: !this.state.collapsed
        });
    }

    testFunc() {
        console.log("test func");
    }

  render() {
    return (
      <header>
            <Navbar className="navbar-expand-sm navbar-toggleable-sm navbar-dark bg-dark border-bottom box-shadow mb-3 fixed-top">
                <NavbarBrand tag={Link} to="/" style={{ wordBreak: "normal" }}>ZenoWeather</NavbarBrand>
                <div className="d-flex align-middle">

            </div>
            
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
                <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!this.state.collapsed} navbar>

                    <form className="d-flex" role="search" method="get">
                        <MContext.Consumer>
                            {(context) => (<input className="form-control me-2" id="weatherSearchInput"
                                type="search" placeholder="Enter a Location..." aria-label="Search"
                                onKeyUp={() => context.setSearchTerm($('#weatherSearchInput').val())}></input>)}
                            
                        </MContext.Consumer>
                            <MContext.Consumer>
                            {(context) => (<button className="btn btn-primary" type="button" onClick={() => alert(context.state.apiKey + ' ' + context.state.searchTerm)}>Search</button> ) }
                        </MContext.Consumer>
                    </form>
            <ul className="navbar-nav flex-grow">
                        <NavItem id={'HomeNavItem'} aria-label="Home"> 
                <NavLink tag={Link} to="/" tooltip="Home"><FontAwesomeIcon size="lg" icon={faHome} /><span className="navLinkText">Home</span></NavLink>
            </NavItem>
                        <UncontrolledTooltip
                            placement="bottom"
                            target="HomeNavItem"
                        >Home
                        </UncontrolledTooltip>
            <NavItem id={'SettingsNavItem'} aria-label="Settings">
                            <NavLink tag={Link} to="/settings"><FontAwesomeIcon size="lg" icon={faCog} /><span className="navLinkText">Settings</span></NavLink>
            </NavItem>
                        <UncontrolledTooltip
                            placement="bottom"
                            target="SettingsNavItem"
                        >Settings
                        </UncontrolledTooltip>
            <NavItem id={'AboutNavItem'} aria-label="About">
                            <NavLink tag={Link} to="/about"><FontAwesomeIcon size="lg" icon={faInfoCircle} /><span className="navLinkText">About</span></NavLink>
            </NavItem>
            <UncontrolledTooltip
                            placement="bottom"
                            target="AboutNavItem"
            >About
            </UncontrolledTooltip>
              {/*<NavItem>*/}
              {/*  <NavLink tag={Link}  to="/counter">Counter</NavLink>*/}
              {/*</NavItem>*/}
              {/*<NavItem>*/}
              {/*  <NavLink tag={Link}  to="/fetch-data">Fetch data</NavLink>*/}
              {/*</NavItem>*/}
            </ul>
          </Collapse>
        </Navbar>
      </header>

    );
  }
}
