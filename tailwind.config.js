module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        colors:{
            primary: "#01ACD7",
            secondary: "#E9F5F8",
            tertiary: "#A0A7A5",
            accent: "#FF8800",
        },
        borderRadius: {
          '10': '10px',
          '20': '20px',
        },
      },
    },
      plugins: [
        require("@designbycode/tailwindcss-text-shadow")
        ({
          shadowColor: "rgba(0, 0, 0, 0.8)",
          shadowBlur: "3px",
          shadowOffsetX: "2px",
          shadowOffsetY: "2px",
      })
    ],
  };