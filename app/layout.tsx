import Sidebar from "@/components/Sidebar";
import "./globals.css";
import { Figtree } from "next/font/google";
import UserProvider from "@/providers/UserProvider";
import SupabaseProvider from "@/providers/SupabaseProvider";
import ModalProvider from "@/providers/ModalProvider";
import ToasterProvider from "@/providers/ToasterProvider";
import getSongsByUserId from "@/actions/getSongsByUserId";
import Player from "@/components/Player";

const font = Figtree({ subsets: ["latin"] });

export const metadata = {
  title: "Musicify",
  description: "Listen to Music!",
};

export const revalidate = 0;

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const userSongs = await getSongsByUserId();

  throw new Error('Test')
  
  return (
    <html lang="en">
      <body className={font.className}>
        <ToasterProvider />
        <SupabaseProvider>
          <UserProvider>
            <ModalProvider />
            <Sidebar songs={userSongs}>
              {children}
            </Sidebar>
             <Player />
          </UserProvider>
        </SupabaseProvider>
      </body>
    </html>
  );
}
