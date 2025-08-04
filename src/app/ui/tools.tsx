import React from 'react';

type ToolsProps = {
  strings: string[];
};

const imageMap: Record<string, string> = {
  figma: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg',
  react: '/React.png',
  tailwind: '/Tailwind CSS.png',
  typescript: 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg',
  // Add more mappings as needed
};

const linkMap: Record<string, string> = {
  figma: 'https://www.figma.com/',
  react: 'https://react.dev/',
  tailwind: 'https://tailwindcss.com/',
  typescript: 'https://www.typescriptlang.org/',
};


const Tools: React.FC<ToolsProps> = ({ strings }) => {
  return (
    <div className="flex flex-row gap-6">
      {strings.map((tool, idx) => {
        const key = tool.toLowerCase();
        const src = imageMap[key] || 'https://via.placeholder.com/100?text=?';
        const href = linkMap[key] || '#';
        const label = tool[0].toUpperCase() + tool.slice(1);

        return (
          <div key={idx} className="flex flex-col items-center">
            <a href={href} target="_blank" rel="noopener noreferrer">
              <img
                src={src}
                alt={label}
                className="w-12 h-12 object-contain hover:scale-105 transition-transform"
              />
            </a>
            <span className="mt-2 text-sm text-gray-700 dark:text-gray-300">{label}</span>
          </div>
        );
      })}
    </div>
  );
};


export default Tools;