export type ProfileType = {
  name: string;
  img: string;
  birth: string;
  university: string;
  introduction: string;
};

const profileData: ProfileType = {
  name: "Taito Tanaka",
  img: "/images/profile.jpg",
  birth: "2000-12-11",
  university: "Toyo University (INIAD)",
  introduction: `I played soccer for 12 years. 
  I have been learning programming since the first year of college and am studying Computer Sciences. 
  Personally, I like front-end technologies of the web.`,
};

export default profileData;
