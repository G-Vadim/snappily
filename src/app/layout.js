import { Header } from '@/app/components/Header';
import { Footer } from "@/app/components/Footer";
import { BaseContainer } from "@/app/components/BaseContainer";
import "./styles/globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <BaseContainer>
          <Header />
        </BaseContainer>
        <main className="pt-20">
          {children}
        </main>
        <BaseContainer>
          <Footer />
        </BaseContainer>
      </body>
    </html>
  );
}
