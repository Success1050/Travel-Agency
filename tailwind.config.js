/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backdropBlur: {
        blurCustom: "15px",
      },
      backgroundColor: {
        cusbgcolor: "",
      },
      colors: {
        cuscolor: "#475467",
        cusBgCol6: "#101828",
      },

      zIndex: {
        cuzindex: "50",
      },
      borderRadius: {
        cusBradius: "50%",
        cusBradius2: "6px",
        cusBradius3: "50px",
        cusBradius4: "8px",
      },

      spacing: {
        cusPd: "20px 60px",
        cusPt: "50px",
        cusTop: "0",
        cusTop2: "-27px",
        cusRight: "-17px",
        cusLeft: "-500px",
        cuspl: "0.9rem",
        cusgap: "1.2rem",
        cusgap2: "1.5rem",
        cusmr: "0.9rem",
        cuspd2: "0.6rem",
        cusm: "8px auto",
        cusmr2: "0.9rem",
        cusmx: "0.98rem",
        cuslineheight: "1.1em",
        cusp1: "30px",
        cuspl2: "20px",
        custop3: "28%",
        custop4: "45%",
        custop5: "20%",
        cuspd4: "30px 30px 20px",
        cuspd5: "6px 10px",
        cusgap3: "15px",
        cuspd6: "10px",
      },
      width: {
        cusWidth: "250px",
        cusWidth2: "20px",
        cusWidth3: "80%",
        cusWidth5: "70%",
        cusWidth4: "90%",
        cusWidth6: "60%",
        cusWidth7: "85%",
        cusWidth8: "36px",
        cusWidth9: "100vw",
        cusWidth10: "45px",
        cusWidth11: "50vw",
        cusWidth12: "370px",
        cusWidth13: "42px",
        cusWidth14: "30px",
        cusWidth15: "300px",
        cusWidth16: "100px",
      },
    },
  },
  plugins: [],
};
