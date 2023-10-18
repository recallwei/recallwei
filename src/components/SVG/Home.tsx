import type { SVGProps } from 'react'

export default function Home(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      >
        <path
          strokeDasharray="21"
          strokeDashoffset="21"
          d="M5 21H19"
        >
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            dur="0.2s"
            values="21;0"
          />
        </path>
        <path
          strokeDasharray="15"
          strokeDashoffset="15"
          d="M5 21V8M19 21V8"
        >
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            begin="0.2s"
            dur="0.2s"
            values="15;0"
          />
        </path>
        <path
          strokeDasharray="24"
          strokeDashoffset="24"
          d="M9 21V13H15V21"
        >
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            begin="0.4s"
            dur="0.4s"
            values="24;0"
          />
        </path>
        <path
          strokeDasharray="26"
          strokeDashoffset="26"
          d="M2 10L12 2L22 10"
        >
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            begin="0.5s"
            dur="0.4s"
            values="26;0"
          />
        </path>
      </g>
    </svg>
  )
}
