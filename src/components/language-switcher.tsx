"use client";

import { useTranslation } from "@/hooks/use-translation";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import { Globe } from "lucide-react";

export function LanguageSwitcher() {
  const { language, setLanguage } = useTranslation();

  const usFlagUrl = "https://flagcdn.com/w40/us.png";
  const jpFlagUrl = "https://flagcdn.com/w40/jp.png";

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
           {language === 'ja' ? (
             <Image src={jpFlagUrl} alt="Japanese Flag" width={24} height={18} className="rounded-sm" />
           ) : (
             <Image src={usFlagUrl} alt="US Flag" width={24} height={18} className="rounded-sm" />
           )}
          <span className="sr-only">Change language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onSelect={() => setLanguage("en")}>
          <Image src={usFlagUrl} alt="US Flag" width={20} height={15} className="mr-2 rounded-sm" />
          <span>English</span>
        </DropdownMenuItem>
        <DropdownMenuItem onSelect={() => setLanguage("ja")}>
           <Image src={jpFlagUrl} alt="Japanese Flag" width={20} height={15} className="mr-2 rounded-sm" />
          <span>日本語</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
