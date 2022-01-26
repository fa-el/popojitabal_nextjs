import { AdjustmentsIcon, CogIcon, CollectionIcon, FolderOpenIcon } from "@heroicons/react/outline";

export const navMenu = [
  { name: "Components", href: "/components", bgColor: 'bg-indigo-400', icon: <FolderOpenIcon className="h-6 w-6"/>},
  { name: "Helpers", href: "#", bgColor: 'bg-indigo-400', icon: <CogIcon className="h-6 w-6"/>},
  { name: "Structures", href: "#", bgColor: 'bg-indigo-400', icon: <AdjustmentsIcon className="h-6 w-6"/>},
  { name: "Theme", href: "#", bgColor: 'bg-indigo-400', icon: <CollectionIcon className="h-6 w-6"/>},
];

export const rightNavMenu = [
  { name: "About Author", href: "#"},
];

export const componentMenu = [
  { label: 'Alert', description: 'My Alerts Components Example', href: '/components/alerts'},
  { label: 'Button', description: '', href: '#'},
  { label: 'Card', description: '', href: '#'},
  { label: 'Form', description: '', href: '#'},
  { label: 'Label', description: '', href: '#'},
  { label: 'Layout', description: '', href: '#'},
  { label: 'Navigation', description: '', href: '#'},
  { label: 'Table', description: '', href: '#'},
]