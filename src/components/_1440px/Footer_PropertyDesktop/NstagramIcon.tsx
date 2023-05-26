import { memo, SVGProps } from 'react';

const NstagramIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 36 36' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M17.9985 11.0655C16.159 11.0655 14.3948 11.7963 13.094 13.097C11.7933 14.3978 11.0625 16.162 11.0625 18.0015C11.0625 19.841 11.7933 21.6052 13.094 22.906C14.3948 24.2067 16.159 24.9375 17.9985 24.9375C19.838 24.9375 21.6022 24.2067 22.903 22.906C24.2037 21.6052 24.9345 19.841 24.9345 18.0015C24.9345 16.162 24.2037 14.3978 22.903 13.097C21.6022 11.7963 19.838 11.0655 17.9985 11.0655ZM17.9985 22.506C16.8034 22.506 15.6573 22.0313 14.8123 21.1862C13.9672 20.3412 13.4925 19.1951 13.4925 18C13.4925 16.8049 13.9672 15.6588 14.8123 14.8138C15.6573 13.9687 16.8034 13.494 17.9985 13.494C19.1936 13.494 20.3397 13.9687 21.1847 14.8138C22.0298 15.6588 22.5045 16.8049 22.5045 18C22.5045 19.1951 22.0298 20.3412 21.1847 21.1862C20.3397 22.0313 19.1936 22.506 17.9985 22.506Z'
      fill='#0770E0'
    />
    <path
      d='M25.209 12.4275C26.102 12.4275 26.826 11.7035 26.826 10.8105C26.826 9.91746 26.102 9.1935 25.209 9.1935C24.316 9.1935 23.592 9.91746 23.592 10.8105C23.592 11.7035 24.316 12.4275 25.209 12.4275Z'
      fill='#0770E0'
    />
    <path
      d='M30.7995 9.1665C30.4523 8.26977 29.9216 7.45542 29.2415 6.77559C28.5614 6.09575 27.7469 5.56541 26.85 5.2185C25.8005 4.82454 24.6918 4.61151 23.571 4.5885C22.1265 4.5255 21.669 4.5075 18.006 4.5075C14.343 4.5075 13.8735 4.5075 12.441 4.5885C11.3211 4.61034 10.2131 4.8234 9.165 5.2185C8.2679 5.565 7.45315 6.09521 6.773 6.77509C6.09285 7.45498 5.56234 8.26954 5.2155 9.1665C4.82146 10.2159 4.60892 11.3248 4.587 12.4455C4.5225 13.8885 4.503 14.346 4.503 18.0105C4.503 21.6735 4.503 22.14 4.587 23.5755C4.6095 24.6975 4.821 25.8045 5.2155 26.856C5.56331 27.7526 6.09434 28.5669 6.77465 29.2467C7.45496 29.9265 8.26959 30.4569 9.1665 30.804C10.2126 31.2138 11.3211 31.4421 12.444 31.479C13.8885 31.542 14.346 31.5615 18.009 31.5615C21.672 31.5615 22.1415 31.5615 23.574 31.479C24.6947 31.4562 25.8033 31.2437 26.853 30.8505C27.7496 30.5028 28.5639 29.972 29.244 29.292C29.924 28.6119 30.4548 27.7976 30.8025 26.901C31.197 25.851 31.4085 24.744 31.431 23.622C31.4955 22.179 31.515 21.7215 31.515 18.057C31.515 14.3925 31.515 13.9275 31.431 12.492C31.4135 11.3554 31.1999 10.2304 30.7995 9.1665ZM28.9725 23.4645C28.9628 24.329 28.805 25.1854 28.506 25.9965C28.2807 26.5798 27.9359 27.1095 27.4936 27.5515C27.0513 27.9935 26.5214 28.3381 25.938 28.563C25.1358 28.8607 24.2885 29.0185 23.433 29.0295C22.008 29.0955 21.606 29.112 17.952 29.112C14.295 29.112 13.9215 29.112 12.4695 29.0295C11.6144 29.019 10.7675 28.8612 9.966 28.563C9.38053 28.3395 8.8485 27.9955 8.40433 27.5534C7.96017 27.1113 7.61375 26.5809 7.3875 25.9965C7.09267 25.1941 6.93497 24.3478 6.921 23.493C6.8565 22.068 6.8415 21.666 6.8415 18.012C6.8415 14.3565 6.8415 13.983 6.921 12.5295C6.93069 11.6655 7.08848 10.8096 7.3875 9.999C7.845 8.8155 8.7825 7.884 9.966 7.431C10.7679 7.13421 11.6145 6.97645 12.4695 6.9645C13.896 6.9 14.2965 6.882 17.952 6.882C21.6075 6.882 21.9825 6.882 23.433 6.9645C24.2886 6.97479 25.136 7.13261 25.938 7.431C26.5214 7.65641 27.0512 8.0013 27.4935 8.44355C27.9357 8.88579 28.2806 9.41561 28.506 9.999C28.8008 10.8014 28.9585 11.6477 28.9725 12.5025C29.037 13.929 29.0535 14.3295 29.0535 17.985C29.0535 21.639 29.0535 22.032 28.989 23.466H28.9725V23.4645Z'
      fill='#0770E0'
    />
  </svg>
);
const Memo = memo(NstagramIcon);
export { Memo as NstagramIcon };