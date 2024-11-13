export default function Home() {
    return (
        <div className="flex flex-col h-screen overflow-hidden">
            <Navbar />
            <div className="snap-y snap-mandatory h-full overflow-y-scroll">
                <Body color="bg-red-500" />
                <Body color="bg-green-500" />
                <Body color="bg-blue-500" />
            </div>
        </div>
    );
}