import IconsProps from "../Icons.props";

export function BurgerBtn(props: IconsProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="33" viewBox="0 0 40 33" fill="none" {...props}>
      <path data-type="top" d="M35 27C35 27.5523 34.5523 28 34 28H6C5.44772 28 5 27.5523 5 27V25.1667C5 24.6144 5.44772 24.1667 6 24.1667H34C34.5523 24.1667 35 24.6144 35 25.1667V27Z" fill="white" />
      <path data-type="center" d="M35 17.4167C35 17.969 34.5523 18.4167 34 18.4167H6C5.44772 18.4167 5 17.969 5 17.4167V15.5833C5 15.031 5.44772 14.5833 6 14.5833H34C34.5523 14.5833 35 15.031 35 15.5833V17.4167Z" fill="white" />
      <path data-type="bottom" d="M35 7.83333C35 8.38562 34.5523 8.83333 34 8.83333H6C5.44772 8.83333 5 8.38562 5 7.83333V6C5 5.44772 5.44772 5 6 5H34C34.5523 5 35 5.44772 35 6V7.83333Z" fill="white" />
    </svg>
  )
}