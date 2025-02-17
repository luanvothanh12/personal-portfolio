import type { AstroExpressiveCodeOptions } from 'astro-expressive-code'

import {
  PublishedInType,
  type Job,
  type OpenSourceProject,
  type PlatForm,
  type Publication,
  type SiteConfig
} from './types'

export const siteConfig: SiteConfig = {
  author: 'Luan Vo Thanh',
  title: 'Personal Website',
  description: 'Personal website of Luan Vo Thanh',
  favicon: '/favicon/favicon.ico',
  locale: {
    lang: 'en-US',
    attrs: 'en_US',
    // Date locale
    dateLocale: 'en-US',
    dateOptions: {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    }
  },
  logo: {
    src: 'src/assets/avatar.png',
    alt: 'Avatar'
  },
  head: [
    /* Telegram channel */
    // {
    //   tag: 'meta',
    //   attrs: { name: 'telegram:channel', content: '@cworld0_cn' },
    //   content: ''
    // }
  ],
  customCss: [],

  /** Configure the header of your site. */
  header: {
    menu: [
      {
        title: 'Services',
        link: '/services'
      },
      {
        title: 'Work',
        link: '/work'
      },
      {
        title: 'Blog',
        link: 'https://blog.luanvothanh.com/'
      },
      {
        title: 'About',
        link: '/about'
      },
      {
        title: 'Use',
        link: '/use'
      }
    ]
  },

  footer: {
    credits: true,
    social: {
      github: 'https://github.com/luanvothanh12/',
      linkedin: 'https://linkedin.com/in/luanvothanh/'
    }
  },

  content: {
    externalLinksContent: ' ↗',
    /** Blog page size for pagination (optional) */
    blogPageSize: 8,
    externalLinkArrow: true, // show external link arrow
    // Currently support weibo, x, bluesky
    share: ['weibo', 'x', 'bluesky']
  }
}

export const integ: any = {
  links: {
    logbook: [
      { date: '2024-07-01', content: 'Lorem ipsum dolor sit amet.' },
      { date: '2024-07-01', content: 'vidit suscipit at mei.' },
      { date: '2024-07-01', content: 'Quem denique mea id.' }
    ],
    applyTip: {
      name: siteConfig.title,
      desc: siteConfig.description || 'Null',
      url: 'https://astro-pure.js.org',
      avatar: 'https://astro-pure.js.org/favicon/favicon.ico'
    }
  },
  // Enable page search function
  pagefind: true,
  // Add a random quote to the footer (default on homepage footer)
  quote: {
    // https://developer.hitokoto.cn/sentence/#%E8%AF%B7%E6%B1%82%E5%9C%B0%E5%9D%80
    // server: 'https://v1.hitokoto.cn/?c=i',
    // target: (data) => (data as { hitokoto: string }).hitokoto || 'Error'
    // https://github.com/lukePeavey/quotable
    server: 'https://api.quotable.io/quotes/random?maxLength=60',
    target: `(data) => data[0].content || 'Error'`
  },
  typography: {
    class:
      'break-words prose prose-pure dark:prose-invert dark:prose-pure prose-headings:font-medium'
  },
  // A lightbox library that can add zoom effect
  mediumZoom: {
    enable: true, // disable it will not load the whole library
    selector: '.prose .zoomable',
    options: {
      className: 'zoomable'
    }
  }
}

export const openSourceProject: OpenSourceProject[] = [
  {
    url: 'https://github.com/shadcn-ui/ui',
    title: 'shadcn-ui',
    description:
      'Beautifully designed components that you can copy and paste into your apps. Accessible. Customizable. Open Source.',
    visibility: 'Public',
    stars: '54.9k',
    forks: '2.9k',
    lang: 'Typescript'
  }
]

export const socialMedia = {
  github: 'https://github.com/luanvothanh12/',
  linkedin: 'https://linkedin.com/in/luanvothanh/',
  x: 'https://x.com/luanv_othanh/',
  instagram: 'https://instagram.com/luanv_othanh/',
  youtube: '',
  steam: 'https://steamcommunity.com/profiles/76561198406125679/',
  reddit: 'https://reddit.com/user/MoreAd8352/',
  spotify: '',
  discord: 'https://discord.com/',
  facebook: 'https://fb.com/ciaraluanvothanh'
}

export const platforms: PlatForm[] = [
  {
    url: socialMedia.github,
    type: 'github',
    username: 'luanvothanh12'
  },
  {
    url: socialMedia.facebook,
    type: 'facebook',
    username: 'Luân Võ Thành'
  },
  {
    url: socialMedia.instagram,
    type: 'instagram',
    username: 'Luân Võ Thành'
  },
  {
    url: socialMedia.reddit,
    type: 'reddit',
    username: 'Luan Vo Thanh'
  },
  {
    url: socialMedia.x,
    type: 'x',
    username: '@luanv_othanh'
  },
  {
    url: socialMedia.discord,
    type: 'discord',
    username: 'luanv_othanh'
  }
]

