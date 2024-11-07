// components/ScrollButton.js

import React, { useState, useEffect } from "react";
import { FaArrowCircleUp } from "react-icons/fa";
import './ScrollButton.css';

export const ScrollButton = () => {
    const [visible, setVisible] = useState(false);

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300) {
            setVisible(true);
        } else if (scrolled <= 300) {
            setVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
            /* you can also use 'auto' behaviour
         in place of 'smooth' */
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", toggleVisible);
        return () => {
            window.removeEventListener("scroll", toggleVisible);
        };
    }, []);

    return (
        <button
            className={`scroll-button ${visible ? "visible" : ""}`}
            onClick={scrollToTop}
        >
            <FaArrowCircleUp />
        </button>
    );
};
