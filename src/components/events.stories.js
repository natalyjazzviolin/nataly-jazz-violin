import React from "react";
import Events from "./Events";
import { Link } from "gatsby";
import "../styles/styles.scss";

export default {
  component: Events,
  title: "Dashboard/Events",
};

const Template = (args) => <Events {...args} />;

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
