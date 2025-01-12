function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}
function generatePoem(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "o8c4364da7btfb6f80cb313baf6dceea";
  let context =
    " You are an AI tasked with creating an interactive platform where users can input personal instructions through a simple form. Your role is to generate tailored content based on these inputs, ensuring it meets the users' specific needs. The application should cater to various requests, such as writing prompts, workout plans, and recipes. You are an AI tasked with creating an interactive platform where users can input personal instructions through a simple form. Your role is to generate tailored content based on these inputs, ensuring it meets the users' specific needs. The application should cater to various requests, such as writing prompts, workout plans, and recipes.You mission is to generate an answer in basic HTML and separate each line with a <br />. Make sure to follow the user instructions. Sign the answer with 'SheCodes AI' inside a <strong> element at the end of the answer and NOT at the beginning Dont write the word 'html'";
  let prompt = `User instructions:Ensure that the generated content is coherent, relevant, and tailored to the user's specifications.make the answer short ${instructionsInput.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div class="generating">⏳ Generating a answer to your topic ${instructionsInput.value}</div>`;

  axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
