import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center p-8 min-h-screen" style={{backgroundColor: 'var(--background)', color: 'var(--foreground)'}}>
        <div className="text-center">
          <Image
            className="dark:invert mx-auto mb-8"
            src="/next.svg"
            alt="Next.js logo"
            width={180}
            height={36}
            priority
          />
          <h1 className="text-4xl font-bold mb-4" style={{color: 'var(--foreground)'}}>
            Welcome to Think Tech LK
          </h1>
          <p className="text-lg mb-8 max-w-2xl" style={{color: 'var(--foreground)', opacity: 0.8}}>
            Your modern sidebar is ready! Click on the items in the sidebar to navigate through different sections. 
            The sidebar can be collapsed by clicking the chevron button. Try the theme toggle in the sidebar footer!
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 max-w-4xl">
            <div className="card p-6 rounded-lg shadow-lg border">
              <h3 className="text-xl font-semibold mb-3" style={{color: 'var(--foreground)'}}>Features</h3>
              <ul className="space-y-2" style={{color: 'var(--foreground)', opacity: 0.8}}>
                <li>• Collapsible sidebar with emoji icons</li>
                <li>• Active state highlighting</li>
                <li>• Light/Dark/System theme toggle</li>
                <li>• Responsive design</li>
                <li>• Smooth animations & transitions</li>
              </ul>
            </div>
            
            <div className="card p-6 rounded-lg shadow-lg border">
              <h3 className="text-xl font-semibold mb-3" style={{color: 'var(--foreground)'}}>Navigation</h3>
              <ul className="space-y-2" style={{color: 'var(--foreground)', opacity: 0.8}}>
                <li>• About us</li>
                <li>• A/L 2027 & 2026</li>
                <li>• Tutorials & Videos</li>
                <li>• Discussions</li>
                <li>• Past papers & Contact</li>
              </ul>
            </div>
          </div>
        </div>
    </div>
  );
}
