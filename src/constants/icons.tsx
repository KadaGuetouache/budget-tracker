type classNameProps = {
  className?: string;
};

export const FacebookIcon = ({ className = "w-4 h-4" }: classNameProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="0"
      viewBox="0 0 512 512"
      className={className}
    >
      <path
        stroke="none"
        d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"
      ></path>
    </svg>
  );
};

export const GoogleIcon = ({ className = "w-5 h-5" }: classNameProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="800px"
      height="800px"
      viewBox="-3 0 262 262"
      preserveAspectRatio="xMidYMid"
      className={className}
    >
      <path
        d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
        fill="#4285F4"
      />
      <path
        d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
        fill="#34A853"
      />
      <path
        d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"
        fill="#FBBC05"
      />
      <path
        d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
        fill="#EB4335"
      />
    </svg>
  );
};

export const GithubIcon = ({ className = "w-5 h-5" }: classNameProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="0"
      viewBox="0 0 496 512"
      className={className}
    >
      <path
        stroke="none"
        d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
      ></path>
    </svg>
  );
};

export const EyeIcon = ({ className = "w-5 h-5" }: classNameProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="0"
      viewBox="0 0 256 256"
      className={className}
    >
      <path
        stroke="none"
        d="M247.31 124.76c-.35-.79-8.82-19.58-27.65-38.41C194.57 61.26 162.88 48 128 48S61.43 61.26 36.34 86.35C17.51 105.18 9 124 8.69 124.76a8 8 0 000 6.5c.35.79 8.82 19.57 27.65 38.4C61.43 194.74 93.12 208 128 208s66.57-13.26 91.66-38.34c18.83-18.83 27.3-37.61 27.65-38.4a8 8 0 000-6.5zM128 168a40 40 0 1140-40 40 40 0 01-40 40z"
      ></path>
    </svg>
  );
};

export const ClosedEyeIcon = ({ className = "w-5 h-5" }: classNameProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="0"
      viewBox="0 0 16 16"
      className={className}
    >
      <path
        stroke="none"
        d="M10.79 12.912l-1.614-1.615a3.5 3.5 0 01-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7 7 0 002.79-.588M5.21 3.088A7 7 0 018 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 00-4.474-4.474z"
      ></path>
      <path
        stroke="none"
        d="M5.525 7.646a2.5 2.5 0 002.829 2.829zm4.95.708l-2.829-2.83a2.5 2.5 0 012.829 2.829zm3.171 6l-12-12 .708-.708 12 12z"
      ></path>
    </svg>
  );
};

export const CloseIcon = ({ className = "w-5 h-5" }: classNameProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="0"
      viewBox="0 0 512 512"
      className={className}
    >
      <path
        stroke="none"
        d="M331.3 308.7L278.6 256l52.7-52.7c6.2-6.2 6.2-16.4 0-22.6-6.2-6.2-16.4-6.2-22.6 0L256 233.4l-52.7-52.7c-6.2-6.2-15.6-7.1-22.6 0-7.1 7.1-6 16.6 0 22.6l52.7 52.7-52.7 52.7c-6.7 6.7-6.4 16.3 0 22.6 6.4 6.4 16.4 6.2 22.6 0l52.7-52.7 52.7 52.7c6.2 6.2 16.4 6.2 22.6 0 6.3-6.2 6.3-16.4 0-22.6z"
      ></path>
      <path
        stroke="none"
        d="M256 76c48.1 0 93.3 18.7 127.3 52.7S436 207.9 436 256s-18.7 93.3-52.7 127.3S304.1 436 256 436c-48.1 0-93.3-18.7-127.3-52.7S76 304.1 76 256s18.7-93.3 52.7-127.3S207.9 76 256 76m0-28C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48z"
      ></path>
    </svg>
  );
};

export const SpinnerIcon = ({ className = "w-5 h-5" }: classNameProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="0"
      viewBox="0 0 16 16"
      className={className}
    >
      <path
        stroke="none"
        d="M16 8a7.917 7.917 0 00-2.431-5.568A7.776 7.776 0 005.057.896c-.923.405-1.758.992-2.449 1.712S1.371 4.182 1.011 5.105a7.531 7.531 0 00.115 5.742c.392.892.961 1.7 1.658 2.368S4.307 14.41 5.2 14.758a7.286 7.286 0 002.799.493 7.157 7.157 0 006.526-4.547 6.98 6.98 0 00.415-1.622l.059.002a1 1 0 00.996-1.083h.004zm-1.589 2.655c-.367.831-.898 1.584-1.55 2.206s-1.422 1.112-2.254 1.434a6.759 6.759 0 01-2.608.454 6.676 6.676 0 01-4.685-2.065 6.597 6.597 0 01-1.38-2.173 6.514 6.514 0 01.116-4.976c.342-.77.836-1.468 1.441-2.044s1.321-1.029 2.092-1.326c.771-.298 1.596-.438 2.416-.416s1.629.202 2.368.532c.74.329 1.41.805 1.963 1.387s.988 1.27 1.272 2.011a6.02 6.02 0 01.397 2.32h.004a1 1 0 00.888 1.077 6.872 6.872 0 01-.481 1.578z"
      ></path>
    </svg>
  );
};

