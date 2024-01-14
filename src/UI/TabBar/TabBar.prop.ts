interface TabBarProps {
  list: TabProps[];
  callback: (e: React.SyntheticEvent<HTMLButtonElement>) => void;
  className?: string
}

interface TabProps {
  title: string;
}
