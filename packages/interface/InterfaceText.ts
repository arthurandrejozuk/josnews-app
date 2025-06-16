export interface InterfaceText extends React.HTMLAttributes<HTMLParagraphElement> {
    tag?: "h1" | "h2" | "h3" | "p" | "a";
    children?: string | React.ReactNode;
    active?: boolean;
    className?: string;
    onClick?: () => void;
    href?: string;
}