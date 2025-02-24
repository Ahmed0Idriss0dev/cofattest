import Footer from "@/components/sections/Footer";
import Nav from "@/components/sections/Nav";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   <>
   
   <Nav/>
   <div className="">
     {children}
   </div>
   <Footer/>
   </>
     
  );
}