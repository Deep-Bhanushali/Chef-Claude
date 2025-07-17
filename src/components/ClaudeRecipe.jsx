// /* eslint-disable no-unused-vars */

import Markdown from "react-markdown";
const ClaudeRecipe = ({ recipe }) => {
  return (
    <section>
      <h2>Chef Claude Recommends:</h2>
      <article className="suggested-recipe-container" aria-live="polite">
        <Markdown>{recipe}</Markdown>
      </article>
    </section>
  );
};

export default ClaudeRecipe;
