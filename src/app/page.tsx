import Header from "./components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen items-center justify-center">
        <h1 className="text-4xl font-bold">Hello World</h1>
      </main>
    </>
  );
}
