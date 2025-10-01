import styles from './styles.module.scss'

interface Props extends React.PropsWithChildren {
  title: string
  isDisabled?: boolean
  className?: string
  onClick?: () => void
}

const Button = ({
  onClick,
  children,
  title,
  isDisabled = false,
  className,
}: Props) => {
  return (
    <button
      className={className ?? styles.button}
      onClick={onClick}
      title={title}
      disabled={isDisabled}
    >
      {children}
    </button>
  )
}

export default Button
