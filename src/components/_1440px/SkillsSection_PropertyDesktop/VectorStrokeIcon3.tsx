import { memo, SVGProps } from 'react';

const VectorStrokeIcon3 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 23 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M8.39759 0.750597C8.77997 0.764777 9.09915 1.02619 9.16206 1.3767L12.3423 19.095L15.1272 10.044C15.2245 9.72778 15.5322 9.50732 15.8863 9.50018C16.2403 9.49303 16.5581 9.70087 16.67 10.0128L18.3706 14.75H21.5576C22.0037 14.75 22.3653 15.0858 22.3653 15.5C22.3653 15.9142 22.0037 16.25 21.5576 16.25H17.7884C17.4408 16.25 17.1321 16.0434 17.0222 15.7372L15.9632 12.7871L12.9112 22.706C12.8074 23.0432 12.4659 23.2686 12.0889 23.2488C11.7119 23.229 11.4 22.9692 11.3379 22.6233L8.20708 5.18023L5.37971 15.6819C5.28982 16.0158 4.96676 16.25 4.59614 16.25H0.826916C0.380841 16.25 0.0192261 15.9142 0.0192261 15.5C0.0192261 15.0858 0.380841 14.75 0.826916 14.75H3.96551L7.58179 1.3181C7.6746 0.973358 8.01521 0.736417 8.39759 0.750597Z'
      fill='#0770E0'
    />
  </svg>
);
const Memo = memo(VectorStrokeIcon3);
export { Memo as VectorStrokeIcon3 };
