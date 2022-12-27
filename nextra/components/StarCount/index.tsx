import { useSSG } from "nextra/ssg"

const StarCount = (): JSX.Element => {
  const { starCount } = useSSG()
  return <strong>{starCount}</strong>
}

export default StarCount
