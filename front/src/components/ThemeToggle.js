import {useTheme} from "../contexts/ThemeContext.js";
import Icon from "./Icon.js";

export default function ThemeToggle() {
    const {theme, toggleTheme} = useTheme();

    return <>
        <button
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50 size-9 rounded-full">
            <Icon
                name={theme === "dark" ? "Moon" : "Sun"}
                size={24}
                color={'white'}
                fill={'none'}
                stroke={'currentColor'}
                strokeWidth={2}
                strokeLinecap={'round'}
                strokeLinejoin={'round'}
                className={'w-5 h-5 cursor-pointer'}
                onClick={toggleTheme}
            />
            <span className="sr-only">Alternar tema</span>
        </button>
    </>
}
