const heading = {
  fontFamily: "heading",
  fontWeight: "heading",
  lineHeight: "heading",
};

const colors = {
  primary: ["#7109AA", "#5F2580", "#48036F", "#9F3ED5", "#AD66D5"],
  secondaryA: ["#CD0074", "#992667", "#85004B", "#E6399B", "#E667AF"],
  secondaryB: ["#9FEE00", "#86B32D", "#679B00", "#B9F73E", "#C9F76F"],
  backgrounds: ["hsl(10, 10%, 98%)", "#060606"],
};

export const theme = {
  useColorSchemeMediaQuery: true,
  colors: {
    text: colors.backgrounds[1],
    background: colors.backgrounds[0],
    primary: colors.primary[4],
    secondary: colors.secondaryA[0],
    highlight: colors.secondaryA[4],
    muted: "hsl(10, 20%, 94%)",
    gray: "hsl(10, 20%, 50%)",
    modes: {
      dark: {
        text: "#fff",
        background: colors.backgrounds[1],
        primary: colors.primary[2],
        secondary: colors.secondaryA[3],
        muted: "#191919",
        highlight: colors.secondaryA[1],
        gray: "#999",
      },
    },
  },
  fonts: {
    body:
      'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading: "inherit",
    monospace: "Menlo, monospace",
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72],
  fontWeights: {
    body: 400,
    heading: 700,
    display: 900,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.25,
  },
  textStyles: {
    heading,
    display: {
      variant: "textStyles.heading",
      fontSize: [5, 6],
      fontWeight: "display",
      letterSpacing: "-0.03em",
      mt: 3,
    },
  },
  buttons: {
    primary: {
      color: "text",
      bg: "primary",
      "&:hover": {
        bg: "highlight",
      },
      "&:focus": {
        bg: "highlight",
      },
    },
    close: {
      m: 2,
      "&:hover": {
        cursor: "pointer",
      },
    },
    outline: {
      color: "primary",
      bg: "transparent",
      boxShadow: "inset 0 0 0 1px",
    },
  },
  badges: {
    primary: {
      color: "background",
      bg: "primary",
    },
    outline: {
      color: "primary",
      bg: "transparent",
      boxShadow: "inset 0 0 0 1px",
    },
  },
  styles: {
    Container: {
      p: 3,
      maxWidth: 1024,
    },
    root: {
      fontFamily: "body",
      lineHeight: "body",
      fontWeight: "body",
    },
    h1: {
      variant: "textStyles.display",
    },
    h2: {
      variant: "textStyles.heading",
      fontSize: 5,
    },
    h3: {
      variant: "textStyles.heading",
      fontSize: 4,
    },
    h4: {
      variant: "textStyles.heading",
      fontSize: 3,
    },
    h5: {
      variant: "textStyles.heading",
      fontSize: 2,
    },
    h6: {
      variant: "textStyles.heading",
      fontSize: 1,
    },
    a: {
      color: "primary",
      textDecoration: "none",
      "&:hover": {
        cursor: "pointer",
        color: "secondary",
      },
      "&:active": {
        cursor: "pointer",
        color: "secondary",
      },
    },
    pre: {
      variant: "prism",
      fontFamily: "monospace",
      fontSize: 1,
      p: 3,
      color: "text",
      bg: "muted",
      overflow: "auto",
      code: {
        color: "inherit",
      },
    },
    code: {
      fontFamily: "monospace",
      color: "secondary",
      fontSize: 1,
    },
    inlineCode: {
      fontFamily: "monospace",
      color: "secondary",
      bg: "muted",
    },
    table: {
      width: "100%",
      my: 4,
      borderCollapse: "separate",
      borderSpacing: 0,
      "th,td": {
        textAlign: "left",
        py: "4px",
        pr: "4px",
        pl: 0,
        borderColor: "muted",
        borderBottomStyle: "solid",
      },
    },
    th: {
      verticalAlign: "bottom",
      borderBottomWidth: "2px",
    },
    td: {
      verticalAlign: "top",
      borderBottomWidth: "1px",
    },
    hr: {
      border: 0,
      borderBottom: "1px solid",
      borderColor: "muted",
    },
    img: {
      maxWidth: "100%",
    },
  },
  prism: {
    ".comment,.prolog,.doctype,.cdata,.punctuation,.operator,.entity,.url": {
      color: "gray",
    },
    ".comment": {
      fontStyle: "italic",
    },
    ".property,.tag,.boolean,.number,.constant,.symbol,.deleted,.function,.class-name,.regex,.important,.variable": {
      color: "purple",
    },
    ".atrule,.attr-value,.keyword": {
      color: "primary",
    },
    ".selector,.attr-name,.string,.char,.builtin,.inserted": {
      color: "secondary",
    },
  },
};

export default theme;
