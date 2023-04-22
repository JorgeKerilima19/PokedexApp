export function LogoSearch() {
  return (
    <svg
      viewBox="0 0 273.64 142.11"
      xmlns="http://www.w3.org/2000/svg"
      className="logo__search-page"
    >
      <path
        className="cls-1"
        d="M140.89 125.15l-31-28.6a60.34 60.34 0 0010.83-26.25h-24a37 37 0 01-71.72 0H1a60.59 60.59 0 0092.9 41.55l32 29.56z"
        fill="#fff"
      />
      <path
        d="M60.84 24.07A37 37 0 0197.4 55.33h23.74a60.57 60.57 0 00-120.59 0h23.74a37 37 0 0136.55-31.26z"
        fill="#d61516"
        stroke="#000"
      />
      <text
        fill="#ffed00"
        fontFamily="Exotic350BT-DemiBold,Exotc350 DmBd BT"
        fontSize="42.07"
        transform="matrix(.99 0 0 1 133.41 109.48)"
      >
        <tspan>P</tspan>
        <tspan x="23.19" y="0">
          o
        </tspan>
        <tspan x="43.86" y="0">
          k
        </tspan>
        <tspan x="61.47" y="0">
          emon
        </tspan>
      </text>
      <text
        fill="#d61516"
        fontFamily="Exotic350BT-DemiBold,Exotc350 DmBd BT"
        fontSize="51.17"
        transform="matrix(.99 0 0 1 127.45 57.27)"
      >
        Search
      </text>
      <circle cx="60.84" cy="60.82" fill="#e30613" r="23.32" stroke="#1d1d1b" />
      <circle
        className="cls-1"
        cx="60.84"
        cy="60.82"
        r="11.66"
        fill="#fff"
        stroke="#000"
      />
    </svg>
  );
}
export function LogoPokedex() {
  return (
    <svg
      width={"100%"}
      height={"100%"}
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
    >
      <symbol id="pokedex-logo" viewBox="0 0 67.93 67.93">
        <rect height="67.93" width="67.93" fill="#e30613" rx="14.89" />
        <circle fill="white" cx="18.69" cy="20.2" r="10.49" />
        <circle cx="52.18" cy="6.91" fill="#f39200" r="4.23" />
        <circle cx="18.69" cy="20.2" fill="#36a9e1" r="7.05" />
        <circle fill="white" cx="19.78" cy="24.39" r="1.97" />
        <path
          d="M67.93 48.86s.75-13.66-34 0c-35 13.71-34 0-34 0v-5.25s.43 14.89 34 0c35.57-13.88 34 0 34 0"
          fill="#1d1d1b"
        />
      </symbol>
      <symbol id="pokedex-text" viewBox="0 0 150 41.83">
        <text
          fill="red"
          fontFamily="Power-Green-Small,Power Green Small"
          fontSize="45"
          transform="translate(0 35)"
        >
          Pokedex
        </text>
      </symbol>
      <symbol id="pokedex__full" viewBox="0 0 210 68">
        <use xlinkHref="#pokedex-logo" x="0" y="0" width={68} height={68} />
        <use xlinkHref="#pokedex-text" x="75" y="20" width={150} height={42} />
      </symbol>
      <use
        className="pokedex-logo"
        xlinkHref="#pokedex-logo"
        x="100"
        y="0"
        width={"67.93"}
        height={"67.93"}
      />
      <use
        className="pokedex-logo-small"
        xlinkHref="#pokedex__full"
        x="0"
        y="0"
        width={"215"}
        height={"68"}
      />
    </svg>
  );
}
