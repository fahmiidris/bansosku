import { LogoAndMarkType } from "@/types/navbar.type"

const ApplicationMark: React.FC<LogoAndMarkType> = ({ className, color = "white" }) => {
    return (
        <svg className={className} width={2503} height={630} viewBox="0 0 2503 630" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M152 630C248.098 630 326 559.485 326 472.5C326 385.515 248.098 315 152 315V630Z" fill="#16A75C" />
            <path d="M152 315C248.098 315 326 244.485 326 157.5C326 70.5152 248.098 0 152 0V315Z" fill="#FFD026" />
            <path d="M0 34C0 15.2223 15.2223 0 34 0H124V630H34C15.2223 630 0 614.778 0 596V34Z" fill="#1E88E5" />
            <path d="M610.938 393.406H508.203L488.672 452H426.367L532.227 167.625H586.523L692.969 452H630.664L610.938 393.406ZM524.023 345.945H595.117L559.375 239.5L524.023 345.945ZM990.781 452H932.188L818.125 264.891V452H759.531V167.625H818.125L932.383 355.125V167.625H990.781V452ZM1229.41 377.391C1229.41 366.323 1225.51 357.859 1217.7 352C1209.88 346.01 1195.82 339.76 1175.51 333.25C1155.2 326.609 1139.11 320.099 1127.27 313.719C1094.97 296.271 1078.83 272.768 1078.83 243.211C1078.83 227.846 1083.12 214.174 1091.72 202.195C1100.44 190.086 1112.88 180.646 1129.02 173.875C1145.3 167.104 1163.53 163.719 1183.71 163.719C1204.02 163.719 1222.12 167.43 1238.01 174.852C1253.89 182.143 1266.2 192.495 1274.92 205.906C1283.78 219.318 1288.2 234.552 1288.2 251.609H1229.61C1229.61 238.589 1225.51 228.497 1217.3 221.336C1209.1 214.044 1197.58 210.398 1182.73 210.398C1168.41 210.398 1157.28 213.458 1149.34 219.578C1141.39 225.568 1137.42 233.51 1137.42 243.406C1137.42 252.651 1142.04 260.398 1151.29 266.648C1160.66 272.898 1174.4 278.758 1192.5 284.227C1225.83 294.253 1250.12 306.688 1265.35 321.531C1280.59 336.375 1288.2 354.865 1288.2 377C1288.2 401.609 1278.89 420.945 1260.27 435.008C1241.65 448.94 1216.59 455.906 1185.08 455.906C1163.2 455.906 1143.28 451.935 1125.31 443.992C1107.34 435.919 1093.61 424.917 1084.1 410.984C1074.73 397.052 1070.04 380.906 1070.04 362.547H1128.83C1128.83 393.927 1147.58 409.617 1185.08 409.617C1199.01 409.617 1209.88 406.818 1217.7 401.219C1225.51 395.49 1229.41 387.547 1229.41 377.391ZM1601.64 316.258C1601.64 344.253 1596.69 368.797 1586.8 389.891C1576.9 410.984 1562.71 427.26 1544.22 438.719C1525.86 450.177 1504.77 455.906 1480.94 455.906C1457.37 455.906 1436.34 450.242 1417.85 438.914C1399.36 427.586 1385.04 411.44 1374.88 390.477C1364.73 369.383 1359.58 345.164 1359.45 317.82V303.758C1359.45 275.763 1364.47 251.154 1374.49 229.93C1384.65 208.576 1398.91 192.234 1417.27 180.906C1435.76 169.448 1456.85 163.719 1480.55 163.719C1504.24 163.719 1525.27 169.448 1543.63 180.906C1562.12 192.234 1576.38 208.576 1586.41 229.93C1596.56 251.154 1601.64 275.698 1601.64 303.562V316.258ZM1542.27 303.367C1542.27 273.549 1536.93 250.893 1526.25 235.398C1515.57 219.904 1500.34 212.156 1480.55 212.156C1460.89 212.156 1445.72 219.839 1435.04 235.203C1424.36 250.438 1418.96 272.833 1418.83 302.391V316.258C1418.83 345.294 1424.17 367.82 1434.84 383.836C1445.52 399.852 1460.89 407.859 1480.94 407.859C1500.6 407.859 1515.7 400.177 1526.25 384.812C1536.8 369.318 1542.14 346.792 1542.27 317.234V303.367ZM1831.68 377.391C1831.68 366.323 1827.77 357.859 1819.96 352C1812.15 346.01 1798.09 339.76 1777.77 333.25C1757.46 326.609 1741.38 320.099 1729.53 313.719C1697.24 296.271 1681.09 272.768 1681.09 243.211C1681.09 227.846 1685.39 214.174 1693.98 202.195C1702.71 190.086 1715.14 180.646 1731.29 173.875C1747.57 167.104 1765.79 163.719 1785.98 163.719C1806.29 163.719 1824.39 167.43 1840.27 174.852C1856.16 182.143 1868.46 192.495 1877.19 205.906C1886.04 219.318 1890.47 234.552 1890.47 251.609H1831.88C1831.88 238.589 1827.77 228.497 1819.57 221.336C1811.37 214.044 1799.84 210.398 1785 210.398C1770.68 210.398 1759.54 213.458 1751.6 219.578C1743.66 225.568 1739.69 233.51 1739.69 243.406C1739.69 252.651 1744.31 260.398 1753.55 266.648C1762.93 272.898 1776.67 278.758 1794.77 284.227C1828.1 294.253 1852.38 306.688 1867.62 321.531C1882.85 336.375 1890.47 354.865 1890.47 377C1890.47 401.609 1881.16 420.945 1862.54 435.008C1843.92 448.94 1818.85 455.906 1787.34 455.906C1765.47 455.906 1745.55 451.935 1727.58 443.992C1709.61 435.919 1695.87 424.917 1686.37 410.984C1676.99 397.052 1672.3 380.906 1672.3 362.547H1731.09C1731.09 393.927 1749.84 409.617 1787.34 409.617C1801.28 409.617 1812.15 406.818 1819.96 401.219C1827.77 395.49 1831.68 387.547 1831.68 377.391ZM2059.38 337.938L2028.91 370.75V452H1970.31V167.625H2028.91V296.531L2054.69 261.18L2127.15 167.625H2199.22L2098.24 293.992L2202.15 452H2132.42L2059.38 337.938ZM2479.45 167.625V354.93C2479.45 386.049 2469.69 410.659 2450.16 428.758C2430.76 446.857 2404.19 455.906 2370.47 455.906C2337.27 455.906 2310.9 447.117 2291.37 429.539C2271.84 411.961 2261.88 387.807 2261.48 357.078V167.625H2320.08V355.32C2320.08 373.94 2324.51 387.547 2333.36 396.141C2342.34 404.604 2354.71 408.836 2370.47 408.836C2403.41 408.836 2420.14 391.518 2420.66 356.883V167.625H2479.45Z" fill={color} />
        </svg>
    )
}

export default ApplicationMark