export const BullHornIcon = ({ className = "w-5 h-5" }: classNameProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="0"
      viewBox="0 0 512 512"
      className={className}
    >
      <path
        stroke="none"
        d="M73.813 39.28c70.517 36.34 49.052 103.816 8.374 138.22-88.595 74.925-82.78 199.22 48.25 244.563-10.524-32.924-9.554-66.272 2.063-99.063-30.195-25.72-38.378-63.247 11.906-135.656 30.388-43.758 23.922-140.87-70.594-148.063zm361.5 0c-94.516 7.193-100.982 104.306-70.594 148.064 47.774 68.795 42.742 106.107 16.217 131.72 7.033 17.736 12.06 35.84 13.282 54.467.963 14.702-.57 29.68-5.25 44.72 120.973-48.166 124.15-167.84 37.936-240.75-40.677-34.404-62.11-101.88 8.406-138.22zm-79.875 268.345c-66.123 9.62-131.398 17.49-196.22.688-23.464 45.56-24.194 89.256.47 134.656 65.572-6.135 131.11-5.805 196.593.06 15.795-23.503 20.762-45.73 19.283-68.28-1.44-21.957-9.355-44.356-20.125-67.125z"
      ></path>
    </svg>
  );
};

export const MoonIcon = ({ className = "w-5 h-5" }: classNameProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="0"
      viewBox="0 0 24 24"
      className={className}
    >
      <path d="M9.822 2.238a9 9 0 0011.94 11.94C20.768 18.654 16.775 22 12 22 6.477 22 2 17.523 2 12c0-4.775 3.346-8.768 7.822-9.762zm8.342.053L19 2.5v1l-.836.209a2 2 0 00-1.455 1.455L16.5 6h-1l-.209-.836a2 2 0 00-1.455-1.455L13 3.5v-1l.836-.209A2 2 0 0015.29.836L15.5 0h1l.209.836a2 2 0 001.455 1.455zm5 5L24 7.5v1l-.836.209a2 2 0 00-1.455 1.455L21.5 11h-1l-.209-.836a2 2 0 00-1.455-1.455L18 8.5v-1l.836-.209a2 2 0 001.455-1.455L20.5 5h1l.209.836a2 2 0 001.455 1.455z"></path>
    </svg>
  );
};

export const SunIcon = ({ className = "w-5 h-5" }: classNameProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="0"
      viewBox="0 0 16 16"
      className={className}
    >
      <path d="M8 11a3 3 0 110-6 3 3 0 010 6m0 1a4 4 0 100-8 4 4 0 000 8M8 0a.5.5 0 01.5.5v2a.5.5 0 01-1 0v-2A.5.5 0 018 0m0 13a.5.5 0 01.5.5v2a.5.5 0 01-1 0v-2A.5.5 0 018 13m8-5a.5.5 0 01-.5.5h-2a.5.5 0 010-1h2a.5.5 0 01.5.5M3 8a.5.5 0 01-.5.5h-2a.5.5 0 010-1h2A.5.5 0 013 8m10.657-5.657a.5.5 0 010 .707l-1.414 1.415a.5.5 0 11-.707-.708l1.414-1.414a.5.5 0 01.707 0m-9.193 9.193a.5.5 0 010 .707L3.05 13.657a.5.5 0 01-.707-.707l1.414-1.414a.5.5 0 01.707 0m9.193 2.121a.5.5 0 01-.707 0l-1.414-1.414a.5.5 0 01.707-.707l1.414 1.414a.5.5 0 010 .707M4.464 4.465a.5.5 0 01-.707 0L2.343 3.05a.5.5 0 11.707-.707l1.414 1.414a.5.5 0 010 .708"></path>
    </svg>
  );
};

