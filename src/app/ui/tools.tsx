import React from 'react';

type ToolsProps = {
  strings: string[];
};

const imageMap: Record<string, string> = {
  figma: '/Figma.png',
  react: '/React.png',
  tailwind: '/Tailwind CSS.png',
  typescript: '',
  git: "/Git.png",
  linear: "/linear.svg",
  github: "/Github.jpg",
  mui: "/Material UI.png",
  gitlab: "/GitLab.png",
  // Add more mappings as needed
};

const linkMap: Record<string, string> = {
  figma: 'https://www.figma.com/',
  react: 'https://react.dev/',
  tailwind: 'https://tailwindcss.com/',
  typescript: 'https://www.typescriptlang.org/',
  git: "https://git-scm.com/",
  linear: "https://linear.app/",
  github: "https://github.com/",
  mui: "https://mui.com/material-ui/",
  gitlab: "https://about.gitlab.com/beginners-guide-to-devops/?utm_medium=cpc&utm_source=google&utm_campaign=eg_global_dmp_x_x_en_gitlab_search_br_rlsa_global_exact&utm_content=beginners-guide-to-devops_x_x&utm_term=gitlab&_bt=725054247979&_bk=gitlab&_bm=e&_bn=g&_bg=148481441276&gad_source=1&gad_campaignid=20029282011&gbraid=0AAAAADcJCbcEMXT-fsvIkL4EbIOpUyyDR&gclid=CjwKCAjw-svEBhB6EiwAEzSdrtA97bsdFyU3DASeo424GxTwFMWKlGiZwrbtBp29lWCbbVuNaNVl8xoCgpsQAvD_BwE"
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