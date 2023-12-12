/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}", "./!(build|dist|.*)/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "text-white": "#fff",
        gainsboro: {
          "100": "#e5e5e5",
          "200": "#dad8d8",
        },
        "base-black": "#000",
        firebrick: "#b00000",
        lightgray: "rgba(213, 212, 212, 0.88)",
        "text-title": "#2e2e2e",
        "text-body": "#808080",
        "text-gray-900": "#18191f",
        silver: "#c4c4c4",
        khaki: "#ffe87a",
        "text-gray-700": "#969bab",
        "secondary-soft-purple": "#f7fafe",
        "text-disable": "#e6e6e6",
      },
      spacing: {},
      fontFamily: {
        poppins: "Poppins",
        "lead-lead-1": "Inter",
      },
      borderRadius: {
        mini: "15px",
      },
    },
    fontSize: {
      base: "16px",
      mini: "15px",
      "45xl": "64px",
      sm: "14px",
      lg: "18px",
      "29xl": "48px",
      xs: "12px",
      xl: "20px",
      "23xl": "42px",
      "9xl": "28px",
      "6xl": "25px",
      "11xl": "30px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