export const DesktopIcon = ({ className = "w-5 h-5" }: classNameProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="0"
      viewBox="0 0 24 24"
      className={className}
    >
      <path d="M18.435 3.065H5.565a2.5 2.5 0 00-2.5 2.5v8.87a2.5 2.5 0 002.5 2.5h2.91l-.37 3H7a.5.5 0 000 1h10.01a.5.5 0 000-1H15.9l-.37-3h2.91a2.5 2.5 0 002.5-2.5v-8.87a2.5 2.5 0 00-2.505-2.5zm-9.33 16.87l.38-3h5.03l.37 3zm10.83-5.5a1.5 1.5 0 01-1.5 1.5H5.565a1.5 1.5 0 01-1.5-1.5v-.5h15.87zm0-1.5H4.065v-7.37a1.5 1.5 0 011.5-1.5h12.87a1.5 1.5 0 011.5 1.5z"></path>
    </svg>
  );
};

export const MenuIcon = ({ className = "w-5 h-5" }: classNameProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="0"
      viewBox="0 0 24 24"
      className={className}
    >
      <path
        stroke="none"
        d="M3 4h18v2H3V4zm6 7h12v2H9v-2zm-6 7h18v2H3v-2z"
      ></path>
    </svg>
  );
};

export const PlusSquareIcon = ({ className = "w-5 h-5" }: classNameProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="0"
      viewBox="0 0 24 24"
      className={className}
    >
      <g>
        <path d="M18.438 20.938H5.563a2.5 2.5 0 01-2.5-2.5V5.564a2.5 2.5 0 012.5-2.5h12.875a2.5 2.5 0 012.5 2.5v12.874a2.5 2.5 0 01-2.5 2.5zM5.563 4.064a1.5 1.5 0 00-1.5 1.5v12.874a1.5 1.5 0 001.5 1.5h12.875a1.5 1.5 0 001.5-1.5V5.564a1.5 1.5 0 00-1.5-1.5z"></path>
        <path d="M15 12.5h-2.5V15a.5.5 0 01-1 0v-2.5H9a.5.5 0 010-1h2.5V9a.5.5 0 011 0v2.5H15a.5.5 0 010 1z"></path>
      </g>
    </svg>
  );
};

export const PlusCircleIcon = ({ className = "w-5 h-5" }: classNameProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="0"
      viewBox="0 0 24 24"
      className={className}
    >
      <g>
        <path d="M15 12.5h-2.5V15a.5.5 0 01-1 0v-2.5H9a.5.5 0 010-1h2.5V9a.5.5 0 011 0v2.5H15a.5.5 0 010 1z"></path>
        <path d="M12 21.932A9.934 9.934 0 1121.932 12 9.944 9.944 0 0112 21.932zm0-18.867A8.934 8.934 0 1020.932 12 8.944 8.944 0 0012 3.065z"></path>
      </g>
    </svg>
  );
};

export const CirlceOffIcon = ({ className = "w-5 h-5" }: classNameProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      className={className}
    >
      <path d="M2 2l20 20M8.35 2.69A10 10 0 0121.3 15.65M19.08 19.08A10 10 0 114.92 4.92"></path>
    </svg>
  );
};

export const CheckIcon = ({ className = "w-5 h-5" }: classNameProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="0"
      viewBox="0 0 448 512"
      className={className}
    >
      <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7l233.4-233.3c12.5-12.5 32.8-12.5 45.3 0z"></path>
    </svg>
  );
};

export const ChevronUpDownIcon = ({ className = "w-5 h-5" }: classNameProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      className={className}
    >
      <path d="M7 15l5 5 5-5M7 9l5-5 5 5"></path>
    </svg>
  );
};

export const CalendarIcon = ({ className = "w-5 h-5" }: classNameProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="0"
      viewBox="0 0 512 512"
      className={className}
    >
      <rect
        width="416"
        height="384"
        x="48"
        y="80"
        fill="none"
        strokeLinejoin="round"
        strokeWidth="32"
        rx="48"
      ></rect>
      <path
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32"
        d="M128 48v32m256-32v32m80 80H48"
      ></path>
    </svg>
  );
};

export const ChevronDownIcon = ({ className = "w-5 h-5" }: classNameProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="0"
      viewBox="0 0 20 20"
      className={className}
    >
      <path
        fillRule="evenodd"
        stroke="none"
        d="M5.22 8.22a.75.75 0 011.06 0L10 11.94l3.72-3.72a.75.75 0 111.06 1.06l-4.25 4.25a.75.75 0 01-1.06 0L5.22 9.28a.75.75 0 010-1.06z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
};

