export type WorksType = {
  appName: string;
  img: string;
  description: string;
  url: string;
};

export const worksData: WorksType[] = [
  {
    appName: "Morphomusic",
    img: "/images/morphomusic_logo.jpg",
    description:
      "LINE上のメッセージを形態素解析して曲を返してくれるBotサービスです!",
    url: "https://morphomusic.netlify.app/",
  },

  {
    appName: "taito-t.com",
    img: "/images/taito-t.jpg",
    description: "このポートフォリオサイトです。Next.jsを採用しています。",
    url: "https://taito-t.com/",
  },

  {
    appName: "INIAD-MATCH",
    img: "/images/iniad-match.jpg",
    description:
      "大学内でSNSアカウントを共有できるアプリです。※INIADアカウントでのみログインできます。",
    url: "https://iniad-match.vercel.app/",
  },

  {
    appName: "taito-blog",
    img: "/images/taito-blog.jpg",
    description:
      "前ポートフォリオ&技術ブログサイトです。Djangoを使用しました。※現在は使用していません。",
    url: "https://taito-blog.herokuapp.com/",
  },

  {
    appName: "足袋紹介サイト",
    img: "/images/gyoda-tabi.jpg",
    description:
      "地元の特産品であり、日本遺産にも登録されている足袋について紹介しているサイトです。",
    url: "https://gyoda-tabi.vercel.app/",
  },
];
