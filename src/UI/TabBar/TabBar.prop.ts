interface TabBarProps {
  list: TabProps[];
  callback: (e: React.SyntheticEvent<HTMLButtonElement>) => void;
  className?: string
  classNameDropdown?: string
  sortType?: string
}

interface TabProps {
  title: string;
  type?: 'engine' | 'chassis' | 'transmition' | 'others'
}
