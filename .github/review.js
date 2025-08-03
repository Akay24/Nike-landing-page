require("dotenv").config();
const { Octokit } = require("@octokit/rest");
const { Configuration, OpenAIApi } = require("openai");

const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });
const openai = new OpenAIApi(new Configuration({ apiKey: process.env.OPENAI_API_KEY }));

const [owner, repo] = process.env.GITHUB_REPOSITORY.split("/");
const prNumber = process.env.GITHUB_REF.split("/").pop();

(async () => {
  const { data: files } = await octokit.pulls.listFiles({ owner, repo, pull_number: prNumber });

  let diff = "";
  for (const file of files) {
    if (file.patch) {
      diff += `File: ${file.filename}\n${file.patch}\n\n`;
    }
  }

  if (!diff.trim()) {
    console.log("No changes to review.");
    return;
  }

  const prompt = `
You are a senior developer. Analyze the following GitHub Pull Request diff and provide a review summary with helpful suggestions, code quality notes, and potential improvements. Don't repeat the diff.

Diff:
${diff}
`;

  const completion = await openai.createChatCompletion({
    model: "gpt-4",
    messages: [{ role: "user", content: prompt }],
    temperature: 0.2,
  });

  const feedback = completion.data.choices[0].message.content;

  await octokit.issues.createComment({
    owner,
    repo,
    issue_number: prNumber,
    body: `🤖 **AI Code Review Summary**\n\n${feedback}`,
  });

  console.log("AI review comment posted!");
})();
