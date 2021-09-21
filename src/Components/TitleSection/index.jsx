import { Title } from './style'

const TitleSection = (props) => {
    return (
        <>
            <Title>
              ● {props.children}
            </Title>
        </>
    )
}

export default TitleSection;