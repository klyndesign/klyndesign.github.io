import { memo, SVGProps } from 'react';

const GroupIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 42 32' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M0.131251 4.14667C0.395899 2.96865 1.04647 1.91684 1.97642 1.16349C2.90637 0.410147 4.06057 -7.75038e-05 5.25 3.82679e-06H36.75C37.9394 -7.75038e-05 39.0936 0.410147 40.0236 1.16349C40.9535 1.91684 41.6041 2.96865 41.8688 4.14667L21 17.104L0.131251 4.14667ZM9.53674e-07 7.192V26.136L15.2329 16.648L9.53674e-07 7.192ZM17.7476 18.2133L0.501376 28.952C0.927483 29.8648 1.60001 30.6358 2.44068 31.1754C3.28135 31.715 4.25558 32.001 5.25 32H36.75C37.7443 32.0002 38.7181 31.7136 39.5583 31.1736C40.3985 30.6335 41.0705 29.8622 41.496 28.9493L24.2498 18.2107L21 20.2293L17.7476 18.2107V18.2133ZM26.7671 16.6507L42 26.136V7.192L26.7671 16.648V16.6507Z'
      fill='#25282B'
    />
  </svg>
);
const Memo = memo(GroupIcon);
export { Memo as GroupIcon };