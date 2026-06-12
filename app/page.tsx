import { BusinessCard, Demographics, Navigation, ProjectList } from "@/components";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-100 via-gray-50 to-white">
      <header className="header relative flex flex-col md:flex-row justify-center items-center md:items-end gap-16 bg-gradient-to-b from-black via-gray-900 to-gray-700">
        {/* <div id="header-blur" className="pointer-events-none absolute inset-x-0 -bottom-16 h-24 bg-black/40 blur-2xl" /> */}
        <BusinessCard />
        <Demographics />
      </header>

      <Navigation />

      <ProjectList />
    </main>
  );
}
