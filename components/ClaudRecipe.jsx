import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

export default function ClaudRecipe(props){
	return(
	<section className="recipe-container">
        <h2>Chef Claude Recommends: </h2>
        <Markdown remarkPlugins={[remarkGfm]}>
                {props.recipe}
        </Markdown>
    </section> 
	)
}