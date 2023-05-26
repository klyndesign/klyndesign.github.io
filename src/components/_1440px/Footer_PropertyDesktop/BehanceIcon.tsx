import { memo, SVGProps } from 'react';

const BehanceIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 36 36' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M11.7045 8.5965C12.588 8.5965 13.383 8.673 14.112 8.829C14.8365 8.9835 15.4545 9.2385 15.9765 9.591C16.491 9.9435 16.893 10.4115 17.1825 10.9995C17.463 11.58 17.6025 12.306 17.6025 13.164C17.6025 14.094 17.3925 14.871 16.971 15.4905C16.5465 16.1115 15.921 16.62 15.087 17.013C16.2225 17.3415 17.064 17.916 17.622 18.732C18.183 19.5555 18.4575 20.541 18.4575 21.696C18.4575 22.6335 18.279 23.439 17.9205 24.1155C17.575 24.7819 17.0738 25.3552 16.4595 25.7865C15.8232 26.2296 15.1124 26.5548 14.361 26.7465C13.5732 26.9533 12.762 27.0572 11.9475 27.0555H3V8.5965H11.7045ZM11.178 16.0545C11.898 16.0545 12.495 15.8835 12.966 15.537C13.434 15.195 13.6605 14.631 13.6605 13.8585C13.6605 13.4295 13.584 13.0755 13.434 12.798C13.2879 12.531 13.0716 12.309 12.8085 12.156C12.5331 11.9927 12.2292 11.8832 11.913 11.8335C11.5683 11.7692 11.2181 11.7386 10.8675 11.742H7.065V16.0545H11.178V16.0545ZM11.4045 23.913C11.805 23.913 12.186 23.8785 12.5445 23.7975C12.906 23.7195 13.227 23.5935 13.5 23.406C13.773 23.226 13.998 22.9815 14.16 22.6695C14.3235 22.3605 14.403 21.957 14.403 21.4725C14.403 20.5215 14.1345 19.845 13.6035 19.4355C13.071 19.0305 12.357 18.8295 11.4825 18.8295H7.065V23.9145H11.4045V23.913ZM24.252 23.8515C24.8025 24.3885 25.596 24.6585 26.628 24.6585C27.3675 24.6585 28.0065 24.471 28.545 24.099C29.076 23.7255 29.4 23.3265 29.5245 22.914H32.757C32.238 24.522 31.4505 25.671 30.3735 26.3625C29.31 27.057 28.0155 27.402 26.5035 27.402C25.4505 27.402 24.5025 27.2325 23.6535 26.8965C22.8386 26.5791 22.1022 26.0889 21.495 25.4595C20.8978 24.8154 20.4362 24.0579 20.1375 23.232C19.8092 22.3187 19.6466 21.354 19.6575 20.3835C19.6575 19.3845 19.824 18.45 20.151 17.5875C20.4614 16.7538 20.9381 15.9918 21.552 15.348C22.1595 14.718 22.8795 14.2215 23.718 13.857C24.5997 13.4862 25.5485 13.3013 26.505 13.314C27.636 13.314 28.6245 13.533 29.4735 13.974C30.2968 14.395 31.0107 15.002 31.5585 15.747C32.103 16.4865 32.4915 17.334 32.733 18.2835C32.9745 19.2315 33.0585 20.2215 32.9895 21.258H23.343C23.3445 22.314 23.7 23.3145 24.252 23.8515V23.8515ZM28.47 16.83C28.0335 16.347 27.2955 16.086 26.3925 16.086C25.806 16.086 25.3215 16.1835 24.9315 16.3845C24.5749 16.5646 24.2585 16.8152 24.0015 17.121C23.7758 17.3987 23.6084 17.7191 23.5095 18.063C23.423 18.3498 23.3672 18.6449 23.343 18.9435H29.316C29.229 18.0075 28.908 17.316 28.47 16.83V16.83ZM22.593 9.8355H30.0765V11.658H22.593V9.8355Z'
      fill='#0770E0'
    />
  </svg>
);
const Memo = memo(BehanceIcon);
export { Memo as BehanceIcon };
