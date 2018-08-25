import React, { Component } from "react";
import { NavigationItemUI, NavigationLogo, NavigationLink } from "../../../ui";
import { withRouter } from "react-router";
import Tooltip from "@material-ui/core/Tooltip";

@withRouter
export default class NavigationItem extends Component {
  render() {
    const { to, icon, title } = this.props;
    return (
      <NavigationItemUI>
        <Tooltip title={title} placement="right">
          <NavigationLink to={to} exact>
            {icon}
          </NavigationLink>
        </Tooltip>
      </NavigationItemUI>
    );
  }
}
