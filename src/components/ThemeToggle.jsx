import { Moon, Sun } from "lucide-react";
import { cn } from "../lib/utils";
import { useState ,useEffect } from "react";
export const ThemeToggle = () => {
    const [isdarkmode, setisdarkmode] = useState(false);

    useEffect(() => {
        const storedTheme = localStorage.getItem("theme");
        if (storedTheme === "dark") {
            setisdarkmode(true);
            document.documentElement.classList.add("dark");
        } else {
            localStorage.setItem("theme", "light");
            setisdarkmode(false);
        }
    }, []);
    const toggleTheme = () => {
        if (isdarkmode) {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
            setisdarkmode(false);
        } else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
            setisdarkmode(true);
        }
    };
    return <button onClick={toggleTheme} className={cn(
        "fixed max-sm:hidden top-5 right-5 z-50 p-2 rounded-full transition-colors duration-300",
        "focus:outlin-hidden"
    )}>{isdarkmode ?
        (<Sun className="h-6 w-6 text-yellow-300" />)
        :
        (<Moon className="h-6 w-6 text-blue-900" />)
        }</button>
}