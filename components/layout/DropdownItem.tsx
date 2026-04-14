"use client";

import React from "react";
// MUDANÇA: Usamos o Link do Next.js
import Link from "next/link";
import { Icon } from "@iconify/react";
// Bibliotecas de UI são mantidas, mas a importação do React é opcional no Next.js
import { Menu, Transition } from "@headlessui/react";

// Interfaces (Defina isso no topo do arquivo ou em um arquivo de tipos)
interface SubLink {
  name: string;
  to: string;
}

interface NavLink {
  name: string;
  to: string;
  stateKey: string;
  sublinks?: SubLink[];
}

interface DropdownItemProps {
  link: NavLink;
  isMobile: boolean;
  closeMenu: () => void;
}

const ICON_MAP: { [key: string]: string } = {
  // Adicionado tipagem para o mapa de ícones
  Home: "lucide:home",
  Sobre: "lucide:users",
  Páginas: "lucide:layout-template",
  Projetos: "lucide:package-open",
  Blog: "lucide:notebook-pen",
  Contato: "lucide:mail",
  "Leads CRM": "lucide:layout-dashboard",
  "Nosso Time": "lucide:users-2",
  Serviços: "lucide:briefcase",
  "Preços e Planos": "lucide:tag",
  Dúvidas: "lucide:help-circle",

  Artigos: "lucide:book-open",
  Detalhes: "lucide:file-text",
};

// MUDANÇA: Adicionamos a tipagem (React.FC) para o componente
const DropdownItem: React.FC<DropdownItemProps> = ({
  link,
  isMobile,
  closeMenu,
}) => {
  const hasSublinks = link.sublinks && link.sublinks.length > 0;
  const iconName = ICON_MAP[link.name];

  const linkClasses = isMobile
    ? "flex items-center text-lg py-3 px-4 font-semibold hover:text-blue-500 transition-colors duration-200"
    : "text-sm font-medium hover:text-blue-400 py-2 px-3 transition-colors duration-200 block";

  const buttonClasses = isMobile
    ? "flex cursor-pointer items-center justify-between w-full text-lg py-3 px-4 font-semibold hover:text-blue-500 transition-colors duration-200"
    : "flex cursor-pointer items-center text-sm font-semibold transition-colors duration-200 hover:text-blue-400";

  // --- 1. Link Simples (Sem Sublinks) ---
  if (!hasSublinks) {
    return (
      <li className={isMobile ? "border-b border-gray-700/50" : ""}>
        {/* MUDANÇA: 'to' vira 'href' */}
        <Link href={link.to} className={linkClasses} onClick={closeMenu}>
          {isMobile && (
            <Icon
              icon={iconName}
              width="20"
              height="20"
              className="mr-4 text-blue-400"
            />
          )}
          {link.name}
        </Link>
      </li>
    );
  }

  // --- 2. Dropdown Desktop (Usando classes CSS group-hover) ---
  if (!isMobile) {
    return (
      <li className="relative group flex items-center h-full">
        <div className={buttonClasses}>
          {link.name}
          <Icon
            icon="lucide:chevron-down"
            width="16"
            height="16"
            className={`inline-block transition-transform duration-300 group-hover:rotate-180 ml-1`}
          />
        </div>
        <ul
          className={`absolute top-full left-1/2 -translate-x-1/2 
          w-48 rounded-lg bg-black/90 p-1 border border-white/10 shadow-lg
          transition-all duration-300 opacity-0 invisible group-hover:opacity-100 group-hover:visible
          space-y-1`}
        >
          {link.sublinks!.map((sublink, index) => (
            <li
              key={sublink.name}
              className={`${
                // Correção: Aqui também precisa do '!'
                index < link.sublinks!.length - 1
                  ? "border-b border-white/10"
                  : ""
              }`}
            >
              {/* MUDANÇA: 'to' vira 'href' */}
              <Link
                href={sublink.to}
                className={`py-2 px-3 text-sm font-medium transition-colors duration-200 block text-white/80 hover:text-blue-400`}
                onClick={closeMenu}
              >
                {sublink.name}
              </Link>
            </li>
          ))}
        </ul>
      </li>
    );
  }

  // --- 3. Dropdown Mobile (Usando @headlessui/react) ---
  return (
    <Menu as="li" className={"relative border-b border-gray-700/50"}>
      {({ open, close }) => (
        <div>
          <Menu.Button className={buttonClasses}>
            <div className="flex items-center gap-4">
              <Icon
                icon={iconName}
                width="20"
                height="20"
                className="text-blue-400"
              />
              {link.name}
            </div>
            <Icon
              icon="lucide:chevron-down"
              width="20"
              height="20"
              className={`inline-block transition-transform duration-300 ${
                open ? "rotate-180" : ""
              }`}
            />
          </Menu.Button>

          <Transition
            // Removida a prop className (que causava o erro TS)
            enter="transition ease-out duration-300"
            enterFrom="opacity-0 scale-y-0"
            enterTo="opacity-100 scale-y-100"
            leave="transition ease-in duration-200"
            leaveFrom="opacity-100 scale-y-100"
            leaveTo="opacity-0 scale-y-0"
            // className={"origin-top overflow-hidden"} <-- Removida
          >
            <Menu.Items
              as="ul"
              static={true}
              // A classe 'origin-top' e 'overflow-hidden' são aplicadas aqui
              className={
                "bg-black/50 backdrop-blur-sm p-0 w-full space-y-1 origin-top overflow-hidden"
              }
            >
              {link.sublinks!.map(
                (
                  sublink,
                  index // Note o '!' para indicar que sublinks existe
                ) => (
                  <li
                    key={sublink.name}
                    className={`py-1 ${
                      index < link.sublinks!.length - 1
                        ? "border-b border-white/10"
                        : ""
                    }`}
                  >
                    <Menu.Item>
                      {({ active }) => (
                        // MUDANÇA: 'to' vira 'href'
                        <Link
                          href={sublink.to}
                          className={`flex items-center pl-16 py-1.5 text-sm font-medium transition-colors duration-200 block ${
                            active ? "text-blue-400" : "text-white/80"
                          }`}
                          onClick={() => {
                            close(); // Fecha o headlessui Menu
                            closeMenu(); // Fecha o menu mobile do Nav.tsx
                          }}
                        >
                          <Icon
                            icon={ICON_MAP[sublink.name] || "lucide:circle"}
                            width="14"
                            height="14"
                            className="mr-3 -ml-6 text-blue-400"
                          />
                          {sublink.name}
                        </Link>
                      )}
                    </Menu.Item>
                  </li>
                )
              )}
            </Menu.Items>
          </Transition>
        </div>
      )}
    </Menu>
  );
};

export default DropdownItem;
