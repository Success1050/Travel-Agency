import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Travel",
  description: "travel website",
};

// export default function RootLayout({ children }) {
//   return (
//     <html lang='en'>
//       <body>
//         <Navbar />
//         {children}
//         <Footer />
//       </body>
//     </html>
//   );
// }

import React from "react";
import { AntdRegistry } from "@ant-design/nextjs-registry";

const RootLayout = ({ children }) => (
  <html lang='en'>
    <body>
      <AntdRegistry>
        <Navbar />
        {children}
        <Footer />
      </AntdRegistry>
    </body>
  </html>
);

export default RootLayout;
