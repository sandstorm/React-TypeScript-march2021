import React, {FC} from 'react'

export type Props = {
  footer: React.ReactNode
  header: React.ReactNode
  children: React.ReactNode
}
const ComponentWithChildren: FC<Props> = (props) => {
  return (
    <div>
      {props.header}
      {props.children}
      {props.footer}
    </div>
  )
}

export default React.memo(ComponentWithChildren)
