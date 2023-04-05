interface Props {
  className?: string;
  src?: string;
  isClose?: boolean;
  children?: React.ReactNode;
}

const Chips = ({ className, src, isClose, children }: Props) => {
  return (
    <div className={`relative px-2 py-1 flex items-center min-w-[2em] gap-2 rounded-full ${className}`}>
      {src && <img src={src} alt={'thumbnail'} />}
      {children}
    </div>
  )
}

export default Chips;
