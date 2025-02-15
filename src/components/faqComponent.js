import React, { useState, Suspense } from "react";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";
import { useTheme } from "../context/themeContext";


export default function Card({ title, children}) {
    const { theme } = useTheme();
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => setIsOpen(!isOpen);

    return (
        <section className={`card ${theme}`}>
            <div className="card-header" onClick={toggleDropdown}>
                <h3 className="card-title">{title}</h3>
                <button className="card-chevron">
                    {isOpen ? <FaChevronDown /> : <FaChevronRight />}
                </button>
            </div>
            {isOpen && (
                <Suspense fallback={<div>Loading...</div>}>
                    <div className="card-body">
                        {children}
                    </div>
                </Suspense>
            )}
        </section>
    );
}
