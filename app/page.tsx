import { BusinessCard, Demographics, ProjectList } from "@/components";

export default function Home() {
  return (
    <>
      {/* <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start"> */}
      <main>
        <div className='flex flex-col md:flex-row justify-center items-center md:items-end gap-16'>
          <BusinessCard />
          <Demographics />
        </div>
        <ProjectList />
      </main>
    </>
  );
}
