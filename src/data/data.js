import Home from "../Pages/Home";
import Delivery from "../Pages/Delivery";
import Pickup from "../Pages/Pickup";
import Catalog from "../Pages/Catalog";
import Cart from "../Pages/Cart";

export const ApiRoutes = [
  {
    icon: (
      <svg
        width="24"
        height="25"
        viewBox="0 0 24 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_1_1286)">
          <path
            d="M8.7999 22.5999V15.2963C8.7999 14.624 9.37298 14.079 10.0799 14.079H13.9199C14.6268 14.079 15.1999 14.624 15.1999 15.2963V22.5999M11.2581 3.62515L2.93811 9.25167C2.60045 9.48001 2.3999 9.84967 2.3999 10.2437V20.774C2.3999 21.7824 3.25952 22.5999 4.3199 22.5999H19.6799C20.7403 22.5999 21.5999 21.7824 21.5999 20.774V10.2437C21.5999 9.84967 21.3994 9.48001 21.0617 9.25167L12.7417 3.62515C12.2976 3.32482 11.7022 3.32482 11.2581 3.62515Z"
            stroke="#B4E0A0"
            stroke-width="2"
            stroke-linecap="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_1_1286">
            <rect
              width="24"
              height="24"
              fill="white"
              transform="translate(0 0.355469)"
            />
          </clipPath>
        </defs>
      </svg>
    ),
    name: "Home",
    link: "/",
    component: Home,
  },
  {
    icon: (
      <svg
        width="24"
        height="25"
        viewBox="0 0 24 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_1_321)">
          <path
            d="M5.14276 18.3842H4.22847C3.21858 18.3842 2.3999 17.5656 2.3999 16.5557V8.32711C2.3999 7.31721 3.21858 6.49854 4.22847 6.49854H12.457C13.4669 6.49854 14.2856 7.31721 14.2856 8.32711V16.5557C14.2856 17.5656 13.4669 18.3842 12.457 18.3842H11.5428M15.657 18.3842H15.1999C14.695 18.3842 14.2856 17.9749 14.2856 17.47V9.69853C14.2856 9.19359 14.695 8.78425 15.1999 8.78425H17.5033C17.7811 8.78425 18.0438 8.9105 18.2173 9.12739L21.3995 13.1052C21.5292 13.2674 21.5999 13.4688 21.5999 13.6764V17.47C21.5999 17.9749 21.1906 18.3842 20.6856 18.3842M10.6285 17.9271C10.6285 19.1895 9.60512 20.2128 8.34276 20.2128C7.08039 20.2128 6.05704 19.1895 6.05704 17.9271C6.05704 16.6647 7.08039 15.6414 8.34276 15.6414C9.60512 15.6414 10.6285 16.6647 10.6285 17.9271ZM20.2285 17.9271C20.2285 19.1895 19.2051 20.2128 17.9428 20.2128C16.6804 20.2128 15.657 19.1895 15.657 17.9271C15.657 16.6647 16.6804 15.6414 17.9428 15.6414C19.2051 15.6414 20.2285 16.6647 20.2285 17.9271Z"
            stroke="#B4E0A0"
            stroke-width="2"
            stroke-linecap="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_1_321">
            <rect
              width="24"
              height="24"
              fill="white"
              transform="translate(0 0.355469)"
            />
          </clipPath>
        </defs>
      </svg>
    ),
    name: "Delivery",
    link: "/delivery",
    component: Delivery,
  },
  {
    icon: (
      <svg
        width="24"
        height="25"
        viewBox="0 0 24 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_1_292)">
          <g clip-path="url(#clip1_1_292)">
            <path
              d="M12.1744 22.6535V8.68988M10.5495 7.85219C10.7223 7.89098 10.9045 7.84344 11.0289 7.71898C11.1534 7.59452 11.2009 7.41229 11.1622 7.23948C11.007 6.6057 10.4355 4.48346 9.84861 3.89659C9.11745 3.16543 7.92745 3.16239 7.1999 3.88993C6.47241 4.61742 6.47535 5.80742 7.20656 6.53863C7.80303 7.1351 9.91569 7.69705 10.5495 7.85219ZM12.324 7.23943C12.2852 7.4123 12.3328 7.59447 12.4572 7.71893C12.5817 7.84339 12.7639 7.89086 12.9367 7.85214C13.5705 7.69699 15.6928 7.12545 16.2796 6.53858C17.0108 5.80742 17.0138 4.61742 16.2863 3.88988C15.5588 3.16239 14.3688 3.16533 13.6376 3.89654C13.0411 4.49301 12.4792 6.60567 12.324 7.23943ZM3.09808 13.5772H20.9017C21.2873 13.5772 21.5999 13.2646 21.5999 12.879V9.38806C21.5999 9.00247 21.2873 8.68988 20.9017 8.68988H3.09808C2.71249 8.68988 2.3999 9.00247 2.3999 9.38806V12.879C2.3999 13.2646 2.71249 13.5772 3.09808 13.5772ZM19.8544 13.5772V21.9553C19.8544 22.3409 19.5419 22.6535 19.1563 22.6535H4.84354C4.45794 22.6535 4.14536 22.3409 4.14536 21.9553V13.5772H19.8544Z"
              stroke="#B4E0A0"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_1_292">
            <rect
              width="24"
              height="24"
              fill="white"
              transform="translate(0 0.355469)"
            />
          </clipPath>
          <clipPath id="clip1_1_292">
            <rect
              width="24"
              height="24"
              fill="white"
              transform="translate(0 0.355469)"
            />
          </clipPath>
        </defs>
      </svg>
    ),
    name: "Pickup",
    link: "/pickup",
    component: Pickup,
  },
  {
    icon: (
      <svg
        width="24"
        height="25"
        viewBox="0 0 24 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_1_297)">
          <path
            d="M8.4668 13.8823L7.82036 13.1194L7.82034 13.1194L8.4668 13.8823ZM8.51961 13.8318L7.80712 13.1301L7.80634 13.1309L8.51961 13.8318ZM6.29789 15.7201L5.65144 14.9571L5.65143 14.9571L6.29789 15.7201ZM6.17908 15.8452L6.99989 16.4164L6.99989 16.4164L6.17908 15.8452ZM17.6924 13.9591L16.9999 14.6805L17.6924 13.9591ZM15.8413 12.1821L15.1488 12.9034L15.1488 12.9034L15.8413 12.1821ZM15.1539 12.1772L14.4716 11.4462L14.469 11.4485L15.1539 12.1772ZM11.7252 15.3997L12.4075 16.1308L12.41 16.1284L11.7252 15.3997ZM11.0272 15.3845L10.3112 16.0826L10.3126 16.0841L11.0272 15.3845ZM11.0182 15.3752L10.3015 16.0727L10.3022 16.0734L11.0182 15.3752ZM10.9692 15.3277L11.6239 14.5718L11.6239 14.5718L10.9692 15.3277ZM9.29885 13.8809L9.95356 13.125L9.95356 13.125L9.29885 13.8809ZM9.24966 13.8331L9.96654 13.1359L9.96587 13.1352L9.24966 13.8331ZM9.24085 13.8241L9.95707 13.1262L9.95571 13.1248L9.24085 13.8241ZM8.52909 13.8221L7.81803 13.119L7.81661 13.1204L8.52909 13.8221ZM16.3194 7.5997V6.5997C15.7671 6.5997 15.3194 7.04742 15.3194 7.5997H16.3194ZM16.6626 7.5997H17.6626C17.6626 7.04742 17.2149 6.5997 16.6626 6.5997V7.5997ZM16.6626 7.89033V8.89033C17.2149 8.89033 17.6626 8.44261 17.6626 7.89033H16.6626ZM16.3194 7.89033H15.3194C15.3194 8.44261 15.7671 8.89033 16.3194 8.89033V7.89033ZM1.3999 6.9999V18.9999H3.3999V6.9999H1.3999ZM5.9999 23.5999H17.9999V21.5999H5.9999V23.5999ZM22.5999 18.9999V6.9999H20.5999V18.9999H22.5999ZM17.9999 2.3999H5.9999V4.3999H17.9999V2.3999ZM22.5999 6.9999C22.5999 4.45939 20.5404 2.3999 17.9999 2.3999V4.3999C19.4358 4.3999 20.5999 5.56396 20.5999 6.9999H22.5999ZM17.9999 23.5999C20.5404 23.5999 22.5999 21.5404 22.5999 18.9999H20.5999C20.5999 20.4358 19.4358 21.5999 17.9999 21.5999V23.5999ZM1.3999 18.9999C1.3999 21.5404 3.45939 23.5999 5.9999 23.5999V21.5999C4.56396 21.5999 3.3999 20.4358 3.3999 18.9999H1.3999ZM3.3999 6.9999C3.3999 5.56396 4.56396 4.3999 5.9999 4.3999V2.3999C3.45939 2.3999 1.3999 4.45939 1.3999 6.9999H3.3999ZM9.11324 14.6453C9.17248 14.5951 9.22117 14.5446 9.23287 14.5327L7.80634 13.1309C7.80174 13.1356 7.79945 13.1379 7.79749 13.1399C7.79576 13.1416 7.79568 13.1417 7.79664 13.1407C7.79833 13.1391 7.8069 13.1308 7.82036 13.1194L9.11324 14.6453ZM6.94434 16.483L9.11325 14.6453L7.82034 13.1194L5.65144 14.9571L6.94434 16.483ZM6.99989 16.4164C6.97954 16.4456 6.96167 16.4653 6.95195 16.4753C6.94257 16.4849 6.93829 16.4881 6.94435 16.483L5.65143 14.9571C5.57867 15.0188 5.46267 15.1239 5.35827 15.274L6.99989 16.4164ZM6.9999 16.4163L6.99989 16.4164L5.35827 15.274C5.12575 15.6081 4.9999 16.0065 4.9999 16.4163H6.9999ZM6.9999 18.4999V16.4163H4.9999V18.4999H6.9999ZM6.4999 17.9999C6.77604 17.9999 6.9999 18.2238 6.9999 18.4999H4.9999C4.9999 19.3283 5.67148 19.9999 6.4999 19.9999V17.9999ZM17.4999 17.9999H6.4999V19.9999H17.4999V17.9999ZM16.9999 18.4999C16.9999 18.2238 17.2238 17.9999 17.4999 17.9999V19.9999C18.3283 19.9999 18.9999 19.3283 18.9999 18.4999H16.9999ZM16.9999 14.6805V18.4999H18.9999V14.6805H16.9999ZM16.9999 14.6805H18.9999C18.9999 14.1359 18.7778 13.6149 18.385 13.2377L16.9999 14.6805ZM15.1488 12.9034L16.9999 14.6805L18.385 13.2377L16.5339 11.4607L15.1488 12.9034ZM15.8362 12.9083C15.6421 13.0894 15.3403 13.0873 15.1488 12.9034L16.5339 11.4607C15.9593 10.9091 15.0538 10.9027 14.4716 11.4462L15.8362 12.9083ZM12.41 16.1284L15.8388 12.9059L14.469 11.4485L11.0403 14.671L12.41 16.1284ZM10.3126 16.0841C10.8772 16.6607 11.8073 16.691 12.4075 16.1308L11.0429 14.6687C11.2432 14.4817 11.553 14.4921 11.7417 14.6849L10.3126 16.0841ZM10.3022 16.0734L10.3112 16.0826L11.7431 14.6863L11.7341 14.6771L10.3022 16.0734ZM10.3144 16.0835C10.302 16.0728 10.294 16.065 10.2925 16.0634C10.2916 16.0626 10.2917 16.0626 10.2933 16.0643C10.2951 16.0661 10.2972 16.0683 10.3015 16.0727L11.7348 14.6778C11.724 14.6667 11.6787 14.6193 11.6239 14.5718L10.3144 16.0835ZM8.64414 14.6368L10.3145 16.0836L11.6239 14.5718L9.95356 13.125L8.64414 14.6368ZM8.53277 14.5303C8.54369 14.5415 8.58912 14.5891 8.64414 14.6368L9.95356 13.125C9.96605 13.1358 9.97402 13.1437 9.97559 13.1452C9.97649 13.1461 9.97642 13.146 9.97479 13.1444C9.97297 13.1425 9.97084 13.1404 9.96654 13.1359L8.53277 14.5303ZM8.52464 14.522L8.53344 14.531L9.96587 13.1352L9.95706 13.1262L8.52464 14.522ZM9.24016 14.5253C9.04295 14.7247 8.72238 14.7241 8.52599 14.5234L9.95571 13.1248C9.3701 12.5262 8.40613 12.5243 7.81803 13.119L9.24016 14.5253ZM9.23209 14.5335L9.24158 14.5238L7.81661 13.1204L7.80712 13.1301L9.23209 14.5335ZM16.3194 8.5997H16.6626V6.5997H16.3194V8.5997ZM15.6626 7.5997V7.89033H17.6626V7.5997H15.6626ZM16.6626 6.89033H16.3194V8.89033H16.6626V6.89033ZM17.3194 7.89033V7.5997H15.3194V7.89033H17.3194Z"
            fill="#B4E0A0"
          />
        </g>
        <defs>
          <clipPath id="clip0_1_297">
            <rect
              width="24"
              height="24"
              fill="white"
              transform="translate(0 0.355469)"
            />
          </clipPath>
        </defs>
      </svg>
    ),
    name: "Catalog",
    link: "/catalog",
    component: Catalog,
  },
  {
    icon: (
      <svg
        width="22"
        height="21"
        viewBox="0 0 22 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 0C0.447715 0 0 0.447715 0 1C0 1.55228 0.447715 2 1 2V0ZM3.29254 1L4.25776 0.738585C4.13971 0.302682 3.74414 0 3.29254 0V1ZM7.01791 14.7552L6.05268 15.0166C6.18295 15.4976 6.64747 15.8093 7.14194 15.7475L7.01791 14.7552ZM18.4806 13.3224L18.6046 14.3147C19.0293 14.2616 19.3731 13.9441 19.4599 13.525L18.4806 13.3224ZM20.2 5.01194L21.1793 5.21455C21.2402 4.92003 21.1653 4.61373 20.9754 4.38052C20.7855 4.1473 20.5007 4.01194 20.2 4.01194V5.01194ZM4.3791 5.01194L3.41388 5.27336L4.3791 5.01194ZM1 2H3.29254V0H1V2ZM7.14194 15.7475L18.6046 14.3147L18.3566 12.3301L6.89387 13.7629L7.14194 15.7475ZM19.4599 13.525L21.1793 5.21455L19.2207 4.80934L17.5013 13.1198L19.4599 13.525ZM2.32731 1.26142L3.41388 5.27336L5.34433 4.75053L4.25776 0.738585L2.32731 1.26142ZM3.41388 5.27336L6.05268 15.0166L7.98314 14.4938L5.34433 4.75053L3.41388 5.27336ZM20.2 4.01194H4.3791V6.01194H20.2V4.01194ZM9.6 18.5073C9.6 18.7834 9.37614 19.0073 9.1 19.0073V21.0073C10.4807 21.0073 11.6 19.888 11.6 18.5073H9.6ZM9.1 19.0073C8.82386 19.0073 8.6 18.7834 8.6 18.5073H6.6C6.6 19.888 7.71929 21.0073 9.1 21.0073V19.0073ZM8.6 18.5073C8.6 18.2311 8.82386 18.0073 9.1 18.0073V16.0073C7.71929 16.0073 6.6 17.1266 6.6 18.5073H8.6ZM9.1 18.0073C9.37614 18.0073 9.6 18.2311 9.6 18.5073H11.6C11.6 17.1266 10.4807 16.0073 9.1 16.0073V18.0073ZM17.6 18.5073C17.6 18.7834 17.3761 19.0073 17.1 19.0073V21.0073C18.4807 21.0073 19.6 19.888 19.6 18.5073H17.6ZM17.1 19.0073C16.8239 19.0073 16.6 18.7834 16.6 18.5073H14.6C14.6 19.888 15.7193 21.0073 17.1 21.0073V19.0073ZM16.6 18.5073C16.6 18.2311 16.8239 18.0073 17.1 18.0073V16.0073C15.7193 16.0073 14.6 17.1266 14.6 18.5073H16.6ZM17.1 18.0073C17.3761 18.0073 17.6 18.2311 17.6 18.5073H19.6C19.6 17.1266 18.4807 16.0073 17.1 16.0073V18.0073Z"
          fill="#B4E0A0"
        />
      </svg>
    ),
    name: "Cart",
    link: "/cart",
    component: Cart,
  },
];
