import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import { useTranslation } from "react-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import AdminScreen from "@/Components/Views/adminScreen";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  const { t } = useTranslation("common");
  return (
      <div className="">
        <AdminScreen />
      </div>
  );
}

export async function getStaticProps({locale}: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}