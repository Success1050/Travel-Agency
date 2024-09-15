import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { AntdRegistry } from "@ant-design/nextjs-registry";

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
