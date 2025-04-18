import Link from "next/link";
import Nav from "./nav";
import MobileNav from "./MobileNav";
import { Button } from "./ui/button";

const Header = () => {
    return (
        <header className="py-5 xl:py-8 text-white">
            <div className="container mx-auto flex justify-between items-center ">
            
                <Link href="/">
                <h1 className="text-4xl font-semibold">Adem <span className="text-accent">.</span></h1>
                </Link>
                {/* for desktop */}
                <div className="hidden xl:flex items-center gap-8">
                <Nav/> 
                <Link href="/contact">
                <Button >Hire Me</Button>
                </Link>
                </div>
                {/* for mobile */}
                <div className="xl:hidden">
                    <MobileNav/>
                    </div>
                </div>

            
        </header>
    );
    }
    export default Header;