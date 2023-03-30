const BotIcon = (props) => {
  return (
    <svg
      width="50"
      height="50"
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <circle cx="25" cy="25" r="25" fill="#50DCFF" />
      <circle cx="24.9993" cy="23.8372" r="23.8372" fill="white" />
      <mask
        id="mask0_564_535"
        style={{ maskType: "alpha" }}
        maskUnits="userSpaceOnUse"
        x="2"
        y="1"
        width="46"
        height="46"
      >
        <circle cx="24.9967" cy="24.2247" r="22.6744" fill="white" />
        <circle
          cx="24.9967"
          cy="24.2247"
          r="22.6744"
          fill="#F26363"
          fillOpacity="0.2"
        />
      </mask>
      <g mask="url(#mask0_564_535)">
        <rect
          x="1.93359"
          y="9.68945"
          width="43.4109"
          height="67.8295"
          fill="url(#pattern0)"
        />
      </g>
      <defs>
        <pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use
            xlinkHref="#image0_564_535"
            transform="matrix(0.000612881 0 0 0.000388158 -0.725762 -0.103003)"
          />
        </pattern>
        <image
          id="image0_564_535"
          width="4000"
          height="3107"
        />
      </defs>
    </svg>
  );
};
export default BotIcon;