export const publications: Publication[] = [
  {
    paper: {
      title:
        'Fine-tuning Large Language Models for Improved Health Communication in Low-Resource Languages',
      image: 'fine-tuning-large-model.png',
      publishedYear: '2024',
      doi: '10.1016/j.cmpb.2025.108655',
      publicationUrl: 'https://doi.org/10.1016/j.cmpb.2025.108655'
    },
    authors: [
      { name: 'Luan Vo', url: 'https://example.com/authors/john_doe' },
      { name: 'Nhat Bui' },
      { name: 'Giang Nguyen' },
      { name: 'Nguyen Nguyen' },
      { name: 'Bao Vo' },
      { name: 'Arthur Tang' }
    ],
    publishedIn: {
      type: PublishedInType.Journal,
      sourceTitle: 'Computer Methods and Programs in Biomedicine',
      sourceUrl:
        'https://www.sciencedirect.com/journal/computer-methods-and-programs-in-biomedicine'
    },
    fileFormat: [
      {
        type: 'bilb',
        url: 'https://example.com/bilb'
      },
      {
        type: 'arxiv',
        url: 'https://example.com/arxiv'
      },
      {
        type: 'pdf',
        url: 'https://example.com/pdf'
      }
    ],
    keywords: [
      'Artificial Intelligence',
      'Large Language Model',
      'Low-Resources Languages',
      'Health Communication and Promotion',
      'Data Privacy and Security',
      'Health Equity'
    ]
  }
]

export const jobs: Job[] = [
  {
    url: 'https://talknician.com',
    logo: 'https://res.cloudinary.com/dwshjkwds/image/upload/v1738839881/Talknician_xa0n87.svg',
    name: 'Talknician',
    jobTitle: 'Software Engineer',
    startDate: '2024-04',
    description: `Led the front-end development for the Talknician project using Next.js and TypeScript, significantly improving user interaction for both factory floor tablets and web browsers`
  },
  {
    url: 'https://mit.dk',
    logo: 'https://res.cloudinary.com/dwshjkwds/image/upload/v1712314541/personal-website/background/netcompany_fulmjy.webp',
    name: 'Netcompany',
    jobTitle: 'Software Engineer',
    startDate: '2022-12',
    endDate: '2023-11',
    description: `Spearheaded front-end development using Vue.js and Typescript in the mit.dk project, elevating user experience for 2.5M+ users.`
  },
  {
    url: 'https://oucru.org',
    logo: 'https://res.cloudinary.com/dwshjkwds/image/upload/v1712314634/personal-website/background/oucru_z7xebo.webp',
    name: 'Oxford University Clinical Research Unit',
    jobTitle: 'AI Researcher',
    startDate: '2023-03',
    endDate: '2023-10',
    description: `Contributed as an AI researcher for OCURU’s DICA, an intelligent chat portal aimed at assisting the Vietnamese public with queries related to medicine and health issues.`
  },
  {
    url: 'https://intel.com',
    logo: 'https://res.cloudinary.com/dwshjkwds/image/upload/v1712311123/personal-website/background/intel_bvsbka.webp',
    name: 'Intel Corporation',
    jobTitle: 'Product Development Engineer',
    startDate: '2021-10-12',
    endDate: '2022-03-28',
    description: `Successfully integrated the LOT with Intel’s testing infrastructure, enabling real-time monitoring and analysis, resulting in a 25% reduction in testing cycle times and streamlined CPU and chipset testing processes.`
  }
]

export const technologies = [
  {
    category: 'Frontend',
    skills: ['React', 'Next.js', 'TypeScript', 'TailwindCSS', 'Redux', 'GraphQL']
  },
  {
    category: 'Backend',
    skills: ['Node.js', 'Express', 'Python', 'Django', 'PostgreSQL', 'MongoDB']
  },
  {
    category: 'DevOps',
    skills: ['Docker', 'AWS', 'CI/CD', 'Git', 'Linux', 'Nginx']
  },
  {
    category: 'Tools',
    skills: ['VS Code', 'Postman', 'Figma', 'Jest', 'GitHub', 'Vercel']
  }
]

export const RESUME_PDF: string =
  'https://drive.google.com/file/d/19sjrHr2TyEu8Y9DjgIONzGooJpsf-LIS/view?usp=sharing'

// https://expressive-code.com/reference/configuration/
export const expressiveCodeOptions: AstroExpressiveCodeOptions = {
  // One dark, one light theme => https://expressive-code.com/guides/themes/#available-themes
  themes: ['dracula', 'github-light'],
  themeCssSelector(theme, { styleVariants }) {
    // If one dark and one light theme are available
    // generate theme CSS selectors compatible with cactus-theme dark mode switch
    if (styleVariants.length >= 2) {
      const baseTheme = styleVariants[0]?.theme
      const altTheme = styleVariants.find((v) => v.theme.type !== baseTheme?.type)?.theme
      if (theme === baseTheme || theme === altTheme) return `[data-theme='${theme.type}']`
    }
    // return default selector
    return `[data-theme="${theme.name}"]`
  },
  useThemedScrollbars: false,
  styleOverrides: {
    frames: {
      frameBoxShadowCssValue: 'none'
    },
    uiLineHeight: 'inherit',
    codeFontSize: '0.875rem',
    codeLineHeight: '1.7142857rem',
    borderRadius: '4px',
    codePaddingInline: '1rem',
    codeFontFamily:
      'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;'
  }
}

const config = { ...siteConfig, integ }
export default config
