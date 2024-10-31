import { Moon, Sun } from "lucide-react";

import { useTheme } from "@/components/theme-provider";
import { Button } from "@/components/ui/button";
import { FormEvent, useState } from "react";
import { Switch } from "./ui/switch";

const ModeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [checked, setChecked] = useState(theme === "dark");

  const toggleTheme = (e: FormEvent<HTMLButtonElement>) => {
    let isChecked = e.currentTarget.ariaChecked ?? "false";
    isChecked = isChecked === "true" ? "false" : "true";

    const currentTheme = theme === "dark" ? "light" : "dark";

    setTheme(currentTheme);
    setChecked(() => isChecked === "true");

    console.log(checked);
    console.log(isChecked);
  };

  return (
    <div className="inline-flex items-center gap-2 p-2">
      <Button variant="ghost" size="icon" className="size-4">
        <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      </Button>

      <Switch onClick={toggleTheme} checked={checked} />
    </div>
  );
};

export default ModeToggle;
