import localFont from "next/font/local";
import "./globals.css";
import { Navbar } from './components/nav';
import { ThemeProvider } from "./components/theme-provider"

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Oklathon Calorie Tracker App",
  description: "App for Oklathon 2024",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <AuthProvider>
        <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar/>
          {children}
        </ThemeProvider>
      </body>
      </AuthProvider>
    </html>
  );
}
