import * as React from "react";

export interface PencilIconProps {
  id?: string;
  style?: React.CSSProperties;
  className?: string;
  onClick?: () => void;
}

const PencilIcon = ({
  id = "",
  className = "",
  style = {},
  onClick
}: PencilIconProps): JSX.Element => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className={className}
    style={style}
    id={id}
    onClick={onClick} >
    <path d="M14.1 7.1l2.9 2.9L6.1 20.7l-3.6.7.7-3.6L14.1 7.1zm0-2.8L1.4 16.9 0 24l7.1-1.4L19.8 9.9l-5.7-5.7zm7.1 4.3L24 5.7 18.3 0l-2.8 2.8 5.7 5.7z"/>
  </svg>
);

export default PencilIcon;