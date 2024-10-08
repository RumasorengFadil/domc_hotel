import { useState } from "react";

export default function NavbarLayout({ children, backgroundImage, height }) {
    return <div className="background" style={{backgroundImage: `url(${backgroundImage})`, height: height}}>{children}</div>;
}
