import Hello from "@/components/Hello";

export default async function AdminRout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
    return (
      <main className="lex justify-center  px-4 sm:px-0 h-dvh ">
        <div className="grid grid-cols-1 h-full sm:grid-cols-2 ">
        <Hello/>
  
        <div className="w-ful p-5  h-full">
          {children}

         </div>
        </div>
         </main>
    );
  }
  