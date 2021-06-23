import React from "react";
import Hero from "../components/Hero";
import { Link } from "gatsby";
import "../styles/styles.scss";

export default {
  component: Hero,
  title: "Dashboard/Hero",
};

const Template = (args) => <Hero {...args} />;

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
