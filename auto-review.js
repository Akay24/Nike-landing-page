// auto-review.js (ES module compatible)

import dotenv from "dotenv";
import { Octokit } from "@octokit/rest";
import OpenAI from "openai";

dotenv.config();

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN,
});

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const [owner, repo] = process.env.GITHUB_REPOSITORY.split("/");
const prNumber = process.env.PR_NUMBER;

async function getPullRequestDiff() {
  const { data } = await octokit.pulls.get({
    owner,
    repo,
    pull_number: prNumber,
  });

  return data.diff_url;
}

async function fetchDiffText(diffUrl) {
  const response = await fetch(diffUrl);
  return await response.text();
}

async function generateReview(diff) {
  const response = await openai.chat.completions.create({
    model: "gpt-4",
    messages: [
      {
        role: "system",
        content: "You are a helpful and experienced code reviewer. Provide concise, actionable feedback.",
      },
      {
        role: "user",
        content: `Please review the following GitHub pull request diff:\n\n${diff}`,
      },
    ],
    temperature: 0.2,
  });

  return response.choices[0].message.content;
}

async function commentOnPR(review) {
  await octokit.issues.createComment({
    owner,
    repo,
    issue_number: prNumber,
    body: review,
  });
}

async function run() {
  try {
    const diffUrl = await getPullRequestDiff();
    const diff = await fetchDiffText(diffUrl);
    const review = await generateReview(diff);
    await commentOnPR(review);
    console.log("✅ Review successfully posted to the pull request.");
  } catch (error) {
    console.error("❌ Error during review:", error.message);
    process.exit(1);
  }
}

run();
