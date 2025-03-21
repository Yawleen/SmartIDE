export default function Preview({ tabs }) {
    const getCode = (lang) => {
        return tabs.find(obj => obj.lang === lang).code;
    };

    const srcDoc = `
        <!DOCTYPE html>

        <html>
            <head>
                <style>${getCode("css")}</style>
            </head>
            <body>
                ${getCode("html")}
                <script>${getCode("javascript")}</script>
            </body>
        </html>
    `;

    return (
        <div className="absolute top-0 left-0 w-full h-full bg-zinc-900">
            <iframe srcDoc={srcDoc} className="block w-full h-full" sandbox="allow-scripts"></iframe>
        </div>
    )
}