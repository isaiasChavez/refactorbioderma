import Layout from "./constants/Layout";
export type RootStackParamList = {
  Login: undefined;
  Root: undefined;
  NotFound: undefined;
  Blog: undefined;
};

export type BottomTabParamList = {
  TabBG: undefined;
  TabCB: undefined;
  TabBlog: undefined;
  TabTrivias: undefined;
  TabCampañas: undefined;
};

export type TabOneParamList = {
  TabTriviasScreen: undefined;
};

export type TabCBParamList = {
  TabCBScreen: undefined;
};
export type TabBGParamList = {
  TabBGScreen: undefined;
};
export type TabBlogParamList = {
  TabBlogScreen: undefined;
  DetailBlogScreen: undefined;
};
export type LoginParamList = {
  LoginScreen: undefined;
  ResetPasswordScreen: undefined;
};
export type BlogParamList = {
  DetailBlog: undefined;
  Blog: undefined;
};

export const colors = {
  WIDTH: Layout.window.width,
  HEIGHT: Layout.window.height,
  RED_CLOCK: "#c0392b",
  GRAY_SUPER_LOW: "#D6D6D6",
  GRAY_LOW: "#E3EAF3",
  GRAY: "#E1E1E1",
  GRAY_MEDIUM: "#989898",
  GRAY_MODAL: "#464545",
  GRAY_BUBBLE: "#707070",
  GRAY_MESSENGER: "#F9F9F9",
  GRAY_TRIVIA_DATE: "#D6D6D6",
  GRAY_TRIVIA_RESULT: "#D5D5D5",
  BLACK: "#212121",
  BLACK_LIGHT: "#003041",

  BLACK_BUBBLES: "#616161",

  GOLDEN: "#D4AF37",
  YELLOW: "#FFC119",

  BLUE: "#009DE0",
  BLUE_LOGIN: "#8CC8E2",
  BLUE_MEDIUM: "#526987",
  BLUE_BUBBLE: "#D0EDF9",
  BLUE_WHO_WE_R: "#73C9EE",

  BLUE_LIGHT: "#EEF7FB",
  BLUE_HIGH: "#5CABCE",

  BLUE_QUESTION: "#005980",
  BLUE_QUESTION_SELEC: "#8AC6E1",
  BLUE_TEXT_RESPONSE: "#006B98",

  SKIN_MEDIUM: "#FEF1F0",
  SKIN: "#FBA09D",

  WHITE: "white",

  SILVER: "#ecf0f1",
  //DEBUG COLORS
  TURQUIOISE: "#1abc9c",
  EMERALD: "#2ecc71",
  GREEN_SEA: "#16a085",
  NEPHRITIS: "#27ae60",

  PETER_RIVER: "#3498db",
  BELIZE_HOLE: "#2980b9",

  SUN_FLOWER: "#f1c40f",
  CARROT: "#e67e22",
  ORANGE: "#f39c12",
  PUMPINK: "#d35400",

  GRAY_TRIVIA001: "#E6E6E6",
};

export const Img = {
  //Auth
  logo: require("./assets/Images/logo.png"),

  //Footer Buttons
  campaigns: require("./assets/Images/campaigns.png"),
  training: require("./assets/Images/training.png"),
  cart: require("./assets/Images/cart.png"),
  messages: require("./assets/Images/messages.png"),
  blogs: require("./assets/Images/blogs.png"),

  //Web Tabs
  patologia: require("./assets/Images/patologia.jpg"),
  productos: require("./assets/Images/productos.jpg"),
  ventas: require("./assets/Images/ventas.jpg"),
  esthederm: require("./assets/Images/esthederm.jpg"),
  vademecum: require("./assets/Images/vademecum.jpg"),
  bottle: require("./assets/Images/bottle.png"),
  pdf: require("./assets/Images/pdf.png"),
  naos: require("./assets/Images/naos.png"),
  dna: require("./assets/Images/dna.png"),
  //profile
  users: require("./assets/Images/users.png"),
  logout: require("./assets/Images/logout.png"),
  bell: require("./assets/Images/bell.png"),
  //UI
  leftArrow: require("./assets/Images/leftArrow.png"),
  rightArrow: require("./assets/Images/rowright.png"),

  //blogs
  search: require("./assets/Images/search.png"),
  rightArrowDetail: require("./assets/Images/right-arrow-detail.png"),
  leftArrowDetail: require("./assets/Images/left-arrow-detail.png"),

  //store
  cartStore: require("./assets/Images/cart.png"),

  //Messenger
  arrow: require("./assets/Images/arrow.png"),
  endMessenger: require("./assets/Images/endMessenger.png"),

  //campaigns
  clock: require("./assets/Images/clock.png"),
  true: require("./assets/Images/true.png"),
  false: require("./assets/Images/false.png"),
  correct: require("./assets/Images/green.png"),
  incorrect: require("./assets/Images/red.png"),
  //cart
  close: require("./assets/Images/close.png"),
  cartClosed: require("./assets/Images/cartClosed.png"),
  //Biodermagames
  biodermagames: require("./assets/Images/biodermagames.png"),
  bgLogo: require("./assets/Images/bglogo.png"),
  gamesDisabled: require("./assets/Images/gamesDisabled.png"),
};
