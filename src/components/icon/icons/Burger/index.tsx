import IconsProps from "../Icons.props";

export function Burger(props: IconsProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none" {...props}>
      <path data-type='burger-top' d="M4 7.5C4 6.94772 4.44772 6.5 5 6.5H19C19.5523 6.5 20 6.94772 20 7.5C20 8.05228 19.5523 8.5 19 8.5H5C4.44772 8.5 4 8.05228 4 7.5Z" fill="white" />
      <path data-type='burger-center' d="M4 12.5C4 11.9477 4.44772 11.5 5 11.5H19C19.5523 11.5 20 11.9477 20 12.5C20 13.0523 19.5523 13.5 19 13.5H5C4.44772 13.5 4 13.0523 4 12.5Z" fill="white" />
      <path data-type='burger-down' d="M4 17.5C4 16.9477 4.44772 16.5 5 16.5H15C15.5523 16.5 16 16.9477 16 17.5C16 18.0523 15.5523 18.5 15 18.5H5C4.44772 18.5 4 18.0523 4 17.5Z" fill="white" />
    </svg>
  )
}