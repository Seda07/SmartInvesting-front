import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-primary p-2 w-full mt-auto">
            <div className="container mx-auto flex flex-row items-center justify-between">
                <a href="https://github.com/0795PAO/VoyageCraft_front" className="flex items-center text-white text-xs px-1 hover:bg-blue-700 rounded">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 mr-1">
                        <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12c0 4.41 2.87 8.15 6.84 9.49.5.09.68-.22.68-.48v-1.7c-2.78.61-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.02 1.53 1.02.9 1.53 2.35 1.09 2.92.83.09-.65.35-1.1.63-1.35-2.22-.25-4.56-1.11-4.56-4.93 0-1.09.39-1.98 1.02-2.68-.1-.25-.45-1.28.1-2.67 0 0 .84-.27 2.75 1.02A9.548 9.548 0 0112 7.29c.85.004 1.71.115 2.51.337 1.9-1.3 2.74-1.02 2.74-1.02.55 1.39.2 2.42.1 2.67.64.7 1.02 1.59 1.02 2.68 0 3.83-2.34 4.67-4.57 4.92.36.31.68.93.68 1.87v2.78c0 .27.18.58.69.48A9.985 9.985 0 0022 12c0-5.52-4.48-10-10-10z" clipRule="evenodd"
                        />
                    </svg>
                    GitHub
                </a>
                <a href="#" className="text-white text-xs px-1 hover:bg-blue-700 rounded">Privacy</a>
                <a href="#" className="text-white text-xs px-1 hover:bg-blue-700 rounded">Cookies</a>
                <a href="#" className="text-white text-xs px-1 hover:bg-blue-700 rounded">Contact</a>
            </div>
        </footer>
    );
};

export default Footer;