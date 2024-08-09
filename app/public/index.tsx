

interface IconProps extends React.SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}

export const SkipNext: React.FC<IconProps> = ({ color, size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="24px"
    viewBox="0 -960 960 960"
    width="24px"
    fill={color}
    {...props}
  >
    <path d="M660-240v-480h80v480h-80Zm-440 0v-480l360 240-360 240Zm80-240Zm0 90 136-90-136-90v180Z" />
  </svg>
);

export const SkipPrevious: React.FC<IconProps> = ({ color, size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="24px"
    viewBox="0 -960 960 960"
    width="24px"
    fill={color}
    {...props}
  >
    <path d="M220-240v-480h80v480h-80Zm520 0L380-480l360-240v480Zm-80-240Zm0 90v-180l-136 90 136 90Z" />
  </svg>
);

export const AddNotIcon: React.FC<IconProps> = ({ color, size = 24, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" height="34px" viewBox="0 -960 960 960" width="34px" fill={color}
  {...props}><path d="M202.87-111.87q-37.54 0-64.27-26.73-26.73-26.73-26.73-64.27v-554.26q0-37.54 26.73-64.27 26.73-26.73 64.27-26.73h160.11q14.67-36.48 46.37-58.24 31.69-21.76 70.65-21.76 38.96 0 70.65 21.76 31.7 21.76 46.37 58.24h160.11q37.54 0 64.27 26.73 26.73 26.73 26.73 64.27V-481q-21.15-11.63-43.9-19.8-22.75-8.18-47.1-11.66v-244.67H202.87v554.26h235.78q2.52 25.11 9.62 47.86t17.53 43.14H202.87Zm0-123.35V-202.87v-554.26 244.67-2.76 280Zm80-47.65h158.7q3.47-21 10.57-41t16.06-39H282.87v80Zm0-157.13h243.52q31.04-28.33 69.23-47.01 38.18-18.69 81.51-25.45V-520H282.87v80Zm0-157.13h394.26v-80H282.87v80ZM480-788.09q13.83 0 22.87-9.04 9.04-9.04 9.04-22.87 0-13.83-9.04-22.87-9.04-9.04-22.87-9.04-13.83 0-22.87 9.04-9.04 9.04-9.04 22.87 0 13.83 9.04 22.87 9.04 9.04 22.87 9.04ZM717.13-35.46q-83 0-141.5-58.5t-58.5-141.5q0-83 58.5-141.5t141.5-58.5q83 0 141.5 58.5t58.5 141.5q0 83-58.5 141.5t-141.5 58.5Zm-23.59-76.41h47.18v-100h100v-47.17h-100v-100h-47.18v100h-100v47.17h100v100Z"/></svg>
);

export const PriorityIcon: React.FC<IconProps> = ({ color, size = 24, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill={color}
  {...props}><path d="M479.96-107.09q-36.07 0-61.72-25.68-25.65-25.69-25.65-61.77 0-36.07 25.68-61.72 25.69-25.65 61.77-25.65 36.07 0 61.72 25.69 25.65 25.68 25.65 61.76 0 36.07-25.69 61.72-25.68 25.65-61.76 25.65Zm-83.55-254.82V-851h167.18v489.09H396.41Z"/></svg>
);

export const Checked: React.FC<IconProps> = ({ color, size = 24, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill={color}
  {...props}><path d="M268.24-224.7 34.59-458.35 99-522l170 170 63.65 63.65-64.41 63.65ZM494-232.35 259.87-466.48 324-530.89l170 170 367.52-367.52L925.65-664 494-232.35Zm0-233.89-64.41-63.65 198-198L692-664.24l-198 198Z"/></svg>

);

export const MenuMobileDrawer: React.FC<IconProps> = ({ color, size = 24, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill={color}><path d="M120-320v-80h280v80H120Zm0-160v-80h440v80H120Zm0-160v-80h440v80H120Zm520 480v-160H480v-80h160v-160h80v160h160v80H720v160h-80Z"/></svg>
);
