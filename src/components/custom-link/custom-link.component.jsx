import React from "react";
import { LinkEl } from "./custom-link.styles";

export default function CustomLink({ ...params }) {
    return <LinkEl {...params}>{params.children}</LinkEl>;
}
