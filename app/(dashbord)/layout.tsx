import Navbar from "@/components/Dahbord/Navbar";
import SideBar from "@/components/Dahbord/SideBar";
 
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   <>
   <div className="grid grid-cols-[200px,1fr] h-dvh ">
     <SideBar/>
     <div className="w-full  bg-Cofat-50/10 border-b h-full">
       <Navbar/>

       {children} 
      </div>
   </div>
   </>
     
  );
}