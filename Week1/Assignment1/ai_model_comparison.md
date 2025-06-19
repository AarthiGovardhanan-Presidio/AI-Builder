## AI Model Comparison Sheet – June 2025

| **Use Case** | **Criteria**                      | **GPT-4o**     | **Claude Sonnet** | **Gemini Flash** | **DeepSeek-R1:7B (Ollama)** | **Comments** |
|--------------|----------------------------------|----------------|-------------------|------------------|-----------------------------|--------------|
| **AppDev**   | Code Quality (TypeScript, Python, Java) |  Excellent  |  Excellent       |  Good          | Basic or Limited Support | DeepSeek outputs runnable code but lacks context; GPT-4o and Claude handle edge cases and follow structure |
|              | Understanding of Frameworks (React, Spring) |  Excellent  |  Good            |  Good          | Basic or Limited Support | DeepSeek shows knowledge but misses complex framework hooks |
|              | Code Comments & Docs Generation |  Excellent  |  Good            |  Good          | Basic or Limited Support | GPT-4o is strongest in adding meaningful comments |
|              | Ease of Use                     |  Excellent  |  Excellent       |  Excellent     |  Not Supported            | Ollama setup requires CLI & API config, less seamless |
|              | Speed/Latency                   |  Excellent  |  Good            |  Excellent     |  Good                     | Local model is fast after loading; Claude has occasional lags |
| **Data**     | SQL Generation (complex joins, filters) |  Excellent  |  Excellent       |  Good          | Basic or Limited Support | DeepSeek handles simple SELECTs; fails on joins/subqueries |
|              | Data Analysis (pandas, dplyr)   |  Excellent  |  Good            |  Good          | Basic or Limited Support | Claude provides summaries but GPT-4o excels with visuals |
|              | Handling of CSV/JSON parsing    |  Excellent  |  Good            |  Good          | Basic or Limited Support | DeepSeek needs prompting; GPT-4o interprets data quickly |
|              | Ease of Use                     |  Excellent  |  Excellent       |  Excellent     |  Not Supported            | Ollama requires REST API or local CLI integration |
|              | Speed/Latency                   |  Excellent  |  Good            |  Excellent     |  Good                     | Local model performs well after initial warm-up |
| **DevOps**   | Infrastructure Scripting (Terraform, Bash) |  Excellent  |  Good            | Basic or Limited Support | Basic or Limited Support | GPT-4o generates multi-step IaC scripts accurately |
|              | YAML/JSON for CI/CD (GitHub Actions, etc) |  Excellent  |  Good            |  Good          | Basic or Limited Support | Claude sometimes adds redundant keys |
|              | Command-line Script Generation  |  Excellent  |  Good            |  Good          | Basic or Limited Support | DeepSeek is usable but needs precise prompting |
|              | Ease of Use                     |  Excellent  |  Excellent       |  Excellent     |  Not Supported            | DeepSeek through Ollama requires technical setup |
|              | Speed/Latency                   |  Excellent  |  Good            |  Excellent     |  Good                     | Gemini and GPT-4o respond faster than Claude in DevOps use cases |

