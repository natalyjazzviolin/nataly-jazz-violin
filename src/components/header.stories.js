import React from "react";
import Header from "./Header";
import { Link } from "gatsby";
import "../styles/styles.scss";

export default {
  component: Header,
  title: "Dashboard/Header",
};

const Template = (args) => <Header {...args} />;

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
