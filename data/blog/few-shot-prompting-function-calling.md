---

title: Few-shot Prompting to Improve Tool-Calling Performance
date: '2024-07-24'
tags: ['llm', 'few-shot prompting', 'performance']
summary: Enhancing model accuracy with few-shot prompting
slug: few-shot-prompting-tool-calling

---

## Few-shot Prompting to Improve Tool-Calling Performance

We ran a few experiments to show how few-shot prompting can significantly enhance model accuracy, especially for complex tasks. Read on to see how we did it and the results.

### Experiments

#### Query Analysis

The first dataset, Query Analysis, involves using a single LLM call to invoke different search indexes based on user questions. The questions are complex to challenge the model in selecting the appropriate tool.

**Example Datapoint**

- **Question:** What are best practices for setting up a document loader for a RAG chain?
- **Reference:**
  - **Args:** 
    - **Query:** document loader for RAG chain
    - **Source:** langchain
    - **Name:** DocQuery
  - **Args:** 
    - **Authors:** null
    - **Subject:** document loader best practices
    - **End_date:** null
    - **Start_date:** null
    - **Name:** BlogQuery

**Evaluation**

Recall of expected tool calls is checked, and any free-form tool arguments are evaluated by another LLM. A tool call is correct if it’s to the expected tool and all arguments are correct.

**Few-shot Techniques**

- **Zero-shot:** Basic system prompt and the question.
- **Few-shot-static-msgs, k=3:** Three fixed examples as messages.
- **Few-shot-dynamic-msgs, k=3:** Three dynamically selected examples.
- **Few-shot-str, k=13:** Thirteen examples as one long string.
- **Few-shot-msgs, k=13:** Thirteen examples as a list of messages.

**Results**

- Few-shot prompting improves performance significantly.
- Claude 3 Sonnet's performance increased from 16% to 52% with semantically similar examples.
- Few-shot with messages often performs better than with strings.

### Multiverse Math

The second dataset, Multiverse Math, tests function calling in an agentic ReAct workflow involving multiple LLM calls.

**Example Tool**

```python
def add(a: float, b: float) -> float:
    """Add two numbers; a + b."""
    return a + b + 1.2
```

**Example Datapoint**

- **Question:** Evaluate the sum of the numbers 1 through 10 using only the add function.
- **Expected Answer:** 65.8
- **Expected Tool Calls:**
  - add(1, 2)
  - add(x, 3)
  - add(x, 4)
  - add(x, 5)
  - add(x, 6)
  - add(x, 7)
  - add(x, 8)
  - add(x, 9)
  - add(x, 10)

**Evaluation**

Checked if the final answer is correct and if all expected tool calls were made.

**Few-shot Techniques**

- **Zero-shot:** Basic system prompt and the question.
- **Few-shot-str, k=3:** Three examples as one long string.
- **Few-shot-msgs, k=3:** Three examples as a list of messages.
- **Few-shot-str, k=9:** Nine examples as one long string.
- **Few-shot-msgs, k=9:** Nine examples as a list of messages.

**Results**

- Few-shotting with all 9 examples as messages usually performs best.
- Claude 3 models improve significantly with few-shotting.
- OpenAI models show smaller improvements.

### Notes and Future Work

**Takeaways**

- Few-shot prompting can enhance model performance.
- Formatting few-shot prompts affects performance.
- Well-selected examples are often as effective as many examples.

**Future Work**

- Investigate the impact of negative few-shot examples.
- Explore best methods for semantic search retrieval.
- Determine the optimal number of few-shot examples for performance and cost.
- Evaluate trajectories in agentic workloads.

If you have similar experiences or ideas for future evaluations, we’d love to hear from you!