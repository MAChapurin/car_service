import Link from "next/link";

import styles from './logo.module.css'


export function Logo() {
  return (
    <Link aria-label="логотип, переход на главную страницу" href={'/'} className={styles.link}>
      <svg className={styles.logo} xmlns="http://www.w3.org/2000/svg" width="30" height="25" viewBox="0 0 85 70" fill="none">
        <g clipPath="url(#clip0_919_128)">
          <path d="M72.9247 16.6028L71.8451 15.0333C71.6594 14.7399 71.4807 14.8217 71.3431 14.8559L69.6103 15.2721C69.0464 15.4086 69.1014 15.4154 68.7507 14.9514L68.1799 14.2076C67.8086 13.7231 67.8224 13.7709 68.0974 13.2318L68.8057 11.8533C69.0464 11.3825 69.1151 11.4234 68.7369 11.0549L67.3616 9.73109C67.121 9.48543 66.9628 9.59461 66.839 9.65602L65.2231 10.4067C64.7005 10.6523 64.7555 10.6455 64.3154 10.2702L63.6071 9.65602C63.1464 9.25341 63.167 9.30118 63.332 8.71432L63.7446 7.21988C63.8822 6.71491 63.9647 6.73538 63.5177 6.4556L61.9017 5.43883C61.6129 5.24093 61.4823 5.38424 61.3722 5.47295L59.9419 6.53066C59.4743 6.87186 59.5294 6.85821 59.0274 6.57843L58.2091 6.12122C57.6727 5.82097 57.7071 5.86191 57.7483 5.25458L57.8446 3.71237C57.879 3.18693 57.9615 3.19375 57.4664 3.00951L55.6785 2.33394C55.3553 2.19746 55.2591 2.36805 55.1697 2.47041L53.98 3.79426C53.595 4.22417 53.6431 4.19687 53.093 4.01945L52.199 3.73284C51.6145 3.5486 51.6558 3.57589 51.5733 2.97539L51.3601 1.44682C51.2845 0.928203 51.367 0.914555 50.8444 0.832668L48.9534 0.52559C48.6095 0.457351 48.5476 0.641598 48.4789 0.764428L47.5849 2.29982C47.2961 2.79796 47.3374 2.76384 46.7598 2.70243L45.8246 2.60007C45.2125 2.53183 45.2607 2.55913 45.0544 1.97909L44.5318 0.518767C44.353 0.0206187 44.4286 0.000146929 43.906 0.0206188L41.9944 0.102506C41.6437 0.102506 41.623 0.3004 41.5818 0.430055L41.0179 2.10875C40.8322 2.65466 40.8666 2.61372 40.289 2.66831L39.3538 2.75702C38.7418 2.81161 38.7899 2.82526 38.4736 2.30664L37.6691 0.982795C37.394 0.532414 37.4628 0.491471 36.9539 0.621126L35.0973 1.07833C34.7534 1.15339 34.7741 1.34446 34.7534 1.48094L34.5403 3.24152C34.4715 3.81473 34.4921 3.76696 33.942 3.93074L33.0412 4.20369C32.4567 4.38112 32.5048 4.38794 32.0854 3.93756L31.0264 2.80479C30.6688 2.42265 30.7238 2.36123 30.2494 2.59325L28.5234 3.41212C28.207 3.5486 28.2621 3.73967 28.2689 3.87615L28.4202 5.64355C28.4684 6.21676 28.4821 6.16217 27.9732 6.44195L27.1481 6.8855C26.6048 7.17893 26.6598 7.17211 26.1579 6.81726L24.8926 5.9165C24.4663 5.60943 24.5075 5.54801 24.088 5.86191L22.5615 7.01516C22.2795 7.21305 22.3689 7.38365 22.4033 7.52013L22.9053 9.21929C23.0703 9.77203 23.0703 9.71744 22.6302 10.0859L21.9151 10.6864C21.4475 11.0822 21.4956 11.0618 20.9317 10.8161L19.5083 10.1883C19.027 9.97675 19.0545 9.90169 18.7106 10.2975L17.4523 11.7305C17.2116 11.983 17.3354 12.1331 17.4041 12.2559L18.243 13.8186C18.5181 14.3236 18.5044 14.2758 18.1468 14.7262L17.5692 15.4564C17.1909 15.9341 17.2322 15.9068 16.634 15.7771L15.1143 15.4427C14.5985 15.3335 14.6123 15.2517 14.351 15.7089L13.4089 17.3603C13.2232 17.6537 13.3814 17.7765 13.4639 17.8857L14.5985 19.2505C14.7223 19.4006 14.8048 19.4961 14.8461 19.5712C17.3354 19.8988 21.1724 20.315 26.206 20.6289C30.325 15.7703 36.4932 12.679 43.3903 12.679C50.2874 12.679 56.2355 15.6611 60.3545 20.3696C63.9578 20.1103 67.7261 19.7759 71.6457 19.346C71.8589 19.0389 72.8559 17.4217 72.8559 17.4217C73.186 17.0122 73.1035 16.8689 72.9522 16.6301L72.9247 16.6028Z" fill="white" />
          <path d="M43.3625 58.7337C34.1756 58.7337 25.6762 53.4179 21.7085 45.1882C21.6398 45.0449 21.4266 44.5536 21.2684 44.1987L21.124 43.8644L22.3962 43.3048L22.5475 43.646C22.6987 43.9872 22.905 44.4581 22.9669 44.5945C26.7008 52.3465 34.7119 57.3553 43.3694 57.3553C52.632 57.3553 60.8631 51.8484 64.3289 43.3253L65.6148 43.8439C61.929 52.8924 53.1959 58.7337 43.3625 58.7337Z" fill="white" />
          <path d="M43.363 69.9999C27.7947 69.9999 14.2274 60.0984 9.60645 45.3587L10.9336 44.9492C15.3758 59.1089 28.4067 68.6215 43.363 68.6215C58.3193 68.6215 71.0752 59.2863 75.648 45.3928L76.9683 45.8227C72.2098 60.2826 58.7044 69.9999 43.363 69.9999Z" fill="white" />
          <path d="M9.71638 45.8294L9.45508 44.4715C9.7989 44.4032 44.4907 37.9682 77.3052 44.5534L77.0301 45.9045C44.4907 39.374 10.0602 45.7612 9.71638 45.8294Z" fill="white" />
          <path d="M41.9181 21.1476C26.7692 21.1476 16.6883 19.7077 16.5508 19.6873L17.8642 18.1587C18.0636 18.1928 38.1498 21.7822 68.9013 18.1587L69.0664 19.5303C58.7035 20.7518 49.5303 21.1612 41.9112 21.1612L41.9181 21.1476Z" fill="white" />
          <path d="M26.9416 44.649L27.5399 45.5157C27.643 45.6794 27.7393 45.6317 27.815 45.6112L28.7777 45.3792C29.0871 45.3041 29.0596 45.3041 29.2521 45.5566L29.5685 45.9661C29.7748 46.2322 29.7679 46.2049 29.6097 46.5051L29.2178 47.2694C29.0871 47.5287 29.0458 47.5083 29.2521 47.713L30.0154 48.4431C30.1461 48.5796 30.2355 48.5182 30.3042 48.4841L31.1982 48.0678C31.487 47.9313 31.4595 47.9382 31.7002 48.1429L32.0921 48.4841C32.3465 48.7025 32.3328 48.682 32.2434 49.0027L32.0165 49.8284C31.9408 50.1082 31.8927 50.0945 32.1403 50.2515L33.0342 50.8179C33.1924 50.9271 33.268 50.8452 33.3299 50.8042L34.1207 50.2174C34.3751 50.0263 34.3476 50.0331 34.6295 50.1901L35.0834 50.4426C35.3791 50.6063 35.3584 50.5859 35.3378 50.9202L35.2828 51.7732C35.2622 52.0598 35.2209 52.0598 35.496 52.1622L36.4862 52.5375C36.665 52.6126 36.72 52.517 36.7681 52.4624L37.4283 51.7323C37.6414 51.4934 37.6139 51.5071 37.9234 51.6095L38.4185 51.7664C38.7417 51.8688 38.721 51.8483 38.7692 52.1895L38.8861 53.0357C38.9273 53.3223 38.8861 53.3291 39.168 53.3769L40.2132 53.5475C40.4058 53.5816 40.4402 53.4792 40.4745 53.4178L40.9696 52.5716C41.1278 52.2987 41.1072 52.3123 41.4235 52.3464L41.9392 52.401C42.2762 52.4352 42.2487 52.4215 42.3656 52.7422L42.6544 53.5475C42.7506 53.8204 42.7094 53.8341 43.0051 53.8272L44.0641 53.7863C44.2566 53.7863 44.2703 53.6771 44.291 53.6089L44.6073 52.6808C44.7104 52.3806 44.6898 52.401 45.0061 52.3737L45.5219 52.326C45.8588 52.2918 45.8313 52.285 46.0101 52.5785L46.4571 53.3086C46.6083 53.5543 46.5671 53.5816 46.8559 53.5133L47.8874 53.2608C48.073 53.2199 48.0662 53.1175 48.073 53.0357L48.1899 52.0598C48.2312 51.7459 48.2174 51.7732 48.52 51.6777L49.0151 51.5276C49.3383 51.432 49.3108 51.4252 49.5377 51.6777L50.1222 52.3055C50.3216 52.517 50.2873 52.5512 50.5486 52.4215L51.5044 51.9643C51.6832 51.8892 51.6488 51.7869 51.6419 51.705L51.5594 50.7292C51.5319 50.4084 51.525 50.4426 51.8069 50.2856L52.2608 50.0399C52.5565 49.8762 52.529 49.883 52.8109 50.0809L53.5123 50.579C53.753 50.7496 53.7255 50.7838 53.9593 50.6063L54.8051 49.9717C54.9632 49.8625 54.9151 49.767 54.8876 49.6919L54.6057 48.7502C54.5163 48.4431 54.5163 48.4773 54.757 48.2657L55.1558 47.9313C55.4171 47.713 55.3896 47.7266 55.699 47.8631L56.4898 48.2111C56.758 48.3271 56.7374 48.3681 56.9299 48.1497L57.6244 47.3581C57.7551 47.2148 57.6863 47.1329 57.6519 47.0647L57.1843 46.1981C57.0331 45.9183 57.0399 45.9456 57.2394 45.6931L57.5625 45.2837C57.7688 45.0175 57.7482 45.0312 58.0783 45.1062L58.9172 45.2905C59.206 45.3519 59.1923 45.3928 59.3367 45.1404L59.8593 44.2259C59.9624 44.0622 59.873 43.9939 59.8249 43.9393L59.1923 43.1819C59.1235 43.1 59.0822 43.0454 59.0547 43.0045C57.6794 42.827 55.5477 42.5882 52.7628 42.4176C50.4798 45.1062 47.0691 46.819 43.2457 46.819C39.4224 46.819 36.1355 45.1677 33.8525 42.5609C31.8583 42.7042 29.7679 42.8885 27.6018 43.1273C27.4849 43.2979 26.9279 44.1918 26.9279 44.1918C26.7422 44.417 26.7904 44.4989 26.8729 44.6286L26.9416 44.649Z" fill="white" />
          <path d="M24.9059 21.8162C24.9059 21.8162 16.2209 21.3727 14.323 21.3454C10.6716 21.284 6.65578 21.9936 6.07128 25.0098C5.65869 27.1525 4.52408 32.059 3.4651 38.4462C2.93561 41.749 6.23632 42.5269 10.3966 42.0492C14.5568 41.5784 20.45 41.3191 22.8567 40.8482C25.2635 40.3773 27.6771 39.4902 28.2616 36.4126C28.406 35.7029 28.5504 34.6111 28.6261 34.1676C27.2577 34.2153 23.5513 34.1949 20.7044 34.1949C20.6288 34.7271 20.5187 35.9418 20.5187 35.9418C20.5187 35.9418 20.4087 38.3643 17.8163 38.6031C15.6983 38.7942 13.2159 38.8966 13.2159 38.8966C13.2159 38.8966 11.1736 39.1627 11.318 36.8016C11.4624 34.4337 12.8515 27.6712 13.1403 26.0129C13.3603 24.8324 13.7179 24.1705 16.7917 24.1227C20.7319 24.0613 21.6809 24.4161 21.4608 25.7809C21.3508 26.9069 21.2408 28.0874 21.2408 28.0874L28.908 27.9714L29.0524 25.4875C29.0524 25.4875 29.2725 21.9391 24.8922 21.823L24.9059 21.8162Z" fill="white" />
          <path d="M50.7205 29.4181C50.7205 29.4181 49.2833 29.4454 45.1712 29.4454C41.0591 29.4454 39.3812 29.8958 39.45 27.4392C39.5188 24.9894 40.6809 24.6277 44.016 24.6277C47.3511 24.6277 46.8491 26.2586 46.8491 26.2586L46.8147 27.2959C46.8147 27.2959 50.2873 27.2345 54.922 27.1184C55.3759 24.0954 53.9868 22.253 49.304 22.212C45.0818 22.1779 35.943 22.3485 35.943 22.3485C32.3604 22.4099 31.4527 25.2214 31.4527 25.2214C31.4527 25.2214 31.2601 25.7605 31.0332 29.1656C30.82 32.2773 33.4537 32.5162 34.5815 32.5162C34.5815 32.5162 39.6013 32.5776 44.3804 32.5776C47.633 32.5776 48.8708 33.0757 48.6851 35.2321C48.5132 37.2042 45.9207 37.4226 45.9207 37.4226C45.9207 37.4226 44.2154 37.3612 41.4992 37.4226C36.9401 37.525 37.779 34.3109 37.779 34.3109H29.988C29.9192 34.6998 29.7748 35.894 29.6717 36.4945C29.4585 38.5895 30.6894 40.4115 34.3408 40.2887C39.8832 39.9884 44.2429 40.1658 49.9297 40.1112C55.6166 40.0498 55.5478 36.7061 55.5478 36.7061C55.5478 36.7061 55.6166 35.9282 55.6166 33.1167C55.6166 29.3499 50.7343 29.4113 50.7343 29.4113L50.7205 29.4181Z" fill="white" />
          <path d="M77.2424 20.8608C73.1372 21.3795 60.5601 21.939 60.5601 21.939L56.1592 39.9406L64.2665 40.3568L65.4424 32.7004C68.1242 32.7413 71.3699 32.871 73.9899 32.9938C74.7188 37.443 75.1038 41.2303 75.1038 41.2303C75.1038 41.2303 79.9518 41.5169 83.1562 42.4723C82.2004 35.3344 79.8211 26.163 77.2424 20.8608ZM65.9169 29.6637L66.7489 24.2455L72.0094 23.9043C72.532 25.6035 72.9928 27.5824 73.3847 29.5818C70.5104 29.5682 67.6566 29.6228 65.9169 29.6637Z" fill="white" />
          <path d="M2.88078 31.4447L1.49861 40.4318C1.49861 40.4318 1.04476 42.5268 2.06248 43.5845C3.0802 44.649 5.47321 44.3692 7.3161 44.3556C3.65782 44.9356 1.42297 45.2086 0.467142 43.6664C-0.495563 42.1242 0.233342 40.657 0.976 37.9138C1.71866 35.1706 2.88766 31.4515 2.88766 31.4515L2.88078 31.4447Z" fill="white" />
          <path d="M75.1523 19.3459L78.1986 19.107C78.1986 19.107 81.6437 26.1016 82.6821 31.6631C82.2832 26.975 79.0788 17.9128 79.0788 17.9128L75.8744 18.5475L75.1523 19.339V19.3459Z" fill="white" />
          <path d="M5.94047 21.8573C5.94047 21.8573 7.15073 20.2264 11.9849 19.4621C11.2904 18.8889 10.8434 18.4521 10.8434 18.4521C10.8434 18.4521 6.47683 19.8988 5.93359 21.8641L5.94047 21.8573Z" fill="white" />
          <path d="M78.9141 44.1441C78.9141 44.1441 83.8032 45.4952 84.9997 46.4505C84.8416 43.5094 84.6009 42.5541 84.6009 42.5541L84.2021 44.8606C84.2021 44.8606 81.6371 44.301 78.9141 44.1441Z" fill="white" />
          <path d="M19.2265 47.5357C19.3915 47.8428 19.4809 48.1908 19.4947 48.5252L18.9996 48.7845C19.034 48.4842 18.9583 48.1567 18.807 47.8632C18.4907 47.2695 17.8099 46.8396 16.9779 47.2695C16.2077 47.6722 16.194 48.491 16.5103 49.0847C16.6822 49.4054 16.916 49.6443 17.1842 49.7671L16.6822 50.0332C16.414 49.8422 16.1733 49.5692 15.9946 49.2417C15.5682 48.4433 15.637 47.3173 16.7028 46.7578C17.8168 46.1709 18.7933 46.7168 19.2265 47.5289V47.5357Z" fill="white" />
          <path d="M20.2996 49.4191L17.3358 51.323L17.0264 50.8453L19.9901 48.9414L20.2996 49.4191Z" fill="white" />
          <path d="M22.3069 52.1282L21.8875 52.4489L21.1792 51.5345L18.7999 53.3497L18.4492 52.8993L20.8285 51.091L20.1133 50.1697L20.5328 49.849L22.3069 52.1418V52.1282Z" fill="white" />
          <path d="M20.7188 55.5606L21.654 54.6667L22.3004 52.1418L22.7473 52.6059L22.2247 54.5166L24.1708 54.073L24.6177 54.537L22.0459 55.083L21.1107 55.9769L20.7119 55.5675L20.7188 55.5606Z" fill="white" />
          <path d="M26.6047 56.0178C26.9279 56.2635 27.1961 56.591 27.3199 56.8981L26.9829 57.3348C26.8729 57.0073 26.6253 56.6866 26.3159 56.4682C25.9721 56.2089 25.6833 56.1475 25.4976 56.3863C25.0369 56.9868 26.8248 57.9626 26.0615 58.9589C25.6076 59.5458 24.9544 59.3684 24.3974 58.9385C24.0192 58.6519 23.7441 58.3038 23.5859 57.9422L23.9298 57.4986C24.0879 57.9217 24.363 58.2561 24.6793 58.5017C25.0369 58.7747 25.3738 58.8975 25.5732 58.6314C26.0683 57.9831 24.2598 57.0346 25.0231 56.0451C25.4151 55.5333 26.0683 55.6289 26.5978 56.0315L26.6047 56.0178Z" fill="white" />
          <path d="M30.1392 58.406L29.871 58.8496L28.2825 57.8942L27.7874 58.7131L29.2452 59.5865L28.9771 60.0301L27.5193 59.1566L27.0035 60.0028L28.6195 60.9718L28.3444 61.4154L26.2402 60.1529L28.0694 57.1504L30.1529 58.3992L30.1392 58.406Z" fill="white" />
          <path d="M29.1905 61.866L30.6483 58.6724L31.9342 59.2524C32.5324 59.5254 33.0619 60.044 32.7112 60.8083C32.4499 61.3746 31.9686 61.4907 31.501 61.4019L31.9548 63.1147L31.3291 62.8281L30.9096 61.1972L30.2563 60.9038L29.7062 62.098L29.1836 61.8591L29.1905 61.866ZM30.4695 60.4466L31.2534 60.8014C31.5972 60.9584 31.9892 60.9857 32.1749 60.5762C32.3605 60.1668 32.0855 59.8938 31.7416 59.7369L30.9577 59.382L30.4695 60.4466Z" fill="white" />
          <path d="M33.5642 63.6267L33.2686 59.8599L33.8599 60.0441L34.0456 63.0808L35.9573 60.6992L36.5486 60.8835L34.135 63.7973L33.5642 63.6199V63.6267Z" fill="white" />
          <path d="M37.5664 61.0608L36.81 64.4864L36.2461 64.3636L37.0025 60.938L37.5664 61.0608Z" fill="white" />
          <path d="M40.007 61.3883C40.3577 61.4361 40.6878 61.5589 40.9698 61.7431L40.8941 62.2959C40.6672 62.098 40.3577 61.9615 40.0277 61.9206C39.3607 61.8319 38.6111 62.1389 38.4873 63.0533C38.3773 63.9063 39.0306 64.3977 39.7045 64.4795C40.0621 64.5273 40.399 64.4795 40.6534 64.3294L40.5778 64.889C40.2615 64.9913 39.9039 65.0323 39.5326 64.9845C38.6249 64.8685 37.7447 64.1588 37.9097 62.9715C38.0748 61.7363 39.0856 61.2586 40.007 61.3815V61.3883Z" fill="white" />
          <path d="M43.9885 61.6612L43.9748 62.1799L42.1181 62.1253L42.0906 63.0806L43.796 63.1284L43.7822 63.647L42.0768 63.5992L42.0493 64.5887L43.9404 64.6433L43.9266 65.1619L41.4648 65.0869L41.568 61.5793L44.0023 61.6476L43.9885 61.6612Z" fill="white" />
          <path d="M45.7627 65.0732L46.7392 61.3883L47.3649 61.2996L49.3385 64.5614L48.7402 64.6433L48.3207 63.9404L46.5672 64.1861L46.3678 64.9777L45.7627 65.0664V65.0732ZM46.691 63.6743L48.0526 63.4832L47.2274 62.0843C47.1999 62.0297 47.1724 61.982 47.138 61.9001C47.1242 61.9888 47.1105 62.0434 47.0967 62.1048L46.6979 63.6743H46.691Z" fill="white" />
          <path d="M51.897 60.2554L52.4884 62.3844C52.7566 63.3603 52.1583 63.8857 51.4019 64.0904C50.6455 64.2951 49.8547 64.1587 49.5797 63.176L48.9883 61.0469L49.5453 60.8968L50.1298 62.9918C50.3017 63.6059 50.7349 63.7219 51.2644 63.5718C51.787 63.4285 52.0964 63.1078 51.9245 62.5004L51.34 60.4055L51.897 60.2554Z" fill="white" />
          <path d="M54.9085 59.0408L55.1079 59.5253L54.0283 59.9688L55.1698 62.7257L54.6403 62.9441L53.4988 60.1872L52.4123 60.6308L52.2129 60.1463L54.9085 59.0476V59.0408Z" fill="white" />
          <path d="M56.5034 58.0991C57.583 57.4918 58.5663 57.9695 59.0201 58.7815C59.4809 59.5867 59.3846 60.6649 58.2981 61.2723C57.2116 61.8796 56.2352 61.4019 55.7813 60.5899C55.3206 59.7846 55.4169 58.7065 56.5034 58.0991ZM56.7715 58.5631C56.0289 58.9794 55.967 59.7164 56.2971 60.3033C56.6271 60.8901 57.301 61.2177 58.0437 60.8014C58.7932 60.3851 58.8482 59.6482 58.5182 59.0613C58.1881 58.4744 57.5211 58.1469 56.7715 58.5631Z" fill="white" />
          <path d="M61.4411 54.7485L63.6141 57.5054L63.1602 57.8534L61.6405 55.9222L61.7918 57.9148L61.5236 58.1264L59.612 57.4986L61.1385 59.4366L60.6847 59.7914L58.5117 57.0346L58.9174 56.7138L61.221 57.4713L61.0285 55.0693L61.4342 54.7485H61.4411Z" fill="white" />
          <path d="M64.2052 56.9799L62.6924 53.486L63.1256 53.0356L66.7082 54.3936L66.2888 54.8303L65.5255 54.5301L64.3015 55.7993L64.6384 56.55L64.2121 56.9867L64.2052 56.9799ZM64.0677 55.308L65.0166 54.3254L63.4969 53.7317C63.4419 53.7112 63.3869 53.6839 63.3113 53.643C63.3594 53.718 63.38 53.7726 63.4075 53.8272L64.0677 55.308Z" fill="white" />
          <path d="M65.6766 49.9648L66.096 50.2856L65.3809 51.2L67.7464 53.022L67.3957 53.4723L65.0233 51.6504L64.3081 52.5648L63.8887 52.244L65.6766 49.9648Z" fill="white" />
          <path d="M66.2206 49.0776L69.1775 50.9952L68.8612 51.4728L65.9043 49.5553L66.2206 49.0776Z" fill="white" />
          <path d="M67.4098 46.9147C67.5748 46.6076 67.8086 46.3415 68.0906 46.1504L68.5857 46.4165C68.3175 46.553 68.0837 46.7918 67.9255 47.0853C67.6023 47.679 67.623 48.4774 68.4413 48.9209C69.2045 49.3304 69.8991 48.8936 70.2223 48.2999C70.3942 47.986 70.4629 47.6517 70.4217 47.3651L70.9237 47.6312C70.9099 47.9587 70.8205 48.3068 70.6417 48.6343C70.2085 49.4327 69.2252 49.9991 68.1662 49.4259C67.0591 48.8322 66.9766 47.7267 67.4167 46.9147H67.4098Z" fill="white" />
          <path d="M26.0062 16.3092L23.4551 13.2384L24.1152 12.6925L25.1261 13.914L25.628 13.5046L25.3942 11.6416L26.13 11.0343L26.3707 13.3544L28.7431 14.0641L28.0073 14.6646L26.1163 14.0983L25.6143 14.5077L26.6595 15.7633L25.9994 16.3092H26.0062Z" fill="#002F5B" />
          <path d="M29.3555 13.6889L27.3613 10.2292L28.7985 9.41716C29.4724 9.03502 30.3251 8.88489 30.8339 9.75836C31.1778 10.352 31.0127 10.8434 30.662 11.2187L32.4568 11.9352L31.5972 12.4265L29.9606 11.7509L29.4105 12.0648L30.105 13.2727L29.3555 13.6958V13.6889ZM29.0529 11.437L29.775 11.0276C30.0913 10.8502 30.2838 10.5568 30.0844 10.2019C29.8781 9.84707 29.5274 9.86754 29.218 10.045L28.4959 10.4544L29.0598 11.4302L29.0529 11.437Z" fill="#002F5B" />
          <path d="M32.7793 11.7713L32.9856 7.47224L33.8589 7.16516L36.7402 10.3792L35.9013 10.6727L35.3718 10.0653L33.6389 10.6727L33.6114 11.4711L32.7725 11.7645L32.7793 11.7713ZM33.6664 9.92203L34.8904 9.49213L33.8796 8.33206C33.8246 8.26382 33.7695 8.2024 33.6939 8.06592C33.7214 8.22287 33.7214 8.30476 33.7145 8.39347L33.6733 9.92203H33.6664Z" fill="#002F5B" />
          <path d="M37.9508 6.04606C38.4184 5.96417 38.9135 5.99147 39.2848 6.12113L39.4292 6.90588C39.051 6.72846 38.5834 6.69434 38.1433 6.77622C37.717 6.85811 37.5244 7.01506 37.5657 7.2539C37.6895 7.92947 39.8074 7.29484 40.055 8.68693C40.2131 9.56722 39.553 9.96983 38.721 10.1131C38.1708 10.2087 37.6413 10.1745 37.1944 10.0176L37.05 9.21919C37.552 9.43756 38.0746 9.46486 38.5215 9.38297C38.9754 9.30108 39.2436 9.15778 39.1954 8.878C39.0648 8.14784 36.9537 8.80293 36.6993 7.41767C36.5617 6.66022 37.1669 6.18254 37.9439 6.04606H37.9508Z" fill="#002F5B" />
          <path d="M41.1068 9.67637L41.0449 5.69119L41.8495 5.67754L43.7611 8.25017C43.7474 8.08639 43.7405 7.8885 43.7336 7.70425L43.6992 5.65024L44.5588 5.6366L44.6207 9.62178L43.8093 9.63543L41.8976 7.0628C41.9114 7.22658 41.9182 7.42447 41.9251 7.60872L41.9595 9.66272L41.0999 9.67637H41.1068Z" fill="#002F5B" />
          <path d="M48.4099 6.05973C49.8058 6.31221 50.3284 7.41769 50.1358 8.48223C49.9433 9.54676 49.0631 10.3929 47.6603 10.1404C46.2575 9.88796 45.7418 8.78248 45.9343 7.71794C46.1337 6.65341 47.0071 5.80724 48.4099 6.05973ZM48.2654 6.83766C47.4403 6.68753 46.9245 7.18568 46.7939 7.87489C46.6701 8.56411 46.9727 9.21239 47.7978 9.35569C48.6161 9.50582 49.1319 9.00767 49.2625 8.31845C49.3863 7.62923 49.0837 6.98096 48.2654 6.83766Z" fill="#002F5B" />
          <path d="M53.5324 7.56778C54.8596 8.07957 55.1828 9.10316 54.7633 10.1813C54.337 11.2595 53.4018 11.7918 52.0746 11.2732L50.6787 10.7341L52.1365 7.02869L53.5324 7.56778ZM53.2574 8.26382L52.6591 8.03181L51.7514 10.3383L52.3497 10.5703C53.0924 10.8569 53.6425 10.6181 53.945 9.86062C54.2476 9.09634 54 8.55043 53.2574 8.26382Z" fill="#002F5B" />
          <path d="M54.3584 12.1741L57.8516 9.61511L58.6424 10.0928L57.9479 14.3441L57.1915 13.8869L57.3359 13.1021L55.7681 12.1536L55.1217 12.6381L54.3653 12.1809L54.3584 12.1741ZM56.3663 11.6896L57.4734 12.3583L57.7416 10.8502C57.7622 10.7684 57.776 10.6865 57.831 10.5363C57.7279 10.6524 57.6591 10.7069 57.5903 10.7547L56.3663 11.6896Z" fill="#002F5B" />
          <path d="M58.5117 14.8149L61.166 11.826L62.4038 12.9111C62.9883 13.4229 63.4078 14.1735 62.7339 14.9309C62.28 15.4427 61.7574 15.4496 61.2898 15.2448L61.1867 17.1555L60.444 16.5073L60.5609 14.7535L60.0864 14.3373L59.1581 15.3813L58.5117 14.8149ZM60.5609 13.7982L61.1867 14.3441C61.4617 14.5829 61.7987 14.6648 62.0737 14.3646C62.3488 14.0575 62.2113 13.7368 61.9431 13.4979L61.3173 12.952L60.5678 13.7982H60.5609Z" fill="#002F5B" />
        </g>
        <defs>
          <clipPath id="clip0_919_128">
            <rect width="85" height="70" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </Link>
  )
}