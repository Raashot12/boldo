const IconPrev = ({size, onclick}: {size: string; onclick: () => void}) => (
  <svg
    width={size}
    height={size}
    onClick={onclick}
    viewBox="0 0 72 72"
    fill="none"
    style={{cursor: "pointer"}}
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      cx={36}
      cy={36}
      r={36}
      transform="rotate(-180 36 36)"
      fill="white"
    />
    <path
      d="M46.5 35L25.5 35"
      stroke="#0A2640"
      strokeWidth={3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M36 45.5L25.5 35L36 24.5"
      stroke="#0A2640"
      strokeWidth={3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)
export default IconPrev
