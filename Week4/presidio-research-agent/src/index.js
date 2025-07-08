const { OpenAI } = require('langchain/llms/openai');
const { initializeAgentExecutorWithOptions } = require('langchain/agents');
const RAGTool = require('./tools/ragTool');
const WebSearchTool = require('./tools/webSearchTool');
const credentials = require('./config/credentials');

class PresidioResearchAgent {
  constructor() {
    this.openaiApiKey = credentials.openai.apiKey;
    this.serpApiKey = credentials.serpapi.apiKey;

    this.model = new OpenAI({
      openAIApiKey: this.openaiApiKey,
      temperature: 0.7
    });

    this.ragTool = new RAGTool(this.openaiApiKey);
    this.webSearchTool = new WebSearchTool(this.serpApiKey);
  }

  async initialize() {
    await this.ragTool.initializeVectorStore();
  }

  async processQuery(query) {
    // Initialize tools
    const tools = [
      {
        name: 'hr-policy-search',
        description: 'Useful for searching HR policies and internal documents',
        func: async (q) => await this.ragTool.searchPolicies(q)
      },
      {
        name: 'web-industry-search',
        description: 'Useful for finding industry benchmarks and trends',
        func: async (q) => await this.webSearchTool.searchIndustryTrends(q)
      }
    ];

    const executor = await initializeAgentExecutorWithOptions(tools, this.model, {
      agentType: 'zero-shot-react-description',
      verbose: true
    });

    const result = await executor.call({ input: query });
    return result.output;
  }
}

module.exports = PresidioResearchAgent;

// Example usage
async function main() {
  const agent = new PresidioResearchAgent();
  await agent.initialize();

  const queries = [
    "Summarize all customer feedback related to our Q1 marketing campaigns.",
    "Compare our current hiring trend with industry benchmarks.",
    "Find relevant compliance policies related to AI data handling."
  ];

  for (const query of queries) {
    console.log(`Query: ${query}`);
    const response = await agent.processQuery(query);
    console.log(`Response: ${response}\n`);
  }
}

if (require.main === module) {
  main().catch(console.error);
}