export const ChevronUpIcon = ({ className = "w-5 h-5" }: classNameProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="0"
      viewBox="0 0 20 20"
      className={className}
    >
      <path
        fillRule="evenodd"
        stroke="none"
        d="M9.47 6.47a.75.75 0 011.06 0l4.25 4.25a.75.75 0 11-1.06 1.06L10 8.06l-3.72 3.72a.75.75 0 01-1.06-1.06l4.25-4.25z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
};

export const TrendingUpIcon = ({ className = "w-5 h-5" }: classNameProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      className={className}
    >
      <path d="M22 7L13.5 15.5 8.5 10.5 2 17"></path>
      <path d="M16 7L22 7 22 13"></path>
    </svg>
  );
};

export const TrendingDownIcon = ({ className = "w-5 h-5" }: classNameProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      className={className}
    >
      <path d="M22 17L13.5 8.5 8.5 13.5 2 7"></path>
      <path d="M16 17L22 17 22 11"></path>
    </svg>
  );
};

export const WalletIcon = ({ className = "w-5 h-5" }: classNameProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="0"
      viewBox="0 0 512 512"
      className={className}
    >
      <rect
        width="416"
        height="288"
        x="48"
        y="144"
        fill="none"
        strokeLinejoin="round"
        strokeWidth="32"
        rx="48"
        ry="48"
      ></rect>
      <path
        fill="none"
        strokeLinejoin="round"
        strokeWidth="32"
        d="M411.36 144v-30A50 50 0 00352 64.9L88.64 109.85A50 50 0 0048 159v49"
      ></path>
      <path d="M368 320a32 32 0 1132-32 32 32 0 01-32 32z"></path>
    </svg>
  );
};

export const TrashIcon = ({ className = "w-5 h-5" }: classNameProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      stroke="currentColor"
      strokeWidth="0"
      viewBox="0 0 24 24"
      className={className}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M17 6V5a2 2 0 00-2-2H9a2 2 0 00-2 2v1H4a1 1 0 000 2h1v11a3 3 0 003 3h8a3 3 0 003-3V8h1a1 1 0 100-2h-3zm-2-1H9v1h6V5zm2 3H7v11a1 1 0 001 1h8a1 1 0 001-1V8z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
};

export const ArrowUpIcon = ({ className = "w-5 h-5" }: classNameProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="0"
      viewBox="0 0 24 24"
      className={className}
    >
      <path d="M18.655 10.405a.75.75 0 01-1.06 0l-4.97-4.97v14.44a.75.75 0 01-1.5 0V5.435l-4.97 4.97a.749.749 0 01-1.275-.326.749.749 0 01.215-.734l6.25-6.25a.75.75 0 011.06 0l6.25 6.25a.75.75 0 010 1.06z"></path>
    </svg>
  );
};

export const ArrowDownIcon = ({ className = "w-5 h-5" }: classNameProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="0"
      viewBox="0 0 24 24"
      className={className}
    >
      <path d="M4.97 13.22a.75.75 0 011.06 0L11 18.19V3.75a.75.75 0 011.5 0v14.44l4.97-4.97a.749.749 0 011.275.326.749.749 0 01-.215.734l-6.25 6.25a.75.75 0 01-1.06 0l-6.25-6.25a.75.75 0 010-1.06z"></path>
    </svg>
  );
};

export const MixerHorizontIcon = ({ className = "w-5 h-5" }: classNameProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      stroke="currentColor"
      strokeWidth="0"
      viewBox="0 0 15 15"
      className={className}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M5.5 3a1.5 1.5 0 100 3 1.5 1.5 0 000-3zM3 5c.017 0 .033 0 .05-.002a2.5 2.5 0 004.9 0A.507.507 0 008 5h5.5a.5.5 0 000-1H8c-.017 0-.033 0-.05.002a2.5 2.5 0 00-4.9 0A.507.507 0 003 4H1.5a.5.5 0 000 1H3zm8.95 5.998a2.5 2.5 0 01-4.9 0A.507.507 0 017 11H1.5a.5.5 0 010-1H7c.017 0 .033 0 .05.002a2.5 2.5 0 014.9 0A.506.506 0 0112 10h1.5a.5.5 0 010 1H12c-.017 0-.033 0-.05-.002zM8 10.5a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
};

export const DownloadIcon = ({ className = "w-5 h-5" }: classNameProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      className={className}
    >
      <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"></path>
      <path d="M7 10L12 15 17 10"></path>
      <path d="M12 15L12 3"></path>
    </svg>
  );
};
