import React from "react";
import Home from "../components/Home";
import { Link } from "gatsby";
import "../styles/styles.scss";

export default {
  component: Home,
  title: "Dashboard/homepage",
};

const Template = (args) => <Home {...args} />;

export const Default = Template.bind({});
Default.parameters = {
  layout: "fullscreen",
  pseudo: {
    focus: true,
  },
};
Default.args = {
  variant: "default",
};
