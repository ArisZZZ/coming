import * as React from "react";

const SvgXihuan = ({ title, titleId, ...props }) => (
  <svg
    className="xihuan_svg__icon"
    width="1em"
    height="1em"
    viewBox="0 0 1024 1024"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="#333"
      d="M800.138 270.868a242.51 242.51 0 0 0-288.099-39.779 242.452 242.452 0 0 0-288.098 39.779 235.953 235.953 0 0 0-27.943 306.018c.964 1.379 10.81 14.966 18.688 23.828 2.56 2.954 6.715 7.68 232.763 220.357a94.523 94.523 0 0 0 64.59 25.6 94.07 94.07 0 0 0 64.394-25.6c226.068-212.48 230.597-217.797 232.96-220.357 7.877-8.862 17.546-22.45 18.708-23.828a236.308 236.308 0 0 0-27.963-306.018zM488.212 648.369a38.932 38.932 0 0 1-28.751 12.406 38.971 38.971 0 0 1-26.979-10.83l-121.698-114.61a39.385 39.385 0 0 1-1.556-55.729 39.385 39.385 0 0 1 55.71-1.575L486.636 592.64a39.385 39.385 0 0 1 1.576 55.73z"
    />
  </svg>
);

export default SvgXihuan;
