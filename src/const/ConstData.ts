import InterNetSvg from "../assets/svg/InterNetSvg"
import ElectryCitySVG from "../assets/svg/ElectryCitySvg"
import VoucherSvg from "../assets/svg/VoucherSvg"
import BillSvG from "../assets/svg/Bill"
import { MoreSVG, Assurance, MobileCredit, MerchandSVG, DownArrowFSVG, upArrowSVG } from "../assets/svg/SVGs"
import { primaryColor, turneryColor } from "../util/theme/theme"

export const Items = [
  { id: 1, Icon: InterNetSvg, label: "Internet" },
  { id: 2, Icon: ElectryCitySVG, label: "Electricity" },
  { id: 3, Icon: VoucherSvg, label: "Voucher" },
  { id: 4, Icon: Assurance, label: "Assurance" },
  { id: 5, Icon: MobileCredit, label: "Mobile Credit" },
  { id: 6, Icon: BillSvG, label: "Bill" },
  { id: 7, Icon: MerchandSVG, label: "Merchant" },
  { id: 8, Icon: MoreSVG, label: "MOre" }
]



export const Cards = [
  {
    id: '1',
    holder: 'John Smith',
    number: '**** 5678',
    slogan: 'Dream Bigger. Spend Smarter.',
    colors: ['#4F46E5', '#7C3AED'],
  },
  {
    id: '2',
    holder: 'Emma Watson',
    number: '**** 3490',
    slogan: 'Luxury In Every Swipe.',
    colors: ['#EC4899', '#F97316'],
  },
  {
    id: '3',
    holder: 'David Miller',
    number: '**** 9087',
    slogan: 'Powering Your Next Move.',
    colors: ['#06B6D4', '#3B82F6'],
  },
  {
    id: '4',
    holder: 'Sophia Lee',
    number: '**** 7742',
    slogan: 'Banking Beyond Limits.',
    colors: ['#10B981', '#22C55E'],
  },
];


export const barData = [
  {
    value: 40,
    label: 'Jan',
    spacing: 2,
    labelWidth: 25,
    labelTextStyle: { color: 'gray' },
    frontColor: primaryColor,
  },
  { value: 20, frontColor: '#000000' },
  {
    value: 35,
    label: 'Feb',
    spacing: 2,
    labelWidth: 30,
    labelTextStyle: { color: 'gray' },
    frontColor: primaryColor,
  },
  { value: 40, frontColor: '#000000' },
  {
    value: 35,
    label: 'Mar',
    spacing: 2,
    labelWidth: 30,
    labelTextStyle: { color: 'gray' },
    frontColor: primaryColor,
  },
  { value: 25, frontColor: '#000000' },
  {
    value: 30,
    label: 'Apr',
    spacing: 2,
    labelWidth: 30,
    labelTextStyle: { color: 'gray' },
    frontColor: primaryColor,
  },
  { value: 20, frontColor: '#000000' },
  {
    value: 44,
    label: 'May',
    spacing: 2,
    labelWidth: 30,
    labelTextStyle: { color: 'gray' },
    frontColor: primaryColor,
  },
  { value: 40, frontColor: '#000000' },
  {
    value: 30,
    label: 'Jun',
    spacing: 2,
    labelWidth: 30,
    labelTextStyle: { color: 'gray' },
    frontColor: primaryColor,
  },
  { value: 30, frontColor: '#000000' },
  {
    value: 20,
    label: 'Jul',
    spacing: 2,
    labelWidth: 30,
    labelTextStyle: { color: 'gray' },
    frontColor: primaryColor,
  },
  { value: 20, frontColor: '#000000' },
];


export const ExpenceCard = [
  { id: 1, Icon: DownArrowFSVG, color: turneryColor, label: "Income", amount: "$18,548.63" },
  { id: 2, Icon: upArrowSVG, color: primaryColor, label: "Expense", amount: "$1,445.63" }
]


