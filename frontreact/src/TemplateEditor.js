import React, { useState, useEffect } from "react";

const TemplateEditor = ({ templateId }) => {
    const [htmlContent, setHtmlContent] = useState("");
    const [cssContent, setCssContent] = useState("");

    // Charger le contenu du template
    useEffect(() => {
        const loadTemplate = async () => {
            const response = await fetch(`/api/templates/${templateId}`);
            const data = await response.json();
            setHtmlContent(data.html);
            setCssContent(data.css);
        };
        loadTemplate();
    }, [templateId]);

    // Appliquer dynamiquement le CSS
    useEffect(() => {
        const styleTag = document.createElement("style");
        styleTag.textContent = cssContent;
        document.head.appendChild(styleTag);
        return () => {
            document.head.removeChild(styleTag);
        };
    }, [cssContent]);

    // Rendre les composants interactifs
    const makeDraggable = () => {
        const components = document.querySelectorAll("[data-component]");
        components.forEach((component) => {
            component.draggable = true;

            component.ondragstart = (e) => {
                e.dataTransfer.setData("text/plain", e.target.dataset.component);
            };

            component.ondragover = (e) => e.preventDefault();

            component.ondrop = (e) => {
                e.preventDefault();
                const draggedComponent = e.dataTransfer.getData("text/plain");
                const draggedElement = document.querySelector(
                    `[data-component="${draggedComponent}"]`
                );

                if (draggedElement && e.target !== draggedElement) {
                    e.target.after(draggedElement);
                }
            };
        });
    };

    useEffect(() => {
        if (htmlContent) makeDraggable();
    }, [htmlContent]);

    return (
        <div
            className="template-editor"
            dangerouslySetInnerHTML={{ __html: htmlContent }}
        ></div>
    );
};

export default TemplateEditor;
